import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPostProperty } from "../../../Redux/_features/_PostPropertySlice";
import {
  selectCurrentStep,
  SET_CURRENT_STEP,
} from "../../../Redux/_features/_PostPropertyStepSlice";

const Nav = () => {
  const CurrentStep = useSelector(selectCurrentStep);
  const PostProperty = useSelector(selectPostProperty);

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
    <>
      <nav className="text-black font-medium  mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/">Home</Link>
            <svg
              className="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link className="text-gray-500" to="/post-property">
              Post Property
            </Link>
            <svg
              className="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <p className="text-gray-500 capitalize" to="/post-property">
              {PostProperty?.Parent_Property} {PostProperty?.Property_Type} For{" "}
              {PostProperty?.Property_For}
            </p>
          </li>
        </ol>
      </nav>

      <div className="w-full min-h-12  border-1 flex rounded-full">
        <NavItem Id="2" Active={CurrentStep === 2} Title="Location " Br />
        <NavItem Id="3" Active={CurrentStep === 3} Title="Details " Br />
        <NavItem Id="4" Active={CurrentStep === 4} Title="Pricing " Br />
        <NavItem Id="5" Active={CurrentStep === 5} Title="Amenities " Br />
        <NavItem Id="6" Active={CurrentStep === 6} Title="Finished " />
      </div>
    </>
  );
};

export default Nav;
