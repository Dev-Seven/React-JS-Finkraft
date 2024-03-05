import React from "react";
import "./sign-up";
import logo from "./../assets/svg/logo.svg";
import { Link, useHistory } from "react-router-dom";
import skipBtn from "./../assets/images/skip-btn.png";
import InputBox from "../common/input-box";
import { Field, Formik } from "formik";
import { validateGstNumber, validatePanCard } from "../common/validation";
import { Spinner } from "react-activity";

export default function OrganizationDetails() {
  const nav = useHistory();

  const initData = {
    pan: "",
    gstin: "",
  };

  const organisationFields = [
    {
      key: 1,
      name: "Company PAN",
      backendMappingName: "pan", //For api field(put the name of api parameters ro bind api data)
      placeholder: "Company PAN",
      type: "text",
      validation: "Please enter PAN card number.",
      editable: "No",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 2,
      name: "GSTIN",
      backendMappingName: "gstin",
      placeholder: "Enter your GSTIN",
      type: "text",
      validation: "Please enter GSTIN Number.",
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
        <div className="self-center md:col-start-2 md:col-span-12 md:grid-cols-12">
          <img className="md:text-left md:my-6 " alt="logo" src={logo}></img>
          <div
            className="pt-10 font-bold text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            style={{ color: "#2F2D51" }}
          >
            Provide your organisation <br /> details.
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
                {organisationFields.map((item, index) => {
                  return (
                    <>
                      {item.type === "text" && (
                        <div className="w-9/12 md:my-6" key={item.key}>
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
                                : validateGstNumber.bind(this, item.validation)
                            }
                            placeholder={item.placeholder}
                          />
                        </div>
                      )}
                    </>
                  );
                })}

                <div className="flex flex-row self-end justify-end pt-16 m-8 md:col-start-2 md:col-span-12">
                  <Link
                    to="/confirmDetails"
                    className="flex flex-row items-center self-center"
                  >
                    <p className="mr-8 text-lg font-medium text-gray-400 underline">
                      Skip now
                    </p>
                  </Link>
                  <button
                    type="submit"
                    onClick={() => {
                      nav.push("/confirmDetails");
                      handleSubmit();
                    }}
                  >
                    <img
                      className="self-center"
                      width="60"
                      height="20"
                      src={skipBtn}
                      alt=""
                    />
                  </button>
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
      <div className="h-screen xl:grid lg:grid md:grid sm:grid xl:p-20 lg:p-10 md:p-8 sm:p-10 xs:p-8 xl:col-span-7 lg:col-span-6 md:col-span-6 sm:col-span-12 md:pt-16 theme-color-1">
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
