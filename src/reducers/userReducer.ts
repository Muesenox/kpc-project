import { AnyAction } from 'redux'
import { IUserReducer } from '../type';

const userReducer = (state: IUserReducer = { data: [], update: {} }, action: AnyAction) => {
    switch(action.type) {
        case "CREATE_DATA":
            return {
                ...state,
                data: action.payload,
                update: {},
                updateIndex: undefined,
            };
        case "FETCH_DATA":
            return {
                ...state,
                data: action.payload,
            }
        case "DELETE_DATA":
            return {
                ...state,
                data: action.payload,
            }
        case "FETCH_UPDATE":
            return {
                ...state,
                update: action.payload.targetData,
                updateIndex: action.payload.index,
            }
        case "UPDATE_DATA":
            return {
                ...state,
                data: action.payload,
                update: {},
                updateIndex: undefined,
            }
        default:
            return state;
    }
}

export default userReducer;