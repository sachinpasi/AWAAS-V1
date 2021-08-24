import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./FaqStyles.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Faq = () => {
  return (
    <section className="w-full ">
      <p className="text-4xl text-center font-light my-6">
        Frequently Asked Questions
      </p>
      <div className="lg:w-80vw w-90vw mx-auto py-4">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    What is the difference between fixed rate and floating rate
                    of interest?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
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
                <div className="flex items-center">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    What is Pre-EMI?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
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
                <div className="flex items-center">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    What are the eligibility criteria for a home loan?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                There is an eligibility criterion that banks have before they go
                ahead sanctioning it. A few important of them are employment
                stability, age criteria, credit rating, financial stability etc.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    What are the types of home loan available?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="py-4 w-10/12 mx-auto">
                Home purchase loan – It is the most common type of home loan.
                All banks and housing finance companies offer loan for
                residential properties at different rates coupled with discounts
                and rebates. It can be availed for both resale properties and
                builder allocated units.
              </p>

              <p className="py-4 w-10/12 mx-auto">
                Land/Plot loan - Banks offer such type of loan to buyers
                intending to purchase land parcels for constructing their
                residential units. About 70 percent of the total cost of the
                land can be availed.
              </p>

              <p className="py-4 w-10/12 mx-auto">
                Construction loan - Most common type of home loan availed by a
                major share of semi-urban population to build a home meeting
                their requirements on a land parcel you already own. All housing
                finance companies and banks provide home construction loan.
              </p>

              <p className="py-4 w-10/12 mx-auto">
                Home extension/improvement loan - You can also avail loan for
                any sort of extension or improvement in your house, be it a new
                room or a new floor. The housing finance companies and banks
                offer loan for home improvement/renovation purposes such as
                painting, plumbing, electrical system, interior designing and
                waterproofing.
              </p>

              <p className="py-4 w-10/12 mx-auto">
                Home conversion loan - Such home loan is taken by people who
                have bought a house on a home loan but would now intend to buy
                and move to new house. With these loans, applicants can fund the
                purchase of the new house by shifting the running loan to the
                new unit.
              </p>

              <p className="py-4 w-10/12 mx-auto">
                Balance transfer loan - It can be availed when an applicant
                wishes to transfer home loan from one bank to another. It is
                usually adopted to repay the remaining amount at lower interest
                rates.
              </p>

              <p className="py-4 w-10/12 mx-auto">
                NRI home loan - It is designed for NRIs who wish to construct or
                buy a home in India.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    Can I repay my loan ahead of schedule?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                You can repay the loan ahead of schedule by making lump sum
                payments towards part or full prepayment. As per the RBI
                notification, all prepayment charges on floating rate loans have
                been waived. However, banks can charge as applicable and subject
                to its terms and conditions on fixed rate loans.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    Can I convert my floating rate loan to a fixed rate loan or
                    vice versa?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                Yes, the floating rate loan can be converted into fixed rate
                loan and vice versa. The advantage of a fixed interest rate
                option is that you will be locked into one rate while floating
                rates tend to change if the bank lowers the borrowing interest
                rates, if instructed by RBI
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    How can I know that I’m eligible for a Home Loan?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                Lending institutions should have to be ensured that you are
                capable of making repayments of your loan. And to be sure, the
                lender will not only consider your income statements, but your
                liabilities and assets too. Your credit history of how you
                handle repayments on Credit cards and existing loans, if any.
                Your education and qualification so as to determine whether you
                are eligible for handling large debts. Banks as standard, use
                FOIR i.e. fixed obligation to income ratio of the candidate. By
                this ratio, a bank calculates your total monthly instalments
                versus your total monthly income.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    Can I get a loan for constructing a house on an existing
                    plot?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                Yes, you are eligible to get various different type of loans as
                many lenders have variants of home loans. Given you own the
                land. The application and approval process will vaguely be same
                as other home loans, but additionally you will be required to
                submit documents related to proof of land ownership.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    Advantages and disadvantages of fixed rate home loans
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                <strong>Advantages :</strong>
                <br />
                <br />
                You will get a fixed EMI independent of future market
                conditions. - You can easily calculate your future budget since
                the EMI is the same for loan tenure.
                <br />
                <strong>Disadvantages :</strong>
                <br />
                <br />
                -The major disadvantage of a fixed rate of interest is that it
                is at least 1-2.5% higher than a floating rate of interest. -You
                will still have to pay a higher interest rate even when the
                market current interest rates have decreased.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    How to improve the eligibility criteria for home loans
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                - Merger Income with a CO-Applicant. If you have a spouse as an
                earning member of the family, then you can apply for a joint
                loan. Single men can also apply for loan with a working parent.
                -Increase your home loan tenure. By increasing one’s loan
                tenure, one can decrease the monthly installments and thus
                borrow a higher amount. However, it is important to bear in mind
                that by increasing your loan tenure, you actually end up paying
                a higher amount of interest to the lender. - Clear any other
                outstanding credit or loans. Before applying for a home loan,
                you can consider clearing the other outstanding liabilities.
                This will decrease your debt-to-income ratio and make you
                eligible for a higher amount of loan. -Provide collateral Your
                prospective lender may consider increasing your loan eligibility
                if you have been a prudent long term investor. You could show
                collaterals such as life insurance policies, or other long term
                investments such as National Savings Certificate. You could even
                keep your stocks and shares as collaterals but in such cases the
                ownership must be transferred to the lender, which is not a good
                choice.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center w-full">
                  <AiOutlineQuestionCircle className="text-2xl mr-2 text-darkblue w-1/12" />
                  <p className="lg:text-2xl text-lg font-medium text-darkgray w-11/12 leading-6 ">
                    Which points to consider while choosing a bank to apply for
                    a home loan?
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-base w-10/12 mx-auto">
                1) Negotiate on the ‘spread’ factor of your interest rates
                Different lenders will give you different indicative rates. What
                you need to understand is that there are two components of the
                interest rate- the base rate and the spread. So if you are
                taking a loan from a bank your final rate of interest will be
                the base rate + the spread. For example, if the base rate of X
                bank is 10% and it is offering you a spread of 0.65 %, your rate
                of interest works out to be 10.65%.
                <br />
                <br />
                2) Decide your maximum EMI yourself. Do not let the bank decide
                upon the EMI component of your loan. Decide the highest amount
                of EMI you can pay and keep it constant. Most banks will tell
                you that they will decrease your EMI when there is a decrease in
                the interest rates, but do not fall into this trap, as that
                effectively means that you are paying a higher rate of interest.
                Check with your lender if you have the liberty of either keeping
                your EMI constant despite a change in interest rates or
                increasing the EMI at your will.
                <br />
                <br />
                3) Negotiate on the processing fee A lender will always tell you
                that you have to pay 1% or thereabouts of the sanctioned amount
                as the processing fee. If you are a smart negotiator, you can
                negotiate and get this waived off.
                <br />
                <br />
                4) Get a clear idea on partial payments Partial payments are the
                payments you can pay in a lump sum to reduce your outstanding
                loan. A partial payment is always deducted from your principal
                amount. Therefore, by making partial payments periodically, you
                can cut down on the interest component of your loan
                significantly. Needless to say, that does not please the lenders
                much and therefore most banks have a limit on the amount of part
                payments you can make in a year. While scouting for a loan, look
                for a lender who allows you the maximum number of part payments
                in a year.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
