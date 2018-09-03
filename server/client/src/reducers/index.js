import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import ticketsReducer from "./ticketsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tickets: ticketsReducer
});
