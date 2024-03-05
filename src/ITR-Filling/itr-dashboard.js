import React, { useState } from "react";
import Navbar from "../Routing/navbar";
import { Link, useHistory } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import background from "../assets/svg/itr-filling-bg.svg";
import Table from "../common/table";

const columns1 = [
  {
    Header: "Assessment Year",
    accessor: "assesmentYear", // accessor is the "key" in the data
  },
  {
    Header: "Filing Date",
    accessor: "filingDate",
  },
  {
    Header: "Acknowledgement No",
    accessor: "AckNo",
  },
];
const columns2 = [
  {
    Header: "Assessment Year",
    accessor: "assesmentYear",
  },
  {
    Header: "Due Date",
    accessor: "dueDate",
  },
  {
    Header: "Acknowledgement No",
    accessor: "AckNo",
  },
];

export default function ITRDashboard() {
  const nav = useHistory();
  //Static data object for filledInfo table
  const filledInfo = [
    {
      assesmentYear: "2019 - 2020",
      filingDate: "4 Oct’20, 6:13pm",
      AckNo: "654646353454545",
    },
    {
      assesmentYear: "2019 - 2020",
      filingDate: "4 Oct’20, 6:13pm",
      AckNo: "654646353454545",
    },
  ];
  //Static data object for dueFilling table
  const dueFilling = [
    {
      assesmentYear: "2020 - 2021",
      dueDate: "4 Sep 20, 5:10am",
      AckNo: "",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex-1 mt-5">
        <div className="grid grid-rows-1 mx-5 mt-5 container-shadow sm:mx-4 lg:mx-9">
          <div className="absolute m-2 mt-10 rounded-full right-8 lg:right-20 ring-2 ring-current">
            <XIcon
              className="z-0 block w-5 h-5"
              onClick={() => {
                nav.push("/itrAddFiling");
              }}
            />
          </div>
          {/* Table */}
          <div className="grid-cols-12 row-span-5 gap-2 lg:grid">
            <div className="grid col-span-7 xs:my-10">
              <div className="overflow-x-auto sm:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden 2xl:overflow-x-hidden">
                <div
                  className="flex items-center w-full gap-2 ml-6 text-left rounded-t xs:my-7 sm:ml-8 lg:ml-20"
                  style={{ color: "#2A254F" }}
                >
                  <p
                    className="text-base font-bold xl:text-xl 2xl:text-2xl"
                    style={{ color: "#222222" }}
                  >
                    Reliance Industries |{" "}
                  </p>
                  <p className="text-base font-bold xl:text-xl 2xl:text-2xl" style={{ color: "#222222" }}>
                    PAN: FKSLS7368O
                  </p>
                </div>

                {/* Table */}
                {/* Filled Information */}
                <p
                  className="ml-6 text-base font-bold xl:text-base 2xl:text-xl sm:ml-8 lg:ml-20"
                  style={{ color: "#2F2D51" }}
                >
                  Filed Information
                </p>
                <div className="mt-1 mb-12">
                  <div className="inline-block min-w-full px-6 py-2 align-middle sm:px-8 lg:px-20">
                    <Table
                      data={filledInfo}
                      columns={columns1}
                      checkBox={false}
                      pagination={false}
                      rowSelection={false}
                    />
                  </div>
                </div>

                {/* Due filling */}
                <p
                  className="ml-6 text-base font-bold xl:text-base 2xl:text-xl sm:ml-8 lg:ml-20"
                  style={{ color: "#2F2D51" }}
                >
                  Due Filling
                </p>
                <div className="mt-1">
                  <div className="inline-block min-w-full px-6 py-2 align-middle sm:px-8 lg:px-20">
                    <Table
                      data={dueFilling}
                      columns={columns2}
                      checkBox={false}
                      pagination={false}
                      rowSelection={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Container with Image */}
            <div className="col-span-5 my-10 text-center lg:px-12">
              <div
                className="h-auto pb-10 pr-12 font-sans text-4xl font-semibold border border-gray-300 lg:w-11/12 pt-14 pl-11 ml-7 mr-7 lg:ml-0 lg:mr-0"
                style={{ backgroundColor: "#F2F0FF" }}
              >
                <div
                  className="mb-8 text-base text-left lg:text-1x1 xl:text-xl 2xl:text-2xl"
                  style={{ color: "#3C4853" }}
                >
                  Use Finkraft to Send declaration to your customers and get it
                  from your vendors
                </div>
                <img
                  className="mx-auto mb-8"
                  src={background}
                  alt="background"
                />
                <div
                  className="font-sans text-base font-light text-justify"
                  style={{ color: "#525353", opacity:"0.5" }}
                >
                  By simply login into our TDS product. We ensure you not to
                  make double TDS amounts by bringing all the ITR transactions
                  over here and you can acknowledge clients by digitally signing
                  and sharing it to clients.
                </div>

               



                {/* <div className="flex gap-3 mt-14"> */}
                <div class="btn-group mt-20">
                  <button
                    className="px-8 py-3 mb-4 mr-3 text-base font-bold border rounded-lg btn-outline-primary focus:outline-none focus:shadow-outline"
                    type="button"
                    style={{
                      backgroundColor: "#F2F0FF",
                      color: "#2F2D51",
                      borderColor: "#112137",
                    }}
                  >
                    Inform Customers
                  </button>
                  <button
                    className="px-8 py-3 text-base font-bold border rounded-lg btn-primary focus:outline-none focus:shadow-outline"
                    type="button"
                    style={{ backgroundColor: "#F7D373", color: "#2F2D51", borderColor: "#F7D373", }}
                  >
                    Receive from Vendors
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
