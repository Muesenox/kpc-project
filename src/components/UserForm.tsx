import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, FormErrors } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
import FormField from "./FormField";
import formActions from '../actions/formActions';
import UserTable from "./UserTable";
import { userFormField } from "../formTemplates";
import { IUserFormField,
         IUserFormData,
         TValidationName,
         IMapStateToPropsOnUserForm,
         IRootReducer,
        } from "../type";


const UserForm: React.FC<any> = ({ handleSubmit }) => {
    const { form, user } = useSelector((state: IRootReducer) => state);
    const dispatch = useDispatch();

    const rederFields = (userFormField: IUserFormField[]) => {
        return userFormField.map( ({ label,  name, type, required }) => (
            <Field label={label} name={name} type={type} required={required} component={FormField} />
        ));
    }

    useEffect(() => {
        dispatch(formActions.fetchData()); // eslint-disable-next-line
    }, []);
    
    return (
        <div>
            <div className="card p-4">
                <form className="row" 
                    onSubmit={handleSubmit(() => {
                        if (Object.keys(user.update).length === 0) dispatch(formActions.createData(form?.userForm?.values));
                        else dispatch(formActions.updateData(form?.userForm?.values, user.updateIndex as number));
                    })}
                >
                    {rederFields(userFormField)}
                    <div className="col-lg-auto">
                        <button 
                            type="submit" 
                            className="btn btn-primary mt-4"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <UserTable users={user?.data} />
        </div>
    );
}

const validate = (values: IUserFormData) => {
    let errors: FormErrors<IUserFormData> = {};
    userFormField.forEach(({ name, required, type }) => {
        const implicitName: TValidationName = name as TValidationName;
        if ((!values[implicitName] && required) ||
            (type.includes('select') && values[implicitName] === "Choose..." && required)) {
            errors[implicitName] = "Please enter your";
        } else if (type.includes('number_format') && required) {
            const inputStr: string = values[implicitName] as string;
            if (inputStr.includes('X')) errors[implicitName] = "Please enter your valid";
        } else if (type.includes('phone') && required) {
            const inputStr: string = values[implicitName] as string;
            if(inputStr.length < 16) errors[implicitName] = "Please enter your valid";
        }
    })
    return errors;
}

const mapStateToProps = ({ user }: IMapStateToPropsOnUserForm) => {
    if (Object.keys(user.update).length !== 0) {
        return {
            initialValues: user.update,
        }
    }
  }

export default connect(mapStateToProps)(reduxForm({ validate, form: "userForm", enableReinitialize : true })(UserForm));