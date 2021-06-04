import { combineReducers } from "redux";
import { reducer as reduxForm} from "redux-form";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxForm,
});

export default rootReducer;