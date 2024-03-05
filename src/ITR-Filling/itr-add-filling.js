import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Routing/navbar";
import { Link, useHistory } from "react-router-dom";
import { Field, Formik, FieldArray, Form } from "formik";
import InputBox from "../common/input-box";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import background from "../assets/svg/itr-filling-bg.svg";
import moment from "moment";
import { Spinner } from "react-activity";
import itrFilingData from "./itrdata.json";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialFilingObject = {
  _id: {
    $oid: "",
  },
  assesmentYear: "",
  acknowledgementNo: "",
  filingDate: "",
  organizationId: "",
  itrStatus: false,
  creationDate: {
    $date: "",
  },
};

const initialState = {
  filingList: [],
  filingObject: initialFilingObject,
};

const validateSchema = Yup.object().shape({
  filingList: Yup.array().of(
    Yup.object().shape({
      acknowledgementNo: Yup.string().required(
        "Please Enter Acknowledgement No."
      ),
      filingDate: Yup.string().required("Please Enter Date of Filing."),
    })
  ),
});

export default function ITRAddFilling() {
  const formikRef = useRef(); //This is used to get formik values outside its scope.
  const [itrData, setItrData] = useState(initialState);
  const [addMode, setAddMode] = useState(true);
  const [mode, setMode] = useState("");
  const [date, setDate] = useState(new Date());
  const nav = useHistory();
  let isApiDataAvailable = false; ///Remove after you put api function.
  let currentDate = new Date();
  let year =
    currentDate.getMonth() < 3
      ? currentDate.getFullYear() - 1
      : currentDate.getFullYear();

  const [isSubmitting, setIsSubmitting] = useState(false); //By default it should set to false then on button click it should set true and  once you get response from api then it should set false.

  function handleAdd() {
    setAddMode(false);
    let newData = initialFilingObject;
    //To make all objects on its initial
    newData.assesmentYear = year - 1 + "-" + year;
    newData.acknowledgementNo = "";
    newData.filingDate = new Date();
    return newData;
  }

  async function submitItrFiling() {
    debugger;
    //call your save api over here and you will get the object in values.
    if (formikRef.current) {
      //put api call
    }
  }

  useEffect(() => {
    if (isApiDataAvailable) {
      //it is for reference, once you receive the response from api you need to pass that response object.currently I used dummy Json i.e itrData.json file.
      setItrData({ filingList: itrFilingData });
    } else {
      let initFilingData = [];
      Array(2)
        .fill()
        .forEach((value, i) => {
          let newArray = { ...initialFilingObject };
          if (i === 0) {
            newArray.assesmentYear = year - 3 + "-" + (year - 2);
          } else {
            newArray.assesmentYear = year - 2 + "-" + (year - 1);
          }
          initFilingData.push(newArray);
        });
      setItrData({ filingList: initFilingData });
    }
  }, []);

  return (
    <div className="flex-1">
      <Navbar />
      <div className="grid-rows-6 p-8 container-shadow lg:grid lg:mx-9">
        <div className="absolute rounded-full xs:right-8 lg:right-20 md:mr-8 ring-2 ring-current">
          <XIcon
            className="z-0 block w-5 h-5"
            onClick={() => {
              nav.push("/itrList");
            }}
          />
        </div>
        <div className="text-center">
          <div
            className="w-full p-3 rounded-full xs:my-12 lg:mx-auto"
            style={{
              backgroundColor: "#EFEFEF",
              maxWidth: 644,
            }}
          >
            <div className="flex items-center justify-center w-full gap-4 font-sans">
              <div
                className="font-sans text-sm font-semibold xs:text-center sm:text-base md:text-base lg:text-lg 2xl:text-lg"
                style={{ color: "#2A254F " }}
              >
                ITR Filing
              </div>
              <div className="divide-x w-2/12 bg-gray-300 h-0.5"></div>
              <div className="font-sans text-sm font-semibold text-gray-300 xs:text-center sm:text-base md:text-base lg:text-lg 2xl:text-lg">
                Add clients
              </div>
              <div className="divide-x w-2/12 bg-gray-300 h-0.5"></div>
              <div className="font-sans text-sm font-semibold text-gray-300 xs:text-center sm:text-base md:text-base lg:text-lg 2xl:text-lg">
                Confirm
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-12 row-span-5 gap-2 lg:grid">
          <div className="col-span-5 lg:px-12 lg:text-center">
            <div className="font-sans text-xl font-semibold lg:mx-auto lg:text-2xl xl:text-3xl">
              <img className="lg:mx-auto" src={background} />
              <div className="my-10" style={{ color: "#3C4853" }}>
                Update your ITR Filing information
              </div>
            </div>
            <div
              className="font-sans xs:text-base overflow-ellipsis lg:text-lg"
              style={{ color: "#525353" }}
            >
              By simply login into our TDS product. We ensure you not to make
              double TDS amounts by bringing all the ITR transactions over here
              and you can acknowledge clients by digitally signing and sharing
              it to clients.
            </div>
          </div>
          <div className="col-span-7 lg:grid">
            <div className="row-span-3">
              <div
                className="flex mt-4 mb-8 font-sans text-xl font-normal"
                style={{ color: "#2F2D51" }}
              >
                Enter your Filing Information
              </div>

              <Formik
                enableReinitialize
                initialValues={{ filingList: itrData.filingList }}
                validationSchema={validateSchema}
                onSubmit={(values) => submitItrFiling(values)}
                innerRef={formikRef}
                render={(props) => {
                  return (
                    <>
                      <Form>
                        <FieldArray
                          name="filingList"
                          render={(arrayHelpers) => (
                            <>
                              {props.values.filingList.map((item, index) => (
                                <div className="grid-cols-3 lg:grid">
                                  <div className="my-4 mr-2">
                                    <Field
                                      id="assesmentYear"
                                      label="Financial Year"
                                      style={{
                                        backgroundColor: "#d0d0d0",
                                      }}
                                      component={InputBox}
                                      disabled={true}
                                      type="text"
                                      value={item.assesmentYear}
                                      onChange={(e) =>
                                        props.setFieldValue(
                                          `${index}.assesmentYear`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                  <div className="mx-2 my-4">
                                    <Field
                                      id="acknowledgementNo"
                                      label="Acknowledgement No"
                                      style={
                                        mode === "No"
                                          ? index === 2
                                            ? { backgroundColor: "#d0d0d0" }
                                            : { backgroundColor: "" }
                                          : { backgroundColor: "" }
                                      }
                                      disabled={
                                        mode === "No"
                                          ? index === 2
                                            ? true
                                            : false
                                          : false
                                      }
                                      component={InputBox}
                                      type="text"
                                      value={item.acknowledgementNo}
                                      onChange={(e) => {
                                        props.setFieldValue(
                                          `filingList.${index}.acknowledgementNo`,
                                          e.target.value
                                        );
                                      }}
                                    />
                                    {props.errors &&
                                      props.errors.filingList &&
                                      props.errors.filingList[index] &&
                                      props.errors.filingList[index]
                                        .acknowledgementNo &&
                                      props.touched &&
                                      props.touched.filingList &&
                                      props.touched.filingList[index] &&
                                      props.touched.filingList[index]
                                        .acknowledgementNo && (
                                        <div
                                          className="my-1 text-left"
                                          style={{ color: "#ff0000" }}
                                        >
                                          {
                                            props.errors.filingList[index]
                                              .acknowledgementNo
                                          }
                                        </div>
                                      )}
                                  </div>
                                  <div className="mx-2 my-4">
                                    <label className="block mb-2 text-base font-semibold text-left text-gray-700">
                                      {mode === "No"
                                        ? index === 2
                                          ? "Due Date"
                                          : "Date Of Filing"
                                        : "Date Of Filing"}
                                    </label>
                                    <DatePicker
                                      className={
                                        "appearance-none border rounded md:py-4 px-2 text-gray-700 leading-tight cursor-text datePicker w-full"
                                      }
                                      closeOnScroll
                                      clearButtonTitle={{
                                        borderColor: "#D9D9D9",
                                      }}
                                      dateFormat="dd/MM/yyyy"
                                      id="filingDate"
                                      selected={
                                        item.filingDate
                                          ? new Date(item.filingDate)
                                          : item.filingDate
                                      }
                                      onChange={(date) => {
                                        date
                                          ? props.setFieldValue(
                                              `filingList.${index}.filingDate`,
                                              moment(date).format("L")
                                            )
                                          : props.setFieldValue(
                                              `filingList.${index}.filingDate`,
                                              ""
                                            );

                                        setDate(date);
                                      }}
                                    />

                                    {props.errors &&
                                      props.errors.filingList &&
                                      props.errors.filingList[index] &&
                                      props.errors.filingList[index]
                                        .filingDate &&
                                      props.touched &&
                                      props.touched.filingList &&
                                      props.touched.filingList[index] &&
                                      props.touched.filingList[index]
                                        .filingDate && (
                                        <div
                                          className="my-1 text-left"
                                          style={{ color: "#ff0000" }}
                                        >
                                          {
                                            props.errors.filingList[index]
                                              .filingDate
                                          }
                                        </div>
                                      )}
                                  </div>
                                </div>
                              ))}

                              {addMode && (
                                <span
                                  className="flex my-4 font-sans text-base font-normal md:text-xl lg:text-xl"
                                  style={{ color: "#2F2D51" }}
                                >
                                  <div>
                                    Have you filed the ITR for current
                                    assessment year?
                                    {"   "}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        arrayHelpers.push(handleAdd());
                                        setMode("Yes");
                                      }}
                                    >
                                      <u>
                                        {"   "}YES{"   "}
                                      </u>
                                    </button>
                                    {"   "}
                                    or
                                    {"   "}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        arrayHelpers.push(handleAdd());
                                        setMode("No");
                                      }}
                                    >
                                      <u>
                                        {"   "}NO{"   "}
                                      </u>
                                    </button>
                                  </div>
                                </span>
                              )}
                            </>
                          )}
                        />
                      </Form>
                      <div className="flex items-center justify-between row-end-5 mt-16">
                        {isSubmitting ? (
                          <button
                            className="px-10 py-3 text-base font-semibold rounded-lg w-60 focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              backgroundColor: "#F7D373",
                            }}
                            onClick={() => {
                              setIsSubmitting(true);
                            }}
                          >
                            &nbsp;
                            <Spinner color="#525353" />
                          </button>
                        ) : (
                          <button
                            className="px-10 py-3 text-base font-semibold rounded-lg w-60 focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              backgroundColor: "#F7D373",
                            }}
                            onClick={() => {
                              setIsSubmitting(true);
                              props.handleSubmit();
                            }}
                          >
                            Save and Proceed
                          </button>
                        )}
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
