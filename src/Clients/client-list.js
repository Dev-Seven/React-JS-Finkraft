import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import Edit from "../assets/svg/edit.svg";
import Filter from "../assets/svg/filter.svg";
import File from "../assets/svg/file.svg";
import Email from "../assets/svg/email.svg";
import calendar from "../assets/svg/calendar.svg";
import GSTLogin from "../User-Dashboard/gst-login";
import MailAcknowledg from "./mail-acknowledgment";
import Table from "../common/table";
import Navbar from "../Routing/navbar";

const client = [
  {
    name: "Aurpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    totalSales: "Rs. 10,56,000",
    statusPending: false,
    action: true,
  },
  {
    name: "Burpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 4,
    totalSales: "Rs. 10,56,000",
    statusPending: true,
    action: true,
  },
  {
    name: "Curpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 10,
    totalSales: "Rs. 56,000",
    statusPending: false,
    action: true,
  },
  {
    name: "Durpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    totalSales: "Rs. 12,56,000",
    statusPending: false,
    action: true,
  },
  {
    name: "Eurpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 4,
    totalSales: "Rs. 10,70,000",
    statusPending: false,
    action: true,
  },
  {
    name: "Furpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 6,
    totalSales: "Rs. 10,50,000",
    statusPending: true,
    action: true,
  },
  {
    name: "Furpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 8,
    totalSales: "Rs. 10,56,000",
    statusPending: true,
    action: true,
  },
  {
    name: "Furpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 9,
    totalSales: "Rs. 10,56,000",
    statusPending: true,
    action: true,
  },
  {
    name: "Furpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 13,
    totalSales: "Rs. 10,56,000",
    statusPending: true,
    action: true,
  },
  {
    name: "Furpleplum Digital",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 20,
    totalSales: "Rs. 10,56,000",
    statusPending: true,
    action: true,
  },
];

const button =
  "font-sans font-semibold lg:text-lg sm:text-xs md:text-sm rounded lg:h-12 sm:h-8 md:h-10 px-6";
