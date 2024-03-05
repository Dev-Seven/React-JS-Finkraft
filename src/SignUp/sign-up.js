import React, { useState } from "react";
import "./sign-up";
import logo from "../assets/svg/logo.svg";
import { Link, useHistory } from "react-router-dom";
import InputBox from "../common/input-box";
import { Field, Formik } from "formik";
import {
  validateEmail,
  validatePhone,
  requiredField,
} from "../common/validation";
import { Spinner } from "react-activity";

export default function SignUp() {
  const nav = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false); //By default it should set to false then on button click it should set true and  once you get response from api then it should set false.

  const initData = {
    name: "",
    email: "",
    phone: "",
  };

  const signUpFields = [
    {
      key: 1,
      name: "Name",
      backendMappingName: "name", //For api field(put the name of api parameters ro bind api data)
      placeholder: "Enter your name",
      type: "text",
      validation: "Please enter name",
      editable: "No",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 2,
      name: "Email Address",
      backendMappingName: "email",
      placeholder: "Enter Work Email Address",
      type: "text",
      validation: "Please enter email address",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 3,
      name: "Phone",
      backendMappingName: "phone",
      placeholder: "Enter your phone no",
      type: "text",
      validation: "Please enter phone number",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
  ];
  return (
    <div className="grid-cols-12 font-sans md:grid">
      {/* Login Form */}
      <div className="xl:grid lg:grid md:grid sm:grid xl:col-span-5 lg:col-span-6 md:col-span-6 sm:col-span-12 xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8">
        <div className="self-end md:col-start-2 md:col-span-12 md:grid-cols-12">
        <img className="md:text-left mb-3 mb-10 md:mb-12 lg:mb-14"
            src={logo}
            alt="logo"
          ></img>
          <div
            className="font-bold text-3xl sm:text-4xl md:text-4xl mb-4"
            style={{ color: "#2F2D51" }}
          >
            Sign Up
          </div>
          <div
             className="md:text-left md:font-normal md:text-xl lg:text-2xl"
            style={{ color: "#2F2D51" }}
          >
            Enter your information to register with Finkraft Application.
          </div>
          <Formik
            initialValues={initData}
            onSubmit={(values) => {
              console.log("values", values);
            }}
          >
            {({ handleSubmit, values, setFieldValue }) => (
              <form
                className="pt-6 pb-8 mb-4 bg-white md:col-span-12 md:grid-cols-12"
                onSubmit={handleSubmit}
              >
                {signUpFields.map((item, index) => {
                  return (
                    <>
                      {item.type === "text" && (
                        <div className="w-9/12 my-6" key={item.key}>
                          <Field
                            name={item.backendMappingName}
                            label={item.name}
                            component={InputBox}
                            type={item.type}
                            value={values[item.backendMappingName] || ""}
                            validate={
                              item.name === "Name"
                                ? requiredField.bind(this, item.validation)
                                : item.name === "Email Address"
                                ? validateEmail.bind(this, item.validation)
                                : validatePhone.bind(this, item.validation)
                            }
                            placeholder={item.placeholder}
                          />
                        </div>
                      )}
                    </>
                  );
                })}

                <div className="flex flex-row items-center pt-8 pb-5">
                  {isSubmitting ? (
                    <button
                      className="flex items-center justify-center mr-4 rounded-lg xs:p-4 2xl:w-36 xs:w-36 md:w-36 lg:w-36 md:text-xl md:font-semibold md:h-16 xs:py-4 sm:py-4 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        nav.push("/verification");
                        handleSubmit();
                      }}
                      style={{ backgroundColor: "#F7D373" }}
                    >
                      <Spinner color="#525353" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        nav.push("/verification");
                        handleSubmit();
                      }}
                      className="mr-4 rounded-lg py-3 px-10 md:text-xl md:font-semibold focus:outline-none focus:shadow-outline"
                      type="button"
                      style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                    >
                      Proceed
                    </button>
                  )}
                  <button
                    className="rounded-lg py-3 px-10 md:text-xl md:font-semibold focus:outline-none focus:shadow-outline "
                    type="button"
                    style={{
                      backgroundColor: "#EFFFF9",
                      color: "#2F2D51",
                      borderColor: "#EFEFEF",
                      borderWidth: 1,
                    }}
                  >
                    Reset
                  </button>
                </div>

                <div className="self-end my-6 md:col-start-2 md:col-span-12">
                <Link className="font-medium taxt-base md:text-lg lg:text-2xl" to="/login">
                    Already registered with Finkraft? <b>Sign In now</b>
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="gap-3 taxt-base md:text-lg text-gray-300 md:self-end md:m-4 md:col-span-12 md:flex">
          <div className="self-start">
            &copy; {"   "}2021 Finkart. All right reserved.
          </div>
        </div>
      </div>

      {/* Intro slide */}
      <div className="h-screen xl:grid lg:grid md:grid sm:grid xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8 xl:col-span-7 lg:col-span-6 md:col-span-6 sm:col-span-12 md:pt-16 theme-color">
      <div className="login-bg-pettern"></div>
        <div className="md:py-5 xl:px-32 lg:px-0 md:px-0">
        <div className="font-sans text-white sm:leading-10 text-2xl md:text-2xl lg:text-3xl xl:text-3xl md:text-left font md:font-semibold md:my-5">
            Finkraft GST Software - simplify your GST reconciliation and know
            about your ITC
          </div>
          <div className="w-12 my-5 bg-white xs:h-2 sm:h-2 md:h-2 md:w-20"></div>
          <div className="my-6 font-sans text-white md:text-lg md:text-left">
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
