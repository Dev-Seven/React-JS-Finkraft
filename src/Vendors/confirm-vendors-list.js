import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Filter from "../assets/svg/filter.svg";
import File from "../assets/svg/file.svg";
import calendar from "../assets/svg/calendar.svg";
import Navbar from "../Routing/navbar";
import Table from "../common/table";
import Info from "./../assets/images/information.png";

//Static data object for table
const vendor = [
  {
    supplierGST: "45AABCT2223L1ZF",
    supplierName: "Taj Holiday & Resorts",
    invoiceNo: "MM637843",
    invoiceDate: "9 Oct’20, 9:48pm",
    totalInvoiceValue: "Rs. 1,987.00",
    taxableValue: "Rs. 1,987.00",
    centralTax: "Rs. 1,987.00",
    stateTax: "Rs. 1,987.00",
    totalTax: "Rs. 1,987.00",
    filingStatus: "Rs. 1,987.00",
  },
  {
    supplierGST: "36ADECT2223L1ZF",
    supplierName: "Hayatt Holiday & Resorts",
    invoiceNo: "MM637843",
    invoiceDate: "9 Oct’20, 9:48pm",
    totalInvoiceValue: "Rs. 1,987.00",
    taxableValue: "Rs. 1,987.00",
    centralTax: "Rs. 1,987.00",
    stateTax: "Rs. 1,987.00",
    totalTax: "Rs. 1,987.00",
    filingStatus: "Rs. 1,987.00",
  },
  {
    supplierGST: "36HJBCT2223L1ZF",
    supplierName: "Marriott  Holiday & Resorts",
    invoiceNo: "MM637843",
    invoiceDate: "9 Oct’20, 9:48pm",
    totalInvoiceValue: "Rs. 1,987.00",
    taxableValue: "Rs. 1,987.00",
    centralTax: "Rs. 1,987.00",
    stateTax: "Rs. 1,987.00",
    totalTax: "Rs. 1,987.00",
    filingStatus: "Rs. 1,987.00",
  },
  {
    supplierGST: "36AABCT2223L1ZF",
    supplierName: "Maldives Holiday & Resorts",
    invoiceNo: "MM637843",
    invoiceDate: "9 Oct’20, 9:48pm",
    totalInvoiceValue: "Rs. 1,987.00",
    taxableValue: "Rs. 1,987.00",
    centralTax: "Rs. 1,987.00",
    stateTax: "Rs. 1,987.00",
    totalTax: "Rs. 1,987.00",
    filingStatus: "Rs. 1,987.00",
  },
  {
    supplierGST: "354AABCT2223L1ZF",
    supplierName: "Taj Holiday & Resorts",
    invoiceNo: "MM637843",
    invoiceDate: "9 Oct’20, 9:48pm",
    totalInvoiceValue: "Rs. 1,987.00",
    taxableValue: "Rs. 1,987.00",
    centralTax: "Rs. 1,987.00",
    stateTax: "Rs. 1,987.00",
    totalTax: "Rs. 1,987.00",
    filingStatus: "Rs. 1,987.00",
  },
  {
    supplierGST: "36VBBCT2223L1ZF",
    supplierName: "Taj Holiday & Resorts",
    invoiceNo: "MM637843",
    invoiceDate: "9 Oct’20, 9:48pm",
    totalInvoiceValue: "Rs. 1,987.00",
    taxableValue: "Rs. 1,987.00",
    centralTax: "Rs. 1,987.00",
    stateTax: "Rs. 1,987.00",
    totalTax: "Rs. 1,987.00",
    filingStatus: "Rs. 1,987.00",
  },
];

const columns2 = [
  {
    Header: "Supplier GSTN",
    accessor: "supplierGST",
  },
  {
    Header: "Supplier Name",
    accessor: "supplierName",
  },
  {
    Header: "Invoice No",
    accessor: "invoiceNo",
  },
  {
    Header: "Invoice Date",
    accessor: "invoiceDate",
  },
  {
    Header: "Total Invoice Value",
    accessor: "totalInvoiceValue",
  },
  {
    Header: "Taxable Value",
    accessor: "taxableValue",
  },
  {
    Header: "Central Tax",
    accessor: "centralTax",
  },
  {
    Header: "State Tax",
    accessor: "stateTax",
  },
  {
    Header: "Total Tax",
    accessor: "totalTax",
  },
  {
    Header: "Filing Status",
    accessor: "filingStatus",
  },
];

