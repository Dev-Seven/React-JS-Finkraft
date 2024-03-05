import React, {Fragment, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import NavBar from "../Routing/navbar";
import Edit from "../assets/svg/edit.svg";
import { Line, Bar } from "react-chartjs-2";
import ReactSpeedometer from "react-d3-speedometer";
import background from "../assets/svg/itr-filling-bg.svg";
import {
  CalendarIcon,
  InformationCircleIcon,
  UserAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

const summaryData = [
  {
    type: "GSTR1",
    monthOfDefaut: 3,
    delays: 12,
  },
  {
    type: "GSTR3B",
    monthOfDefaut: 4,
    delays: 14,
  },
];

const fillindData = [
  {
    financialyear: "2021-2022",
    month: "April",
    date: "12-03-2021",
    status: true,
    delays: 2,
  },
  {
    financialyear: "2021-2022",
    month: "April",
    date: "12-03-2021",
    status: true,
    delays: 2,
  },
  {
    financialyear: "2021-2022",
    month: "April",
    date: "12-03-2021",
    status: false,
    delays: 2,
  },
  {
    financialyear: "2021-2022",
    month: "April",
    date: "12-03-2021",
    status: true,
    delays: 2,
  },
  {
    financialyear: "2021-2022",
    month: "April",
    date: "12-03-2021",
    status: false,
    delays: 2,
  },
  {
    financialyear: "2021-2022",
    month: "April",
    date: "12-03-2021",
    status: true,
    delays: 2,
  },
];

const summaryHeader = ["Financial Year", "Month", "Average Delays in days"];
const filingHeader = [
  "Filing Type",
  "Months Of Default",
  "Date",
  "Status",
  "No of Delays",
];
const barState = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
  ],
  datasets: [
    {
      label: "Count",
      fill: true,
      lineTension: 0,
      backgroundColor: "#EC6666",
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      data: [90, 92, 76, 80, 75, 70, 85, 80, 60, 45, 40, 70],
    },
    {
      label: "GST Amount",
      fill: true,
      lineTension: 0,
      backgroundColor: "#147AD6",
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      data: [40, 35, 30, 50, 45, 40, 70, 60, 40, 30, 20, 40],
    },

    {
      label: "Invoice Amount",
      fill: true,
      lineTension: 0,
      backgroundColor: "#79D2DE",
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      data: [90, 92, 76, 80, 75, 90, 85, 80, 60, 45, 40, 70],
    },
  ],
};
const state = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      label: "GST 3B",
      fill: true,
      lineTension: 0,
      backgroundColor: "#147AD6",
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      data: [40, 35, 30, 50, 45, 40, 70, 60, 40, 30, 20, 40],
    },
    {
      label: "GST R1",
      fill: true,
      lineTension: 0,
      backgroundColor: "#EC6666",
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      data: [90, 92, 96, 100, 95, 90, 85, 80, 60, 45, 40, 70],
    },
  ],
};
function VendorDetails() {
  const nav = useHistory();
  const cancelButtonRef = useRef(null);
  const [popUp, setPopUp] = useState(false);
  const [showChart, setShowChart] = useState(false);
  return (
    <div className="flex-col">
      <NavBar />
      <Transition.Root show={popUp} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={popUp}
        onClose={() => setPopUp(false)}
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
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-12 bg-white">
          <div className="lg:grid grid-cols-12 shadow-md rounded-md overflow-x-auto border-gray-200 border mb-4 p-5 md:p-9 items-center">
            <div className="flex col-span-12 justify-end ">
              <XIcon
                className="block w-5 h-5"
                onClick={() => {
                  setPopUp(false);
                }}
              />
            </div>
            <div className="flex col-span-4 justify-center">
              <img className="mb-8" src={background} alt="background" />
            </div>
            <div className="font-sans font-bold text-center lg:text-left text-lg md:text-2xl col-span-5 mb-4 lg:mb-0">
              Ensure you get the right vendir score specific to you organization
              based on the purchases. Simply upload or Link to your GST portal
              with Finkraft
            </div>
            <div className="col-span-1 text-center lg:text-left">
              <button
                className="w-52 m-2 rounded h-14 md:text-base md:font-semibold xl:w-52 2xl:w-52 md:h-12 focus:outline-none focus:shadow-outline"
                type="button"
                style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                onClick={() => {
                  // nav.push("/clientAdd");
                }}
              >
                Upload GST2A
              </button>
              <button
                className="w-52 m-2 rounded h-14 md:text-base md:font-semibold xl:w-52 2xl:w-52 md:h-12 focus:outline-none focus:shadow-outline"
                type="button"
                style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                onClick={() => {
                  // nav.push("/clientAdd");
                }}
              >
                Link to GST portal
              </button>
            </div>
          </div>
        </div>
        </Transition.Child>
        </div>
      </Dialog>
      </Transition.Root>
      <div className="lg:grid gap-6 grid-cols-12 xl:mx-9 py-8 px-2 xl:px-8">
        <div className="flex col-span-12 justify-end items-center">
          <XIcon
            className="block w-5 h-5 rounded-full border-black border-2 self-end"
            onClick={() => {
              nav.push("/vendorList");
            }}
          />
        </div>
        {/* Organization Part */}
        <div className="col-span-6">
          <div className="grid-rows-6">
            {/* organization Information */}
            <div className="">
              <div
                className="font-sans font-semibold text-xl m-2"
                style={{ color: "#4B5660" }}
              >
                Organisation Information
              </div>
              <div className="divide-y-2  gap-4 shadow-md rounded-md border-gray-200 border px-6 py-8 mb-8 lg:mb-0">
                <div className="grid-cols-3 grid gap-4  justify-between ">
                  <div className="col-span-3 flex justify-between">
                    <div>Singapore Tyre Company</div>
                    <img src={Edit}></img>
                  </div>

                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    Organization Name
                  </div>
                  <div className="col-span-2 text-base font-semibold">
                    Singapore Tyre Company
                  </div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    PAN No
                  </div>
                  <div className="col-span-2 font-semibold">FKSLS7368O</div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    GST No
                  </div>
                  <div className="col-span-2 text-base font-semibold">
                    64AZ76243868424
                  </div>
                  <div className="col-span-1 mb-3" style={{ color: "#222222" }}>
                    {" "}
                    Company Address
                  </div>
                  <div className="col-span-2 text-base mb-3 w-full sm:w-1/2 font-semibold   ">
                    3750 S. Watson Rd., Suite 100, Near Jordgeton Complex Jurong
                    Singapore 600006 +65 66788990
                  </div>
                </div>
                <div className="grid-cols-3 grid gap-4 justify-between ">
                  <div
                    className="col-span-1 mt-3 "
                    style={{ color: "#222222" }}
                  >
                    {" "}
                    Company ID (CIN)
                  </div>
                  <div className="col-span-2 mt-3 font-semibold break-words">
                    M74140MH2019PTC353439{" "}
                  </div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    Date of Incorporation
                  </div>
                  <div className="col-span-2 font-semibold">December 2019</div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    Primary Email
                  </div>
                  <div className="col-span-2 font-semibold">John@tre.com</div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    Tax ID
                  </div>
                  <div className="col-span-2 font-semibold">4545345435</div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    Tax Payer Type
                  </div>
                  <div className="col-span-2 font-semibold">Regular</div>
                  <div className="col-span-1" style={{ color: "#222222" }}>
                    {" "}
                    HSN Code
                  </div>
                  <div className="col-span-2 font-semibold">8745368</div>
                  <div className="col-span-1 mb-3" style={{ color: "#222222" }}>
                    {" "}
                    Nature of Business
                  </div>
                  <div className="col-span-2 font-semibold mb-3">
                    IT Services
                  </div>
                </div>
                <div
                  className="grid-cols-3 font-semibold  grid gap-4 justify-between "
                  style={{ color: "#2A254F" }}
                >
                  <div
                    className="col-span-1 mt-3 "
                    // style={{ color: "#222222" }}
                  >
                    {" "}
                    Directors
                  </div>
                  <div className="col-span-2  w-2/3 flex mt-3 justify-between">
                    <div>John Peter</div>
                    <div>53453442</div>
                  </div>
                  <div
                    className="col-span-1 mt-3 "
                    // style={{ color: "#222222" }}
                  ></div>
                  <div className="col-span-2 w-2/3 flex dmt-3 justify-between">
                    <div>Kevi</div>
                    <div>42545545</div>
                  </div>
                </div>
              </div>
            </div>
            {/* contact Information */}
            <div className="">
              {/* Contact Title */}
              <div className="flex justify-between my-3">
                <div
                  className="font-sans font-semibold text-xl m-2"
                  style={{ color: "#4B5660" }}
                >
                  Contact Information
                </div>
                <div className="flex font-sans font-semibold items-center gap-2 mx-3">
                  <UserAddIcon height={16} width={16}></UserAddIcon> Add New
                </div>
              </div>
              {/* Contact Data */}
              <div className="shadow-md divide-y-2 rounded-md overflow-x-auto border-gray-200 border mb-8 lg:mb-4 p-3 sm:p-9">
                <div className="grid grid-cols-4 items-center justify-center  gap-7 pb-3">
                  <div className="col-span-1 text-sm sm:text-base text-center">
                    Primary{"\n"}Contact
                  </div>
                  <div className="col-span-3 text-sm md:text-base flex justify-between">
                    <div>
                      <p>Sai Sandeep</p>
                      <p>+91 9985652395</p>
                      <p>SaiSandeep@pupelam.design</p>
                    </div>
                    <img className="mx-4" src={Edit} />
                  </div>
                </div>
                <div className="grid grid-cols-4  gap-7 py-3">
                  <div className="col-span-1 text-sm md:text-base text-center">Accounts</div>
                  <div className="col-span-3 text-sm md:text-base flex justify-between">
                    <div>
                      <p>Kishan</p>
                      <p>+91 9985652395</p>
                      <p>SaiSandeep@pupelam.design</p>
                    </div>
                    <img className="mx-4" src={Edit} />
                  </div>
                </div>
                <div className="grid grid-cols-4  gap-7 pt-3">
                  <div className="col-span-1 text-sm md:text-base text-center">Finance</div>
                  <div className="col-span-3 text-sm md:text-base flex justify-between">
                    <div>
                      <p>Sharief</p>
                      <p>+91 9985652395</p>
                      <p>SaiSandeep@pupelam.design</p>
                    </div>
                    <img className="mx-4" src={Edit} />
                  </div>
                </div>
              </div>
            </div>
            {/* Past filing information */}
            <div>
              {/* Title */}
              <div className="flex justify-between my-3">
                <div
                  className="font-sans font-semibold text-xl m-2"
                  style={{ color: "#4B5660" }}
                >
                  Past Filling Information
                </div>
                <div>
                  <label htmlFor="dropDown" className="mx-3">
                    By Category
                  </label>
                  <select id="dropDown" className="dropDownLinear px-12">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Past Filing table */}
              <div className="grid grid-cols-7 rounded-md shadow-md  overflow-x-auto mb-8 lg:mb-4">
                <table className="col-span-7 border-gray-200 border-t-0 border-collapse">
                  <thead className="">
                    {filingHeader.map((head) => {
                      return (
                        <th
                          className="p-3 font-sans text-lg font-semibold"
                          style={{ color: "#585858" }}
                        >
                          {head}
                        </th>
                      );
                    })}
                  </thead>
                  <tbody className="text-center bg-red-200">
                    {fillindData.map((item) => {
                      return (
                        <tr
                          className="my-2"
                          style={{
                            backgroundColor:
                              item.status == false
                                ? "rgba(254, 202, 202,1)"
                                : "#FFFFFF",
                          }}
                        >
                          <td className="py-3 rounded-none">
                            {item.financialyear}
                          </td>
                          <td className="py-3 rounded-none">{item.month}</td>
                          <td className="py-3 rounded-none">{item.date}</td>
                          <td className="py-3 rounded-none">
                            {item.status ? "Filed" : "Not Filed "}
                          </td>
                          <td className="py-3 rounded-none">{item.delays}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* ChartPart */}
        <div className="col-span-6">
          <div className="grid-rows-6">
            {/* GaugeBar */}
            <div>
              {/* Title */}
              <div className="flex justify-between">
                <div
                  className="font-sans font-semibold text-xl m-2"
                  style={{ color: "#4B5660" }}
                >
                  Vendor GST Score
                </div>
                <div className="flex gap-2 items-center">
                  <CalendarIcon height={16} width={16} />
                  <div style={{ fontSize: 16, color: "#4B5660" }}>
                    Select Year
                  </div>
                  |
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#2F2D51" }}
                  >
                    2020-2021
                  </div>
                </div>
              </div>
              {/* Data Into GaugeBar */}
              <div className="shadow-md rounded-md overflow-x-auto border-gray-200 border mb-8 lg:mb-4 p-6 sm:p-9">
                <div className="grid xl:flex   justify-around">
                  <div className="font-sans font-semibold  text-xl text-center">
                    Overall GST Score
                    <ReactSpeedometer
                      width={337}
                      height={200}
                      needleHeightRatio={0.5}
                      value={580}
                      segments={4}
                      segmentColors={[
                        "#FE5D5B",
                        "#F9BB32",
                        "#41AD86",
                        "#018254",
                      ]}
                      currentValueText={"58"}
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
                  </div>
                  <div className="w-full lg:w-px  bg-gray-200"></div>
                  <div className="justify-center">
                    <div
                      className="font-sans font-semibold  text-xl text-center"
                      style={{ opacity: popUp ? 1 : 0.05 }}
                    >
                      Specific GST Score
                      <ReactSpeedometer
                        width={337}
                        height={200}
                        needleHeightRatio={0.5}
                        value={580}
                        segments={4}
                        segmentColors={[
                          "#FE5D5B",
                          "#F9BB32",
                          "#41AD86",
                          "#018254",
                        ]}
                        currentValueText={"58"}
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
                    </div>
                    {!popUp && (
                      <button
                        className="absolute -mt-36 ml-36"
                        onClick={() => {
                          setPopUp(true);
                          setShowChart(true);
                        }}
                      >
                        <QuestionMarkCircleIcon
                          height={60}
                          width={60}
                          color="#2A254F"
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: 60,
                          }}
                        />
                      </button>
                    )}
                  </div>
                </div>

                <div className="xl:flex justify-around my-3 sm:my-1">
                  <div className="flex items-center gap-2 my-2 ">
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

                  <div className="flex items-center gap-2 my-2 ">
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

                  <div className="flex items-center gap-2 my-2 ">
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
                  <div className="flex items-center gap-2 my-2 ">
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
                  className="rounded-lg px-2 py-2 lg:w-2/3"
                  style={{ backgroundColor: "#FDF5F5" }}
                >
                  <span className="gap-2 inline-flex items-center font-sans font-medium text-lg ">
                    <InformationCircleIcon
                      // height={18}
                      // width={18}
                      color="#525353"
                      className="h-8 w-8 sm:h-6 sm:w-6 mx-3"
                    />

                    <p>
                      To know more about the metrics calculation {"  "}
                      <u>
                        <a className="link" href="#">
                          click here
                        </a>
                      </u>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            {/* Charts */}
            <div>
              {/* Title */}
              <div className="flex justify-between my-3">
                <div
                  className="font-sans font-semibold text-xl m-2"
                  style={{ color: "#4B5660" }}
                >
                  Past Filling Information
                </div>
                <div>
                  <label htmlFor="dropDown" className="mx-3">
                    By Category
                  </label>
                  <select id="dropDown" className="dropDownLinear px-12">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              {/* Chart Data  */}
              <div className=" shadow-md rounded-md border-gray-200 border justify-between mb-8 lg:mb-4 p-3 sm:p-6 md:p-0 lg:p-6">

                <Line
                  data={state}
                  className="max-h-96 mb-8"
                  options={{
                    title: {
                      display: true,
                      text: "Month Wise Delay in Filing",
                      fontSize: 20,
                    },
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
                <Line
                  data={state}
                  className="max-h-96"
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
            {/* Vendor Summary */}
            <div>
              {/* summary title  */}
              <div className="flex justify-between">
                <div
                  className="font-sans font-semibold text-xl m-2"
                  style={{ color: "#4B5660" }}
                >
                  Vendor GST Score
                </div>
                <div className="flex gap-2 items-center">
                  <CalendarIcon height={16} width={16} />
                  <div style={{ fontSize: 16, color: "#4B5660" }}>
                    Select Year
                  </div>
                  |
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#2F2D51" }}
                  >
                    2020-2021
                  </div>
                </div>
              </div>
              {/* Summary Table */}
              <div className="grid grid-cols-3 rounded-md shadow-md  overflow-x-auto mb-8 lg:mb-4">
                <table className="col-span-3 border-gray-200 border-t-0 border-collapse">
                  <thead className="">
                    {summaryHeader.map((head) => {
                      return (
                        <th
                          className="p-3 font-sans text-lg font-semibold"
                          style={{ color: "#585858" }}
                        >
                          {head}
                        </th>
                      );
                    })}
                  </thead>
                  <tbody className="text-center">
                    {summaryData.map((item) => {
                      return (
                        <tr className="my-2">
                          <td className="py-3 rounded-none">{item.type}</td>
                          <td className="py-3 rounded-none">
                            {item.monthOfDefaut}
                          </td>

                          <td className="py-3 rounded-none">{item.delays}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Taxable Summary */}
            <div>
              {/* summary title  */}
              <div className="flex justify-between">
                <div
                  className="font-sans font-semibold text-xl m-2"
                  style={{ color: "#4B5660" }}
                >
                  Taxable Month Summary
                </div>
              </div>
              {/* Summary Table */}
              <div className="shadow-md rounded-md divide-y-2 overflow-x-auto border-gray-200 border mb-8 lg:mb-4 p-3 sm:p-5">
                <div className="grid grid-cols-2 p-2">
                  <div>Invoices uploaded in the taxable month</div>
                  <div className="text-center sm:text-left">85</div>
                </div>
                <div className="grid grid-cols-2 p-2">
                  <div>Invoices uploaded in the taxable month</div>
                  <div className="text-center sm:text-left">85</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-12 sm:flex gap-9 justify-between mb-8 md:mb-0">
          <div className="sm:w-1/2 md:flex justify-between mb-4">
            <span>Invoice uploade in 2A</span>
            <div className="flex gap-2 items-center">
              <CalendarIcon height={16} width={16} />
              <div style={{ fontSize: 16, color: "#4B5660" }}>Select Year</div>|
              <div
                className="text-sm font-semibold"
                style={{ color: "#2F2D51" }}
              >
                2020-2021
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 md:flex justify-between mb-4">
            <span>Purchase as per 2A</span>
            <div className="flex gap-2 items-center">
              <CalendarIcon height={16} width={16} />
              <div style={{ fontSize: 16, color: "#4B5660" }}>Select Year</div>|
              <div
                className="text-sm font-semibold"
                style={{ color: "#2F2D51" }}
              >
                2020-2021
              </div>
            </div>
          </div>
        </div>
        {showChart && (
          <div className="col-span-6 shadow-md rounded-md border-gray-200 border p-3 md:p-9 mb-6 lg:mb-0">
            <Bar
              data={barState}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        )}
        {showChart && (
          <div className="col-span-6 shadow-md rounded-md border-gray-200 border p-3 md:p-9">
            <Bar
              data={barState}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 50,
                  color: "#978721",
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        )}
        {!showChart && (
          <div className="col-span-12">
            <div className="lg:grid grid-cols-12 shadow-md rounded-md overflow-x-auto border-gray-200 border mb-4 p-6 sm:p-9 items-center">
              <div className="flex col-span-4 justify-center">
                <img className="mb-8" src={background} alt="background" />
              </div>
              <div className="font-sans text-center lg:text-left font-bold text-lg lg:text-2xl col-span-5 mb-4">
                Ensure you get the right vendir score specific to you
                organization based on the purchases. Simply upload or Link to
                your GST portal with Finkraft
              </div>
              <div className="col-span-1 text-center md:text-left">
                <button
                  className="w-64 m-2 rounded h-14 md:text-base font-semibold xl:w-52 2xl:w-52 md:h-12 focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                  onClick={() => {
                    // nav.push("/clientAdd");
                  }}
                >
                  Upload GST2A
                </button>
                <button
                  className="w-64 m-2 rounded h-14 md:text-base font-semibold xl:w-52 2xl:w-52 md:h-12 focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{ backgroundColor: "#F7D373", color: "#2F2D51" }}
                  onClick={() => {
                    // nav.push("/clientAdd");
                  }}
                >
                  Link to GST portal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VendorDetails;
