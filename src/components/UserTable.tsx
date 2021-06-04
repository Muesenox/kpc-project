import React from "react";
import { useDispatch } from "react-redux";
import formActions from '../actions/formActions';
import { IUserFormData } from "../type";
import './UserTable.css';

const UserTable: React.FC<any> = ({ users }) => {
    const dispatch = useDispatch();

    return (
        <div className="table-responsive">
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Birth</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Citizen_ID</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Passport_No</th>
                        <th scope="col">Expected_Salary</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                        {users !== null && users.map((user: IUserFormData, index: number) => (
                            <tr>
                                <th className="scope">{index}</th>
                                <td>{user.title}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.birthDay}</td>
                                <td>{user.nationality}</td>
                                <td>{user.citizenId}</td>
                                <td>{user.gender}</td>
                                <td>{user.phone}</td>
                                <td>{user.passportNo}</td>
                                <td>{user.expectedSalary}</td>
                                <td>
                                    <span
                                        className="pointer text-primary me-1"
                                        onClick={() => dispatch(formActions.fetchToUpdateData(index))}
                                    >
                                        edit
                                    </span>
                                    /
                                    <span
                                        className="pointer text-danger ms-1"
                                        onClick={() => dispatch(formActions.deleteData(index))}
                                    >delete</span>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;