import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentStep,
  SET_CURRENT_STEP,
} from "../../../Redux/_features/_PostPropertyStepSlice";

const Nav = () => {
  const CurrentStep = useSelector(selectCurrentStep);

  // const HandleNav = (id) => {
  //   dispatch(SET_CURRENT_STEP(id));
  // };

  const NavItem = ({ Title, Br, Active, Id }) => (
    <div
      className={`${
        Active ? "font-medium bg-blue text-white" : "bg-white text-darkgray"
      }  w-1/5 h-12 flex justify-center items-center cursor-pointer   lg:text-lg text-sm rounded-full  ${
        Br && "border-r-1"
      }`}
    >
      {Title}
    </div>
  );

  return (
    <div className="w-full min-h-12  border-1 flex rounded-full">
      <NavItem Id="2" Active={CurrentStep === 2} Title="Location " Br />
      <NavItem Id="3" Active={CurrentStep === 3} Title="Details " Br />
      <NavItem Id="4" Active={CurrentStep === 4} Title="Pricing " Br />
      <NavItem Id="5" Active={CurrentStep === 5} Title="Amenities " Br />
      <NavItem Id="6" Active={CurrentStep === 6} Title="Finished " />
    </div>
  );
};

export default Nav;
