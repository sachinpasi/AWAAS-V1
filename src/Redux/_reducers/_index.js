import { combineReducers } from "redux";

import userReducer from "../_features/_userSlice";
import showProjectReducer from "../_features/_showprojectSlice";
import ProjectDetailsReducer from "../_features/_ProjectDetailsSlice";
import PropertySaleDetailsReducer from "../_features/_PropertySaleDetailsSlice";
import PropertyRentDetailsReducer from "../_features/_PropertyRentDetailsSlice";
import PostPropertyStepReducer from "../_features/_PostPropertyStepSlice";
import PostPropertyReducer from "../_features/_PostPropertySlice";
import PostProjectStepReducer from "../_features/_PostProjectStepSlice";
import PostProjectReducer from "../_features/_PostProjectSlice";

const reducers = combineReducers({
  userReducer,
  showProjectReducer,
  ProjectDetailsReducer,
  PropertySaleDetailsReducer,
  PropertyRentDetailsReducer,
  PostPropertyReducer,
  PostPropertyStepReducer,
  PostProjectStepReducer,
  PostProjectReducer,
});

export default reducers;
