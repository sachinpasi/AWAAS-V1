import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout/Layout";
import Step1 from "../Components/PagesComponents/PostProject/Step1/Step1";
import Step2 from "../Components/PagesComponents/PostProject/Step2/Step2";
import Step3 from "../Components/PagesComponents/PostProject/Step3/Step3";
import Step4 from "../Components/PagesComponents/PostProject/Step4/Step4";

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
      <main className="lg:w-80vw w-90vw mx-auto min-h-screen flex  justify-center items-start py-12">
        {CurrentStep === 1 && <Step1 />}
        {CurrentStep === 2 && <Step2 />}
        {CurrentStep === 3 && <Step3 />}
        {CurrentStep === 4 && <Step4 />}
      </main>
    </Layout>
  );
};

export default PostProject;
