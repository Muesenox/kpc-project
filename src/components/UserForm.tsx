import React from "react";
import { reduxForm, Field, FormErrors } from "redux-form";
import FormField from "./FormField";
import { userFormField } from "../formTemplates";
import { IUserFormField,
         IUserFormData,
         TValidationName
        } from "../type";

const UserForm: React.FC = () => {

    const rederFields = (userFormField: IUserFormField[]) => {
        return userFormField.map( ({ label,  name, type, required }) => (
            <Field label={label} name={name} type={type} required={required} component={FormField} />
        ));
    }

    return (
        <div className="card p-4">
            <form className="row">
                {rederFields(userFormField)}
                <div className="col-lg-auto">
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </div>
            </form>
        </div>
    );
}

const validate = (values: IUserFormData) => {
    console.log('values --> ', values);
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

export default reduxForm({ validate, form: "userForm"})(UserForm);