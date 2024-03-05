import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import downloadIcon from "../assets/images/download-icon.png";
import { XIcon } from "@heroicons/react/outline";
import samplePdf from "../assets/sample.pdf";
import ItrOtpVerify from "./itr-otp-verify";
import Navbar from "../Routing/navbar";

export default function ItrViewAcknowledge({ showAck }) {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const nav = useHistory();

  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-3 sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9">
        <div className="min-h-full">
        <div className="container-shadow pt-3 px-10 pb-10">
          <div className="block w-full overflow-hidden">
            <div className="grid flex-row items-center justify-between w-full grid-cols-1 my-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12 all-center">
              {/* <div className="inline-block float-left font-semibold xs:text-2xl"> */}
              <div className="w-full mb-3 text-base font-bold md:mb-0 sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block xl:text-xl 2xl:text-2xl">
                View Acknowledgement
              </div>

              <div className="relative items-center justify-end d-block sm:flex md:flex">
             
                <button
                  class="text-base lg:text-base xl:text-base 2xl:text-base font-bold py-3 px-10 rounded-lg md:rounded-lg focus:outline-none focus:shadow-outline inline-block"
                  type="button"
                  style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                  onClick={openModal}
                >
                  Sign and Proceed
                </button>
                <ItrOtpVerify
                  closeModal={closeModal}
                  show={show}
                  modalName="OtpVerify"
                />
                <div className="inline-block ml-4">
                  <img
                    className=""
                    src={downloadIcon}
                  ></img>
                </div>
                <div className="absolute right-0 m-2 rounded-full -top-10 sm:top-0 md:top-1 sm:-right-14 md:-right-16 lg:-right-16 xl:-right-24 2x1:-right-32 ring-2 ring-current">
                  <XIcon
                    className="block w-5 h-5"
                    onClick={() => {
                      nav.push("/itrList");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="block my-8">
            <object
              data={samplePdf}
              className="w-full md:w-10/12 h50 all-center"
            ></object>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
