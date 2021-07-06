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
    <section className="w-fill h-full">
      <div className="customContainer py-20">
        <p className="text-4xl font-light text-darkgray py-2">
          Current Interest Rates Of Banks
        </p>
        <div className="w-full h-full my-5">
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

            <div className="flex justify-evenly py-4 pb-1 border-b-2 border-dashed">
              <div className="w-1/4 flex flex-col justify-center items-center">
                <img src="/assets/images/homeloans/kotak.svg" alt="" />
                <p className="font-medium py-1">Kotak</p>
              </div>
              <div className="w-1/4 flex flex-col justify-center items-center">
                <p className="text-xl font-medium">6.90%</p>
              </div>
              <div className="w-1/4 flex flex-col justify-center items-center">
                <p className="text-xl font-medium">10000/-</p>
              </div>
              <div className="w-1/4 flex flex-col justify-center items-center">
                <p className="text-xl font-medium">0-30 Yrs</p>
              </div>
            </div>

            <div className="flex justify-evenly py-4 pb-1 border-b-2 border-dashed">
              <div className="w-1/4 flex flex-col justify-center items-center">
                <img src="/assets/images/homeloans/icici.svg" alt="" />
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

            <div className="flex justify-evenly py-4 pb-1 border-b-2 border-dashed">
              <div className="w-1/4 flex flex-col justify-center items-center">
                <img src="/assets/images/homeloans/sbi.svg" alt="" />
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

            <div className="flex justify-evenly py-4 pb-1  ">
              <div className="w-1/4 flex flex-col justify-center items-center">
                <img src="/assets/images/homeloans/hdfc.svg" alt="" />
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
          </div>
        </div>

        <div className="w-full flex justify-between  ">
          <div className="w-70percent py-4">
            <p className="text-3xl font-light py-4 pt-0">EMI Calculator</p>
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
                      max="200"
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
            style={{
              background: "#598DF5",
            }}
            className="w-3/12  flex flex-col justify-between items-center text-center rounded "
          >
            <div>
              <p className="text-2xl  text-white py-4 border-b-1 border-gray-400 px-8">
                EMI Calculation
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#B8D0FF",
                }}
                className="text-xl"
              >
                Monthly EMI
              </p>
              <p className="text-xl font-medium text-white">
                {Results.MonthlyEMI}
              </p>
            </div>{" "}
            <div>
              <p
                style={{
                  color: "#B8D0FF",
                }}
                className="text-xl"
              >
                Total Interest Payable
              </p>
              <p className="text-xl font-medium text-white">
                {Results.TotalIntrestPayable}/-
              </p>
            </div>
            <div className="bg-blue w-full py-8">
              <p className="text-white text-xl">TOTAL AMOUNT PAYABLE</p>
              <p className="text-sm  text-white">Principal + Interest</p>
              <p className="text-white text-xl font-medium">
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
