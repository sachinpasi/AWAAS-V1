import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./FaqStyles.css";

const Faq = () => {
  return (
    <section className="w-full ">
      <p className="text-4xl text-center font-light my-6">
        Frequently Asked Questions
      </p>
      <div className="customContainer py-4">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  What is the difference between fixed rate and floating rate of
                  interest?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base">
                Taking home loan on a fixed interest rate implies that your EMI
                will not be impacted during the loan tenure irrespective of any
                market conditions. The interest rate will be pre-determined and
                remain unchanged. On the flip side, home loan EMIs vary
                periodically over the loan tenure, if taken on floating interest
                rate.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  What is Pre-EMI?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base">
                For home loans disbursed against an under-construction property,
                the lender can offer an EMI that begins once the construction is
                complete. Until then, you can pay just the interest part of the
                loan that is termed as a Pre-EMI. Pre-EMI amount is less than
                full EMI amount since you will be paying just the interest
                component of the EMI and the principal loan amount remains
                intact. The Pre-EMI duration is not a part of your home loan
                duration. Let’s take an example to understand this better. Say
                you have a loan of 15,00,000 lacs for 20 years on a property
                that gets completed in 3 years. Your calculated EMI is Rs.
                25,000/-. During these 3 years you can pay the interest part of
                the EMI. That would be your Pre-EMI and the total loan duration
                would be 23 years (20+3).
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  What are the eligibility criteria for a home loan?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base">
                There is an eligibility criterion that banks have before they go
                ahead sanctioning it. A few important of them are employment
                stability, age criteria, credit rating, financial stability etc.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  What are the types of home loan available?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="py-4">
                Home purchase loan – It is the most common type of home loan.
                All banks and housing finance companies offer loan for
                residential properties at different rates coupled with discounts
                and rebates. It can be availed for both resale properties and
                builder allocated units.
              </p>

              <p className="py-4">
                Land/Plot loan - Banks offer such type of loan to buyers
                intending to purchase land parcels for constructing their
                residential units. About 70 percent of the total cost of the
                land can be availed.
              </p>

              <p className="py-4">
                Construction loan - Most common type of home loan availed by a
                major share of semi-urban population to build a home meeting
                their requirements on a land parcel you already own. All housing
                finance companies and banks provide home construction loan.
              </p>

              <p className="py-4">
                Home extension/improvement loan - You can also avail loan for
                any sort of extension or improvement in your house, be it a new
                room or a new floor. The housing finance companies and banks
                offer loan for home improvement/renovation purposes such as
                painting, plumbing, electrical system, interior designing and
                waterproofing.
              </p>

              <p className="py-4">
                Home conversion loan - Such home loan is taken by people who
                have bought a house on a home loan but would now intend to buy
                and move to new house. With these loans, applicants can fund the
                purchase of the new house by shifting the running loan to the
                new unit.
              </p>

              <p className="py-4">
                Balance transfer loan - It can be availed when an applicant
                wishes to transfer home loan from one bank to another. It is
                usually adopted to repay the remaining amount at lower interest
                rates.
              </p>

              <p className="py-4">
                NRI home loan - It is designed for NRIs who wish to construct or
                buy a home in India.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
