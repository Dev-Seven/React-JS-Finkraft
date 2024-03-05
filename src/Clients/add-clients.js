import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import ClientList from "./client-list";
import { XIcon } from "@heroicons/react/outline";
import Browse from "../assets/svg/browse.svg";
import { CheckIcon } from "@heroicons/react/solid";
import { Spinner } from "react-activity";
import Sample from "../assets/Sample_Finkraft.xlsx";
import File from "../assets/svg/file.svg";
import { ExcelRenderer } from "react-excel-renderer";
import Table from "../common/table";
import Navbar from "../Routing/navbar";

const columnHeader = [
  {
    Header: "Client Name",
    accessor: "",
  },
  {
    Header: "Email ID",
    accessor: "",
  },
  {
    Header: "Mobile No",
    accessor: "",
  },
  {
    Header: "PAN No",
    accessor: "",
  },
];

let columnRow = { clientName: "", emailID: "", mobileNo: "", panNo: "" };

const button =
  "font-sans font-semibold lg:text-lg sm:text-xs md:text-sm rounded lg:h-12 sm:h-8 md:h-10 px-6";

export default function AddClients(props) {
  const [showPreview, setShowPreview] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [columnRows, setColumnRows] = useState(columnRow);
  const [error, setError] = useState("");
  const [mapFields, setMapFields] = useState(false);
  const [fileContent, setFileContent] = useState({
    name: "",
    columns: [],
    rows: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false); //By default it should set to false then on button click it should set true and  once you get response from api then it should set false.
  const [validate, setValidate] = useState(false); //To show hide the screens
  const nav = useHistory();

  const readFile = (event) => {
    setError("");
    let cols = [];
    let rows = [];
    var keys = Object.keys(columnRows);

    let fileObj = event.target.files[0];
    if (
      fileObj &&
      fileObj.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
      fileObj.size < parseInt("5242880")
    ) {
      setFileContent({ ...fileContent, name: event.target.files[0].name });

      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else if (resp && resp.rows) {
          cols = resp.rows[0];
          rows = resp.rows.slice(1);
          setFileContent({
            ...fileContent,
            name: event.target.files[0].name,
            columns: cols,
            rows: rows,
          });
        }

        let obj = {};
        keys.forEach((key, i) => {
          // obj[key] = cols[i].replace(" ", "_");
          obj[key] = i;
        });
        setColumnRows(obj);
      });
    } else {
      setError("Please upload XLS file");
    }
  };
  function getTableData() {
    var keys = Object.values(columnRows);
    var mapKeys = Object.keys(columnRows);
    let result = [];

    fileContent.rows.forEach((value) => {
      if (value && value.length > 0) {
        var obj = {};
        mapKeys.forEach((key, i) => (obj[key] = value[keys[i]]));
        result.push(obj);
      }
    });

    setTableData(result);
    columnHeader.forEach((column, i) => {
      column.accessor = mapKeys[i];
    });
    setFileContent({
      name: "",
      columns: [],
      rows: [],
    });
  }

  const mapToFields = () => {
    let values = Object.values(columnRows);
    if (values.length > 0 && fileContent.name !== "") {
      setMapFields(true);
    } else {
      setError("Please upload XLS file");
    }
  };
  const mapToTable = () => {
    let keys = Object.values(columnRows);
    let result = false;

    result = keys.some((element, index) => {
      return keys.indexOf(element) !== index;
    });
    if (result) {
      setError("Duplicate columns are not allowed");
    } else {
      getTableData();
      setShowPreview(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div className="block h-auto p-8 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 sm:grid md:grid lg:grid xl:grid 2xl:grid container-shadow sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9 2xl:mx-9">
          <div className="absolute right-0 m-2 rounded-full sm:right-10 lg:right-14 ring-2 ring-current">
            <XIcon
              className="block w-5 h-5"
              onClick={() => {
                nav.push("/clientList");
              }}
            />
          </div>

          <div className="ml-0 xl:ml-10 2xl:ml-10">
            {validate === false ? (
              <div className="justify-center row-span-1">
                <div
                  className="font-sans font-semibold text-center text-xl sm:text-2xl sm:text-left my-4 mx-1.5"
                  style={{ color: "#222222" }}
                >
                  Upload Clients List
                </div>
                <div
                  className="w-full p-3 sm:w-4/5 md:w-7/12 lg:w-3/6 xl:w-5/12 2xl:w-4/12 rounded-2xl"
                  style={{ backgroundColor: "#EFEFEF" }}
                >
                  <span className="grid items-center justify-center gap-2 font-sans sm:flex md:flex lg:flex xl:flex 2xl:flex">
                    <span className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-theme">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                      <div
                        className="font-sans text-base font-normal sm:text-lg"
                        style={{ color: "#2A254F" }}
                      >
                        Configure
                      </div>
                    </span>
                    <div className="divide-x w-28 sm:w-12 bg-gray-300 h-0.5"></div>
                    <span className="flex gap-2 text-center">
                      <div
                        style={{
                          borderColor: "#2A254F",
                          color: "#2A254F",
                          height: 22,
                          width: 22,
                        }}
                        className="border-2 rounded-full text-xs pt-0.5 mt-0.5"
                      >
                        2
                      </div>
                      <div
                        className="font-sans text-base font-normal sm:text-lg"
                        style={{ color: "#2A254F" }}
                      >
                        Map Fields
                      </div>
                    </span>
                    <div className="divide-x w-28 sm:w-12 bg-gray-300 h-0.5"></div>
                    <span className="flex gap-2 text-center">
                      <div
                        style={{
                          borderColor: "#2A254F",
                          color: "#2A254F",
                          height: 22,
                          width: 22,
                        }}
                        className="border-2 rounded-full text-xs pt-0.5 mt-0.5"
                      >
                        3
                      </div>
                      <div
                        className="font-sans text-base font-normal sm:text-lg"
                        style={{ color: "#2A254F" }}
                      >
                        Preview
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="my-2 border border-separate border-gray-400 rounded-lg md:flex lg:mx-5 md:gap-8 xl:gap-36 gap-36">
                <div className="flex items-center justify-center gap-1 px-12 py-6 mb-5 leading-tight md:mb-0 shape">
                  <img src={File} alt="File" />
                  <div className="grid text-lg text-white">Client Summary</div>
                </div>
                <div className="self-center px-6 mb-5 bg-white md:mb-0">
                  <span className="flex items-center gap-1 font-sans">
                    <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                      {" "}
                      <img src={File} alt="File" />
                    </div>
                    <div className="flex-col">
                      <div style={{ fontSize: 14, color: "#525353" }}>
                        Total No of Clients
                      </div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "#2F2D51" }}
                      >
                        120
                      </div>
                    </div>
                  </span>
                </div>
                <div className="self-center px-6 mb-5 bg-white md:mb-0 ">
                  <span className="flex items-center gap-1 font-sans">
                    <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                      {" "}
                      <img src={File} alt="File" />
                    </div>
                    <div className="flex-col">
                      <div style={{ fontSize: 14, color: "#525353" }}>
                        Acknowledgements Sent
                      </div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "#2F2D51" }}
                      >
                        146
                      </div>
                    </div>
                  </span>
                </div>
                <div className="self-center px-6 mb-5 bg-white md:mb-0 ">
                  <span className="flex items-center gap-1 font-sans">
                    <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                      {" "}
                      <img src={File} alt="File" />
                    </div>
                    <div className="flex-col">
                      <div style={{ fontSize: 14, color: "#525353" }}>
                        Pending
                      </div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "#2F2D51" }}
                      >
                        14
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            )}
            {/* Upload Clients */}
            {mapFields === false ? (
              <div className="grid grid-cols-12 row-span-4 gap-2">
                <div className="col-span-12 col-start-1 pl-2 sm:pl-6 md:pl-6 lg:pl-6 xl:pl-6 2xl:pl-6">
                  <div
                    className="flex mt-10 font-sans text-xl font-semibold"
                    style={{ color: "#525353", opacity: "39%" }}
                  >
                    Bulk Upload
                  </div>
                  <div className="items-center justify-between gap-3 mt-2">
                    <span className="flex items-center gap-2">
                      <a
                        className={
                          "font-sans font-semibold lg:text-lg sm:text-xs md:text-sm rounded lg:h-12 sm:h-12 md:h-10 p-2 border"
                        }
                        style={{
                          color: "#474186",
                          borderColor: "#D9D9D9",
                        }}
                        href={Sample}
                        rel="noreferrer"
                        target="_blank"
                        download="Sample_Finkraft.xlsx"
                      >
                        Sample Download File
                      </a>

                      <div style={{ color: "#58666E", opacity: "46%" }}>
                        Note: Sample file are the plain template without the
                        data
                      </div>
                    </span>
                    <div
                      className="mt-2 text-base font-normal sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
                      style={{ color: "#525353" }}
                    >
                      You can either upload your existing Client master file or
                      use our base template to upload.
                    </div>
                  </div>
                  <div className="grid items-center justify-between gap-2 mt-12">
                    <div
                      className="flex font-sans text-xl font-semibold "
                      style={{ color: "#2A254F" }}
                    >
                      Upload File*
                    </div>
                    <div className="flex rounded-md">
                      <input
                        type="text"
                        name="company_website"
                        id="company_website"
                        className="w-full border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-80 md:w-80 lg:w-80 xl:w-80 2xl:w-80 rounded-l-md sm:text-sm"
                        placeholder={fileContent.name}
                      />
                      <label className="inline-flex items-center gap-2 px-6 text-sm text-gray-500 border cursor-pointer rounded-r-md bg-gray-50">
                        <input
                          type="file"
                          accept={[".xls", ".xlsx"]}
                          onChange={(e) => readFile(e)}
                        />
                        <img src={Browse} alt="Browse" />
                        Browse
                      </label>
                    </div>
                    {error && (
                      <div
                        className="my-1 text-left"
                        style={{ color: "#ff0000" }}
                      >
                        {error}
                      </div>
                    )}
                    <div className="opacity-40" style={{ color: "#58666E" }}>
                      Maximum File Size: 5 MB | File Format: XLS
                    </div>
                  </div>
                </div>
                <div className="flex self-center col-span-12 row-span-1 sm:col-start-6 md:col-start-6 lg:col-start-6 xl:col-start-6 2xl:col-start-6">
                  <button
                    className="text-sm border rounded-lg w-36 h-9 md:text-base md:font-semibold md:w-32 md:h-10 md:rounded-lg focus:outline-none focus:shadow-outline"
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
                    className="ml-3 text-sm rounded-lg w-36 h-9 md:text-base md:font-semibold md:w-32 md:h-10 md:rounded-lg focus:outline-none focus:shadow-outline"
                    type="button"
                    style={{
                      backgroundColor: "#474186",
                      color: "#FFFFFF",
                    }}
                    onClick={() => mapToFields()}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : showPreview === false ? (
              // {/* Map Fields */}

              <div className="grid grid-cols-12 row-span-4 md:gap-1">
                <div className="col-span-12 col-start-1 mt-8">
                  <div className="items-center justify-between gap-3">
                    <span className="items-center block gap-2 sm:flex">
                      <div style={{ color: "#525353" }}>
                        Your Selected File :
                      </div>
                      <div
                        className={"text-lg sm:text-xl"}
                        style={{
                          color: "#474186",
                        }}
                      >
                        {fileContent.name}
                      </div>
                    </span>
                    <div
                      className="my-5 text-lg font-normal sm:text-xl"
                      style={{ color: "#525353" }}
                    >
                      The best match to each field on the selected file have
                      been auto-selected.
                    </div>
                  </div>
                  <div className="items-center justify-between gap-4">
                    <div className="grid w-full gap-4 sm:grid-rows-5 lg:w-3/4 xl:w-1/2">
                      <div className="items-center justify-between hidden grid-flow-row grid-cols-12 sm:flex ">
                        <div
                          className="col-span-6 mb-2 text-xl font-normal tracking-wide uppercase"
                          style={{ color: "#525353" }}
                        >
                          Finkraft Fields
                        </div>
                        <div
                          className="self-center col-span-6 mb-2 text-xl font-normal tracking-wide uppercase mr-28"
                          style={{ color: "#525353" }}
                        >
                          Imported File Headers
                        </div>
                      </div>
                      <div className="items-center justify-between block grid-flow-row grid-cols-12 gap-4 sm:flex">
                        <label
                          className="col-span-5 mb-2 text-base font-semibold tracking-wide md:text-lg "
                          for="grid-state"
                          style={{ color: "#2A254F" }}
                        >
                          Client Name
                        </label>

                        <select
                          className="w-11/12 px-4 py-3 pr-8 mt-2 leading-tight border border-gray-200 rounded appearance-none sm:w-1/2 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                          style={{ color: "#2A254F" }}
                          defaultValue={fileContent.columns[0]}
                          onChange={(e) => {
                            setColumnRows({
                              ...columnRows,
                              clientName: fileContent.columns.indexOf(
                                e.target.value
                              ),
                            });
                          }}
                          placeholder="Client Name"
                        >
                          {fileContent.columns.map((col, i) => {
                            return (
                              <option
                                value={col}
                                defaultValue={fileContent.columns[0]}
                              >
                                {col}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="items-center justify-between block grid-flow-row grid-cols-12 gap-4 sm:flex">
                        <label
                          className="col-span-5 mb-2 text-base font-semibold tracking-wide md:text-lg "
                          for="grid-state"
                        >
                          Email ID
                        </label>

                        <select
                          className="w-11/12 px-4 py-3 pr-8 mt-2 leading-tight border border-gray-200 rounded appearance-none sm:w-1/2 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                          placeholder="Email Id"
                          defaultValue={fileContent.columns[1]}
                          onChange={(e) => {
                            setColumnRows({
                              ...columnRows,
                              emailID: fileContent.columns.indexOf(
                                e.target.value
                              ),
                            });
                          }}
                        >
                          {fileContent.columns.map((col, i) => {
                            return (
                              <option
                                value={col}
                                defaultValue={fileContent.columns[1]}
                              >
                                {col}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="items-center justify-between block grid-flow-row grid-cols-12 sm:flex">
                        <label
                          className="col-span-5 mb-2 text-base font-semibold tracking-wide md:text-lg"
                          for="grid-state"
                        >
                          Mobile No
                        </label>

                        <select
                          className="w-11/12 px-4 py-3 pr-8 mt-2 leading-tight border border-gray-200 rounded appearance-none sm:w-1/2 sm:w1/2 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                          placeholder="Mobile No"
                          defaultValue={fileContent.columns[2]}
                          onChange={(e) => {
                            setColumnRows({
                              ...columnRows,
                              mobileNo: fileContent.columns.indexOf(
                                e.target.value
                              ),
                            });
                          }}
                        >
                          {fileContent.columns.map((col, i) => {
                            return (
                              <option
                                value={col}
                                defaultValue={fileContent.columns[2]}
                              >
                                {col}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="items-center justify-between block grid-flow-row grid-cols-12 sm:flex">
                        <label
                          className="col-span-5 mb-2 text-base font-semibold tracking-wide md:text-lg"
                          for="grid-state"
                        >
                          PAN Number
                        </label>

                        <select
                          className="w-11/12 px-4 py-3 pr-8 mt-2 leading-tight border border-gray-200 rounded appearance-none sm:w-1/2 focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                          placeholder="PAN"
                          defaultValue={fileContent.columns[3]}
                          onChange={(e) => {
                            setColumnRows({
                              ...columnRows,
                              panNo: fileContent.columns.indexOf(
                                e.target.value
                              ),
                            });
                          }}
                        >
                          {fileContent.columns.map((col, i) => {
                            return (
                              <option
                                value={col}
                                defaultValue={fileContent.columns[3]}
                              >
                                {col}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {error && (
                        <div
                          className="my-1 text-left"
                          style={{ color: "#ff0000" }}
                        >
                          {error}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex self-center col-span-12 row-span-1 my-12 sm:my-20 sm:col-start-2 md:col-start-5">
                  <button
                    className="border rounded-lg w-36 h-9 md:text-lg md:font-semibold md:w-32 md:h-11 md:rounded-lg focus:outline-none focus:shadow-outline"
                    type="button"
                    style={{
                      background:
                        "transparent linear-gradient(0deg, #F2F4F7 0%, #FEFFFF 100%) 0% 0% no-repeat padding-box",
                      color: "#354052",
                      borderColor: "#CED0DA",
                    }}
                    onClick={() => {
                      setError("");
                      setMapFields(false);
                    }}
                  >
                    Previous
                  </button>
                  <button
                    className="ml-3 border rounded-lg w-36 h-9 md:text-lg md:font-semibold md:w-32 md:h-11 md:rounded-lg focus:outline-none focus:shadow-outline"
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
                    className="ml-3 rounded-lg w-36 h-9 md:text-lg md:font-semibold md:w-32 md:h-11 md:rounded-lg focus:outline-none focus:shadow-outline"
                    type="button"
                    style={{
                      backgroundColor: "#474186",
                      color: "#FFFFFF",
                    }}
                    onClick={() => {
                      mapToTable();
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Preview Clients */}
                <div className="row-span-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <Table
                      data={tableData}
                      columns={columnHeader}
                      checkBox={true}
                      pagination={true}
                    />
                  </div>
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="flex flex-row items-center justify-end gap-4 p-8">
                    <button
                      onClick={() => {
                        setShowPreview(false);
                      }}
                      className="rounded-lg w-36 h-9 md:text-lg md:font-semibold md:w-32 md:h-11 md:rounded-lg focus:outline-none focus:shadow-outline"
                      type="button"
                      style={{
                        backgroundColor: "#F5F7FA",
                        color: "#2F2D51",
                        borderWidth: 2,
                        borderColor: "#474186",
                      }}
                    >
                      Cancel
                    </button>
                    {validate === false ? (
                      <button
                        onClick={() => {
                          setValidate(true);
                        }}
                        className="rounded-lg w-36 h-9 md:text-lg md:font-semibold md:w-32 md:h-11 md:rounded-lg focus:outline-none focus:shadow-outline"
                        type="button"
                        style={{ backgroundColor: "#474186", color: "#fff" }}
                      >
                        Validate
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setValidate(true);
                          nav.push("/itrAcknowlegmentShared");
                        }}
                        className="rounded-lg w-36 h-9 md:text-lg md:font-semibold md:w-32 md:h-11 md:rounded-lg focus:outline-none focus:shadow-outline"
                        type="button"
                        style={{ backgroundColor: "#474186", color: "#fff" }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
