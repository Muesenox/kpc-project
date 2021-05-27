import { combineReducers } from "redux";
import { reducer as reduxForm} from "redux-form";

const rootReducer = combineReducers({
    form: reduxForm
});

export default rootReducer;