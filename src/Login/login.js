import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { Field, Formik } from "formik";
import InputBox from "../common/input-box";
import { validateEmail } from "../common/validation";
import { Spinner } from "react-activity";


export default function Login() {
  const nav = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false); //By default it should set to false then on button click it should set true and  once you get response from api then it should set false.

  const initData = {
    email: "",
  };

  const loginFields = [
    {
      key: 1,
      name: "Login ID",
      backendMappingName: "email",
      placeholder: "Enter Email Address or Mobile Number",
      type: "text",
      validation: "Please enter Email Address",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
  ];

  return (
    <div className="grid-cols-12 font-sans md:grid">
      {/* login Form */}
      <div className="xl:grid lg:grid md:grid sm:grid xl:col-span-5 lg:col-span-6 md:col-span-6 sm:col-span-12 xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8 xl:mt-4">
        <div className="self-end md:col-start-2 md:col-span-12 md:grid-cols-12">
          <img className="md:text-left mb-3 sm:mb-10 md:mb-12 lg:mb-14" src={logo} alt=""></img>
          <div
            className="md:font-bold text-3xl sm:text-4xl md:text-4xl mb-5"
            style={{ color: "#2F2D51" }}
          >
            Welcome to Finkraft!
          </div>
          <div
            className="md:text-left md:font-normal md:text-xl lg:text-2xl md:my-3"
            style={{ color: "#2F2D51" }}
          >
            Please sign in to your Finkart account.
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
                {loginFields.map((item, index) => {
                  return (
                    <>
                      {item.type === "text" && (
                        <div className="w-full pb-12 sm:w-9/12 md:my-1" key={item.key}>
                          <Field
                            name={item.backendMappingName}
                            label={item.name}
                            component={InputBox}
                            type={item.type}
                            value={values[item.backendMappingName] || ""}
                            validate={
                              item.mandatory &&
                              validateEmail.bind(this, item.validation)
                            }
                            placeholder={item.placeholder}
                          />
                        </div>
                      )}
                    </>
                  );
                })}

                <span className="content-center gap-3 mb-6 md:flex">
                  <input
                    type="checkbox"
                    className="inline-flex mr-1 text-pink-500 rounded form-checkbox"
                  />
                  <label
                    className="inline-flex gap-1 mb-2 text-sm font-bold text-gray-700 "
                    htmlFor="terms"
                  >
                    I Agree to the <u>Terms and Conditions</u>
                  </label>
                </span>
                <div className="flex items-center justify-between pt-5 pb-5 md:pt-0 md:pb-0">
                  {isSubmitting ? (
                    <button
                      className="flex items-center justify-center p-4 text-xl font-semibold rounded-lg 2xl:w-40 xs:w-40 md:w-40 lg:w-40 2xl:h-16 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        nav.push("/");
                        handleSubmit();
                      }}
                      style={{ backgroundColor: "#F7D373" }}
                    >
                      <Spinner color="#525353" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        nav.push("/");
                        handleSubmit();
                      }}
                      className="py-4 px-10 rounded-lg sm:text-xl sm:font-semibold focus:outline-none focus:shadow-outline"
                      type="button"
                      style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                    >
                      Proceed
                    </button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="self-end mb-6 md:col-start-2 md:col-span-12">
          <Link className="font-medium taxt-base md:text-lg lg:text-2xl" to="/signup">
            Don’t have an user account? <u>Register Now</u>
          </Link>
        </div>
        <div className="gap-3 taxt-base md:text-lg text-gray-300 md:self-end md:m-4 md:col-span-12 md:flex">
          <div className="self-start">
            &copy; {"   "}2021 Finkart. All right reserved.
          </div>
        </div>
      </div>

      {/* Intro slide */}
      <div className="h-full md:h-screen xl:grid lg:grid md:grid sm:grid xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8 xl:col-span-7 lg:col-span-6 md:col-span-6 sm:col-span-12 md:pt-16 theme-color-1">
        <div className="login-bg-pettern"></div>
        <div className="xl:pl-20 md:py-5 m-800">
          <div className="font-sans text-white sm:leading-10 text-2xl md:text-2xl lg:text-3xl xl:text-3xl md:text-left font md:font-semibold md:my-5">
            Finkraft automates complex GST processes to help corporations save
            money.
          </div>
          <div className="w-12 my-5 bg-white xs:h-2 sm:h-2 md:h-2 md:w-20"></div>
          <div className="my-6 font-sans text-white md:text-lg md:text-left">
            Finkart GST makes reconciliation simple by automatically matching
            your purchase transactions with your GSTR 2A and validate the vendor
            e-invoices. All you have to do is to view the reconciliation data
            and download the Credit Reports.
          </div>
          <div>
         


          </div>
        </div>
      </div>
    </div>
  );
}
