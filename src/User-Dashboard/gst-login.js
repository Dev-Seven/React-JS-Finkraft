import React, { Fragment, useState, useEffect, useRef } from "react";
import gstloginModalLogo from "../assets/images/gstlogin-modal-logo.png";
import { Dialog, Transition } from "@headlessui/react";
import { Text } from "tailwind-react-ui";
import loginSuccess from "../assets/svg/login-success.svg";
import { Link } from "react-router-dom";

let GstLogin = (props) => {
  const { show, closeModal, modalName } = props;
  const [handleModalState, setHandleModalState] = useState(modalName);

  {
    /* Created By: Bindi
   Created On: 24th June,2021
   Description: handles modal state on button click 
   Company Name: Seven Square Tech Pvt. Ltd. */
  }
  const handleModalChange = (modalName) => {
    setHandleModalState(modalName);
  };

  //Modal cancle Button Event.
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
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all xs:w-full sm:my-8 sm:align-middle max-w-39 sm:w-full">
              {/*Gst Login Modal */}
              {handleModalState == "gstLogin" && (
                <div className="bg-white xs:w-full">
                  {/*header*/}
                  <div
                    className="items-center p-3 sm:p-6 rounded-t block text-center"
                    style={{ backgroundColor: "#F9F9FC" }}
                  >
                    <img
                      class="md:w-52 inline-flex"
                      src={gstloginModalLogo}
                      alt=""
                    />
                    <button
                      className="mr-2 bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="bg-transparent text-2xl block outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative px-8 sm:px-24 py-3 sm:py-8 text-left">
                    Enter your GST portal login credentials to connect Finkraft.
                  </div>
                  <div className="px-8 sm:px-32">
                    <form className="bg-white rounded mb-4">
                      <div className="items-center">
                        <div class="md:mb-4">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-1 md:mb-2 text-left pt-3"
                            for="gstin"
                          >
                            GSTIN
                          </label>
                          <input
                            class="form-input py-3 md:py-4 px-3 placeholder-gray-300 w-full "
                            id="gstin"
                            type="text"
                          />
                        </div>
                        <div class="md:mb-4">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-1 md:mb-2 w-full text-left pt-3"
                            for="userName"
                          >
                            User Name
                          </label>
                          <input
                            class="form-input py-3 md:py-4 px-3 placeholder-gray-300 w-full"
                            id="userName"
                            type="text"
                          />
                        </div>
                        <div class="mb-2 md:mb-4">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-1 md:mb-2 w-full text-left pt-3"
                            for="password"
                          >
                            Password
                          </label>
                          <input
                            class="form-input py-3 md:py-4 px-3 placeholder-gray-300 w-full"
                            id="password"
                            type="password"
                          />
                        </div>
                        <div className="text-left mb-5">
                          <input
                            className="focus:outline-none"
                            name={"saveCredentials"}
                            type="checkbox"
                            id={"saveCredentials"}
                            style={{ backgroundColor: "#47B553" }}
                            // checked={}
                            // onChange={(e) => e}
                          />
                          <label className="pl-2">Save Credentials</label>
                        </div>
                        <div class="flex mt-10">
                          <button
                            //   class="md:text-xl md:font-semibold md:w-40 border md:h-16 md:rounded-lg focus:outline-none focus:shadow-outline"
                            className="text-base font-bold px-9 border py-3 mr-4 rounded-lg focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              background:
                                "transparent linear-gradient(0deg, #F2F4F7 0%, #FEFFFF 100%) 0% 0% no-repeat padding-box",
                              color: "#354052",
                              borderColor: "#CED0DA",
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            //    class="md:text-xl md:font-semibold md:w-40 md:h-16 md:rounded-lg focus:outline-none focus:shadow-outline ml-3"
                            className="text-base font-bold px-9 border py-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              backgroundColor: "#474186",
                              color: "#FFFFFF",
                            }}
                            onClick={() => handleModalChange("gstOtpVerify")}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                      {/*footer*/}
                    </form>
                  </div>
                  <div className="px-8 sm:px-24 py-8 relative text-left">
                    <label className="font-bold" style={{ color: "#525353" }}>NOTE</label>
                    <p style={{ color: "#525353" }}>
                      1.You have to enable the API access in the GSTIN portal by
                      entering the OTP received on registered mobile no. <br />
                      2.Once Finkraft connected with GSTIN, we will
                      automatically pull the transactions.
                    </p>
                  </div>
                </div>
              )}

              {/*Gst Login Otp Verify Modal */}
              {handleModalState == "gstOtpVerify" && (
                <div className="bg-white">
                  {/*header*/}
                  <div
                    className="items-center p-3 sm:p-6 rounded-t block text-center"
                    style={{ backgroundColor: "#F9F9FC" }}
                  >
                    <img
                      class="md:w-52 inline-flex"
                      src={gstloginModalLogo}
                      alt=""
                    />
                    <button
                      className="mr-2 bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="bg-transparent text-2xl block outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative px-8 sm:px-32 pt-8 sm:pt-10 pb-4 pb-12 text-center">
                    OTP has been successfully sent to the registered mobile
                    number with GST portal.
                  </div>
                  <div className="w-full">
                    <form className="bg-white rounded">
                      <div className="items-center">
                        <div class="md:mb-4 px-0 sm:px-44 text-center sm:text-left">
                          <p className="font-bold mb-3" style={{ color: "#2A254F" }}>
                            GSTIN : 6AZ7YTD62438684324
                          </p>
                          <p className="font-bold" style={{ color: "#2A254F" }}>
                            User Name : Purpleplum2020
                          </p>
                        </div>
                        <div class="px-20 sm:px-36 md:mb-2 mt-4 md:mt-12">
                          <label
                            class="block text-gray-700 text-base font-bold pt-3 mb-2 w-full text-left"
                            for="gstin"
                          >
                            One Time Password
                          </label>
                          <input
                            class="form-input pt-3 md:py-4 px-3 placeholder-gray-300 w-full"
                            id="gstin"
                            type="text"
                          />
                        </div>

                        <div className="block text-center">
                          <Text is="p">
                            Didn’t receive OTP yet? <Text bold loose>Resend OTP</Text>
                          </Text>
                          <label className="pl-2"></label>
                        </div>
                        <div className="block text-center">
                          <button
                            className="text-sm sm:text-base font-semibold border mr-2 px-10 py-3 rounded-lg focus:outline-none focus:shadow-outline xs:inline-block"
                            type="button"
                            style={{
                              backgroundColor: "#474186",
                              color: "#FFFFFF",
                            }}
                            onClick={() => handleModalChange("gstLoginDone")}
                          >
                            Verify OTP
                          </button>
                        </div>
                      </div>

                      {/*footer*/}
                    </form>
                  </div>
                  <div class="px-8 sm:px-24 py-8 relative text-left">
                    <label className="font-bold" style={{ color: "#525353" }}>NOTE</label>
                    <p style={{ color: "#525353" }}>
                      1. The session will be active for a period of one month as
                      per GST portal Policies.
                      <br />
                      2.Post one month a new OTP request need to be initiated
                      and re-connect the session.
                    </p>
                  </div>
                </div>
              )}

              {/*Gst Login Done Modal */}
              {handleModalState == "gstLoginDone" && (
                <div className="bg-white">
                  {/*header*/}
                  <div
                    className="items-center p-3 sm:p-6 rounded-t block text-center"
                    style={{ backgroundColor: "#F9F9FC" }}
                  >
                    <img
                      class="md:w-52 inline-flex"
                      src={gstloginModalLogo}
                      alt=""
                    />
                    <button
                      className="mr-2 bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span
                        className="bg-transparent text-2xl block outline-none focus:outline-none"
                        style={{ color: " #58666E" }}
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  {/* <div className="w-11/12 relative p-6 flex-auto text-left"> */}
                  <div className="relative px-8 sm:px-24 pt-8 sm:pt-12 pb-4 pb-10 text-center">
                    You have successfully connected with the GSTN Portal.
                  </div>
                  <div className="w-full">
                    <form className="bg-white rounded">
                      <div className="items-center">
                        <div class="md:mb-4 px-0 sm:px-44 text-center sm:text-left">
                          <p className="font-bold mb-3" style={{ color: "#2A254F" }}>
                            GSTIN : 6AZ7YTD62438684324
                          </p>
                          <p className="font-bold" style={{ color: "#2A254F" }}>
                            User Name : Purpleplum2020
                          </p>
                        </div>
                        <div class="mb-4 mt-4 md:mb-8 md:mt-8 text-center block">
                          <img
                            class="md:w-1/5 inline-flex"
                            src={loginSuccess}
                            alt=""
                          />
                        </div>

                        <div className="text-center mb-5 px-10 sm:px-20">
                          <p>
                            Sit Back and Relax, We will auto download the current and last financial year GST2A data into the
                            portal.
                          </p>
                          <p className="md:mt-6">
                            Connected On - 17th June 2021, 10:00 AM
                          </p>
                          <label className="pl-2"></label>
                        </div>
                        <div class="flex items-center xs:block xs:text-center sm:flex">
                          <button
                            class="text-sm sm:text-base font-semibold border mr-2 px-5 py-3 rounded-lg focus:outline-none focus:shadow-outline xs:inline-block"
                            type="button"
                            style={{
                              backgroundColor: "#474186",
                              color: "#FFFFFF",
                            }}
                          >
                            View GST2A Data
                          </button>

                          <button
                            class="text-sm sm:text-base font-semibold border px-4 sm:px-7 py-3 rounded-lg focus:outline-none focus:shadow-outline xs:inline-block"
                            type="button"
                            style={{
                              backgroundColor: "#474186",
                              color: "#FFFFFF",
                            }}
                            onClick={() => {
                              closeModal();
                              setTimeout(() => {
                                handleModalChange("gstLogin");
                              }, 1000);
                            }}
                          >
                            <Link to="/vendorConfirmList">View Vendors</Link>
                          </button>
                        </div>
                      </div>

                      {/*footer*/}
                    </form>
                  </div>
                  <div className="px-8 sm:px-24 py-8 relative text-left">
                    <label className="font-bold" style={{ color: "#525353" }}>NOTE</label>
                    <p style={{ color: "#525353" }}>
                      1.You have to enable the API access in the GSTIN portal by
                      entering the OTP received on registered mobile no. <br />
                      2.Once Finkraft connected with GSTIN, we will
                      automatically pull the transactions.
                    </p>
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

export default GstLogin;
