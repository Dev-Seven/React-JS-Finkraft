import React, { useState } from "react";
import Edit from "../assets/svg/edit.svg";
import { useHistory, Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import Table from "../common/table";
import Navbar from "../Routing/navbar";

//Static data object for table
const vendor = [
  {
    name: "Purpleplum Digital",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    pan: "FKLPS8844T",
    statusPending: true,
  },
  {
    name: "Shopelect",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 4,
    pan: "FKLPS8844T",
    statusPending: true,
  },
  {
    name: "Bottoms Services",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    pan: "FKLPS8844T",
    statusPending: true,
  },
  {
    name: "December Services",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    pan: "FKLPS8844T",
    statusPending: true,
  },
  {
    name: "Bottoms Services",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 1,
    pan: "FKLPS8844T",
    statusPending: true,
  },
  {
    name: "Shopelect",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 1,
    pan: "FKLPS8844T",
    statusPending: true,
  },
];

export default function AddVendors(props) {
  const [filteredData, setFilteredData] = useState(vendor);
  const nav = useHistory();

  const columns2 = [
    {
      Header: "Vendor Name",
      accessor: "name",
    },
    {
      Header: "Email ID",
      accessor: "email",
    },
    {
      Header: "Mobile No",
      accessor: "mobileNo",
    },
    {
      Header: "No of Contacts",
      accessor: "noOfcontacts",
    },
    {
      Header: "PAN  No",
      accessor: "pan",
    },
    {
      Header: "",
      accessor: "statusPending",
      Cell: ({ cell: { value } }) => (
        <span className="flex items-center text-left justify-evenly ">
          <div className="flex gap-2 text-left">
            <button className="text-indigo-600 hover:text-indigo-900">
              <img src={Edit} alt="edit"></img>
            </button>
          </div>
        </span>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div className="p-4 mx-4 container-shadow lg:grid grid-rows-8 sm:mx-9 sm:p-8 ">
          {/* Upload Clients */}
          <div className="absolute mb-10 rounded-full right-14 xs:m-2 lg:m-4 ring-2 ring-current">
            <XIcon
              className="block w-6 h-6"
              onClick={() => {
                nav.push("/vendorList");
              }}
            />
          </div>
          <div className="flex-row items-center justify-start w-full row-span-2 mb-5 mt-7 sm:mt-3 sm:flex md:mt-0 lg:flex">
            <div className="w-full text-center text-xl sm:text-left lg:w-1/3 xl:w-1/3 2xl:w-1/3 font-sans font-semibold sm:text-2xl my-4 sm:mx-1.5">
              Uploaded Vendors List
            </div>
            <div
              className="flex justify-center w-full rounded-full lg:w-1/3 h-3/4 justify-self-center "
              style={{ backgroundColor: "#EFEFEF" }}
            >
              <span className="flex items-center justify-center gap-5 p-3 font-sans sm:flex lg:flex">
                <span className="flex items-center gap-1">
                  <div
                    className="font-sans text-base font-normal sm:text-lg"
                    style={{ color: "#2A254F" }}
                  >
                    Add Vendors
                  </div>
                </span>

                <div className="divide-x w-5 sm:w-12 bg-gray-300 h-0.5"></div>
                <span className="flex items-center gap-1">
                  <div
                    className="font-sans text-lg font-normal"
                    style={{ color: "#999" }}
                  >
                    Confirm
                  </div>
                </span>
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="row-span-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="border-b border-gray-200 shadow sm:rounded-lg ">
                <Table
                  checkBox={true}
                  data={filteredData}
                  columns={columns2}
                  pagination={true}
                  rowSelection={true}
                />{" "}
              </div>
            </div>
          </div>

          <div class="flex lg:flex lg:flex-row items-center justify-end gap-4 lg:p-8">
            <button
              onClick={() => {
                nav.push("/vendors");
              }}
              class="text-sm sm:text-base font-semibold xs:mt-5 lg:mt-0 w-32 h-11 sm:w-40 rounded-lg focus:outline-none focus:shadow-outline"
              type="button"
              style={{
                backgroundColor: "#fff",
                color: "#2F2D51",
                borderWidth: 2,
                borderColor: "#2F2D51",
              }}
            >
              BACK
            </button>
            <button
              class="text-sm sm:text-base font-semibold xs:mt-5 lg:mt-0 w-40 h-11 sm:w-44 rounded-lg focus:outline-none focus:shadow-outline"
              type="button"
              style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
            >
              PROCEED
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
