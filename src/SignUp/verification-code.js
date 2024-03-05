import React, { useState } from "react";
import "./sign-up";
import logo from "./../assets/svg/logo.svg";
import { Link, useHistory } from "react-router-dom";
import backIcon from "../assets/svg/arrow-back.svg";
import { Field, Formik } from "formik";
import InputBox from "../common/input-box";
import { validateOTP } from "../common/validation";
import { Spinner } from "react-activity";

export default function VerificationCode() {
  const nav = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false); //By default it should set to false then on button click it should set true and  once you get response from api then it should set false.

  const initData = {
    otp: "",
  };

  const otpFields = [
    {
      key: 1,
      name: "Enter OTP",
      backendMappingName: "otp", //For api field(put the name of api parameters ro bind api data)
      placeholder: "Enter OTP",
      type: "text",
      validation: "Please enter OTP",
      editable: "No",
      default: "",
      mandatory: "Yes",
      source: "",
    },
  ];

  return (
    <div className="grid-cols-12 font-sans md:grid">
      {/* Login Form */}
      <div className="xl:grid lg:grid md:grid sm:grid xl:col-span-5 lg:col-span-6 md:col-span-6 sm:col-span-12 xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8">
        <div className="self-center md:col-start-2 md:col-span-12 md:row-span-4 md:grid-cols-12">
          <img className="md:text-left" src={logo} alt="logo"></img>
          <div
            className="pt-16 md:font-bold xs:text-3xl sm:text-4xl md:text-4xl xs:my-3 sm:my-3 md:my-3"
            style={{ color: "#2F2D51" }}
          >
            Verification Code
          </div>
          <div
            className="pt-2 md:text-left md:font-normal md:text-xl my-3 w-4/5"
            style={{ color: "#2F2D51" }}
          >
            Please type the verification code sent to your email or mobile
            number +91 7899878778
          </div>
          <Formik
            initialValues={initData}
            onSubmit={(values) => {
              console.log("values", values);
            }}
          >
            {({ handleSubmit, values, setFieldValue }) => (
              <form
                className="pb-8 mb-4 bg-white md:col-span-12 md:grid-cols-12"
                onSubmit={handleSubmit}
              >
                {otpFields.map((item, index) => {
                  return (
                    <>
                      {item.type === "text" && (
                        <div className="w-9/12 md:my-6" key={item.key}>
                          <Field
                            name={item.backendMappingName}
                            label={item.name}
                            component={InputBox}
                            type={item.type}
                            value={values[item.backendMappingName] || ""}
                            validate={
                              item.mandatory &&
                              validateOTP.bind(this, item.validation)
                            }
                            placeholder={item.placeholder}
                          />
                        </div>
                      )}
                    </>
                  );
                })}
                <div className="flex-row items-center pt-8">
                  {isSubmitting ? (
                    <button
                      className="flex items-center justify-center w-4/12 xs:p-4 md:text-xl md:font-semibold md:w-40 md:h-16 md:rounded focus:outline-none focus:shadow-outline "
                      type="button"
                      onClick={() => {
                        nav.push("/orgdetails");
                        // handleSubmit();
                      }}
                      style={{ backgroundColor: "#F7D373" }}
                    >
                      <Spinner color="#525353" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        nav.push("/orgdetails");
                        // handleSubmit();
                      }}
                      className="py-4 px-10 text-base md:text-xl md:font-semibold rounded focus:outline-none focus:shadow-outline "
                      type="button"
                      style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                    >
                      Submit
                    </button>
                  )}
                </div>

                <div className="flex flex-row self-end gap-3 pt-5 my-6 md:col-start-2 md:col-span-12">
                  <img src={backIcon} alt=""></img>
                  <Link className="text-xl font-semibold" to="/signup">
                    Change Details
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
            Aviod the paying double the TDS Amount by paying TDS on time.
          </div>
          <div className="w-12 my-5 bg-white xs:h-2 sm:h-2 md:h-2 md:w-20"></div>
          <div className="my-6 font-sans text-white md:text-lg md:text-left">
            By simply login into our TDS product. We ensure you not to make
            double TDS amounts by bringing all the ITR transactions over here
            and you can acknowledge clients by digitally signing and sharing it
            to clients.
          </div>
        </div>
      </div>
    </div>
  );
}