const button =
  "w-full text-sm font-sans font-semibold lg:text-base xl:text-base 2xl:text-base sm:text-xs md:text-xs rounded xs:h-12 lg:h-12 sm:h-8 md:h-10 px-3 mb-4 md:mb-0";

export default function ConfirmVendorList() {
  const [filteredData, setFilteredData] = useState(vendor);

  const searchData = (e) => {
    let reqData = [];
    if (e.target.value !== "") {
      vendor.map((user, index) => {
        let status = user.statusRecieved ? "pending" : "sent";
        if (
          user.supplierName
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) >= 0 ||
          user.supplierGST
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) >= 0
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
    <div className="flex-1">
      <Navbar />
      
      <div className="flex flex-col mx-3 sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9">
      <div className="px-6 pt-3 pb-10 container-shadow">
        {/* Heading */}
        <div className="flex-row justify-between my-3 md:flex">
          <div className="flex gap-3 mb-4 md:mb-0">
            <span className="flex items-center gap-1 font-sans md:mx-4">
              <div className="p-3 bg-gray-300 bg-cover rounded-full">
                {" "}
                <img src={calendar} className="text-white " alt="calendar" />
              </div>
              <div className="flex-col">
                <div style={{ fontSize: 9, color: "#525353" }}>FISCAL YEAR</div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "#2F2D51" }}
                >
                  2020-2021
                </div>
              </div>
            </span>
            <span className="flex items-center gap-1 mx-4 font-sans">
              <div className="p-3 bg-gray-300 bg-cover rounded-full">
                {" "}
                <img src={calendar} className="text-white " alt="calendar" />
              </div>
              <div className="flex-col">
                <div style={{ fontSize: 9, color: "#525353" }}>MONTH</div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "#2F2D51" }}
                >
                  March
                </div>
              </div>
            </span>
          </div>
          <div className="gap-2 md:flex md:-mr-28 lg:-mr-16 xl:mr-0">
            <button
              className={button + " md:w-1/5 lg:w-1/4 xl:w-80"}
              type="button"
              style={{
                borderColor: "#EDF0F5",
                backgroundColor: "rgb(56, 167, 7, 0.10)",
                color: "#000000",
                // opacity: "9%",
              }}
              onClick={() => {}}
            >
              <img
                className="inline-block mb-1 mr-2"
                src={Info}
                alt=""
                width="20"
                height="5"
              />
              Connected with GST2A portal.
            </button>
            {/* <GSTLogin
              closeModal={closeModal}
              show={show}
              modalName="gstLogin"
            /> */}

            {/* <Link to="#"> */}
            <button
              className={button + " md:w-1/5 lg:w-1/4 xl:w-48"} 
              type="button"
              onClick={() => {}}
              style={{ backgroundColor: "#474186", color: "#FFFFFF" }}
            >
              View download status
            </button>
            {/* </Link> */}

            <div className="flex items-center justify-between w-full h-12 mb-4 bg-white border border-gray-300 rounded md:mb-0 md:w-40 lg:w-48 xl:w-64 2xl:w-80 sm:px-2 lg:px-3">
              {" "}
              <input
                type="text"
                className="w-5/6 border-0 border-none outline-none"
                placeholder="Search by ID, Name, Status"
                onChange={(e) => searchData(e)}
              />
              <div className="">
                <SearchIcon className="w-5 h-5" />
              </div>
            </div>
            <Link to="">
              <button
                className={button + "flex border border-current"}
                type="button"
                style={{ color: "#4B5660", borderColor: "#D9D9D9" }}
              >
                <span className="flex gap-2 text-base">
                  Sort by <img src={Filter} alt="filter" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="border-gray-200 sm:rounded-lg">
              <Table
                data={filteredData}
                columns={columns2}
                pagination={true}
                rowSelection={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
