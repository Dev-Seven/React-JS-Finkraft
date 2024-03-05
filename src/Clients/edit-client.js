import React, { useState } from "react";
import Edit from "../assets/svg/edit.svg";
import Navbar from "../Routing/navbar";
import { XIcon } from "@heroicons/react/outline";
import { useHistory, Link } from "react-router-dom";

export default function EditClient() {
  const nav = useHistory();
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div className="container-shadow grid m-9 p-8">
          <div className="absolute right-14 m-2 ring-2 rounded-full ring-current">
            <XIcon
              className="block h-5 w-5"
              onClick={() => {
                nav.push("/clientList");
              }}
            />
          </div>
          {/* ================================================== */}
          <div>
            <div>
              <span
                className="flex items-center gap-4"
                style={{ color: "#222222" }}
              >
                <div className="font-sans font-semibold text-2xl">
                  Singapore Tyre Company |
                </div>
                <div className="font-serif font-semibold  text-lg">
                  PAN: FKSLS7368O
                </div>
              </span>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-5 md:gap-2">
                <div className="mt-5 md:mt-0 md:col-span-3">
                  <form action="#" method="POST">
                    <div className=" overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid  gap-2">
                          {/* organization name */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end  items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Organization Name
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="Singapore Tyre Company"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <img
                              src={Edit}
                              alt=""
                              className="col-span-1 col-start-6 justify-self-end"
                            />
                          </div>
                          {/* PAN no */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              PAN No
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="Singapore"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          {/* Company adress */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-start">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Company Address
                            </label>
                            <div className="col-span-5 grid grid-cols-6 gap-2">
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="3750 S. Watson Rd., Suite 100,"
                                autoComplete="given-name"
                                className="mt-1 col-span-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="Near Jordgeton Complex"
                                autoComplete="given-name"
                                className="mt-1 col-span-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="Jurong"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="Singapore"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="600006"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="+65 66788990"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                disabled
                                placeholder="Fax"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                disabled
                                placeholder="Website"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          {/* Company ID (CIN) */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Company ID (CIN)
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="M74140MH2019PTC353439"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          {/* Date of Incorporation*/}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Date of Incorporation
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="December 2019"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          {/* Primary Email*/}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Primary Email
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="John@tre.com   "
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          {/* Tax ID */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Tax ID
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="4545345435"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          {/* Tax Payer Type */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Tax Payer Type
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="Regular    "
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          {/* HSN Code */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              HSN Code
                            </label>
                            <input
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="8745368"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          {/* Nature of bussines  */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-center">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Nature of business
                            </label>
                            <textarea
                              type="text"
                              name="Organization Name"
                              id="Organization_Name"
                              value="Regular"
                              autoComplete="given-name"
                              className="mt-1 col-span-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          {/* directors */}
                          <div className="grid grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end   items-start">
                            <label
                              htmlFor="Organization_Name"
                              className="block text-sm font-medium text-gray-700 col-span-1"
                            >
                              Directors
                            </label>
                            <div className="col-span-5 grid grid-cols-6 gap-2">
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="Jhon peter"
                                autoComplete="given-name"
                                className="mt-1 col-span-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="123456789"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="Kevin"
                                autoComplete="given-name"
                                className="mt-1 col-span-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <input
                                type="text"
                                name="Organization Name"
                                id="Organization_Name"
                                value="123456"
                                autoComplete="given-name"
                                className="mt-1 col-span-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="flex  col-span-2 ">
                  <div className="w-px h-5/6 self-center mx-3 bg-gray-300 hidden sm:block "></div>
                  <div className="w-full sm:px-0 grid   grid-rows-2">
                    <div className="row-span-1 grid-cols-6">
                      <div className="justify-between flex col-span-6 mx-9">
                        <div className="text-lg font-medium  text-gray-900">
                          Contact Information
                        </div>
                        <div className="">Add New</div>
                      </div>
                      <div className="shadow rounded-md pl-6 py-10 pr-4 mx-9 text-gray-300">
                        <div className="grid grid-cols-6 p-2 ">
                          <div className="col-span-2">Primary Contact :</div>
                          <div className="col-span-3">
                            Sai Sandeep +91 8985652395
                            saisandeep@purpleplum.design
                          </div>
                          <img className="col-span-1" src={Edit} alt="edit" />
                        </div>
                        <div className="h-px w-full self-center my-2 bg-gray-300 "></div>

                        <div className="grid grid-cols-6 p-2">
                          <div className="col-span-2">Accounts :</div>
                          <div className="col-span-3">
                            Sharief +91 9985652395 sharief@purpleplum.design
                          </div>
                          <img className="col-span-1" src={Edit} alt="edit" />
                        </div>
                        <div className="h-px w-full self-center my-2 bg-gray-300 "></div>
                        <div className="grid grid-cols-6 p-2">
                          <div className="col-span-2">Finance :</div>
                          <div className="col-span-3">
                            Kishan +91 7485652395 kishan@purpleplum.design
                          </div>
                          <img className="col-span-1" src={Edit} alt="edit" />
                        </div>
                      </div>
                    </div>
                    <div className="row-span-1">
                      <div className="justify-between flex my-4 col-span-6 mx-9">
                        <div className="text-lg font-medium  text-gray-900">
                          Associated GSTINs
                        </div>
                      </div>
                      <div className="grid my-10 grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end gap-3 items-center">
                        <label
                          htmlFor="Organization_Name"
                          className="block col-end-1 text-sm font-medium text-gray-700 col-span-1"
                        >
                          1.
                        </label>
                        <div className="col-span-5 grid grid-cols-6 gap-2">
                          <input
                            type="text"
                            name="Organization Name"
                            id="Organization_Name"
                            value="3750 S. Watson Rd., Suite 100,"
                            autoComplete="given-name"
                            disabled
                            className="mt-1 col-span-2 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <input
                            type="text"
                            name="Organization Name"
                            id="Organization_Name"
                            value="Near Jordgeton Complex"
                            autoComplete="given-name"
                            disabled
                            className="mt-1 col-span-2 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <input
                            type="text"
                            name="Organization Name"
                            id="Organization_Name"
                            value="Jurong"
                            disabled
                            autoComplete="given-name"
                            className="mt-1 col-span-3 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="grid my-10 grid-flow-row col-span-6 grid-cols-6 sm:col-span-6 justify-end gap-3 items-center">
                        <label
                          htmlFor="Organization_Name"
                          className="block col-end-1 text-sm font-medium text-gray-700 col-span-1"
                        >
                          2.
                        </label>
                        <div className="col-span-5 grid grid-cols-6 gap-2">
                          <input
                            type="text"
                            name="Organization Name"
                            id="Organization_Name"
                            value="3750 S. Watson Rd., Suite 100,"
                            autoComplete="given-name"
                            disabled
                            className="mt-1 col-span-2 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <input
                            type="text"
                            name="Organization Name"
                            id="Organization_Name"
                            value="Near Jordgeton Complex"
                            autoComplete="given-name"
                            disabled
                            className="mt-1 col-span-2 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <input
                            type="text"
                            name="Organization Name"
                            id="Organization_Name"
                            value="Jurong"
                            disabled
                            autoComplete="given-name"
                            className="mt-1 col-span-3 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
