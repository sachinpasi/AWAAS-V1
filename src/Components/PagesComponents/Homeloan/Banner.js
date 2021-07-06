import axios from "axios";
import React, { useState } from "react";
import { API } from "../../../API";
const Banner = () => {
  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState("");
  const [Phone, setPhone] = useState("");

  const HandleSubmit = async () => {
    const res = await axios.post(`${API}/`);
    console.log(res.data);
  };

  return (
    <section
      style={{
        background: "url(/assets/images/homeloans/bannerbg.png)",
        height: "50vh",
        overflowY: "visible",
      }}
    >
      <div style={{ background: "rgba(0,0,0,0.5)" }} className="w-full h-full ">
        <div className="customContainer flex justify-between items-center h-full">
          <div className="w-2/4">
            <p className="text-3xl text-white my-6 ">
              Fill Loan Application Online now, and track Daily progress!
            </p>
            <button className="text-lg text-white  font-medium bg-blue py-2 px-5">
              Apply for new Home Loan
            </button>
          </div>
          <div className="w-1/3 h-full flex justify-end">
            <div className="rounded shadow-lg mt-14 w-4/5 h-full bg-white flex flex-col justify-between items-start px-6">
              <p className="text-2xl tracking-tight border-b-1 py-2 w-full text-darkgray">
                Apply for loan
              </p>
              <div className="w-full">
                <p className="text-base py-1 text-darkgray tracking-tight">
                  Name
                </p>
                <input
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full h-11 border-1 rounded px-2"
                />
              </div>{" "}
              <div className="w-full">
                <p className="text-base py-1 text-darkgray tracking-tight ">
                  Phone Number
                </p>
                <input
                  type="text"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full h-11 border-1 rounded px-2"
                />
              </div>
              <div className="w-full">
                <p className="text-base py-1 text-darkgray tracking-tight ">
                  Amount
                </p>
                <input
                  type="text"
                  value={Amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full h-11 border-1 rounded px-2"
                />
              </div>
              <button
                onClick={HandleSubmit}
                className="w-full h-12 bg-blue text-white text-lg font-medium my-4 rounded"
              >
                {" "}
                Get Call Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
