import React from "react";
import { Link } from "react-router-dom";

import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#2C2E33",
        borderTop: "5px solid #4D81E8 ",
      }}
      className="w-full h-full "
    >
      <div className="w-90vw lg:w-80vw mx-auto pt-10">
        <div className="flex flex-col justify-center items-center">
          <img src="/assets/images/logo/logo.svg" alt="" />

          <p className="text-xs text-white text-center w-11/12 lg:w-2/4 py-4">
            Awaasonline dreams and commits towards making buying, selling and
            renting property a delightful experience for all. With certified
            projects and validated properties, we aspire to bring the best of
            Resindential and Commercial listings to your fingertips.
          </p>

          <ul className="lg:flex hidden  justify-evenly flex-wrap lg:flex-nowrap items-center lg:w-3/4 py-4">
            {/* <li>
              <Link
                to="/about-us"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                About Us
              </Link>
            </li> */}
            <li>
              <Link
                to="/investment-assist"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Investment Assistance
              </Link>
            </li>
            <li>
              <Link
                to="/vastu"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Vastu
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Legal
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Media Coverage
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/news"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Real Estate Updates
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                style={{
                  color: "#88909F",
                }}
                className="text-base "
              >
                Feedback
              </Link>
            </li>
          </ul>

          <ul className="lg:hidden flex flex-col justify-between items-start w-11/12">
            <li>
              <Link
                to="/about-us"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/vastu"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Vastu
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Legal
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/investment-assist"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Investment Assistance
              </Link>
            </li>
            <li>
              <Link
                to="/"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Media Coverage
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/news"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Real Estate Updates
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                style={{
                  color: "#88909F",
                }}
                className="text-xl "
              >
                Feedback
              </Link>
            </li>
          </ul>
          <p className="text-2xl py-4 text-white">
            Subscribe to our Newsletter
          </p>

          <div className="flex justify-between flex-col lg:flex-row items-center lg:h-10 w-full lg:w-2/4">
            <input
              style={{
                background: "#4F525A",
              }}
              className="w-3/4 h-10 lg:h-full text-sm px-2 "
              type="email"
              placeholder="Enter Your Email Address"
              name=""
              id=""
            />
            <button
              style={{
                background: "#4D81E8",
              }}
              className=" px-8 py-2 lg:p-0 lg:w-1/4 my-2 lg:my-0 h-full text-sm text-white "
              type="submit"
            >
              Subscribe Now
            </button>
          </div>

          <div className="w-full flex  lg:flex-row flex-col lg:justify-between lg:items-center my-20 mt-10 lg:mb-10 mb-8 ">
            <div
              style={{
                background: "#32353A",
              }}
              className="h-24 flex lg:w-1/3 lg:mx-4 flex-col justify-center items-start overflow-visible relative my-4 lg:my-0"
            >
              <div
                style={{
                  background: "#4F525A",
                }}
                className="w-20 h-20 absolute overflow-visible -mt-4 ml-4 flex justify-center items-center -top-1"
              >
                <MdLocationOn
                  style={{
                    color: "#4D81E8",
                  }}
                  className="text-4xl"
                />
              </div>
              <div className="w-full flex justify-end items-start h-full ">
                <p
                  style={{
                    color: "#88909F",
                  }}
                  className="py-4  w-3/4 text-left px-4 "
                >
                  Registered Office Sco No.6, Eldeco High Street, Sector-40,
                  Panipat- 132103
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#32353A",
              }}
              className="h-24 flex lg:w-1/3  flex-col justify-center items-start overflow-visible relative my-4 lg:my-0"
            >
              <div
                style={{
                  background: "#4F525A",
                }}
                className="w-20 h-20 lg:mx-4 absolute overflow-visible -mt-4 ml-4 flex justify-center items-center -top-1"
              >
                <MdEmail
                  style={{
                    color: "#4D81E8",
                  }}
                  className="text-4xl"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-end h-full ">
                <a
                  href="mailto:assist@awaasonline.com"
                  style={{
                    color: "#88909F",
                  }}
                  className="py-4  pb-2 w-3/4 text-left px-4 "
                >
                  assist@awaasonline.com
                </a>
                <a
                  href="mailto:assist@awaasonline.com"
                  style={{
                    color: "#88909F",
                  }}
                  className=" w-3/4 text-left px-4 "
                >
                  help@awaasonline.com
                </a>
              </div>
            </div>

            <div
              style={{
                background: "#32353A",
              }}
              className="h-24 flex lg:w-1/3 lg:mx-4  flex-col justify-center items-start overflow-visible relative my-4 lg:my-0"
            >
              <div
                style={{
                  background: "#4F525A",
                }}
                className="w-20 h-20 absolute overflow-visible -mt-4 ml-4 flex justify-center items-center -top-1"
              >
                <MdCall
                  style={{
                    color: "#4D81E8",
                  }}
                  className="text-4xl"
                />
              </div>
              <div className="w-full flex  flex-col justify-start items-end h-full ">
                <a
                  href="tel:"
                  style={{
                    color: "#88909F",
                  }}
                  className="py-4 pb-2  w-3/4 text-left px-4 "
                >
                  +91-999-639-8965
                </a>
                <a
                  href="tel:"
                  style={{
                    color: "#88909F",
                  }}
                  className=" w-3/4 text-left px-4 "
                >
                  +91-999-639-8965
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "95%",
        }}
        className="flex justify-center items-center flex-col text-white text-center mx-auto"
      >
        <p className="text-2xl ">Disclaimer</p>
        <p
          style={{
            color: "#88909F",
          }}
          className="text-sm py-4 pb-8"
        >
          {" "}
          Awaasonline Limited is only a go-between platform for advertising
          Seller’s properties to a Buyer/Customer/User coming on its website and
          cannot be held control or a party to or privy in any manner any deals
          between the Seller and the Buyer/Customer/User whatsoever. All the
          discounts and offers are carried out by the Builder(s)/Developer(s)
          who have advertised their products on this website. Awaasonline is
          only the intermediary passing on the offers. It neither is liable to
          sell or render any of those products or services nor warrants nor
          makes any representations with respect to the proposal(s) made on this
          site. Any disputes or disagreements between the Buyer/Customer/User
          and Seller shall be settled without involving Awaasonline Realty
          Services Limited in any manner. Awaasonline Realty Services Limited
          shall not be held responsible or liable to mediate or resolve any
          conflicts/disputes/disagreements between the Seller and the
          Buyer/Customer/User.
        </p>
      </div>
      <div
        style={{
          borderTop: "1px solid #4D81E8",
        }}
        className=""
      >
        <p
          style={{
            color: "#777C85",
          }}
          className="flex justify-center items-center py-4"
        >
          &#169; Copyright All Rights reserved by
        </p>
      </div>
    </footer>
  );
};

export default Footer;
