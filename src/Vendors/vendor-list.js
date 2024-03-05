import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import Filter from "../assets/svg/filter.svg";
import File from "../assets/svg/file.svg";
import Email from "../assets/svg/email.svg";
import calendar from "../assets/svg/calendar.svg";
import caretDownIcon from "../assets/images/caret-down.png";
import caretUpIcon from "../assets/images/caret-up.png";
import ReactSpeedometer from "react-d3-speedometer";
import Table from "../common/table";
import Navbar from "../Routing/navbar";
// import GSTLogin from "../User-Dashboard/gst-login";

//Static data object for table
const vendor = [
  {
    name: "Travel Input Services",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    gst: 64,
    totalSales: "Rs. 10,56,000",
    isEligible: true,
    statusRecieved: false,
    action: true,
  },
  {
    name: "Shopelect",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 4,
    gst: 72,
    totalSales: "Rs. 10,56,000",
    isEligible: true,
    statusRecieved: true,
  },
  {
    name: "Bottoms Services",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    gst: 54,
    totalSales: "Rs. 10,56,000",
    isEligible: true,
    statusRecieved: true,
  },
  {
    name: "December Services",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 3,
    gst: 85,
    totalSales: "Rs. 10,56,000",
    isEligible: false,
    statusRecieved: true,
  },
  {
    name: "Bottoms Services",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 1,
    gst: 85,
    totalSales: "Rs. 10,56,000",
    isEligible: false,
    statusRecieved: true,
  },
  {
    name: "Shopelect",
    pan: "FKLPS8844T",
    email: "john@gmail.com",
    mobileNo: "8457834993",
    noOfcontacts: 1,
    gst: 65,
    isEligible: false,
    totalSales: "Rs. 10,56,000",
    statusRecieved: true,
  },
];

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
    Header: "Total Purchases",
    accessor: "totalSales",
  },
  {
    Header: "E-Invoicing",
    accessor: "isEligible",
  },
  {
    Header: "GST Score",
    accessor: "gst",
  },
  {
    id: "expander", // Make sure it has an ID
    Header: "Status",
    accessor: "statusRecieved",
    Cell: ({ data, row }) => {
      return (
        <span className="flex items-center justify-between gap-2 ">
          <div
            className=""
            style={{
              color: data.statusRecieved ? "#00860B" : "#CC7600",
            }}
          >
            {data.statusRecieved ? "Recieved" : "Not Recieved"}
          </div>

          <button
            className={
              "font-sans gap-2 font-semibold text-sm rounded sm:text-xs md:text-sm lg:text-lg flex border border-current px-3"
            }
            type="button"
            style={{
              color: "#474186",
              borderColor: "#474186",

              marginRight: data.statusRecieved ? 0 : 28,
            }}
          >
            {data.statusRecieved ? "View" : "Remind"}
          </button>

          <div
            className="flex items-center justify-between gap-2 "
            style={{
              paddingRight: data.statusRecieved ? 0 : 12,
            }}
          ></div>
        </span>
      );
    },
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ data, row }) => (
      <div className="flex gap-2">
        <button href="#" className="text-indigo-600 hover:text-indigo-900">
          <img src={Email} alt="Email"></img>
        </button>
        <button
          {...row.getToggleRowExpandedProps()}
          // onClick={() => {
          //   setShow(!show);
          // }}
          className="w-4 h-4 text-indigo-600 hover:text-indigo-900"
        >
          <img src={row.isExpanded ? caretUpIcon : caretDownIcon} alt="menu" />
        </button>
      </div>
    ),
  },
];

const button =
  "font-sans font-semibold lg:text-lg sm:text-xs md:text-sm rounded lg:h-12 sm:h-8 md:h-10 px-6";

