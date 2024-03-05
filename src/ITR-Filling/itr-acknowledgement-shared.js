import React, { useState } from "react";

import Navbar from "../Routing/navbar";
import { Link } from "react-router-dom";
import check from "../assets/svg/login-success.svg";

export default function ItrAcknowledgementShared() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="justify-center row-span-1 p-3 my-8">
        <div
          className="w-full p-3 mx-auto rounded-full"
          style={{ backgroundColor: "#EFEFEF", maxWidth: 644 }}
        >
          <span className="flex items-center gap-4 px-5 font-sans justify-evenly">
            <div className="font-sans text-sm font-semibold text-center text-gray-300 sm:text-xl">
              ITR Filling
            </div>
            <div className="divide-x w-2/12 sm:w-16 bg-gray-300 h-0.5"></div>
            <div className="font-sans text-sm font-semibold text-center text-gray-300 sm:text-xl">
              Add clients
            </div>
            <div className="divide-x w-2/12 sm:w-16 bg-gray-300 h-0.5"></div>
            <div className="font-sans text-sm font-semibold sm:text-xl ">Confirm</div>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 row-span-5 gap-2 p-3 text-center">
        <div className="w-full col-span-12 mx-auto font-sans text-4xl font-semibold">
          <img className="mx-auto" src={check} />
        </div>

        <div className="col-span-12 row-span-2 gap-3 mx-auto text-center md:mx-20 lg:px-28 xl:px-52 2xl:px-96">
          <span>
            <div
              className="my-4 font-sans text-xl font-semibold sm:text-3xl"
              style={{ color: "#2F2D51" }}
            >
              Acknowledgments Shared
            </div>
            <div
              className="text-base font-normal opacity-50 sm:text-xl"
              style={{ color: "#525353" }}
            >
              Sit back and Relax, we will share the ITR acknowledgements with
              all your clients list. You can verify the status in the clients
              detail page.
            </div>
          </span>
          <div
            className="text-base font-normal opacity-50 mt-14 sm:text-xl"
            style={{ color: "#525353" }}
          >
            Get Acknowledgements from your Vendors and ensure you collect the
            right TDS amount.
          </div>
        </div>
        <div className="items-center justify-between col-span-12 mt-4">
          <span className="items-center gap-2">
            <Link to="/vendors">
              <button
                class="rounded-lg px-10 py-3 text-base font-semibold rounded focus:outline-none focus:shadow-outline"
                type="button"
                style={{ backgroundColor: "#2F2D51", color: "#FFFFFF" }}
              >
                Ask now
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
