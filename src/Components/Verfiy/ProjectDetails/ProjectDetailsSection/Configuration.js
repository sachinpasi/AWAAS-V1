import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectProjectDetails } from "../../../../Redux/_features/_ProjectDetailsSlice";
import { selectShowProject } from "../../../../Redux/_features/_showprojectSlice";

const Configuration = () => {
  // console.log(JSON.parse(Data?.parent_child[0].child[0].flat_floor_images)[0]);
  const CurrentTab = useSelector(selectShowProject);
  const { Data } = useSelector(selectProjectDetails);

  const ImageHandler = ({ childItem }) => {
    switch (childItem.type) {
      case "villa":
        return (
          <img
            src={`https://codeiator.com/${
              JSON.parse(childItem.floor_plan_image)[0]
            }`}
            alt=""
          />
        );
      case "plot":
        return <img src={childItem.plot_images_path[0]} alt="" />;

      case "flat":
        if (childItem.flat_floor_images.length !== 0) {
          return <img src={childItem.flat_floor_images_path[0]} alt="" />;
        }

      default:
        return null;
    }
  };

  return (
    <div
      id="configuration"
      className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray ">Configuration</p>
      </div>
      <div className="flex justify-start items-center py-4">
        {Data !== undefined && (
          <>
            {Data?.parent_child?.map((parentChild, index) => (
              <Fragment key={index}>
                {CurrentTab.ActiveParentTab === parentChild.title &&
                  parentChild?.child?.map((childItem, index) => (
                    <Fragment key={index}>
                      {CurrentTab.ActiveChildTab === childItem.new_name && (
                        <div className="flex flex-wrap items-center">
                          {childItem?.configuration.map((item, index) => (
                            <div
                              key={index}
                              className="flex justify-center items-center py-4  mx-4"
                            >
                              <img
                                src="/assets/images/projectdetails/plotarea.svg"
                                alt=""
                              />
                              <div className=" mx-5 flex justify-center items-start flex-col">
                                <p className="text-sm text-lightgray leading-5">
                                  {item?.title}
                                </p>
                                <p className="text-lg font-medium text-darkgray leading-5">
                                  {item?.value}
                                </p>
                              </div>
                            </div>
                          ))}{" "}
                        </div>
                      )}
                    </Fragment>
                  ))}
              </Fragment>
            ))}
          </>
        )}
      </div>
      <div className="w-full h-full flex justify-start items-center pb-4 border-b-1 border-projectsborder">
        {Data?.parent_child?.map((parentChild, index) => (
          <Fragment key={index}>
            {CurrentTab.ActiveParentTab === parentChild.title &&
              parentChild?.child.map((childItem, index) => (
                <Fragment key={index}>
                  {CurrentTab.ActiveChildTab === childItem.new_name && (
                    <>
                      {console.log("Selected Child --", childItem)}

                      <ImageHandler childItem={childItem} />
                    </>
                  )}
                </Fragment>
              ))}
          </Fragment>
        ))}
      </div>
      <div className="w-full h-full flex justify-end items-center py-4">
        <button className="bg-blue px-8 py-3 rounded text-white font-medium text-lg">
          Contact To Developer
        </button>
      </div>
    </div>
  );
};

export default Configuration;
