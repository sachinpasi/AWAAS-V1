import React, { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectProjectDetails } from "../../../../Redux/_features/_ProjectDetailsSlice";
import { SET_ACTIVE_TAB } from "../../../../Redux/_features/_showprojectSlice";

const ProjectNav = () => {
  const [ActiveParentTab, setActiveParentTab] = useState();
  const [ActiveChildTab, setActiveChildTab] = useState();

  const dispatch = useDispatch();
  const { Data } = useSelector(selectProjectDetails);

  useEffect(() => {
    if (Data?.parent_child) {
      setActiveParentTab(Data?.parent_child[0].title);
      setActiveChildTab(Data?.parent_child[0].child[0].new_name);
    }
  }, [Data]);

  useEffect(() => {
    Data.parent_child?.map((item) => {
      if (ActiveParentTab === item.title) {
        setActiveChildTab(item.child[0].new_name);
      }
    });
  }, [ActiveParentTab]);

  useEffect(() => {
    dispatch(
      SET_ACTIVE_TAB({
        ActiveParentTab: ActiveParentTab,
        ActiveChildTab: ActiveChildTab,
      })
    );
  }, [ActiveParentTab, ActiveChildTab]);
  return (
    <div className="w-full h-32 border-1 border-projectsborder rounded px-4">
      <div className="flex justify-start items-center w-full h-3/5 border-b-1 py-4">
        {Data.parent_child?.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveParentTab(item.title)}
            className={`px-7 py-2 ${
              ActiveParentTab === item.title ? "bg-blue" : "bg-extralightgray"
            } rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-lg font-medium text-center ${
                ActiveParentTab === item.title ? "text-white" : "text-darkgray"
              } `}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-2/5 flex items-center justify-start">
        {Data?.parent_child?.map((item, index) => (
          <Fragment key={index}>
            {ActiveParentTab === item.title &&
              item?.child.map((childItem, index) => (
                <div
                  key={index}
                  onClick={() => setActiveChildTab(childItem.new_name)}
                  className={` cursor-pointer flex justify-center items-center mr-4  h-full  ${
                    ActiveChildTab === childItem.new_name
                      ? "border-blue border-b-2"
                      : ""
                  }`}
                >
                  <p
                    className={`text-base font-medium capitalize  px-2  ${
                      ActiveChildTab === childItem.new_name
                        ? "text-blue"
                        : "text-darkgray"
                    } `}
                  >
                    {childItem.new_name}
                  </p>
                </div>
              ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProjectNav;
