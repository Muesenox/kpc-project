export const userFormField = [
    { label: "Title", name:"title", type:"text-select", required: true},
    { label: "First Name", name:"firstName", type:"text-input", required: true},
    { label: "Last Name", name:"lastName", type:"text-input", required: true},
    { label: "Birthday", name:"birthDay", type:"text-date", required: true},
    { label: "Nationality", name:"nationality", type:"text-select", required: false},
    { label: "Citizen ID", name:"citizenId", type:"text-number_format", required: true},
    { label: "Gender", name:"gender", type:"text-check", required: false},
    { label: "Phone No", name:"phone", type:"text-phone", required: true},
    { label: "Passport No", name:"passportNo", type:"text-input", required: false},
    { label: "Expected Salary", name:"expectedSalary", type:"text-input", required: false}
]