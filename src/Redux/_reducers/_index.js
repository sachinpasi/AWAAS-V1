import { combineReducers } from "redux";

import userReducer from "../_features/_userSlice";
import showProjectReducer from "../_features/_showprojectSlice";
import ProjectDetailsReducer from "../_features/_ProjectDetailsSlice";
import PropertySaleDetailsReducer from "../_features/_PropertySaleDetailsSlice";

const reducers = combineReducers({
  userReducer,
  showProjectReducer,
  ProjectDetailsReducer,
  PropertySaleDetailsReducer,
});

export default reducers;
