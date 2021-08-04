import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../API";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/_features/_userSlice";
import moment from "moment";
import { async } from "q";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ApplyHomeLoan = () => {
  const user = useSelector(selectUser);
  const [Fields, setFields] = useState([]);
  const [FieldsCounter, setFieldsCounter] = useState(0);
  const [TotalRequest, setTotalRequest] = useState(0);
  const [Response, setResponse] = useState([]);
  const [CoApplicantId, setCoApplicantId] = useState(null);
  const [PanCard, setPanCard] = useState(null);
  const [IdCard, setIdCard] = useState(null);
  const [PanCardPrev, setPanCardPrev] = useState(null);
  const [IdCardPrev, setIdCardPrev] = useState(null);
  const [isADDAPLICANTCLICKED, setisADDAPLICANTCLICKED] = useState(false);
  const [isAdressHidden, setIsAdressHidden] = useState(false);
  const [isApplicantAdressHidden, setisApplicantAdressHidden] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const HandlePanCardChange = (e) => {
    setPanCard(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(fileArray);
      setPanCardPrev(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const HandleIdCardChange = (e) => {
    setIdCard(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(fileArray);
      setIdCardPrev(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  console.log(isApplicantAdressHidden);

  const AddAddressHidden = (index) => {
    setisApplicantAdressHidden((prevIndexes) => [...prevIndexes, index]);
  };
  const RemoveAddressHidden = (index) => {
    setisApplicantAdressHidden((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
  };

  const HandleAddressHiddenChange = (index) => {
    if (isApplicantAdressHidden.includes(index)) {
      RemoveAddressHidden(index);
    } else {
      AddAddressHidden(index);
    }
  };

  const addField = () => {
    setFields((prevIndexes) => [...prevIndexes, FieldsCounter]);
    setFieldsCounter((prevCounter) => prevCounter + 1);
  };

  const removeField = (index) => () => {
    setFields((prevIndexes) => {
      console.log(prevIndexes);
      console.log([...prevIndexes.filter((i) => i !== index)]);
      return [...prevIndexes.filter((item) => item !== index)];
    });
    setFieldsCounter((prevCounter) => prevCounter - 1);
  };

  const getDOB = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format("MM/DD/Y");
    return date;
  };

  const onFirstSubmit = async (data) => {
    const {
      first_name,
      middle_name,
      last_name,
      father_first_name,
      father_middle_name,
      father_last_name,
      mother_first_name,
      mother_middle_name,
      mother_last_name,
      mobile,
      residental_status,
      pancard,
      id_card,
      dob,
      gender,
      category,
      qualification,
      marital_status,
      spouseName,
      lineOnePresentAddress,
      lineTwoPresentAddress,
      cityPresentAddress,
      pinPresentAddress,
      lineOnePermanentAddress,
      lineTwoPermanentAddress,
      cityPermanentAddress,
      pinPermanentAddress,
      annual_income,
    } = data;

    console.log(data);

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("middle_name", middle_name);
    formData.append("last_name", last_name);
    formData.append("father_first_name", father_first_name);
    formData.append("father_middle_name", father_middle_name);
    formData.append("father_last_name", father_last_name);
    formData.append("mother_first_name", mother_first_name);
    formData.append("mother_middle_name", mother_middle_name);
    formData.append("mother_last_name", mother_last_name);
    formData.append("mobile", mobile);
    formData.append("residental_status", residental_status);
    formData.append("pancard", pancard[0]);
    formData.append("id_card", id_card[0]);
    formData.append("dob", getDOB(dob));
    formData.append("gender", gender);
    formData.append("category", category);
    formData.append("qualification", qualification);
    formData.append("marital_status", marital_status);
    formData.append("spouseName", spouseName);
    formData.append("lineOnePresentAddress", lineOnePresentAddress);
    formData.append("lineTwoPresentAddress", lineTwoPresentAddress);
    formData.append("cityPresentAddress", cityPresentAddress);
    formData.append("pinPresentAddress", pinPresentAddress);
    formData.append("lineOnePermanentAddress", lineOnePermanentAddress);
    formData.append("lineTwoPermanentAddress", lineTwoPermanentAddress);
    formData.append("cityPermanentAddress", cityPermanentAddress);
    formData.append("pinPermanentAddress", pinPermanentAddress);
    formData.append("annual_income", annual_income);

    console.log(formData);

    const Upload = async () => {
      try {
        const res = await axios.post(
          `${API}/store-home-loan-application`,
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        console.log(res);
        setCoApplicantId(res.data.data.id);

        if (res.status === 200) {
          history.push("/");

          return toast.success("Home Loan Applied Sucessfully");
        }
      } catch (error) {
        if (error.response.status !== 200) {
          return toast.error("All Fields Are Mandatory");
        }
      }
    };

    Upload();
  };

  const onADDAPPLICANTFirstSubmit = async (data) => {
    addField();

    const {
      first_name,
      middle_name,
      last_name,
      father_first_name,
      father_middle_name,
      father_last_name,
      mother_first_name,
      mother_middle_name,
      mother_last_name,
      mobile,
      residental_status,
      pancard,
      id_card,
      dob,
      gender,
      category,
      qualification,
      marital_status,
      spouseName,
      lineOnePresentAddress,
      lineTwoPresentAddress,
      cityPresentAddress,
      pinPresentAddress,
      lineOnePermanentAddress,
      lineTwoPermanentAddress,
      cityPermanentAddress,
      pinPermanentAddress,
      annual_income,
    } = data;

    console.log(data);

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("middle_name", middle_name);
    formData.append("last_name", last_name);
    formData.append("father_first_name", father_first_name);
    formData.append("father_middle_name", father_middle_name);
    formData.append("father_last_name", father_last_name);
    formData.append("mother_first_name", mother_first_name);
    formData.append("mother_middle_name", mother_middle_name);
    formData.append("mother_last_name", mother_last_name);
    formData.append("mobile", mobile);
    formData.append("residental_status", residental_status);
    if (pancard) {
      formData.append("pancard", pancard[0]);
    }
    if (id_card) {
      formData.append("id_card", id_card[0]);
    }
    formData.append("dob", getDOB(dob));
    formData.append("gender", gender);
    formData.append("category", category);
    formData.append("qualification", qualification);
    formData.append("marital_status", marital_status);
    formData.append("spouseName", spouseName);
    formData.append("lineOnePresentAddress", lineOnePresentAddress);
    formData.append("lineTwoPresentAddress", lineTwoPresentAddress);
    formData.append("cityPresentAddress", cityPresentAddress);
    formData.append("pinPresentAddress", pinPresentAddress);
    formData.append("lineOnePermanentAddress", lineOnePermanentAddress);
    formData.append("lineTwoPermanentAddress", lineTwoPermanentAddress);
    formData.append("cityPermanentAddress", cityPermanentAddress);
    formData.append("pinPermanentAddress", pinPermanentAddress);
    formData.append("annual_income", annual_income);

    console.log(formData);

    try {
      const Upload = async () => {
        const res = await axios.post(
          `${API}/store-home-loan-application`,
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );

        if (res.status === 200) {
          console.log(res);
          setCoApplicantId(res.data.data.id);
        }
      };

      Upload();
    } catch (error) {
      if (error.response.status !== 200) {
      }
    }
  };

  const onCopaplicantSubmit = async (data) => {
    setResponse([]);
    setTotalRequest(0);
    if (data.FIELD) {
      const ARRAY = data?.FIELD;
      ARRAY.forEach((item, index) => {
        console.log(item);
        setTotalRequest(ARRAY?.length);
        const {
          first_name,
          middle_name,
          last_name,
          father_first_name,
          father_middle_name,
          father_last_name,
          mother_first_name,
          mother_middle_name,
          mother_last_name,
          mobile,
          residental_status,
          pancard,
          id_card,
          dob,
          gender,
          category,
          qualification,
          marital_status,
          spouseName,
          lineOnePresentAddress,
          lineTwoPresentAddress,
          cityPresentAddress,
          pinPresentAddress,
          lineOnePermanentAddress,
          lineTwoPermanentAddress,
          cityPermanentAddress,
          pinPermanentAddress,
          annual_income,
        } = item;

        const formData = new FormData();
        formData.append("first_name", first_name);
        formData.append("middle_name", middle_name);
        formData.append("last_name", last_name);
        formData.append("father_first_name", father_first_name);
        formData.append("father_middle_name", father_middle_name);
        formData.append("father_last_name", father_last_name);
        formData.append("mother_first_name", mother_first_name);
        formData.append("mother_middle_name", mother_middle_name);
        formData.append("mother_last_name", mother_last_name);
        formData.append("mobile", mobile);
        formData.append("residental_status", residental_status);
        formData.append("pancard", pancard[0]);
        formData.append("id_card", id_card[0]);
        formData.append("dob", getDOB(dob));
        formData.append("gender", gender);
        formData.append("category", category);
        formData.append("qualification", qualification);
        formData.append("marital_status", marital_status);
        formData.append("spouseName", spouseName);
        formData.append("lineOnePresentAddress", lineOnePresentAddress);
        formData.append("lineTwoPresentAddress", lineTwoPresentAddress);
        formData.append("cityPresentAddress", cityPresentAddress);
        formData.append("pinPresentAddress", pinPresentAddress);
        formData.append("lineOnePermanentAddress", lineOnePermanentAddress);
        formData.append("lineTwoPermanentAddress", lineTwoPermanentAddress);
        formData.append("cityPermanentAddress", cityPermanentAddress);
        formData.append("pinPermanentAddress", pinPermanentAddress);
        formData.append("annual_income", annual_income);
        formData.append("id", CoApplicantId);

        const UploadCoaplicant = async () => {
          try {
            const res = await axios.post(
              `${API}/store-home-loan-application`,
              formData,
              {
                headers: { Authorization: `Bearer ${user.token}` },
              }
            );

            console.log(res);
            if (res.status === 200) {
              setResponse((Prev) => [...Prev, true]);
            }
          } catch (error) {
            if (error.response.status !== 200) {
              setResponse((Prev) => [...Prev, false]);
            }
          }
        };
        UploadCoaplicant();
      });
    }
  };
  console.log(Response, TotalRequest);

  useEffect(() => {
    const CheckTrue = (value) => value === true;
    if (Response.length === TotalRequest) {
      console.log("ok");
      if (Response.length !== 0) {
        if (Response.every(CheckTrue)) {
          history.push("/");
          return toast.success("Home Loan Applied Sucessfully");
        } else {
          return toast.error("All Fields Are Mandatory");
        }
      }
    }
  }, [Response]);

  return (
    <Layout>
      <main className="customContainer min-h-70vh h-full flex justify-center items-start py-12">
        <div className="w-full h-full flex flex-col items-start">
          <p className="text-4xl font-medium text-darkgray border-b-2 pb-4 border-blue">
            Home Loan Application
          </p>

          <form onSubmit={handleSubmit(onFirstSubmit)} className="my-4 w-3/4">
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="border-1 h-11  px-4 text-lg w-72 my-2"
                {...register("first_name")}
              />
              <input
                type="text"
                placeholder="Middle Name"
                className="border-1 h-11  px-4 text-lg w-72 my-2"
                {...register("middle_name")}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-1 h-11  px-4 text-lg w-72 my-2"
                {...register("last_name")}
              />
            </div>
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="Father's First Name"
                className="border-1 h-11  px-4 text-lg w-72 my-1"
                {...register("father_first_name")}
              />
              <input
                type="text"
                placeholder="Father's Middle Name"
                className="border-1 h-11  px-4 text-lg w-72 my-1"
                {...register("father_middle_name")}
              />
              <input
                type="text"
                placeholder="Father's Last Name"
                className="border-1 h-11  px-4 text-lg w-72 my-1"
                {...register("father_last_name")}
              />
            </div>
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="Mother's First Name"
                className="border-1  h-11  px-4 text-lg w-72 my-2"
                {...register("mother_first_name")}
              />
              <input
                type="text"
                placeholder="Mother's Middle Name"
                className="border-1 h-11  px-4 text-lg w-72 my-2"
                {...register("mother_middle_name")}
              />
              <input
                type="text"
                placeholder="Mother's Last Name"
                className="border-1 h-11  px-4 text-lg w-72 my-2"
                {...register("mother_last_name")}
              />
            </div>

            <div className="flex w-full justify-between">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border-1  h-11  px-4 text-lg w-72 my-2"
                {...register("mobile")}
              />
              <input
                className="border-1  h-11  px-4 text-lg w-72 my-2 uppercase"
                type="date"
                {...register("dob")}
              />
              <div className="  h-11  px-4 text-lg w-72 my-2 uppercase" />
            </div>
            <p className="text-xl font-medium my-4">Gender -</p>
            <div className="flex w-full justify-between">
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Male"
              >
                <input
                  id="Male"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  {...register("gender")}
                  value="M"
                />
                Male
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="F"
              >
                <input
                  {...register("gender")}
                  id="F"
                  type="radio"
                  value="F"
                  className="w-6 h-6 mr-4"
                />
                Female
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Other"
              >
                <input
                  {...register("gender")}
                  id="O"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  value="O"
                />
                Other
              </label>
            </div>
            <p className="text-xl font-medium my-4">Category -</p>
            <div className="flex w-full flex-wrap justify-between">
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="General"
              >
                <input
                  id="General"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  placeholder="General"
                  value="general"
                  {...register("category")}
                />
                General
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="SC"
              >
                <input
                  value="SC"
                  {...register("category")}
                  id="SC"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                SC
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="ST"
              >
                <input
                  value="ST"
                  {...register("category")}
                  id="ST"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                ST
              </label>{" "}
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="OBC"
              >
                <input
                  value="OBC"
                  {...register("category")}
                  id="OBC"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                OBC
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Minority"
              >
                <input
                  id="Minority"
                  value="Minority"
                  {...register("category")}
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                Minority
              </label>
              <label className="  h-11  px-4 text-lg w-72 my-2 flex  items-center "></label>
            </div>
            <p className="text-xl font-medium my-4">Resident -</p>

            <div className="flex w-full justify-between">
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Resident of India"
              >
                <input
                  id="Resident of India"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  placeholder="Mobile Number"
                  value="res"
                  {...register("residental_status")}
                />
                Resident of India
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="NRI"
              >
                <input
                  value="NRI"
                  {...register("residental_status")}
                  id="NRI"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                NRI
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Foregin National
"
              >
                <input
                  id="Foregin National
"
                  value="foreign-national"
                  {...register("residental_status")}
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                Foregin National
              </label>
            </div>
            <p className="text-xl font-medium my-4">Qualification -</p>
            <div className="flex w-full flex-wrap justify-between">
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Matriculate"
              >
                <input
                  id="Matriculate"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  placeholder="Matriculate"
                  value="Matriculate"
                  {...register("qualification")}
                />
                Matriculate
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Undergraduate"
              >
                <input
                  id="Undergraduate"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  value="Undergraduate"
                  {...register("qualification")}
                />
                Undergraduate
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Graduate"
              >
                <input
                  value="Graduate"
                  {...register("qualification")}
                  id="Graduate"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                Graduate
              </label>{" "}
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Postgraduate"
              >
                <input
                  id="Postgraduate"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  value="Postgraduate"
                  {...register("qualification")}
                />
                Postgraduate
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Other"
              >
                <input
                  value="Other"
                  {...register("qualification")}
                  id="Other"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                Other
              </label>
              <label className="  h-11  px-4 text-lg w-72 my-2 flex  items-center "></label>
            </div>
            <p className="text-xl font-medium my-4">Marital Status -</p>
            <div className="flex w-full justify-between">
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Single"
              >
                <input
                  id="Single"
                  type="radio"
                  className="w-6 h-6 mr-4"
                  placeholder="Single"
                  value="Single"
                  {...register("marital_status")}
                />
                Single
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Married"
              >
                <input
                  value="Married"
                  {...register("marital_status")}
                  id="Married"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                Married
              </label>
              <label
                className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                htmlFor="Other"
              >
                <input
                  value="Other"
                  {...register("marital_status")}
                  id="Other"
                  type="radio"
                  className="w-6 h-6 mr-4"
                />
                Other
              </label>
            </div>
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="Spouse Name"
                className="border-1 h-11  px-4 text-lg w-72 my-2"
                {...register("spouseName")}
              />
            </div>

            <p className="text-xl font-medium my-4">Present Address -</p>

            <div className="flex flex-col items-start w-full">
              <input
                type="text"
                placeholder="Address Line One"
                className="border-1 h-11  px-4 text-lg w-full my-2"
                {...register("lineOnePresentAddress")}
              />
              <input
                type="text"
                placeholder="Address Line Two"
                className="border-1 h-11  px-4 text-lg w-full my-2"
                {...register("lineTwoPresentAddress")}
              />
              <input
                type="text"
                placeholder="City"
                className="border-1 h-11  px-4 text-lg w-full my-2"
                {...register("cityPresentAddress")}
              />
              <input
                type="number"
                placeholder="PIN Code"
                className="border-1 h-11  px-4 text-lg w-full my-2"
                {...register("pinPresentAddress")}
              />
            </div>

            <p className="text-xl font-medium my-4">Permanent Address -</p>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                value={isAdressHidden}
                onChange={() => setIsAdressHidden(!isAdressHidden)}
                className="h-5 w-5"
              />
              <p className="text-lg ml-4">
                Is Permanent Address Same As Your Present Address ?
              </p>
            </div>

            {!isAdressHidden && (
              <div className="flex flex-col items-start w-full">
                <input
                  type="text"
                  placeholder="Address Line One"
                  {...register("lineOnePermanentAddress")}
                  className="border-1 h-11  px-4 text-lg w-full my-2"
                />
                <input
                  type="text"
                  placeholder="Address Line Two"
                  className="border-1 h-11  px-4 text-lg w-full my-2"
                  {...register("lineTwoPermanentAddress")}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border-1 h-11  px-4 text-lg w-full my-2"
                  {...register("cityPermanentAddress")}
                />
                <input
                  type="number"
                  placeholder="PIN Code"
                  className="border-1 h-11  px-4 text-lg w-full my-2"
                  {...register("pinPermanentAddress")}
                />
              </div>
            )}

            <p className="text-xl font-medium my-4">Income -</p>

            <div className="flex flex-col items-start w-full">
              <input
                type="number"
                placeholder="Annual Income"
                className="border-1 h-11  px-4 text-lg w-full my-2"
                {...register("annual_income")}
              />
            </div>
            <div className="flex w-full justify-between">
              <label className="customfileUpload bg-blue font-medium w-72 my-2">
                Upload Pan Card
                <input type="file" onChange={HandlePanCardChange} />
              </label>
            </div>
            <div className="flex flex-col w-full  items-start">
              <label className="customfileUpload bg-blue font-medium w-72 my-2">
                Upload ID Proof
                <input type="file" onChange={HandleIdCardChange} />
              </label>
              <p>* Adhaar Card / Driver's License / Voter's ID / Passport</p>
            </div>

            <div className="w-full flex justify-end">
              {Fields.length === 0 && (
                <>
                  <div
                    onClick={handleSubmit(onADDAPPLICANTFirstSubmit)}
                    className="bg-blue text-white flex justify-center cursor-pointer items-center font-medium text-xl py-2 w-72 my-8"
                  >
                    ADD APPLICANT +
                  </div>
                </>
              )}
            </div>
            {Fields.length === 0 && (
              <button
                type="submit"
                className="bg-blue text-white font-medium text-xl py-2 w-72 my-12"
              >
                Sumbit Application
              </button>
            )}
          </form>

          <form onSubmit={handleSubmit(onCopaplicantSubmit)}>
            {Fields.map((index, i) => {
              const fieldName = `FIELD[${index}]`;
              const Sno = i + 1;
              return (
                <fieldset
                  name={fieldName}
                  key={fieldName}
                  id={fieldName}
                  className="my-4 w-3/4"
                >
                  <p className="text-2xl font-medium text-darkgray border-b-2 pb-4 border-blue">
                    Co-Applicant Details [ {Sno} ]
                  </p>
                  <div className="flex w-full justify-between">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.first_name`)}
                    />
                    <input
                      type="text"
                      placeholder="Middle Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.middle_name`)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.last_name`)}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <input
                      type="text"
                      placeholder="Father's First Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-1"
                      {...register(`${fieldName}.father_first_name`)}
                    />
                    <input
                      type="text"
                      placeholder="Father's Middle Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-1"
                      {...register(`${fieldName}.father_middle_name`)}
                    />
                    <input
                      type="text"
                      placeholder="Father's Last Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-1"
                      {...register("father_last_name")}
                      {...register(`${fieldName}.father_last_name`)}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <input
                      type="text"
                      placeholder="Mother's First Name"
                      className="border-1  h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.mother_first_name`)}
                    />
                    <input
                      type="text"
                      placeholder="Mother's Middle Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.mother_middle_name`)}
                    />
                    <input
                      type="text"
                      placeholder="Mother's Last Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.mother_last_name`)}
                    />
                  </div>

                  <div className="flex w-full justify-between">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="border-1  h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.mobile`)}
                    />
                    <input
                      className="border-1  h-11  px-4 text-lg w-72 my-2 uppercase"
                      type="date"
                      {...register(`${fieldName}.dob`)}
                    />
                    <div className="  h-11  px-4 text-lg w-72 my-2 uppercase" />
                  </div>
                  <p className="text-xl font-medium my-4">Gender -</p>
                  <div className="flex w-full justify-between">
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Male"
                    >
                      <input
                        id="Male"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        {...register(`${fieldName}.gender`)}
                        value="M"
                      />
                      Male
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="F"
                    >
                      <input
                        {...register(`${fieldName}.gender`)}
                        id="F"
                        type="radio"
                        value="F"
                        className="w-6 h-6 mr-4"
                      />
                      Female
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Other"
                    >
                      <input
                        {...register(`${fieldName}.gender`)}
                        id="O"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        value="O"
                      />
                      Other
                    </label>
                  </div>
                  <p className="text-xl font-medium my-4">Category -</p>
                  <div className="flex w-full flex-wrap justify-between">
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="General"
                    >
                      <input
                        id="General"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        placeholder="General"
                        value="general"
                        {...register(`${fieldName}.category`)}
                      />
                      General
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="SC"
                    >
                      <input
                        value="SC"
                        {...register(`${fieldName}.category`)}
                        id="SC"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      SC
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="ST"
                    >
                      <input
                        value="ST"
                        {...register(`${fieldName}.category`)}
                        id="ST"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      ST
                    </label>{" "}
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="OBC"
                    >
                      <input
                        value="OBC"
                        {...register(`${fieldName}.category`)}
                        id="OBC"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      OBC
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Minority"
                    >
                      <input
                        id="Minority"
                        value="Minority"
                        {...register(`${fieldName}.category`)}
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      Minority
                    </label>
                    <label className="  h-11  px-4 text-lg w-72 my-2 flex  items-center "></label>
                  </div>
                  <p className="text-xl font-medium my-4">Resident -</p>

                  <div className="flex w-full justify-between">
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Resident of India"
                    >
                      <input
                        id="Resident of India"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        placeholder="Mobile Number"
                        value="res"
                        {...register(`${fieldName}.residental_status`)}
                      />
                      Resident of India
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="NRI"
                    >
                      <input
                        value="NRI"
                        {...register(`${fieldName}.residental_status`)}
                        id="NRI"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      NRI
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Foregin National
"
                    >
                      <input
                        id="Foregin National
"
                        {...register(`${fieldName}.residental_status`)}
                        value="foreign-national"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      Foregin National
                    </label>
                  </div>
                  <p className="text-xl font-medium my-4">Qualification -</p>
                  <div className="flex w-full flex-wrap justify-between">
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Matriculate"
                    >
                      <input
                        id="Matriculate"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        placeholder="Matriculate"
                        value="Matriculate"
                        {...register(`${fieldName}.qualification`)}
                      />
                      Matriculate
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Undergraduate"
                    >
                      <input
                        id="Undergraduate"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        value="Undergraduate"
                        {...register(`${fieldName}.qualification`)}
                      />
                      Undergraduate
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Graduate"
                    >
                      <input
                        value="Graduate"
                        {...register(`${fieldName}.qualification`)}
                        id="Graduate"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      Graduate
                    </label>{" "}
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Postgraduate"
                    >
                      <input
                        id="Postgraduate"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        value="Postgraduate"
                        {...register(`${fieldName}.qualification`)}
                      />
                      Postgraduate
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Other"
                    >
                      <input
                        value="Other"
                        {...register(`${fieldName}.qualification`)}
                        id="Other"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      Other
                    </label>
                    <label className="  h-11  px-4 text-lg w-72 my-2 flex  items-center "></label>
                  </div>
                  <p className="text-xl font-medium my-4">Marital Status -</p>
                  <div className="flex w-full justify-between">
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Single"
                    >
                      <input
                        id="Single"
                        type="radio"
                        className="w-6 h-6 mr-4"
                        placeholder="Single"
                        value="Single"
                        {...register(`${fieldName}.marital_status`)}
                      />
                      Single
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Married"
                    >
                      <input
                        value="Married"
                        {...register(`${fieldName}.marital_status`)}
                        id="Married"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      Married
                    </label>
                    <label
                      className="border-1  h-11  px-4 text-lg w-72 my-2 flex  items-center cursor-pointer"
                      htmlFor="Other"
                    >
                      <input
                        value="Other"
                        {...register(`${fieldName}.marital_status`)}
                        id="Other"
                        type="radio"
                        className="w-6 h-6 mr-4"
                      />
                      Other
                    </label>
                  </div>
                  <div className="flex w-full justify-between">
                    <input
                      type="text"
                      placeholder="Spouse Name"
                      className="border-1 h-11  px-4 text-lg w-72 my-2"
                      {...register(`${fieldName}.spouseName`)}
                    />
                  </div>

                  <p className="text-xl font-medium my-4">Present Address -</p>

                  <div className="flex flex-col items-start w-full">
                    <input
                      type="text"
                      placeholder="Address Line One"
                      className="border-1 h-11  px-4 text-lg w-full my-2"
                      {...register(`${fieldName}.lineOnePresentAddress`)}
                    />
                    <input
                      type="text"
                      placeholder="Address Line Two"
                      className="border-1 h-11  px-4 text-lg w-full my-2"
                      {...register(`${fieldName}.lineTwoPresentAddress`)}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="border-1 h-11  px-4 text-lg w-full my-2"
                      {...register(`${fieldName}.cityPresentAddress`)}
                    />
                    <input
                      type="number"
                      placeholder="PIN Code"
                      className="border-1 h-11  px-4 text-lg w-full my-2"
                      {...register(`${fieldName}.pinPresentAddress`)}
                    />
                  </div>

                  <p className="text-xl font-medium my-4">
                    Permanent Address -
                  </p>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      defaultChecked={false}
                      onChange={() => HandleAddressHiddenChange(Sno)}
                      className="h-5 w-5"
                    />
                    <p className="text-lg ml-4">
                      Is Permanent Address Same As Your Present Address ?
                    </p>
                  </div>
                  {!isApplicantAdressHidden.includes(Sno) && (
                    <div className="flex flex-col items-start w-full">
                      <input
                        type="text"
                        placeholder="Address Line One"
                        {...register(`${fieldName}.lineOnePermanentAddress`)}
                        className="border-1 h-11  px-4 text-lg w-full my-2"
                      />
                      <input
                        type="text"
                        placeholder="Address Line Two"
                        className="border-1 h-11  px-4 text-lg w-full my-2"
                        {...register(`${fieldName}.lineTwoPermanentAddress`)}
                      />
                      <input
                        type="text"
                        placeholder="City"
                        className="border-1 h-11  px-4 text-lg w-full my-2"
                        {...register(`${fieldName}.cityPermanentAddress`)}
                      />
                      <input
                        type="number"
                        placeholder="PIN Code"
                        className="border-1 h-11  px-4 text-lg w-full my-2"
                        {...register(`${fieldName}.pinPermanentAddress`)}
                      />
                    </div>
                  )}

                  <p className="text-xl font-medium my-4">Income -</p>

                  <div className="flex flex-col items-start w-full">
                    <input
                      type="number"
                      placeholder="Annual Income"
                      className="border-1 h-11  px-4 text-lg w-full my-2"
                      {...register(`${fieldName}.annual_income`)}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <label className="customfileUpload bg-blue font-medium w-72 my-2">
                      Upload Pan Card
                      <input
                        type="file"
                        {...register(`${fieldName}.pancard`)}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col w-full  items-start">
                    <label className="customfileUpload bg-blue font-medium w-72 my-2">
                      Upload ID Proof
                      <input
                        type="file"
                        {...register(`${fieldName}.id_card`)}
                      />
                    </label>
                    <p>
                      * Adhaar Card / Driver's License / Voter's ID / Passport
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-end ">
                    <div
                      onClick={removeField(i)}
                      className="bg-red cursor-pointer text-white flex justify-center items-center font-medium text-xl py-2 w-72 my-4"
                    >
                      Remove Field
                    </div>
                    <div
                      onClick={addField}
                      className="bg-blue cursor-pointer text-white flex justify-center items-center font-medium text-xl py-2 w-72 my-4"
                    >
                      ADD APPLICANT +
                    </div>
                  </div>
                </fieldset>
              );
            })}
            {Fields.length !== 0 && (
              <button
                type="submit"
                className="bg-blue text-white font-medium text-xl py-2 w-72 my-12"
              >
                Sumbit Application
              </button>
            )}
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default ApplyHomeLoan;