export default function ClientList() {
  const [mailMode, setMailMode] = useState(false);
  const [filteredData, setFilteredData] = useState(client);
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const nav = useHistory();

  const columns = [
    {
      Header: "Client Name",
      accessor: "name", // accessor is the "key" in the data
    },
    {
      Header: "PAN No",
      accessor: "pan",
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
      Header: "Total Sales(From R1)",
      accessor: "totalSales",
    },
    {
      Header: "Status",
      accessor: "statusPending",
      Cell: ({ cell: { value } }) => (
        <span className="flex text-left justify-evenly">
          <div
            className="mr-3 text-left lg:mr-0"
            style={{
              color: value ? "#CC7600" : "#00860B",
            }}
          >
            {value ? "Pending" : "Sent"}
          </div>
          <button
            className={
              "font-sans font-semibold rounded text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-sm sm:h-8 md:h-12 block border border-current px-5"
            }
            type="button"
            style={{
              color: "#474186",
              borderColor: "#474186",
            }}
          >
            {value ? "Send Acknowlegement" : "Send Again"}
          </button>
        </span>
      ),
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ cell: { value } }) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              nav.push("/clientEdit");
            }}
            className="text-indigo-600 hover:text-indigo-900"
          >
            <img src={Edit} alt="edit"></img>
          </button>
          <button
            onClick={() => setMailMode(true)}
            className="text-indigo-600 hover:text-indigo-900"
          >
            <img src={Email} alt="Email"></img>
          </button>
        </div>
      ),
    },
  ];

  const searchData = (e) => {
    let reqData = [];
    if (e.target.value !== "") {
      client.map((user, index) => {
        let status = user.statusPending ? "pending" : "sent";
        if (
          user.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 ||
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

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {mailMode ? (
          <MailAcknowledg open={() => setMailMode(false)} />
        ) : (
          <div className="flex flex-col mx-3 sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9">
      <div className="px-10 pt-3 pb-10 container-shadow">
            {/* Heading */}
            <div className="flex-row justify-between mt-5 2xl:flex xl:flex lg:flex md:flex fon">
              <div className="flex items-center gap-1 mx-4 font-sans xs:mb-4 sm:mb-4 lg:mb-0">
                <div className="p-3 bg-gray-300 bg-cover rounded-full">
                  {" "}
                  <img
                    src={calendar}
                    className="text-white max-w-none"
                    alt="calendar"
                  />
                </div>
                <div className="flex-col">
                  <div style={{ fontSize: 9, color: "#525353" }}>
                    FISCAL YEAR
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#2F2D51" }}
                  >
                    2020-2021
                  </div>
                </div>
              </div>
              <div className="gap-2 md:flex lg:flex xl:flex 2xl:flex lg:mr-4">
                <button
                  className="w-full h-10 px-6 mb-4 font-sans text-xs font-semibold rounded md:w-5/6 sm:text-xs sm:h-8 md:text-sm md:h-10 lg:text-base lg:h-12 xl:text-base xl:h-12 2xl:text-base 2xl:h-12 "
                  type="button"
                  style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
                  onClick={openModal}
                >
                  Link with GST Portal
                </button>
                <GSTLogin
                  closeModal={closeModal}
                  show={show}
                  modalName="gstLogin"
                />

                {/* <Link to="#"> */}
                <button
                  className="w-full h-10 px-6 mb-4 font-sans text-xs font-semibold rounded md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-4/6 sm:text-xs sm:h-8 md:text-sm md:h-10 lg:text-base lg:h-12 xl:text-base xl:h-12 2xl:text-base 2xl:h-12"
                  type="button"
                  onClick={() => {
                    nav.push("/clientAdd");
                  }}
                  style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
                >
                  Add Clients
                </button>
                {/* </Link> */}

                <div className="flex items-center justify-between w-full h-12 mb-4 bg-white border border-gray-300 rounded md:h-10 lg:h-12 xl:h-12 2xl:h-12 2xl:w-full xl:w-full lg:w-5/6 md:w-4/6 sm:px-2 lg:px-3">
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
                <Link to="">
                  <button
                    className={button + "flex border border-current px-5"}
                    type="button"
                    style={{ color: "#4B5660", borderColor: "#D9D9D9" }}
                  >
                    <span className="flex gap-2">
                      Sort <img src={Filter} alt="" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Dashboard Count */}
            <div className="my-2 border border-separate border-gray-400 rounded-lg lg:flex xl:flex 2xl:flex md:flex lg:gap-24 gap-36 md:gap-8 xl:gap-36">
              <div className="flex items-center justify-center gap-1 px-20 py-6 mb-5 leading-tight lg:mb-0 shape md:mb-0">
                <img src={File} alt="File" />
                <div className="grid text-lg text-white">Client Summary</div>
              </div>
              <div className="self-center px-6 mb-5 bg-white lg:mb-0 md:mb-0">
                <span className="flex items-center gap-1 font-sans">
                  <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                    {" "}
                    <img src={File} alt="File" />
                  </div>
                  <div className="flex-col">
                    <div style={{ fontSize: 9, color: "#525353" }}>
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
              <div className="self-center px-6 mb-5 bg-white md:mb-0 lg:mb-0">
                <span className="flex items-center gap-1 font-sans">
                  <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                    {" "}
                    <img src={File} alt="File" />
                  </div>
                  <div className="flex-col">
                    <div style={{ fontSize: 9, color: "#525353" }}>
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
              <div className="self-center px-6 mb-5 bg-white lg:mb-0 md:mb-0">
                <span className="flex items-center gap-1 font-sans">
                  <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                    {" "}
                    <img src={File} alt="File" />
                  </div>
                  <div className="flex-col">
                    <div style={{ fontSize: 9, color: "#525353" }}>Pending</div>
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

            {/* Table */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle lg:py-0 sm:px-6 lg:px-8">
                <div className=" sm:rounded-lg">
                  <Table
                    data={filteredData}
                    columns={columns}
                    checkBox={true}
                    pagination={true}
                    rowSelection={true}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </>
  );
}
