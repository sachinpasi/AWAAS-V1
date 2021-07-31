import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
const CookieBox = ({ isLoading }) => {
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsOpen(true);
    }
  }, [isLoading]);
  return (
    <div
      className={`${
        IsOpen ? "bottom-8" : "-bottom-full"
      } w-3/4 h-24 bg-white border-1 border-extralightgray fixed  left-2/4 transform -translate-x-2/4 z-40 rounded-2xl transition-all duration-1000 shadow-2xl`}
    >
      <div className="flex w-11/12 h-full mx-auto flex-col justify-center items-center">
        <MdClose
          onClick={() => setIsOpen(false)}
          className="text-darkgray text-3xl m-2 cursor-pointer absolute right-0.5 top-0.5"
        />
        <div className="flex justify-between items-center">
          <p className="text-darkgray text-lg leading-5 ">
            We use cookies to improve user experience, and analyze website
            traffic. For these reasons, we may share your site usage data with
            our analytics partners. By clicking “Accept Cookies,” you consent to
            store on your device all the technologies described in our Cookie
            Policy.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium  bg-green text-white px-8 py-2 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBox;
