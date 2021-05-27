import React, { forwardRef, useState} from "react";
import DatePicker from "react-datepicker";
import NumberFormat from 'react-number-format';
import PhoneInput from 'react-phone-number-input'
import { IFormField } from "../type";
import { titles, nationalities, genders } from "../inputTemplate";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import "./FormField.css";

const FormField: React.FC<IFormField> = ({ input, label, type, required, meta }) => {

    const [startDate, setStartDate] = useState(new Date());

    const [phone, setPhone] = useState("");

    const DatePickerCustomInput: React.FC<any> = forwardRef(
        ({ value, onClick }, ref: any) => (
          <input className="form-control input-form" {...input} onClick={onClick} ref={ref} value={value} />
        ),
      );

    const typeOptions = type.split("-");

    return (
        <div className="form-group col-lg-auto">
            <div className="row g-2">
                <label 
                    className="col-lg-auto label-form col-form-label"
                >
                    {label} {required && <span className="text-danger">*</span>} :
                </label>
                <div className="col-lg-auto">
                    {typeOptions[1] === "input" && 
                    <input 
                        className={`form-control input-form ${meta.error && meta.touched ? "is-invalid": ""}`}
                        type={ typeOptions[0] } 
                        required={required} 
                        {...input} 
                    />}
                    {typeOptions[1] === "select" && input.name === "title" &&
                        <select
                            id="inputState" 
                            className={`form-select input-form ${meta.error && meta.touched ? "is-invalid": ""}`} 
                            required={required} 
                            {...input}
                        >
                            <option selected>Choose...</option>
                            {titles.map(title => <option>{title}</option>)}
                        </select>
                    }
                    {typeOptions[1] === "select" && input.name === "nationality" &&
                        <select 
                            id="inputState" 
                            className={`form-select input-form ${meta.error && meta.touched ? "is-invalid": ""}`}
                            required={required} 
                            {...input}
                        >
                            <option selected>Choose...</option>
                            {nationalities.map(nationality => <option>{nationality}</option>)}
                        </select>
                    }
                    {typeOptions[1] === "date" && 
                        <DatePicker 
                        selected={startDate} 
                        required={required}
                        className="form-control input-form"
                        onChange={(date: Date) => setStartDate(date)}
                        customInput={<DatePickerCustomInput />}
                        />
                    }
                    {typeOptions[1] === "number_format" &&
                        <NumberFormat 
                        className={`form-control input-form text-center ${meta.error && meta.touched ? "is-invalid": ""}`} 
                        format="#-####-#####-##-#" 
                        placeholder="X-XXXX-XXXXX-XX-X"
                        mask="X"
                        {...input}
                        />
                    }
                    {typeOptions[1] === "check" &&
                        genders.map(gender => 
                        <div className="form-check check-box form-check-inline" {...input}>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={gender} />
                            <label className="form-check-label" htmlFor="inlineRadio1">{gender}</label>
                        </div>)
                    }
                    {typeOptions[1] === "phone" &&
                        <PhoneInput
                            international
                            defaultCountry="TH"
                            value={phone}
                            className={`form-control input-form ${meta.error && meta.touched ? "is-invalid": ""}`}
                            onChange={setPhone}
                            {...input}
                        />
                    }
                </div>
            </div>
            <div className="row justify-content-end">
                { meta.error && meta.touched && 
                    <div className={`text-danger error-message col-lg-auto align-self-end`}>{`${meta.error} ${label}.`}</div>
                }
            </div>
        </div>
    );
}

export default FormField;