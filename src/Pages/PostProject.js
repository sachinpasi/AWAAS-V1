import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout/Layout";
import Step1 from "../Components/PagesComponents/PostProject/Step1/Step1";
import {
  RESET_CURRENT_STEP,
  selectCurrentStep,
} from "../Redux/_features/_PostProjectStepSlice";

const PostProject = () => {
  const CurrentStep = useSelector(selectCurrentStep);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(RESET_CURRENT_STEP());
    };
  }, [dispatch]);

  return (
    <Layout>
      <main className="customContainer  h-full flex justify-center items-start py-12">
        {CurrentStep === 1 && <Step1 />}
      </main>
    </Layout>
  );
};

export default PostProject;
