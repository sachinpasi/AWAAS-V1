import React, { useState } from "react";

const Consultant = () => {
  return (
    <section className="w-full bg-textbg">
      <div className="customContainer flex flex-col">
        <div className="w-full flex justify-between items-center border-b-2  border-navborder">
          <p className="text-4xl my-2 text-darkgray">Vastu Consultant</p>
          <div>
            <select className="w-60 border-2 border-extralightgray text-center h-11 px-2 mx-2">
              <option value="">Consultancy Type</option>
            </select>
            <select className="w-20 border-2 border-extralightgray text-center h-11 px-2 ml-2">
              <option value="">City</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 my-4">
          <Card Name="Ananya" Image="/assets/images/vastu/1.jfif" />
          <Card Name="Diya" Image="/assets/images/vastu/2.jfif" />
          <Card Name="Ishaan" Image="/assets/images/vastu/3.jfif" />
          <Card Name="Dhruv" Image="/assets/images/vastu/4.jfif" />
        </div>
      </div>
    </section>
  );
};

export default Consultant;

const Card = ({ Name, Image }) => (
  <div className="h-96 bg-white flex flex-col p-4  shadow-md">
    <div className="h-2/4 w-full border-b-2 border-gray-200 border-dashed flex items-center  ">
      <div className="w-40 h-40 ">
        <img className="w-full h-full object-cover" src={Image} alt="" />
      </div>
      <div className="h-full w-full ml-4 ">
        <p className="text-2xl font-medium text-yellow-600">{Name}</p>
        <div className="flex flex-col justify-between items-start ">
          <div className="flex items-center">
            <div className="w-10">
              <svg width="20.828" height="17.043" viewBox="0 0 20.828 17.043">
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M11.184,9.255H9.645a.091.091,0,0,0-.063.025.087.087,0,0,0-.025.063v3.244a.091.091,0,0,0,.025.063.087.087,0,0,0,.063.025h1.537a.091.091,0,0,0,.063-.025.087.087,0,0,0,.025-.063V9.343a.091.091,0,0,0-.025-.063.075.075,0,0,0-.061-.025Zm-10-6.887H6.521V.837A.834.834,0,0,1,6.767.246.843.843,0,0,1,7.358,0H13.47a.839.839,0,0,1,.837.837V2.368h5.338a1.166,1.166,0,0,1,.834.349,1.178,1.178,0,0,1,.349.834V6.409a26.45,26.45,0,0,1-4.139,2.336,23.3,23.3,0,0,1-4.431,1.48V9.082a.949.949,0,0,0-.953-.953H9.521a.949.949,0,0,0-.953.953V10.2A23.244,23.244,0,0,1,4.249,8.745,26.581,26.581,0,0,1,0,6.333V3.551a1.166,1.166,0,0,1,.349-.834,1.175,1.175,0,0,1,.834-.349ZM20.828,8.1V15.86a1.166,1.166,0,0,1-.349.834,1.178,1.178,0,0,1-.834.349H1.183a1.166,1.166,0,0,1-.834-.349A1.178,1.178,0,0,1,0,15.86V8.033A27.585,27.585,0,0,0,3.605,9.99,24.713,24.713,0,0,0,8.57,11.619v1.229a.949.949,0,0,0,.953.953h1.785a.949.949,0,0,0,.953-.953V11.56l.019.078a24.779,24.779,0,0,0,5.056-1.649A27.435,27.435,0,0,0,20.828,8.1Zm-8-6.963H8a.1.1,0,0,0-.075.032.112.112,0,0,0-.032.075V2.336h5.043V1.248a.1.1,0,0,0-.032-.075.112.112,0,0,0-.075-.032Z"
                  fill="gray"
                />
              </svg>
            </div>

            <p className="flex items-center text-sm my-1">
              <span className="font-medium mr-1">19 Years</span> experience
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.828"
                height="17.043"
                viewBox="0 0 20.828 17.043"
              >
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M11.184,9.255H9.645a.091.091,0,0,0-.063.025.087.087,0,0,0-.025.063v3.244a.091.091,0,0,0,.025.063.087.087,0,0,0,.063.025h1.537a.091.091,0,0,0,.063-.025.087.087,0,0,0,.025-.063V9.343a.091.091,0,0,0-.025-.063.075.075,0,0,0-.061-.025Zm-10-6.887H6.521V.837A.834.834,0,0,1,6.767.246.843.843,0,0,1,7.358,0H13.47a.839.839,0,0,1,.837.837V2.368h5.338a1.166,1.166,0,0,1,.834.349,1.178,1.178,0,0,1,.349.834V6.409a26.45,26.45,0,0,1-4.139,2.336,23.3,23.3,0,0,1-4.431,1.48V9.082a.949.949,0,0,0-.953-.953H9.521a.949.949,0,0,0-.953.953V10.2A23.244,23.244,0,0,1,4.249,8.745,26.581,26.581,0,0,1,0,6.333V3.551a1.166,1.166,0,0,1,.349-.834,1.175,1.175,0,0,1,.834-.349ZM20.828,8.1V15.86a1.166,1.166,0,0,1-.349.834,1.178,1.178,0,0,1-.834.349H1.183a1.166,1.166,0,0,1-.834-.349A1.178,1.178,0,0,1,0,15.86V8.033A27.585,27.585,0,0,0,3.605,9.99,24.713,24.713,0,0,0,8.57,11.619v1.229a.949.949,0,0,0,.953.953h1.785a.949.949,0,0,0,.953-.953V11.56l.019.078a24.779,24.779,0,0,0,5.056-1.649A27.435,27.435,0,0,0,20.828,8.1Zm-8-6.963H8a.1.1,0,0,0-.075.032.112.112,0,0,0-.032.075V2.336h5.043V1.248a.1.1,0,0,0-.032-.075.112.112,0,0,0-.075-.032Z"
                  fill="gray"
                />
              </svg>
            </div>

            <p className="flex items-center text-sm my-1">
              English, Hindi Panjabi
            </p>
          </div>{" "}
          <div className="flex items-center">
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.122"
                height="18.72"
                viewBox="0 0 27.122 18.72"
              >
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M26.128,2.406A3.449,3.449,0,0,1,27.1,4.331a5.356,5.356,0,0,1,.04.817V9.8c0,.252.007.5-.015.753a3.464,3.464,0,0,1-1.558,2.57c-1.113.722-2.384.556-3.715.556a8.168,8.168,0,0,0,2.28,3.172l-.358.671-.011,0a12.041,12.041,0,0,1-6.245-3.841,19.572,19.572,0,0,1-2.592-.121,6.7,6.7,0,0,1-3.4,1.013,11.615,11.615,0,0,1-2.691,2.455,12.633,12.633,0,0,1-3.748,1.645,1.651,1.651,0,0,1-.208.044.77.77,0,0,1-.6-1.342,5.877,5.877,0,0,0,1.764-2.8c-1.757,0-3.227.185-4.658-1.243C-.4,11.545.045,7.388.135,4.894A5.655,5.655,0,0,1,.429,2.728,4.223,4.223,0,0,1,2.793.32a8.381,8.381,0,0,1,3.2-.309h6.523a5.489,5.489,0,0,1,1.36.113A4.2,4.2,0,0,1,16.031,1.39l7.532,0a3.436,3.436,0,0,1,2.565,1.013Zm-4.053,7.04H20.1l-.274.985H18.047q.891-2.517,1.784-5.038c.214-.607.457-1.611,1.236-1.611.808,0,1.075.921,1.3,1.556l1.806,5.09H22.354l-.278-.982Zm-.364-1.291-.623-2.146-.618,2.146Zm-3.34,7.664-1.287-1.064-1.607,1.985-2.333-2.024-1.1,1.245,2.528,2.011,2.049-.177,1.753-1.976ZM16.936,2.176c.755,2.938,1.561,8.1-.466,10.713.479.007.951.007,1.43.007a10.245,10.245,0,0,0,4.124,3.19c.155.068.311.137.468.2A8.178,8.178,0,0,1,21.133,14a9.435,9.435,0,0,1-.318-1.108c.45,0,.892,0,1.344.02a5.539,5.539,0,0,0,2.885-.4,2.538,2.538,0,0,0,.876-.828,2.688,2.688,0,0,0,.4-1.031,5.579,5.579,0,0,0,.031-.881V5c0-.126,0-.241-.007-.366a2.678,2.678,0,0,0-2.393-2.441c-.161-.015-.32-.013-.481-.013l-6.539,0ZM4.7,2.978H7.665V2.141H8.989v.837h2.978V4.351h-.611a6.229,6.229,0,0,1-.263,1.15h0a7.225,7.225,0,0,1-.5,1.159,10.346,10.346,0,0,1-1.32,1.876,13.377,13.377,0,0,0,3.1,2.656l-.682,1.062a14.8,14.8,0,0,1-3.3-2.8,21.2,21.2,0,0,1-2.687,2.174l-.717-1.038A19.823,19.823,0,0,0,7.623,8.45,11.983,11.983,0,0,1,5.978,4.872l1.216-.34A10.843,10.843,0,0,0,8.5,7.492a8.9,8.9,0,0,0,.976-1.426,6.034,6.034,0,0,0,.415-.96h0a4.895,4.895,0,0,0,.185-.755H4.7V2.978Z"
                  transform="translate(-0.02 0)"
                  fill="gray"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <p className="flex items-center text-sm my-1">
              Education: B Com Honours / Jyotish Visharad
            </p>{" "}
          </div>
        </div>
        <div className="w-full flex justify-between items-center h-10 my-2">
          <div className="border-1 cursor-pointer border-blue h-full w-2/4 mx-2 rounded px-2 flex justify-center items-center">
            <svg
              id="pie-chart"
              width="21.415"
              height="21"
              viewBox="0 0 21.415 21"
            >
              <path
                id="Path_16"
                data-name="Path 16"
                d="M11.3,11.9l8.435.139a9,9,0,0,1-3.975,7.469L11.3,11.9Zm-.842-1.455-.1-9.81L10.354,0l.629.044h0a11.2,11.2,0,0,1,10.4,10.669l.028.629-.629-.019-9.763-.3-.563-.017-.005-.563Zm1.081-9.165.084,8.594,8.55.261a10.023,10.023,0,0,0-8.634-8.855Zm-1.917,10.1,4.81,8.33A9.619,9.619,0,1,1,9.212,1.772l.406,9.61Z"
                fill="#598df5"
                fill-rule="evenodd"
              />
            </svg>
            <p className="text-sm text-blue font-medium ml-1">Sample Report</p>
          </div>

          <div className="border-1 cursor-pointer border-green h-full w-2/4 mx-2 rounded px-2 flex justify-center items-center">
            <svg width="17.5" height="20.001" viewBox="0 0 17.5 20.001">
              <path
                id="Icon_awesome-play"
                data-name="Icon awesome-play"
                d="M16.578,8.388,2.828.259A1.865,1.865,0,0,0,0,1.872V18.126A1.873,1.873,0,0,0,2.828,19.74l13.75-8.125A1.873,1.873,0,0,0,16.578,8.388Z"
                transform="translate(0 -0.002)"
                fill="#2bd8b5"
              />
            </svg>

            <p className="text-sm text-green font-medium ml-1">Watch Videos</p>
          </div>
        </div>
      </div>
    </div>

    <div className="h-2/4 w-full  flex items-center flex-col  ">
      <div className="w-full h-full flex justify-between items-center py-4">
        <input className="hidden" id="option1" type="radio"></input>
        <label
          for="option1"
          className="w-2/4 h-full rounded-xl border-1 shadow cursor-pointer border-blue mr-4 flex flex-col justify-center items-center"
        >
          <p className="text-darkgray font-medium text-center text-base leading-5 capitalize">
            Trial pack <br /> (talk for 15 min)
          </p>
          <p className="text-xl font-medium text-blue mt-1">&#8377; 499</p>
        </label>
        <input className="hidden" id="option2" type="radio"></input>
        <label
          for="option2"
          className="w-2/4 h-full border-1 rounded-xl cursor-pointer shadow border-lightgrayplus ml-4 flex flex-col justify-center items-center"
        >
          <p className="text-darkgray font-medium text-center text-base leading-5 capitalize">
            Telephonic <br /> consultancy with Report
          </p>
          <p className="text-xl font-medium text-blue mt-1">&#8377; 2500</p>
        </label>
      </div>
      <button className="border-2 border-green rounded text-green text-lg font-medium w-full h-14">
        Book Now
      </button>
    </div>
  </div>
);
