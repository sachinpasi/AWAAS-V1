import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
const CookieBox = ({ isLoading }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const HandleAcceptCookie = () => {
    setIsOpen(false);
    document.cookie = "awwas=AWAAS; max-age=2592000; path=/;";
  };

  useEffect(() => {
    if (!isLoading) {
      setIsOpen(true);
    }
  }, [isLoading]);
  return (
    <>
      <div
        className={`${
          IsOpen ? "bottom-8" : "-bottom-full"
        } w-3/4 h-24 bg-white border-1 border-extralightgray fixed  left-2/4 transform -translate-x-2/4 z-40 rounded-2xl transition-all duration-1000 shadow-2xl hidden lg:grid`}
      >
        <div className="flex w-11/12 h-full mx-auto flex-col justify-center items-center">
          <MdClose
            onClick={() => setIsOpen(false)}
            className="text-darkgray text-3xl m-2 cursor-pointer absolute right-0.5 top-0.5"
          />
          <div className="flex justify-between items-center">
            <img
              className="h-20 -ml-8"
              src="/assets/images/cookie/cookie.jpg"
              alt=""
            />
            <p className="text-darkgray text-lg leading-5 ">
              We use cookies to improve user experience, and analyze website
              traffic. For these reasons, we may share your site usage data with
              our analytics partners. By clicking “Accept Cookies,” you consent
              to store on your device all the technologies described in our
              Cookie Policy.
            </p>
            <button
              onClick={HandleAcceptCookie}
              className="text-xl font-medium  bg-green text-white px-8 py-2 rounded"
            >
              Accept
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-5/6 h-auto bg-white fixed left-2/4  transform -translate-x-2/4  z-40 shadow-xl rounded-3xl overflow-hidden transition-all duration-1000 lg:hidden  ${
          IsOpen ? "-translate-y-2/4 top-2/4" : "-translate-y-full -top-full"
        }`}
      >
        <div className="p-6">
          <img src="/assets/images/cookie/cookie.jpg" alt="" />
          <h4 className="text-3xl text-black font-bold tracking-wide text-center my-2 ">
            Cookies!
          </h4>
          <p className="text-center leading-6 text-lg mb-14">
            We use cookies to make your experience better
          </p>
        </div>
        <div className="w-full border-t-1 absolute bottom-0 bg-gray-100   ">
          <button
            onClick={() => setIsOpen(false)}
            className="w-2/4 h-14 rounded-bl-3xl text-xl font-semibold bg-white text-black uppercase"
          >
            Deny
          </button>
          <button
            onClick={HandleAcceptCookie}
            className="w-2/4 h-14 rounded-br-3xl text-xl font-semibold bg-black text-white uppercase"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieBox;
