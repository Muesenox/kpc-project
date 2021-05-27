export interface IFormField {
    input: any,
    label: string,
    type: string,
    required: boolean,
    meta: any
}

export interface IUserFormField {
    label: string,
    name: string,
    type: string,
    required: boolean
}

export interface IUserFormData {
    title: string,
    firstName: string,
    lastName: string,
    birthDay: Date,
    nationality: string,
    citizenId: string
    gender: string,
    phone: string,
    passportNo: string,
    expectedSalary: number
}

export type TValidationName = 'title' | 'firstName' | 'lastName' | 'birthDay' |'nationality' | 'citizenId' | 'gender' | 'phone' | 'passportNo' | 'expectedSalary';