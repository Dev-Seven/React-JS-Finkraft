import React, { useState } from "react";
import Navbar from "../Routing/navbar";
import background from "../assets/svg/clients-bg.svg";
import { XIcon } from "@heroicons/react/outline";
import { Link, useHistory } from "react-router-dom";
import GSTLogin from "../User-Dashboard/gst-login";

export default function Vendors() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const nav = useHistory();

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div className="grid grid-rows-6 p-4 mx-4 container-shadow lg:mx-9">
          <div className="absolute m-2 rounded-full right-4 lg:right-20 ring-2 ring-current">
            <XIcon
              className="block w-5 h-5"
              onClick={() => {
                nav.push("/vendorList");
              }}
            />
          </div>
          <div className="justify-center row-span-1">
            <div
              className="p-3 mx-auto rounded-full w-60 sm:w-80 md:w-2/6 lg:mt-4"
              style={{ backgroundColor: "#EFEFEF" }}
            >
              <span className="items-center justify-center block gap-2 px-5 font-sans sm:flex">
                <div className="font-sans text-base font-semibold text-center sm:text-left">
                  Add vendors
                </div>
                <div className="divide-x w-full sm:w-16 bg-gray-300 h-0.5"></div>
                <div className="font-sans text-base font-semibold text-center text-gray-300 sm:text-left">
                  Confirm
                </div>
              </span>
            </div>
          </div>
          <div className="grid-cols-12 row-span-5 gap-2 lg:grid">
            <div className="col-span-5 px-12 text-center">
              <div className="w-full mx-auto font-sans text-4xl font-semibold">
                <img className="mx-auto" src={background} alt="" />
              </div>
            </div>
            <div className="grid-cols-12 col-span-7 grid-rows-6 mt-10 lg:grid lg:mt-0">
              <div className="col-span-8 row-span-2">
                <div
                  className="flex my-4 font-sans text-lg font-semibold lg:text-2xl xl:text-3xl 2xl:text-3xl"
                  style={{ color: "#2F2D51"}}
                >
                  Upload your Vendors list to get the Acknowledgement
                </div>
                <div
                  className="text-base font-normal opacity-50 md:text-lg"
                  style={{ color: "#525353" }}
                >
                  By simply login into our TDS product. We ensure you not to
                  make double TDS amounts by bringing all the ITR transactions
                  over here and you can acknowledge clients by digitally signing
                  and sharing it to clients.
                </div>
              </div>
              <div className="flex items-center justify-between col-span-12 mt-3 lg:mt-0">
                <span className="items-center block sm:flex lg:flex">
                  <button
                    className="inline-block py-3 mr-4 text-base font-semibold rounded focus:outline-none focus:shadow-outline w-52"
                    type="button"
                    style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                  >
                    Upload Vendors List
                  </button>
                  <div className="block mt-4 sm:inline-block sm:mt-0"><u>Download File Template</u></div>
                </span>
              </div>
              <div className="flex items-center justify-between col-span-12 mt-3 lg:mt-0">
              <span className="items-center block sm:flex">
                  <button
                    className="inline-block py-3 mr-4 text-base font-semibold rounded focus:outline-none focus:shadow-outline w-52"
                    type="button"
                    style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                    onClick={openModal}
                  >
                    Fetch from GST Portal
                  </button>
                  {/* Gst login Modal */}
                  <GSTLogin
                    closeModal={closeModal}
                    show={show}
                    modalName="gstLogin"
                  />
                   <div className="block mt-4 sm:inline-block sm:mt-0">Auto Fetch all your clients data from GSTR1 Sales
                  Transactions.</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
