import React, { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Switch from "react-switch";
import InputBox from "../common/input-box";
import { Field, Formik } from "formik";
import {
  validateEmail,
  validatePhone,
  requiredField,
} from "../common/validation";

const AddUser = (props) => {
  const initData = {
    username: "",
    number: "",
    email: "",
    role: "",
  };

  const userFields = [
    {
      key: 1,
      name: "User Name",
      backendMappingName: "username", //For api field(put the name of api parameters ro bind api data)
      placeholder: "",
      type: "text",
      validation: "Please enter user name.",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 2,
      name: "Contact No",
      backendMappingName: "number",
      placeholder: "",
      type: "text",
      validation: "Please enter contact number",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 3,
      name: "Email Address",
      backendMappingName: "email",
      placeholder: "",
      type: "text",
      validation: "Please enter email address.",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
    {
      key: 4,
      name: "Role",
      backendMappingName: "role",
      placeholder: "",
      type: "text",
      validation: "Please enter role.",
      editable: "Yes",
      default: "",
      mandatory: "Yes",
      source: "",
    },
  ];

  const { show, closeModal } = props;
  const [checked, setChecked] = useState(false);

  //Cancel event to close modal
  const cancelButtonRef = useRef(null);

  const handleCheckedChange = (e) => {
    setChecked(e);
  };

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
        <div className="flex items-end justify-center min-h-screen pt-4  pb-20 text-center sm:block sm:p-0">
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
            {/*content*/}
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              {/* <div className="w-6/12 border-0 rounded-lg items-center h-auto relative flex flex-col bg-white outline-none focus:outline-none"> */}
              <div className="mt-4 w-full sm:w-6/12 lg:w-2/5 border-0 rounded-lg items-center h-auto relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  className="items-center p-9 w-full text-xl font-semibold block text-left"
                  style={{ color: "#1A4671" }}
                >
                  Add User
                  <button
                    className="bg-transparent border-0 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span
                      className="bg-transparent h-6 w-6 block outline-none focus:outline-none"
                      style={{ color: " #58666E" }}
                    >
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="w-9/12 xs:w-11/12">
                  <Formik
                    initialValues={initData}
                    onSubmit={(values) => {
                      closeModal();
                    }}
                  >
                    {({ handleSubmit, values, setFieldValue }) => (
                      <form
                        className="bg-white rounded pb-8"
                        onSubmit={handleSubmit}
                      >
                        <div className="flex gap-5">
                          {userFields.map((item, index) => {
                            return (
                              <>
                                {/* User Name*/}
                                {item.name === "User Name" && (
                                  <div className="md:mb-4 w-9/12">
                                    <label className="font-bold block text-gray-700 text-base mb-2 text-left">
                                      User Name
                                    </label>
                                    <Field
                                      name={item.backendMappingName}
                                      component={InputBox}
                                      type={item.type}
                                      value={
                                        values[item.backendMappingName] || ""
                                      }
                                      validate={requiredField.bind(
                                        this,
                                        item.validation
                                      )}
                                      placeholder={item.placeholder}
                                    />
                                  </div>
                                )}
                                {/* Contact No*/}
                                {item.name === "Contact No" && (
                                  <div className="mb-4 w-9/12">
                                    <label className="font-bold block text-gray-700 text-base mb-2 text-left">
                                      Contact No
                                    </label>
                                    <Field
                                      name={item.backendMappingName}
                                      component={InputBox}
                                      type={item.type}
                                      value={
                                        values[item.backendMappingName] || ""
                                      }
                                      validate={validatePhone.bind(
                                        this,
                                        item.validation
                                      )}
                                      placeholder={item.placeholder}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>

                        <div className="flex gap-5">
                          {userFields.map((item, index) => {
                            return (
                              <>
                                {/* User Name*/}
                                {item.name === "Email Address" && (
                                  <div className="mb-4 w-9/12">
                                    <label className="font-bold block text-gray-700 text-base mb-2 text-left">
                                      Email Address
                                    </label>
                                    <Field
                                      name={item.backendMappingName}
                                      component={InputBox}
                                      type={item.type}
                                      value={
                                        values[item.backendMappingName] || ""
                                      }
                                      validate={validateEmail.bind(
                                        this,
                                        item.validation
                                      )}
                                      placeholder={item.placeholder}
                                    />
                                  </div>
                                )}
                                {/* Contact No*/}
                                {item.name === "Role" && (
                                  <div className="mb-4 w-9/12">
                                    <label className="font-bold block text-gray-700 text-base mb-2 text-left">
                                      Role
                                    </label>
                                    <Field
                                      name={item.backendMappingName}
                                      component={InputBox}
                                      type={item.type}
                                      value={
                                        values[item.backendMappingName] || ""
                                      }
                                      validate={requiredField.bind(
                                        this,
                                        item.validation
                                      )}
                                      placeholder={item.placeholder}
                                    />
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </div>

                        <div className="flex">
                          {/* Application Access */}
                          <div className="my-4">
                            <label
                              className="block mb-2 font-bold text-base"
                              htmlFor="applicationAccess"
                            >
                              Application Access
                            </label>
                            <div className="text-left">
                              <Switch
                                onChange={(e) => handleCheckedChange(e)}
                                checked={checked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                onHandleColor="#FFFFFF"
                                onColor="#1A4671"
                                height={22}
                                width={40}
                                handleDiameter={12}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-5">
                          {/* PAN Access */}
                          <div className="mb-4 w-9/12">
                            <label
                              className="block text-gray-700 text-base font-bold md:mb-2 w-full text-left"
                              htmlFor="panAccess"
                            >
                              PAN Access
                            </label>
                            <div className="relative">
                              <select
                                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="panAccess"
                              >
                                <option>FLKSP8394P</option>
                              </select>
                            </div>
                          </div>
                          {/* GST Access */}
                          <div className="mb-4 w-9/12">
                            <label
                              className="block text-gray-700 text-base font-bold md:mb-2 w-full text-left"
                              htmlFor="gstAccess"
                            >
                              GST Access
                            </label>
                            <div className="relative">
                              <select
                                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="gstAccess"
                              >
                                <option>36SS3473843HT79</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex md:mt-12 justify-end my-5">
                          <button
                            className="text-base font-semibold border px-10 py-3 rounded-lg focus:outline-none focus:shadow-outline"
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
                            className="text-base font-semibold border px-10 py-3 rounded-lg focus:outline-none focus:shadow-outline ml-2"
                            type="button"
                            style={{
                              backgroundColor: "#474186",
                              color: "#FFFFFF",
                            }}
                            onClick={() => {
                              
                              handleSubmit();
                            }}
                          >
                            Create
                          </button>
                        </div>

                        {/*footer*/}
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddUser;
