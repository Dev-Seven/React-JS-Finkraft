import React, { useState } from "react";
import Edit from "../assets/svg/edit.svg";
import Navbar from "../Routing/navbar";
import { Link } from "react-router-dom";
import AddOrganisation from "./add-organisation";
import { Formik } from "formik";

export default function OrganizationSetting() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const initData = {
    organization: "",
    pan: "",
    companyAddress: "",
    companyAddress1: "",
    state: "",
    country: "",
    pincode: "",
    number: "",
    fax: "",
    website: "",
    companyId: "",
    date: "",
    primaryEmail: "",
    taxId: "",
    taxPayer: "",
    hsnCode: "",
    nob: "",
    directors: "",
    director1: "",
    directorId1: "",
    director2: "",
    directorId2: "",
  };

  // //Dynamic fields
  // const organisationSettingsFields = [
  //   {
  //     key: 1,
  //     name: "Organization Name",
  //     backendMappingName: "name", //For api field(put the name of api parameters ro bind api data)
  //     type: "text",
  //     validation: "",
  //     editable: "No",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 2,
  //     name: "PAN No",
  //     backendMappingName: "pan",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 3,
  //     name: "Company Address",
  //     backendMappingName: "companyAddress",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 4,
  //     name: "Company Address1",
  //     backendMappingName: "companyAddress1",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 5,
  //     name: "State",
  //     backendMappingName: "state",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 6,
  //     name: "Country",
  //     backendMappingName: "country",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 7,
  //     name: "Pin Code",
  //     backendMappingName: "pincode",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 8,
  //     name: "Number",
  //     backendMappingName: "number",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 9,
  //     name: "Fax",
  //     backendMappingName: "fax",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 10,
  //     name: "Website",
  //     backendMappingName: "website",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },

  //   {
  //     key: 11,
  //     name: "Company ID (CIN)",
  //     backendMappingName: "companyId",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 12,
  //     name: "Date of Incorporation",
  //     backendMappingName: "corporationDate",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 13,
  //     name: "Primary Email",
  //     backendMappingName: "primaryEmail",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 14,
  //     name: "Tax ID",
  //     backendMappingName: "taxId",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 15,
  //     name: "Tax Payer Type",
  //     backendMappingName: "taxPayerType",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 16,
  //     name: "HSN Code",
  //     backendMappingName: "hsnCode",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 17,
  //     name: "Nature of Business",
  //     backendMappingName: "natureOfBusiness",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 18,
  //     name: "Directors",
  //     backendMappingName: "directors",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  //   {
  //     key: 19,
  //     name: "DirectorId",
  //     backendMappingName: "directorId",
  //     type: "text",
  //     validation: "",
  //     editable: "Yes",
  //     default: "",
  //     mandatory: "Yes",
  //     source: "",
  //   },
  // ];

  return (
    <div className="flex-1">
      <Navbar />
      <div className="grid grid-rows-1 p-8 container-shadow lg:mx-9">
        <div className="justify-between lg:w-3/5 md:flex ">
          <div
            className="grid items-center col-span-3 gap-4 mb-3 md:mb-0 sm:flex"
            style={{ color: "#222222" }}
          >
            <div className="font-sans text-xl font-semibold md:text-2xl">
              Singapore Tyre Company |
            </div>
            <div className="font-sans text-base font-semibold md:text-lg ">
              PAN: FKSLS7368O
            </div>
          </div>
          <Link onClick={openModal}>+ Add Organisation</Link>
          <AddOrganisation
            closeModal={closeModal}
            show={showModal}
            modalName="addOrganisation"
          />
        </div>
        <div className="hidden lg:w-3/5 sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-0">
          <div className="md:grid md:grid-cols-5 md:gap-2">
            <div className="mt-5 md:mt-0 md:col-span-3">
              <Formik
                initialValues={initData}
                onSubmit={(values) => {
                  console.log("values", values);
                }}
              >
                {({ handleSubmit, values, setFieldValue }) => (
                  <form
                    action="#"
                    method="POST"
                    // aria-disabled={true}
                    onSubmit={handleSubmit}
                  >
                    <div className="overflow-hidden sm:rounded-md">
                      <div className="px-2 py-4 bg-white md:px-4 md:py-5 sm:p-6">
                        <div className="grid gap-2">
                          {/* Organization Name */}
                          <div className="relative items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="organization"
                              className="block text-sm font-medium text-gray-700 lg:col-span-1 "
                            >
                              Organization Name
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="organization"
                              name="organization"
                              onChange={(field, value) => {
                                setFieldValue("organization", value);
                              }}
                              disabled={isEditMode ? false : true}
                              value={values.organization}
                              autoComplete="given-name"
                              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <button
                              className="absolute right-0 col-start-6 lg:col-span-1 justify-self-end -top-4"
                              type="button"
                              onClick={() => setIsEditMode(true)}
                            >
                              <img src={Edit} alt="Edit" />
                            </button>
                          </div>

                          {/* PAN No */}
                          <div className="items-center justify-end grid-flow-col grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="pan"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              PAN No
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="pan"
                              name="pan"
                              onChange={(field, value) => {
                                setFieldValue("pan", value);
                              }}
                              value={values.pan}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* Company Address */}
                          <div className="items-start justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="companyAddress"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Company Address
                            </label>
                            <div className="grid grid-cols-6 col-span-5 gap-2">
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="companyAddress"
                                name="companyAddress"
                                onChange={(field, value) => {
                                  setFieldValue("companyAddress", value);
                                }}
                                value={values.companyAddress}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="companyAddress1"
                                name="companyAddress1"
                                onChange={(field, value) => {
                                  setFieldValue("companyAddress1", value);
                                }}
                                value={values.companyAddress1}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="state"
                                name="state"
                                onChange={(field, value) => {
                                  setFieldValue("state", value);
                                }}
                                value={values.state}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="country"
                                name="country"
                                onChange={(field, value) => {
                                  setFieldValue("country", value);
                                }}
                                value={values.country}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="pincode"
                                name="pincode"
                                onChange={(field, value) => {
                                  setFieldValue("pincode", value);
                                }}
                                value={values.pincode}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="number"
                                name="number"
                                onChange={(field, value) => {
                                  setFieldValue("number", value);
                                }}
                                value={values.number}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="fax"
                                name="fax"
                                onChange={(field, value) => {
                                  setFieldValue("fax", value);
                                }}
                                value={values.fax}
                                disabled={isEditMode ? false : true}
                                // placeholder="Fax"
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="website"
                                name="website"
                                onChange={(field, value) => {
                                  setFieldValue("website", value);
                                }}
                                value={values.website}
                                disabled={isEditMode ? false : true}
                                // placeholder="Website"
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>

                          {/* Company ID (CIN) */}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="companyId"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Company ID (CIN)
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="companyId"
                              name="companyId"
                              onChange={(field, value) => {
                                setFieldValue("companyId", value);
                              }}
                              value={values.companyId}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* Date of Incorporation*/}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="date"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Date of Incorporation
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="date"
                              name="date"
                              onChange={(field, value) => {
                                setFieldValue("date", value);
                              }}
                              value={values.date}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* Primary Email*/}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="primaryEmail"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Primary Email
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="primaryEmail"
                              name="primaryEmail"
                              onChange={(field, value) => {
                                setFieldValue("primaryEmail", value);
                              }}
                              value={values.primaryEmail}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* Tax ID */}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="taxId"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Tax ID
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="taxId"
                              name="taxId"
                              onChange={(field, value) => {
                                setFieldValue("taxId", value);
                              }}
                              value={values.taxId}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* Tax Payer Type */}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="taxPayer"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Tax Payer Type
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="taxPayer"
                              name="taxPayer"
                              onChange={(field, value) => {
                                setFieldValue("taxPayer", value);
                              }}
                              value={values.taxPayer}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* HSN Code */}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="hsnCode"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              HSN Code
                            </label>
                            <input
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="hsnCode"
                              name="hsnCode"
                              onChange={(field, value) => {
                                setFieldValue("hsnCode", value);
                              }}
                              value={values.hsnCode}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {isEditMode && (
                      <>
                        <div className="px-2 py-2 bg-white sm:p-6 md:px-4 md:py-5">
                          {/* Nature of Bussines  */}
                          <div className="items-center justify-end grid-flow-row grid-cols-6 col-span-6 lg:grid sm:col-span-6">
                            <label
                              htmlFor="nob"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Nature of business
                            </label>
                            <textarea
                              style={{
                                backgroundColor: isEditMode
                                  ? "#FFFFFF"
                                  : "#EBEBEB",
                              }}
                              type="text"
                              id="nob"
                              name="nob"
                              onChange={(field, value) => {
                                setFieldValue("nob", value);
                              }}
                              value={values.nob}
                              disabled={isEditMode ? false : true}
                              autoComplete="given-name"
                              className="block w-full col-span-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          {/* Directors */}

                          <div className="items-start justify-end grid-flow-row grid-cols-6 col-span-6 my-4 lg:grid sm:col-span-6">
                            <label
                              htmlFor="directors"
                              className="block col-span-1 text-sm font-medium text-gray-700"
                            >
                              Directors
                            </label>
                            <div className="grid grid-cols-6 col-span-5 gap-2">
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="director1"
                                name="director1"
                                onChange={(field, value) => {
                                  setFieldValue("director1", value);
                                }}
                                value={values.director1}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="directorId1"
                                name="dirctorId1"
                                onChange={(field, value) => {
                                  setFieldValue("directorId1", value);
                                }}
                                value={values.directorId1}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="director2"
                                name="director2"
                                onChange={(field, value) => {
                                  setFieldValue("director2", value);
                                }}
                                value={values.director2}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <input
                                style={{
                                  backgroundColor: isEditMode
                                    ? "#FFFFFF"
                                    : "#EBEBEB",
                                }}
                                type="text"
                                id="directorId2"
                                name="directorId2"
                                onChange={(field, value) => {
                                  setFieldValue("directorId2", value);
                                }}
                                value={values.directorId2}
                                disabled={isEditMode ? false : true}
                                autoComplete="given-name"
                                className="block w-full col-span-6 mt-1 border-gray-300 rounded-md shadow-sm sm:col-span-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center my-5 sm:justify-end md:mt-12">
                          <button
                            className="text-base font-semibold border rounded-lg xs:w-28 xs:h-12 sm:h-14 focus:outline-none focus:shadow-outline"
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
                            className="ml-5 text-base font-semibold border rounded-lg xs:w-28 xs:h-12 sm:h-14 focus:outline-none focus:shadow-outline"
                            type="button"
                            style={{
                              backgroundColor: "#474186",
                              color: "#FFFFFF",
                            }}
                            onClick={handleSubmit}
                          >
                            Save
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                )}
              </Formik>
            </div>

            <div className="flex col-span-2 ">
              <div className="self-center hidden w-px mx-3 bg-gray-300 h-5/6 sm:block "></div>
              <div className="grid w-full grid-rows-3 p-2 sm:px-0 sm:p-0">
                <div className="grid grid-cols-6 row-span-1">
                  <div className="col-span-5 gap-3 md:col-span-6 lg:col-span-5 ">
                    <div
                      style={{ color: "#587293" }}
                      className="text-lg font-medium text-gray-900 md:mx-9"
                    >
                      Upload your company logo to brand your PDF reports
                    </div>
                    <div className="block py-10 pl-6 pr-4 mt-3 text-gray-300 border-2 border-dashed md:mx-9">
                      <div style={{ color: "#707070" }}>
                        Drag here to upload JPG/PNG
                      </div>
                      <div style={{ color: "#236489" }}>
                        Or click here to attach
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-2">
                  <div className="flex justify-between col-span-6 my-4 md:mx-9">
                    <div className="text-lg font-medium text-gray-900">
                      Associated GSTINs
                    </div>
                  </div>
                  <div className="grid items-center justify-end grid-flow-row grid-cols-6 col-span-6 gap-3 my-10 sm:col-span-6 md:mx-9">
                    <label
                      htmlFor="Organization_Name"
                      className="block col-span-1 col-end-1 text-sm font-medium text-gray-700"
                    >
                      1.
                    </label>
                    <div className="grid grid-cols-6 col-span-6 gap-2 sm:col-span-5">
                      <input
                        type="text"
                        name="Organization Name"
                        onChange={() => {}}
                        value="3750 S. Watson Rd., Suite 100,"
                        autoComplete="given-name"
                        disabled
                        className="block w-full col-span-6 mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm sm:col-span-3 md:col-span-6 lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <input
                        type="text"
                        name="Organization Name"
                        onChange={() => {}}
                        value="Near Jordgeton Complex"
                        autoComplete="given-name"
                        disabled
                        className="block w-full col-span-6 mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm sm:col-span-3 md:col-span-6 lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <input
                        type="text"
                        name="Organization Name"
                        onChange={() => {}}
                        value="Jurong"
                        disabled
                        autoComplete="given-name"
                        className="block w-full col-span-6 mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm sm:col-span-3 md:col-span-6 lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid items-center justify-end grid-flow-row grid-cols-6 col-span-6 gap-3 my-10 sm:col-span-6 md:mx-9">
                    <label
                      htmlFor="Organization_Name"
                      className="block col-span-1 col-end-1 text-sm font-medium text-gray-700"
                    >
                      2.
                    </label>
                    <div className="grid grid-cols-6 col-span-6 gap-2 sm:col-span-5">
                      <input
                        type="text"
                        name="Organization Name"
                        onChange={() => {}}
                        value="3750 S. Watson Rd., Suite 100,"
                        autoComplete="given-name"
                        disabled
                        className="block w-full col-span-6 mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm sm:col-span-3 md:col-span-6 lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <input
                        type="text"
                        name="Organization Name"
                        onChange={() => {}}
                        value="Near Jordgeton Complex"
                        autoComplete="given-name"
                        disabled
                        className="block w-full col-span-6 mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm sm:col-span-3 md:col-span-6 lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <input
                        type="text"
                        name="Organization Name"
                        onChange={() => {}}
                        value="Jurong"
                        disabled
                        autoComplete="given-name"
                        className="block w-full col-span-6 mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm sm:col-span-3 md:col-span-6 lg:col-span-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <button className="md:mx-9">+ Add GSTIN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
