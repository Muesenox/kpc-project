import { IUserFormData } from "../type";

const createData = (data: IUserFormData) => {
    const curData = JSON.parse(localStorage.getItem('data') as string);
    localStorage.setItem('data', 
        curData.length === 0 ? JSON.stringify([data]) : JSON.stringify(curData.concat([data]))
    );
    return {
        type: "CREATE_DATA",
        payload: JSON.parse(localStorage.getItem('data') as string)
    };
};

const fetchData = () => {
    const curData = JSON.parse(localStorage.getItem('data') as string);
    if (curData === null) localStorage.setItem('data', '[]');
    return {
        type: "FETCH_DATA",
        payload: curData,
    }
}

const deleteData = (index: number) => { 
    let curData = JSON.parse(localStorage.getItem('data') as string);
    if (index > -1) curData.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(curData));
    return {
        type: "DELETE_DATA",
        payload: curData,
    }
}

const fetchToUpdateData = (index: number) => {
    let curData = JSON.parse(localStorage.getItem('data') as string);
    let targetData = curData[index];
    return {
        type: "FETCH_UPDATE",
        payload: { targetData, index },
    }
}

const updateData = (data: IUserFormData, index: number) => {
    let curData = JSON.parse(localStorage.getItem('data') as string);
    curData[index] = data;
    console.log('data --> ', data);
    console.log('curData --> ', curData);
    localStorage.setItem('data', JSON.stringify(curData));
    return {
        type: "UPDATE_DATA",
        payload: curData,
    }
}

// eslint-disable-next-line
export default { createData, fetchData, deleteData, fetchToUpdateData, updateData };