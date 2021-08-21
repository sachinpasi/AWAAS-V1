import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Faq = () => {
  return (
    <section className="w-full h-full bg-textbg">
      <div className="w-90vw lg:w-80vw mx-auto flex flex-col">
        <p className="text-5xl text-center my-4">Frequently Asked Questions</p>

        <Accordion preExpanded="string[1]" className="border-none">
          <AccordionItem uuid="1" className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="lg:text-2xl text-xl font-medium text-darkgray">
                  How to post/list/sell property on awaasonline.com ?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-center px-4">
                <Step
                  StepCount="Step 1"
                  Data="Taking home loan on a fixed interest rate implies that your EMI will not be impacted during the loan tenure irrespective of any market conditions. The interest rate will be pre-determined and remain unchanged. On the flip side, home loan EMIs vary periodically over the loan tenure, if taken on floating interest rate."
                  Image="/assets/images/awaasassist/1.png"
                />
                <Step
                  Invert
                  StepCount="Step 2"
                  Data="Taking home loan on a fixed interest rate implies that your EMI will not be impacted during the loan tenure irrespective of any market conditions. The interest rate will be pre-determined and remain unchanged. On the flip side, home loan EMIs vary periodically over the loan tenure, if taken on floating interest rate."
                  Image="/assets/images/awaasassist/2.png"
                />
                <Step
                  StepCount="Step 3"
                  Data="Various details about your property will be asked in this step, like locality, property details, price, amenities, photos, etc. Try to fill out as much details as you can about your property so it could appear well presented and unique among others.  These details are in steps, so simply click Next button until all details are filled and Finish button appears."
                  Image="/assets/images/awaasassist/3.png"
                />
                <Step
                  Invert
                  StepCount="Step 4"
                  Data="Once all the steps are filled up, you will see the Finish button as shown in the attached image. Click on this button, and you will be redirected to your profile page where all of your posted properties are listed. You can manage your property from this page."
                  Image="/assets/images/awaasassist/4.png"
                />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="lg:text-2xl text-xl font-medium text-darkgray">
                  I can't see or search for my posted property on the website.
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-center px-4">
                <Step
                  Data="The Property that you post on awaasonline.com is reviewd before it is made public. This is done to provide you with the best and quality properties on the platform.

The review process may take from 2 to 24 hrs after the posting.

To help you see the review status, we have provided the status option in the Property listings page of your profile."
                  Image="/assets/images/awaasassist/acc2.jpg"
                />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="lg:text-2xl text-xl font-medium text-darkgray">
                  How can i remove / delete my property from awaasonline.com ?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-center px-4">
                <Step
                  Data="There can be various cases where you may want to delete your listing from the awaasonline.com's platform.

To help you remove your property, we have provided the Delete Listing option in the Property listings page of your profile. As illustrated in the image attached"
                  Image="/assets/images/awaasassist/acc3.jpg"
                />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="lg:text-2xl text-xl font-medium text-darkgray">
                  Pop-up ads / other ads are appearing on the website.
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-center px-4">
                <Step
                  StepCount="Step 1"
                  Data="Open menu option in your browser, by clicking the menu icon in top right of your browser (ex.Google Chrome). As shown in the attached image.
Select Settings from the dropdown list."
                  Image="/assets/images/awaasassist/acc41.jpg"
                />{" "}
                <Step
                  StepCount="Step 2"
                  Invert
                  Data="Scroll down all the way to the page bottom, Until you see the advanced option.
Click on Advanced."
                  Image="/assets/images/awaasassist/acc42.jpg"
                />{" "}
                <Step
                  StepCount="Step 3"
                  Data="After you click on advanced, scroll down to bottom once again, until you see the Reset Settings option.
Click on this Reset Settings option, a dialoge box will appear for confirmation, click on Reset Settings again to confirm.
Restart your browser and log on to www.awaasonline.com again.
If the ads are still appearing, you may need to reinstall the Browser by uninstalling it first. (We would suggest you contact whoever manages your computer if you do not know how to do this.)"
                  Image="/assets/images/awaasassist/acc43.jpg"
                />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

const Step = ({ Invert, StepCount, Data, Image }) => (
  <div
    className={`w-full h-full my-4 flex ${
      Invert && "flex-row-reverse"
    }  justify-between items-start`}
  >
    <div className="w-2/4 h-60">
      <img className="w-full h-full object-contain" src={Image} alt="" />
    </div>
    <div className="w-2/4 h-auto ml-2 flex flex-col items-start justify-start">
      <p className="text-xl font-medium text-darkgray">{StepCount}</p>
      <p className="text-base py-1 text-darkgray">{Data}</p>
    </div>
  </div>
);