export default function VendorList() {
  const [filteredData, setFilteredData] = useState(vendor);
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const nav = useHistory();

  const searchData = (e) => {
    let reqData = [];
    if (e.target.value !== "") {
      vendor.map((user, index) => {
        let status = user.statusRecieved ? "pending" : "sent";
        if (
          user.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0 ||
          status.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        ) {
          reqData.push(vendor[index]);
          return true;
        } else return false;
      });
      if (reqData.length > 0) {
        setFilteredData(
          reqData.filter((user) => {
            if (user) return true;
            return false;
          })
        );
      } else {
        setFilteredData(vendor);
      }
    } else {
      reqData = [];
      setFilteredData(vendor);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-9">
        {/* Heading */}
        <div className="flex-row justify-between mt-5 2xl:flex xl:flex lg:flex md:flex">
          <div className="flex items-center gap-1 mx-4 font-sans xs:mb-4 sm:mb-4 lg:my-0 xl:my-0 2xl:my-0 ">
            <div className="p-3 bg-gray-300 bg-cover rounded-full">
              {" "}
              <img
                src={calendar}
                className="text-white max-w-none"
                alt="calendar"
              />
            </div>
            <div className="flex-col">
              <div style={{ fontSize: 12, color: "#525353" }}>FISCAL YEAR</div>
              <div
                className="text-sm font-semibold"
                style={{ color: "#2F2D51" }}
              >
                2020-2021
              </div>
            </div>
          </div>
          <div className="gap-2 md:flex lg:flex xl:flex 2xl:flex">
            <button
              className="w-full h-10 px-3 mb-4 font-sans text-xs font-semibold rounded sm:text-xs sm:h-8 md:text-sm md:h-10 lg:text-base lg:h-12 xl:text-base xl:h-12 2xl:text-base 2xl:h-12 "
              type="button"
              style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
              //onClick={openModal}
            >
              Download from GST Portal
            </button>
            {/* <GSTLogin
              closeModal={closeModal}
              show={show}
              modalName="gstLogin"
            /> */}

            <button
              className="w-full h-10 px-6 mb-4 font-sans text-xs font-semibold rounded md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-4/6 sm:text-xs sm:h-8 md:text-sm md:h-10 lg:text-base lg:h-12 xl:text-base xl:h-12 2xl:text-base 2xl:h-12"
              //onClick={() => nav.push("/vendorAdd")}
              style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
            >
              Add Vendors
            </button>

            <div className="flex items-center justify-between w-full h-12 mb-4 bg-white border border-gray-300 rounded md:h-10 lg:h-12 xl:h-12 2xl:h-12 2xl:w-full xl:w-full lg:w-5/6 sm:w-4/6 sm:px-2 lg:px-3">
              <input
                type="text"
                className="w-full border-0 border-none outline-none h-5/6"
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
                  Sort <img src={Filter} alt="filter" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        {/* Dashboard Count */}
        <div className="my-2 border border-separate border-gray-400 rounded-lg md:flex lg:flex xl:flex 2xl:flex lg:w lg:mx-5 gap-36 md:gap-4 lg:gap-36">
          <div className="flex items-center justify-center gap-1 px-20 py-6 mb-5 leading-tight md:mb-0 lg:mb-0 shape">
            <img src={File} alt="File" />
            <div className="grid text-lg text-white">Vendors Summary</div>
          </div>
          <div className="self-center px-6 mb-5 bg-white md:mb-0 lg:mb-0">
            <span className="flex items-center gap-1 font-sans">
              <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                {" "}
                <img src={File} alt="File" />
              </div>
              <div className="flex-col">
                <div style={{ fontSize: 9, color: "#525353" }}>
                  Total No of Vendors
                </div>
                <div className="text-sm font-bold" style={{ color: "#2F2D51" }}>
                  180
                </div>
              </div>
            </span>
          </div>
          <div className="self-center px-6 mb-5 bg-white md:mb-0 lg:mb-0 ">
            <span className="flex items-center gap-1 font-sans">
              <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                {" "}
                <img src={File} alt="File" />
              </div>
              <div className="flex-col">
                <div style={{ fontSize: 9, color: "#525353" }}>
                  Acknowledgements Received
                </div>
                <div className="text-sm font-bold" style={{ color: "#2F2D51" }}>
                  105
                </div>
              </div>
            </span>
          </div>
          <div className="self-center px-6 mb-5 bg-white md:mb-0 lg:mb-0 ">
            <span className="flex items-center gap-1 font-sans">
              <div className="px-3 py-2 bg-gray-300 bg-cover rounded-full">
                {" "}
                <img src={File} alt="File" />
              </div>
              <div className="flex-col">
                <div style={{ fontSize: 9, color: "#525353" }}>
                  Not Received
                </div>
                <div className="text-sm font-bold" style={{ color: "#2F2D51" }}>
                  75
                </div>
              </div>
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <Table
              data={filteredData}
              columns={columns2}
              pagination={true}
              rowSelection={true}
              collapseComponent={(row) => <TableRow data={row} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function TableRow(props) {
  const data = props.data.row;

  return (
    <tr>
      <td colSpan="9">
        <div className="flex w-full p-10">
          <table className="table">
            <thead className="">
              <th
                className="p-3 font-sans text-lg font-semibold text-left"
                style={{ color: "#585858" }}
              >
                Fiiling Type
              </th>
              <th
                className="p-3 font-sans text-lg font-semibold"
                style={{ color: "#585858" }}
              >
                Months of default
              </th>
              <th
                className="p-3 font-sans text-lg font-semibold"
                style={{ color: "#585858" }}
              >
                Average delay in days
              </th>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>GSTR1</td>
                <td>4</td>
                <td>12</td>
              </tr>
              <tr>
                <td>GSTR3B</td>
                <td>3</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>

          <div className="mx-8">
            <div
              className="my-2 font-sans text-lg font-semibold"
              style={{ color: "#4B5660" }}
            >
              Filing Frequency
            </div>
            <div
              className="my-2 font-sans font-semibold"
              style={{ fontSize: 22, color: "#474186" }}
            >
              Monthly
            </div>
          </div>

          <div className="mx-auto text-center">
            <ReactSpeedometer
              width={337}
              height={200}
              needleHeightRatio={0.5}
              value={(data.gst / 100) * 1000}
              segments={4}
              segmentColors={["#FE5D5B", "#F9BB32", "#41AD86", "#018254"]}
              currentValueText={`${data.gst}`}
              customSegmentLabels={[
                {
                  text: "Less than 30%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                  fontSize: 12,
                },
                {
                  text: "30-50%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                },
                {
                  text: "50-75%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                },
                {
                  text: "75-100%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                },
              ]}
              ringWidth={90}
              needleTransitionDuration={3333}
              needleTransition="easeElastic"
              needleColor={"#BFBFBF"}
              textColor={"#BFBFBF"}
            />

            <div
              className="font-sans text-lg font-semibold"
              style={{ color: "#585858" }}
            >
              Overall GST Score
            </div>
          </div>
          <div className="mx-auto text-center">
            <ReactSpeedometer
              width={337}
              height={200}
              needleHeightRatio={0.5}
              value={(data.gst / 100) * 1000}
              segments={4}
              segmentColors={["#FE5D5B", "#F9BB32", "#41AD86", "#018254"]}
              currentValueText={`${data.gst}`}
              customSegmentLabels={[
                {
                  text: "Less than 30%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                  fontSize: 12,
                },
                {
                  text: "30-50%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                },
                {
                  text: "50-75%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                },
                {
                  text: "75-100%",
                  position: "INSIDE",
                  color: "#FFFFFF",
                },
              ]}
              ringWidth={90}
              needleTransitionDuration={3333}
              needleTransition="easeElastic"
              needleColor={"#BFBFBF"}
              textColor={"#BFBFBF"}
            />
            <div
              className="font-sans text-lg font-semibold "
              style={{ color: "#585858" }}
            >
              Client Specific GST Score
            </div>
          </div>
          <div>
            <div className="justify-center p-10">
              <div className="flex items-center gap-2 my-2 ml-12">
                <div
                  className="w-5 rounded-xl"
                  style={{ height: 10, backgroundColor: "#FE5D5B" }}
                ></div>
                <div
                  className="font-sans text-lg font-semibold"
                  style={{ color: "#585858" }}
                >
                  Hold Payment
                </div>
              </div>

              <div className="flex items-center gap-2 my-2 ml-12">
                <div
                  className="w-5 rounded-xl"
                  style={{ height: 10, backgroundColor: "#F9BB32" }}
                ></div>

                <div
                  className="font-sans text-lg font-semibold"
                  style={{ color: "#585858" }}
                >
                  Hold GST
                </div>
              </div>

              <div className="flex items-center gap-2 my-2 ml-12">
                <div
                  className="w-5 rounded-xl"
                  style={{ height: 10, backgroundColor: "#41AD86" }}
                ></div>
                <div
                  className="font-sans text-lg font-semibold"
                  style={{ color: "#585858" }}
                >
                  Compliant
                </div>
              </div>
              <div className="flex items-center gap-2 my-2 ml-12">
                <div
                  className="w-5 rounded-xl"
                  style={{ height: 10, backgroundColor: "#018254" }}
                ></div>
                <div
                  className="font-sans text-lg font-semibold"
                  style={{ color: "#585858" }}
                >
                  Excellent
                </div>
              </div>
            </div>
            <div
              className="self-end font-sans text-base font-normal"
              style={{ color: "#47B553" }}
            >
              <Link to="/vendorDetails">
                <u className="self-end font-sans text-base font-normal">
                  Click here to view detailed report
                </u>{" "}
              </Link>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
