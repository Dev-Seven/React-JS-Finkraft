import React, { useState } from "react";
import Navbar from "../Routing/navbar";
import ClientList from "./client-list";
import { useHistory, Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import background from "../assets/svg/clients-bg.svg";
import GSTLogin from "../User-Dashboard/gst-login";

export default function Clients() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const nav = useHistory();
  return (
    <div className="flex-1">
      <Navbar />

      <div className="grid grid-rows-6 p-4 mx-4 container-shadow lg:mx-9">
        <div className="absolute m-2 rounded-full ring-2 ring-current right-8 lg:right-16 xl:right-16 2xl:right-16">
          <XIcon
            className="block w-5 h-5"
            onClick={() => {
              nav.push("/clientList");
            }}
          />
        </div>
        <div className="justify-center row-span-1">
          <div
            className="w-full p-3 mt-12 rounded-full lg:mx-auto"
            style={{ backgroundColor: "#EFEFEF", maxWidth: 644, }}
          >
            <span className="flex items-center gap-4 font-sans text-center sm:flex md:flex lg:flex xl:flex 2xl:flex justify-evenly">
              <div className="font-sans text-sm font-semibold text-gray-300 sm:text-base md:text-lg lg:text-lg xl:text-lg">
                ITR Filling
              </div>
              <div className="divide-x w-2/12 sm:w-16 bg-gray-300 h-0.5 my-1"></div>
              <div className="font-sans text-sm font-semibold sm:text-base md:text-lg lg:text-lg xl:text-lg">
                Add clients
              </div>
              <div className="divide-x w-2/12 sm:w-16 bg-gray-300 h-0.5 my-1"></div>
              <div className="font-sans text-sm font-semibold text-gray-300 sm:text-base md:text-lg lg:text-lg xl:text-lg">
                Confirm
              </div>
            </span>
          </div>
        </div>
        <div className="block grid-cols-12 row-span-5 gap-2 -mt-6 sm:mt-0 sm:grid md:grid lg:grid xl:grid 2xl:grid">
          <div className="col-span-5 text-center md:px-12 lg:px-12 xl:px-12 2xl:px-12">
            <div className="w-full mx-auto font-sans text-4xl font-semibold">
              <img className="mx-auto" src={background} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-7 sm:grid-rows-6 ">
            <div className="col-span-12 row-span-2 lg:col-span-8 mb-9 sm:mb-4">
              <div
                className="flex my-8 font-sans text-xl font-semibold lg:text-2xl xl:text-3xl"
                style={{ color: "#2F2D51"}}
              >
                Upload your client list to share the Acknowledgement
              </div>
              <div
                className="text-base font-normal opacity-50 md:text-lg"
                style={{ color: "#525353" }}
              >
                By simply login into our TDS product. We ensure you not to make
                double TDS amounts by bringing all the ITR transactions over
                here and you can acknowledge clients by digitally signing and
                sharing it to clients.{" "}
              </div>
            </div>
            <div className="flex items-center col-span-12 sm:justify-between mb-9 sm:mb-0">
              <span className="grid items-center gap-2 lg:flex xl:flex 2xl:flex">
                <button
                  className="w-64 rounded h-14 md:text-base md:font-semibold xl:w-52 2xl:w-52 md:h-12 focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                  onClick={() => {
                    nav.push("/clientAdd");
                  }}
                >
                  Upload Clients List
                </button>

                <u>Download File Template</u>
              </span>
            </div>
            <div className="flex items-center col-span-12 sm:justify-between">
              <span className="grid items-center gap-2 lg:flex xl:flex 2xl:flex">
                <button
                  className="w-64 rounded h-14 sm:ml-0 md:text-base md:font-semibold xl:w-52 2xl:w-52 md:h-12 focus:outline-none focus:shadow-outline"
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
                Auto Fetch all your clients data from GSTR1 Sales Transactions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
