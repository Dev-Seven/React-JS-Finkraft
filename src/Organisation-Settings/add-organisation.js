import React, { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Text } from "tailwind-react-ui";
import InputBox from "../common/input-box";
import { Field, Formik } from "formik";
import { requiredField, validatePanCard } from "../common/validation";

const AddOrganisation = (props) => {
  const { show, closeModal, modalName } = props;
  const [handleModalState, setHandleModalState] = useState(modalName);

  /* Created By: Bindi
   Created On: 24th June,2021
   Description: handles modal state on button click 
   Company Name: Seven Square Tech Pvt. Ltd. */

  const handleModalChange = (modalName) => {
    setHandleModalState(modalName);
  };

  //Cancle event to close modal
  const cancelButtonRef = useRef(null);

  const initData = {
    pan: "",
    company: "",
  };

  const organisationFields = [
    {
      key: 1,
      name: "PAN Number",
      backendMappingName: "pan", //For api field(put the name of api parameters ro bind api data)
      placeholder: "",
      type: "text",
      validation: "Please enter PAN card number.",
      editable: "No",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 2,
      name: "Company Name",
      backendMappingName: "company",
      placeholder: "",
      type: "text",
      validation: "Please enter Comapny name.",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
  ];

  useEffect(() => {}, []);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={show}
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
          {/* <div className="z-10 w-full p-10 bg-white sm:max-w-lg rounded-xl"> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none xs:p-5">
              {/*Add Organization Modal*/}
              {handleModalState === "addOrganisation" && (
                <div className="relative flex flex-col items-center h-auto mt-4 bg-white border-0 rounded-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="items-center block w-full p-5 text-center rounded-t">
                    <button
                      className="float-right text-xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="block w-6 h-6 bg-transparent outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>

                  {/*body*/}
                  <div className="w-4/5">
                    <Formik
                      initialValues={initData}
                      onSubmit={(values) => {
                        handleModalChange("organisationInfo");
                      }}
                    >
                      {({ handleSubmit, values, setFieldValue }) => (
                        <form
                          className="pb-8 bg-white rounded"
                          onSubmit={handleSubmit}
                        >
                          <div className="mb-5">
                            <div
                              className="items-center block w-full pb-2 text-lg font-semibold text-left rounded-t lg:text-xl"
                              style={{ color: "#1A4671" }}
                            >
                              Organisation Information
                            </div>
                            <div
                              className="items-center block w-full pb-4 text-base text-left rounded-t"
                              style={{ color: "#2A254F" }}
                            >
                              Just enter your company organisation PAN number
                              and we will fetch all the information.
                            </div>
                          </div>
                          {organisationFields.map((item, index) => {
                            return (
                              <div className="my-5" key={item.key}>
                                <Field
                                  name={item.backendMappingName}
                                  label={item.name}
                                  component={InputBox}
                                  type={item.type}
                                  value={values[item.backendMappingName] || ""}
                                  validate={
                                    item.name === "PAN Number"
                                      ? validatePanCard.bind(
                                          this,
                                          item.validation
                                        )
                                      : requiredField.bind(
                                          this,
                                          item.validation
                                        )
                                  }
                                  placeholder={item.placeholder}
                                />
                              </div>
                            );
                          })}

                          <div className="flex justify-end md:mt-12 xs:m-5">
                            <button
                              className="px-10 py-3 text-base font-semibold border rounded-lg focus:outline-none focus:shadow-outline mt-7"
                              type="button"
                              style={{
                                backgroundColor: "#474186",
                                color: "#FFFFFF",
                              }}
                              //  onClick={handleSubmit}
                              onClick={() => {
                                handleSubmit();
                                
                              }}
                            >
                              Next
                            </button>
                          </div>

                          {/*footer*/}
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              )}

              {/*Organization Information Modal*/}
              {handleModalState === "organisationInfo" && (
                <div className="relative flex flex-col items-center h-auto mt-4 bg-white border-0 rounded-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="items-center w-full pt-5 pr-5">
                    <button
                      className="float-right text-xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none"
                      onClick={() => {
                        closeModal();
                        setTimeout(() => {
                          handleModalChange("addOrganisation");
                        }, 1000);
                      }}
                    >
                      <span
                        className="block w-6 h-6 bg-transparent outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>

                  {/*body*/}
                  <div className="w-9/12 xs:w-11/12">
                    <form className="pb-8 bg-white rounded">
                      <div className="mb-5">
                        <div
                         className="items-center block w-full pb-2 text-lg font-semibold text-left rounded-t lg:text-xl"
                          style={{ color: "#1A4671" }}
                        >
                          Organisation Information
                        </div>
                        <div
                          className="flex items-center w-full gap-2 text-left rounded-t text"
                          style={{ color: "#2A254F" }}
                        >
                          <Text bold color="#222222" size="base">
                            ShopElect |{" "}
                          </Text>
                          <Text color="#222222" size="sm">
                            PAN: FKSLS7368O
                          </Text>
                        </div>
                      </div>

                      <div className="mb-5">
                        <div
                          className="items-center block w-full pb-1 text-base font-semibold text-left rounded-t"
                          style={{ color: "#2A254F" }}
                        >
                          Associated GSTIN
                        </div>
                        <div
                         className="items-center block w-full pb-4 text-base text-left rounded-t"
                          style={{ color: "#2A254F"}}
                        >
                          Select for which all GSTINs you want to enable
                          Finkraft to manage all your ITC Claims.s
                        </div>
                      </div>

                      <div className="flex gap-2 xs:gap-4 xs:my-4">
                        <div className="pt-3 md:mb-4">
                          <input
                            className="focus:outline-none"
                            type="checkbox"
                            style={{ backgroundColor: "#47B553" }}
                            // checked={}
                            // onChange={(e) => e}
                          />
                        </div>
                        <div className="w-1/12 pt-3 md:mb-4">
                          <Text bold color="#2A254F" size="sm">
                            1
                          </Text>
                        </div>
                        <div className="w-7/12 md:mb-4">
                          <input
                            className="w-full px-3 placeholder-gray-300 form-input md:py-4 "
                            type="text"
                          />
                        </div>
                        <div className="w-9/12 md:mb-4">
                          <input
                            className="w-full px-3 placeholder-gray-300 form-input md:py-4"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 xs:gap-4 xs:my-4">
                        <div className="pt-3 md:mb-4">
                          <input
                            className="focus:outline-none"
                            type="checkbox"
                            style={{ backgroundColor: "#47B553" }}
                            // checked={}
                            // onChange={(e) => e}
                          />
                        </div>
                        <div className="w-1/12 pt-3 md:mb-4">
                          <Text bold color="#2A254F" size="sm">
                            2
                          </Text>
                        </div>
                        <div className="w-7/12 md:mb-4">
                          <input
                            className="w-full px-3 placeholder-gray-300 form-input md:py-4"
                            type="text"
                          />
                        </div>
                        <div className="w-9/12 md:mb-4">
                          <input
                            className="w-full px-3 placeholder-gray-300 form-input md:py-4"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 xs:gap-4 xs:my-4">
                        <div className="pt-3 md:mb-4">
                          <input
                            className="focus:outline-none"
                            type="checkbox"
                            style={{ backgroundColor: "#47B553" }}
                            // checked={}
                            // onChange={(e) => e}
                          />
                        </div>
                        <div className="w-1/12 pt-3 md:mb-4 ">
                          <Text bold color="#2A254F" size="sm">
                            3
                          </Text>
                        </div>
                        <div className="w-7/12 md:mb-4">
                          <input
                            className="w-full px-3 placeholder-gray-300 form-input md:py-4"
                            type="text"
                          />
                        </div>
                        <div className="w-9/12 md:mb-4">
                          <input
                            className="w-full px-3 placeholder-gray-300 form-input md:py-4"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end md:mt-12 xs:my-5">
                        <button
                          className="px-10 py-3 text-base font-semibold border rounded-lg focus:outline-none focus:shadow-outline"
                          type="button"
                          style={{
                            backgroundColor: "#474186",
                            color: "#FFFFFF",
                          }}
                          onClick={() => {
                            closeModal();
                            setTimeout(() => {
                              handleModalChange("addOrganisation");
                            }, 1000);
                          }}
                        >
                          CREATE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddOrganisation;
