import React, { useEffect, useState } from "react";
import "./Slider.css";
const CurrentIntrestRate = () => {
  const [HomeLoanAmount, setHomeLoanAmount] = useState("90");
  const [RateOfIntrest, setRateOfIntrest] = useState("12.5");
  const [LoanTenure, setLoanTenure] = useState("28");
  const [Results, setResults] = useState({
    MonthlyEMI: 0,
    TotalIntrestPayable: 0,
    TotalAmountPayable: 0,
  });

  const EMI_CALCULATION = () => {
    const userAmount = Number(HomeLoanAmount * 100000);
    const calculatedInterest = Number(RateOfIntrest) / 100 / 12;
    const calculatedPayments = Number(LoanTenure) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // Set up results to the state to be displayed to the user
      // setResults({
      //   monthlyPayment: monthlyPaymentCalculated,
      //   totalPayment: totalPaymentCalculated,
      //   totalInterest: totalInterestCalculated,
      //   isResult: true,
      // });

      setResults({
        MonthlyEMI: monthlyPaymentCalculated,
        TotalIntrestPayable: totalInterestCalculated,
        TotalAmountPayable: totalPaymentCalculated,
      });
      return;
    }
  };

  useEffect(() => {
    EMI_CALCULATION();
  }, [HomeLoanAmount, RateOfIntrest, LoanTenure]);

  return (
    <section className="w-full h-full">
      <div className="customContainer py-20 h-full">
        <p className="text-4xl font-light text-darkgray py-2">
          Current Interest Rates Of Banks
        </p>
        <div className="w-full flex justify-between items-start  h-full">
          <div className="w-70percent h-full my-5">
            <div className="border-b-1 border-r-1 border-l-1 rounded mb-4">
              <div className="w-full bg-littlelightgray flex justify-evenly py-5">
                <div className="w-1/4 flex justify-center items-center">
                  <p className="text-xl font-medium text-darkgray">Bank Name</p>
                </div>{" "}
                <div className="w-1/4 flex justify-center items-center">
                  <p className="text-xl font-medium text-darkgray">
                    Rate of interest
                  </p>
                </div>{" "}
                <div className="w-1/4 flex justify-center items-center">
                  <p className="text-xl font-medium text-darkgray">
                    Processing Fee
                  </p>
                </div>{" "}
                <div className="w-1/4 flex justify-center items-center">
                  <p className="text-xl font-medium text-darkgray">Tenure</p>
                </div>
              </div>
              <div className="flex justify-evenly py-2 pb-1 border-b-2 border-dashed">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <img
                    className="w-12 h-12 object-contain "
                    src="/assets/images/homeloans/sbi.svg"
                    alt=""
                  />
                  <p className="font-medium py-1">SBI</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">6.90%</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">5000/-</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">0-30 Yrs</p>
                </div>
              </div>
              <div className="flex justify-evenly py-2 pb-1 border-b-2 border-dashed">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <img
                    className="w-12 h-12 object-contain "
                    src="/assets/images/homeloans/pnb.jfif"
                    alt=""
                  />
                  <p className="font-medium py-1">PNB</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">6.90%</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">5000/-</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">0-30 Yrs</p>
                </div>
              </div>
              <div className="flex justify-evenly py-2 pb-1  border-b-2 border-dashed  ">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <img
                    className="w-12 h-12 object-contain "
                    src="/assets/images/homeloans/hdfc.svg"
                    alt=""
                  />
                  <p className="font-medium py-1">HDFC</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">6.80%</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">15000/-</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">3-30 Yrs</p>
                </div>
              </div>
              <div className="flex justify-evenly py-2 pb-1 border-b-2 border-dashed">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <img
                    className="w-12 h-12 object-contain "
                    src="/assets/images/homeloans/icici.svg"
                    alt=""
                  />
                  <p className="font-medium py-1">ICICI</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">6.80%</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">10000/-</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">3-30 Yrs</p>
                </div>
              </div>
              <div className="flex justify-evenly py-2 pb-1 border-b-2 border-dashed">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <img
                    className="w-12 h-12 object-contain "
                    src="/assets/images/homeloans/axis.jfif"
                    alt=""
                  />
                  <p className="font-medium py-1">AXIS</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">6.80%</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">10000/-</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">3-30 Yrs</p>
                </div>
              </div>
              <div className="flex justify-evenly py-2 pb-1 border-b-2 border-dashed">
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <img
                    className="w-12 h-12 object-contain "
                    src="/assets/images/homeloans/iifl.jfif"
                    alt=""
                  />
                  <p className="font-medium py-1">IIFL</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">6.80%</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">10000/-</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">
                  <p className="text-xl font-medium">3-30 Yrs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-30percent h-full pl-8 my-5  ">
            <div className="w-full h-auto bg-white shadow-2xl rounded p-4 flex flex-col items-start justify-between sticky top-0 ">
              <div>
                <p className="text-2xl text-darkgray mb-2">Contact Us</p>
                <p className="text-xl font-medium">
                  Have any queries? We Love To Here From You
                </p>
                <div className="w-full h-full flex justify-center">
                  <img
                    className="h-40"
                    src="/assets/images/homeloans/bg.jfif"
                    alt=""
                  />
                </div>
                <div className="my-4">
                  <p className="text-xl text-blue font-medium">Call Us</p>
                  <p className="text-xl text-darkgray">0755-98765432</p>
                </div>
                <div className="my-4">
                  <p className="text-xl text-blue font-medium">Mail Us</p>
                  <p className="text-xl text-darkgray">
                    support@awasonline.com
                  </p>
                </div>
              </div>
              <div className="w-full text-center flex items-center justify-evenly text-2xl text-lightgray font-semibold uppercase">
                <span className="w-20 h-2 block border-b-2 border-solid"></span>{" "}
                or{" "}
                <span className="w-20 h-2 block border-b-2 border-solid"></span>
              </div>
              <div className="w-full">
                <p className="text-xl font-medium text-darkgray my-2">
                  Request a call back
                </p>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full h-12 border-1 border-navborder rounded px-2 text-xl"
                />
                <button className="text-xl font-medium text-white bg-blue rounded w-full h-12 mt-8">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between mt-20  ">
          <div className="w-70percent py-2">
            <p className="text-3xl font-light py-2 pt-0">EMI Calculator</p>
            <div className="w-full border-t-2 flex flex-col">
              <div className="w-full h-20 flex flex-col items-center justify-center my-4">
                <div className="w-full my-2  flex  justify-between items-center">
                  <p className="text-base">
                    <span className="font-medium text-lg">
                      Home Loan Amount
                    </span>{" "}
                    - In Lakhs
                  </p>
                  <p className="text-lg font-medium text-blue">
                    Rs. {HomeLoanAmount} Lakhs
                  </p>
                </div>
                <div className="w-full flex flex-col items-center  ">
                  <div className="w-full relative">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={HomeLoanAmount}
                      className="slider"
                      onChange={(e) => setHomeLoanAmount(e.target.value)}
                    ></input>
                  </div>

                  <div className="flex justify-between scaleRange ">
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                    <span>125</span>
                    <span>150</span>
                    <span>175</span>
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-20 flex flex-col items-center justify-center my-4">
                <div className="w-full my-2  flex  justify-between items-center">
                  <p className="text-base">
                    <span className="font-medium text-lg">
                      Rate of Interest
                    </span>{" "}
                  </p>
                  <p className="text-lg font-medium text-blue">
                    {RateOfIntrest} %
                  </p>
                </div>
                <div className="w-full flex flex-col items-center">
                  <input
                    type="range"
                    min="5"
                    max="22.5"
                    step="0.5"
                    value={RateOfIntrest}
                    className="slider"
                    onChange={(e) => setRateOfIntrest(e.target.value)}
                  ></input>
                  <div className="flex justify-between scaleRange ">
                    <span>5</span>
                    <span>7.5</span>
                    <span>10</span>
                    <span>12.5</span>
                    <span>15</span>
                    <span>17.5</span>
                    <span>20</span>
                    <span>22.5</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-20 flex flex-col items-center justify-center my-4">
                <div className="w-full my-2  flex  justify-between items-center">
                  <p className="text-base">
                    <span className="font-medium text-lg">Loan Tenure</span>{" "}
                  </p>
                  <p className="text-lg font-medium text-blue">
                    {LoanTenure} YEARS
                  </p>
                </div>
                <div className="w-full flex flex-col items-center">
                  <input
                    type="range"
                    min="0"
                    max="35"
                    value={LoanTenure}
                    className="slider"
                    onChange={(e) => setLoanTenure(e.target.value)}
                  ></input>
                  <div className="flex justify-between scaleRange ">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20</span>
                    <span>25</span>
                    <span>30</span>
                    <span>35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={
              {
                // background: "#598DF5",
              }
            }
            className="w-3/12  flex flex-col justify-between items-center text-center rounded border-2 "
          >
            <div>
              <p className="text-2xl  text-blue font-semibold py-2 border-b-1 border-gray-400 px-8">
                EMI Calculation
              </p>
            </div>
            <div>
              <p className="text-xl text-blue font-medium">Monthly EMI</p>
              <p className="text-xl font-medium text-black">
                {Results.MonthlyEMI}
              </p>
            </div>{" "}
            <div>
              <p className="text-xl text-blue font-medium">
                Total Interest Payable
              </p>
              <p className="text-xl font-medium text-black">
                {Results.TotalIntrestPayable}/-
              </p>
            </div>
            <div className=" w-full py-6">
              <p className="text-blue text-xl font-medium">
                TOTAL AMOUNT PAYABLE
              </p>
              <p className="text-sm  text-blue">Principal + Interest</p>
              <p className="text-black text-xl font-medium">
                {Results.TotalAmountPayable}/-
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentIntrestRate;
