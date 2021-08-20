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
      <div className="lg:w-80vw w-90vw mx-auto flex flex-col">
        <p className="lg:text-5xl text-3xl text-center my-4">
          Frequently Asked Questions
        </p>

        <Accordion preExpanded="string[1]" className="border-none">
          <AccordionItem uuid="1" className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  Q. What are the taxes that I need to pay before buying a
                  property?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-start px-4">
                <p className="text-base py-1 text-darkgray">
                  The buyer needs to pay the following taxes:
                </p>
                <ul className="list-disc mx-4">
                  <li>
                    TDS or tax deduction at source on amount exceeding Rs 50
                    lakhs for the purchase of property excluding agricultural
                    land.
                  </li>
                  <li> Stamp duty</li>
                  <li>
                    Service Tax - Applicable if the property is being purchased
                    from the builder who conceived and constructed the project
                    before offering possession to the buyer. If a `ready to move
                    in' property is purchased from the seller, service tax is
                    not applicable.
                  </li>
                  <li>
                    Value Added Tax (VAT) - If applicable in the concerned
                    state.
                  </li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  Can I authorize someone else to register my property by
                  granting him Power of Attorney?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-start px-4">
                <p className="text-base py-1 text-darkgray">
                  Yes, you can execute Special Power Of Attorney to get your
                  property registered by someone else
                </p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  How can I register my property?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-center px-4">
                <p className="text-base py-1 text-darkgray">
                  Registration of a property includes necessary stamping and
                  paying of registration charges for a sale deed and getting it
                  recorded at the sub-registrar's office of the concerned
                  jurisdictional area. If a property is purchased from a
                  developer directly, getting it registered amounts to act of
                  legal conveyance. In case the purchased property is a second
                  or third transaction, it involves a duly stamped and
                  registered transfer deed. Nowadays, property registration
                  process is computerized in most states.
                </p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  What documents would I need at the time of possession?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-start px-4">
                <ul className="list-disc mx-4">
                  <li>
                    Original copies of the chain of title agreements and
                    Building Plan approvals
                  </li>
                  <li> Original registration and stamp duty receipts</li>
                  <li> Possession Letter</li>
                  <li> Original share certificate (In case of societies)</li>
                  <li>
                    Proof of payment of all dues like maintenance charges,
                    electricity bills, phone, water and property taxes up to the
                    date of handing possession
                  </li>
                  <li>
                    NOC from the Society or other concerned body confirming no
                    objection to the transfer
                  </li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  How could I verify that the documents shown to me by the
                  seller are genuine?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-start px-4">
                <ul className="list-disc mx-4">
                  <li>
                    Projects approvals can be verified from the corporation or
                    the sanctioning authority's office
                  </li>
                  <li>
                    {" "}
                    Ownership documents can be confirmed from the Sub
                    Registrar's office where they are registered
                  </li>
                  <li>
                    {" "}
                    Share certificate related to societies can be verified from
                    the concerned Society itself
                  </li>
                </ul>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="my-4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="text-2xl font-medium text-darkgray">
                  What documents are required for registration of a new
                  apartment/plot?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="bg-white">
              <div className="flex flex-col items-start px-4">
                <p className="text-base py-1 text-darkgray">
                  Sale Deed, No Objection Certificate (NOC) from builder, NOC
                  from banks, Building Plan approvals, Completion Certificate,
                  PAN Card and Photographs
                </p>
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
