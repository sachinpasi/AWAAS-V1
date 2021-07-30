import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout/Layout";
import Step1 from "../Components/PagesComponents/PostProperty/Step1/Step1";
import Step2 from "../Components/PagesComponents/PostProperty/Step2/Step2";
import Step3 from "../Components/PagesComponents/PostProperty/Step3/Step3";
import Step4 from "../Components/PagesComponents/PostProperty/Step4/Step4";
import Step5 from "../Components/PagesComponents/PostProperty/Step5/Step5";
import Step6 from "../Components/PagesComponents/PostProperty/Step6/Step6";

import {
  RESET_CURRENT_STEP,
  selectCurrentStep,
} from "../Redux/_features/_PostPropertyStepSlice";

const PostProperty = () => {
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
      <main className="customContainer min-h-70vh h-full flex justify-center items-start py-12">
        {CurrentStep === 1 && <Step1 />}
        {CurrentStep === 2 && <Step2 />}
        {CurrentStep === 3 && <Step3 />}
        {CurrentStep === 4 && <Step4 />}
        {CurrentStep === 5 && <Step5 />}
        {CurrentStep === 6 && <Step6 />}
      </main>
    </Layout>
  );
};

export default PostProperty;
