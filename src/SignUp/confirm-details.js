import React, { useState } from "react";
import "./sign-up";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import skipBtn from "./../assets/images/skip-btn.png";
import InputBox from "../common/input-box";
import { Field, Formik } from "formik";
import { requiredField, validatePanCard } from "../common/validation";
import { Spinner } from "react-activity";

export default function ConfirmDetails() {
  const initData = {
    pan: "",
    organisation: "",
  };
  const [isSubmitting, setIsSubmitting] = useState(false); //By default it should set to false then on button click it should set true and  once you get response from api then it should set false.

  const confirmFields = [
    {
      key: 1,
      name: "Company PAN",
      backendMappingName: "pan", //For api field(put the name of api parameters ro bind api data)
      placeholder: "Enter Your PAN Number",
      type: "text",
      validation: "Please enter valid PAN Number",
      editable: "No",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 2,
      name: "Organization Name",
      backendMappingName: "orga",
      placeholder: "Enter your Organization Name",
      type: "text",
      validation: "Please enter organization name",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
  ];

  return (
    <div className="grid-cols-12 font-sans md:grid">
      {/* Login Form */}
      <div className="xl:grid lg:grid md:grid sm:grid xl:col-span-5 lg:col-span-6 md:col-span-6 sm:col-span-12 xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8 xl:mt-4">
        <div className="self-end md:col-start-2 md:col-span-12 md:grid-cols-12">
          <img className="md:text-left md:my-6 " alt="logo" src={logo}></img>
          <div
          className="pt-3 font-bold text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            style={{ color: "#2F2D51" }}
          >
            Please Confirm your organisation details.
          </div>
          <Formik
            initialValues={initData}
            onSubmit={(values) => {
              console.log("values", values);
            }}
          >
            {({ handleSubmit, values, setFieldValue }) => (
              <form
                className="pt-4 mb-4 bg-white md:col-span-12 md:grid-cols-12"
                onSubmit={handleSubmit}
              >
                {confirmFields.map((item, index) => {
                  return (
                    <>
                      {item.type === "text" && (
                        <div className="w-9/12 my-4 md:my-6" key={item.key}>
                          {item.name === "GSTIN" && (
                            <label
                              className="block text-xl font-semibold text-gray-700 my-7"
                              htmlFor="or"
                            >
                              Or
                            </label>
                          )}
                          <Field
                            name={item.backendMappingName}
                            label={item.name}
                            component={InputBox}
                            type={item.type}
                            value={values[item.backendMappingName] || ""}
                            validate={
                              item.name === "Company PAN"
                                ? validatePanCard.bind(this, item.validation)
                                : requiredField.bind(this, item.validation)
                            }
                            placeholder={item.placeholder}
                          />
                        </div>
                      )}
                    </>
                  );
                })}

                <div className="my-6">
                  <label
                    className="block mb-2 text-xl font-semibold text-gray-700"
                    htmlFor="gstin"
                  >
                    Assosiated GSTIN
                  </label>
                  <p className="mr-4 text-base font-medium text-black-400">
                    Select for which all GSTINs you want to enable Finkraft to
                    manage all your ITC Claims.
                  </p>
                  <div className="flex items-center grid-cols-1 gap-4 m-5 ml-2 xs:grid grid-flow-cols">
                    <div className="flex flex-row items-center xs:gap-3 checkbox">
                      <input
                        type="checkbox"
                        className="mr-6 appearance-none "
                      />
                      <p className="mr-4 text-lg font-medium text-black-400">
                        1
                      </p>
                      <input
                        className="col-span-4 px-3 mr-3 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none md:w-2/5 md:py-4 focus:outline-none focus:shadow-outline xs:mr-0"
                        id="input1"
                        type="text"
                        placeholder="6AZ7fdf62438684324"
                      />
                      <input
                        className="col-span-4 px-3 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none md:py-4 focus:outline-none focus:shadow-outline md:w-3/5"
                        id="input2"
                        type="text"
                        placeholder="Karnataka"
                      />
                    </div>
                    <div className="flex flex-row items-center xs:gap-3 checkbox">
                      <input
                        type="checkbox"
                        className="mr-6 appearance-none checked:bg-green-600 checked:border-transparent "
                      />
                      <p className="mr-4 text-lg font-medium text-black-400">
                        2
                      </p>
                      <input
                        className="col-span-4 px-3 mr-3 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none md:w-2/5 md:py-4 focus:outline-none focus:shadow-outline xs:mr-0"
                        id="input1"
                        type="text"
                        placeholder="6AZ7fdf62438684324"
                      />
                      <input
                        className="col-span-4 px-3 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none md:py-4 md:w-3/5 focus:outline-none focus:shadow-outline"
                        id="input2"
                        type="text"
                        placeholder="Telanagana"
                      />
                    </div>

                    <div className="flex flex-row items-center xs:gap-3 checkbox">
                      <input
                        type="checkbox"
                        className="mr-6 appearance-none checked:bg-green-600 checked:border-transparent "
                      />
                      <p className="mr-4 text-lg font-medium text-black-400">
                        3
                      </p>
                      <input
                        className="col-span-4 px-3 mr-3 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none md:w-2/5 md:py-4 focus:outline-none focus:shadow-outline xs:mr-0"
                        id="input1"
                        type="text"
                        placeholder="6AZ7fdf62438684324"
                      />
                      <input
                        className="col-span-4 px-3 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none md:py-4 md:w-3/5 focus:outline-none focus:shadow-outline"
                        id="input2"
                        type="text"
                        placeholder="Telanagana"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row self-end justify-end pt-2 pb-2 ml-2 mr-7 md:col-start-2 md:col-span-12">
                  <Link
                    to="/confirmDetails"
                    className="flex flex-row items-center self-center"
                  >
                    <p className="mr-8 text-lg font-medium text-gray-400 underline">
                      Skip now
                    </p>
                  </Link>
                  <button type="submit" onClick={handleSubmit}>
                    <img
                      className="self-center"
                      width="60"
                      height="20"
                      src={skipBtn}
                      alt="skip button"
                    />
                  </button>
                </div>
              </form>
            )}
          </Formik>



          
        </div>
        <div className="gap-3 taxt-base md:text-lg text-gray-300 md:self-end m-2 md:col-span-12 md:flex">
          <div className="self-start">
            &copy; {"   "}2021 Finkart. All right reserved.
          </div>
        </div>
       
      </div>
      {/* Intro slide */}
      <div className="h-full md:h-screen xl:grid lg:grid md:grid sm:grid xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8 xl:col-span-7 lg:col-span-6 md:col-span-6 sm:col-span-12 md:pt-16 theme-color-1">
      <div className="login-bg-pettern"></div>
        <div className="md:py-5 xl:px-32 lg:px-0 md:px-0">
        <div className="font-sans text-white sm:leading-10 text-2xl md:text-2xl lg:text-3xl xl:text-3xl md:text-left font md:font-semibold md:my-5">
            Finkraft GST Software - simplify your GST reconciliation and know
            about your ITC
          </div>
          <div className="w-12 my-5 bg-white xs:h-2 sm:h-2 md:h-2 md:w-20"></div>
          <div className="font-sans text-white md:text-xl md:text-left md:my-5">
            Finkart GST makes reconciliation simple by automatically matching
            your purchase transactions with your GSTR 2A and validate the vendor
            e-invoices. All you have to do is to view the reconciliation data
            and download the Credit Reports.
          </div>
        </div>
      </div>
    </div>
  );
}
