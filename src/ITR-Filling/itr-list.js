import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import Edit from "../assets/svg/edit.svg";
import Table from "../common/table";
import Navbar from "../Routing/navbar";

//Static data object for client table

const client = [
  {
    pan: "FKLPS8844T",
    assesmentYear: "2021 - 2022",
    filingDate: "",
    AckNo: "",
    dueDate: "",
    status: true,
    action: "",
  },
  {
    pan: "FKLPS8844T",
    assesmentYear: "2020 - 2021",
    filingDate: "4 Oct 20",
    AckNo: "654646353454545",
    dueDate: "",
    status: false,
    action: "",
  },
  {
    pan: "FKLPS8844T",
    assesmentYear: "2019 - 2020",
    filingDate: "4 Sep 19",
    AckNo: "576743453534546",
    dueDate: "",
    status: false,
    action: "",
  },
  // More people...
];
const button =
  "font-sans font-semibold rounded px-6 text-lg h-10" +
  "sm:text-xs sm:h-12" +
  "md:text-sm md:h-10" +
  "lg:text-lg lg:h-12" +
  "xl:text-lg xl:h-12";

export default function ITRList({ showBoard }) {
  const columns1 = [
    {
      Header: "PAN",
      accessor: "pan", // accessor is the "key" in the data
    },
    {
      Header: " Assessment Year",
      accessor: "assesmentYear",
    },
    {
      Header: " Filing Date",
      accessor: "filingDate",
    },
    {
      Header: " Acknowledgement No",
      accessor: "AckNo",
    },
    {
      Header: "Due Date",
      accessor: "dueDate",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ cell: { value } }) => (
        <div
          className="text-left"
          style={{
            color: value ? "#CC7600" : "#00860B",
          }}
        >
          {value ? "Pending" : "Sent"}
        </div>
      ),
    },
    {
      Header: "",
      accessor: "action",
      Cell: ({ cell: { value } }) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {}}
            className="text-indigo-600 hover:text-indigo-900"
          >
            <img src={Edit} alt="edit"></img>
          </button>
        </div>
      ),
    },
  ];

  const nav = useHistory();
  const [filteredData, setFilteredData] = useState(client);

  const searchData = (e) => {
    let reqData = [];
    if (e.target.value !== "") {
      client.map((user, index) => {
        let status = user.statusPending ? "pending" : "sent";
        if (
          user.pan.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 ||
          status.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        ) {
          reqData.push(client[index]);
          return true;
        }
        return false;
      });
      if (reqData.length > 0) {
        setFilteredData(
          reqData.filter((user) => {
            if (user) return true;
            return false;
          })
        );
      } else {
        setFilteredData(client);
      }
    } else {
      reqData = [];
      setFilteredData(client);
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="flex flex-col mx-3 sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9">
      <div className="container-shadow px-10 pb-10">
        <div className="flex-row justify-between mt-5 2xl:flex xl:flex lg:flex md:flex">
          <div
            className="flex items-center gap-1 mx-4 mb-4 font-sans text-lg font-semibold sm:mb-4 md:mb-0 lg:mx-0 xl:mx-0 2xl:mx-0 "
            style={{ color: "#222222" }}
          >
            ITR Filing
          </div>
          <div className="gap-2 lg:flex xl:flex 2xl:flex md:flex">
            <button
              className="w-full h-10 px-6 mb-4 font-sans text-xs font-semibold rounded md:mb-0 sm:text-xs sm:h-8 md:text-sm md:h-10 lg:text-base lg:h-12 xl:text-base xl:h-12 2xl:text-base 2xl:h-12 "
              type="button"
              style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
              onClick={() => {
                nav.push("/itrViewAck");
              }}
            >
              View Acknowledgment
            </button>

            <button
              className="w-full h-10 px-6 mb-4 font-sans text-xs font-semibold rounded md:w-5/6 lg:w-4/6 sm:text-xs sm:h-8 md:text-sm md:h-10 lg:text-base lg:h-12 xl:text-base xl:h-12 2xl:text-base 2xl:h-12"
              type="button"
              onClick={() => {
                nav.push("/itrAddFiling");
              }}
              style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
            >
              Add Filing
            </button>

            <div className="flex items-center justify-between w-full h-12 mb-4 bg-white border border-gray-300 rounded md:h-10 lg:h-12 2xl:w-full xl:w-full lg:w-5/6 sm:px-2 lg:px-3">
              <input
                type="text"
                className="w-full border-0 border-none outline-none md:h-5/6"
                placeholder="Search by ID, Name, Status"
                onChange={(e) => searchData(e)}
              />
              <div className="">
                <SearchIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle lg:py-0 sm:px-6 lg:px-8">
            <Table
              data={filteredData}
              columns={columns1}
              checkBox={true}
              pagination={true}
              rowSelection={true}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
