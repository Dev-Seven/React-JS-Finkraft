import React, { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useHistory } from "react-router-dom";
import itrNumberVerifyBack from "../assets/images/back-icon.png";
import loginSuccess from "../assets/svg/login-success.svg";

const ItrOtpVerify = (props) => {
  const { show, closeModal, modalName } = props;
  const [handleModalState, setHandleModalState] = useState(modalName);
  const nav = useHistory();
  {
    /* Created By: Bindi
   Created On: 24th June,2021
   Description: handles modal state on button click 
   Company Name: Seven Square Tech Pvt. Ltd. */
  }
  const handleModalChange = (modalName) => {
    setHandleModalState(modalName);
  };

  //event to close modal on button click
  const cancelButtonRef = useRef(null);
  useEffect(() => {}, []);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={show}
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/*Otp Verify Modal */}
              {handleModalState == "OtpVerify" && (
                <div className="bg-white px-4 py-4">
                  {/*header*/}
                  <div className="items-center p-5 w-full rounded-t block text-center">
                    <button
                      className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="w-11/12 relative p-6 flex-auto text-left">
                    <p className="pb-4 font-bold text-xl lg:text-2xl 2xl:text-3xl">Verification Code</p>
                    <p className="text-base md:text-lg xl:text-xl">
                      Please type the verification code sent to your email or
                      mobile number +91 7899878778
                    </p>
                  </div>
                  <div className="w-9/12 xs:w-11/12">
                    <form className="bg-white rounded px-6 pb-8 mb-4">
                      <div className="items-start">
                        <div className="mb-10">
                          <label
                            className="block text-gray-700 text-md font-bold md:mb-4 w-full text-left pt-3"
                            for="otp"
                          >
                            Enter OTP
                          </label>
                          <input
                            className="form-input md:py-4 px-3 placeholder-gray-300 w-full "
                            id="otp"
                            type="text"
                            placeholder="Enter OTP"
                          />
                        </div>

                        <div className="flex">
                          <button
                            className="text-base font-bold border px-10 py-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              backgroundColor: "#F7D373",
                              color: "#2F2D51",
                            }}
                            onClick={() =>
                              handleModalChange("VerificationDone")
                            }
                          >
                            Submit
                          </button>
                        </div>

                        <Link
                          className="flex text-left font-medium mt-10"
                          onClick={() => handleModalChange("NumberVerify")}
                        >
                          <img
                            className="inline-flex mr-3 w-4 h-4 mt-1"
                            src={itrNumberVerifyBack}
                            alt=""
                          />{" "}
                          Change Mobile Number
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/*Otp Verification Done Modal */}
              {handleModalState == "VerificationDone" && (
                // <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="mt-4 border-0 rounded-lg items-center h-auto relative flex flex-col bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="items-center p-5 w-full rounded-t block text-center">
                    <button
                      className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="w-10/12 relative  flex-auto text-left">
                    <img className="inline-flex" src={loginSuccess} alt="" />{" "}
                    <p className="pb-4 mt-4 font-bold text-xl lg:text-2xl 2xl:text-3xl">
                      Signed Successfully
                    </p>
                    <p className="pb-4 text-base md:text-lg xl:text-xl">
                      You have successfully completed the digital signing of the
                      acknowledgement.
                    </p>
                  </div>
                  <div className="w-10/12 pb-3 mt-8">
                    <form className="bg-white rounded pt-6 pb-8 mb-8">
                      <div className="items-start">
                        <div className="flex">
                          <button
                            //  class="md:text-xl md:font-semibold md:w-48 md:h-16 md:rounded-lg focus:outline-none focus:shadow-outline"
                            // className="text-xl font-semibold xs:w-40 border xs:h-16 sm:h-16 rounded-lg focus:outline-none focus:shadow-outline"
                            className="text-base font-bold border px-10 py-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              backgroundColor: "#F7D373",
                              color: "#2F2D51",
                            }}
                            onClick={() => {
                              closeModal();
                              nav.push("/clients");
                              setTimeout(() => {
                                handleModalChange("OtpVerify");
                              }, 1000);
                            }}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                // </div>
              )}

              {/*Number verify Modal */}
              {handleModalState == "NumberVerify" && (
                <div className="bg-white px-8 py-8">
                  {/*header*/}
                  <div className="items-center w-full rounded-t block text-center">
                    <button
                      className="bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="pt-12">
                    <div className="w-11/12 relative flex-auto text-left">
                      <p className="pb-4 font-bold text-3xl">
                        Enter your Mobile Number
                      </p>
                      <p>
                        Please enter your mobile numbers to receive the OTP for
                        confirming the digital signature
                      </p>
                    </div>
                    <div className="w-9/12 xs:w-11/12">
                      <form className="bg-white rounded pt-6 pb-8 mb-4 ">
                        <div className="items-center">
                          <div className="md:mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold md:mb-2 w-full text-left pt-3"
                              for="number"
                            >
                              Mobile No
                            </label>
                            <input
                              className="form-input md:py-4 px-3 placeholder-gray-300 w-full "
                              id="number"
                              type="text"
                              placeholder="Enter Number"
                            />
                          </div>

                          <div className="flex pt-4">
                            <button
                              //   class="md:text-xl md:font-semibold md:w-40 border md:h-16 md:rounded-lg focus:outline-none focus:shadow-outline"
                              className="text-xl font-semibold xs:w-40 border xs:h-16 sm:h-16 rounded-lg focus:outline-none focus:shadow-outline"
                              type="button"
                              style={{
                                backgroundColor: "#F7D373",
                                color: "#2F2D51",
                              }}
                              onClick={() => handleModalChange("OtpVerify")}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default ItrOtpVerify;
