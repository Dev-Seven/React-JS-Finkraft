import React from "react";
import { XIcon } from "@heroicons/react/outline";

//Static data object for table
const client = [
  {
    template: "Acknowledgement-1",
    contact: "3",
    sentdate: "john@gmail.com",
    senton: "9 Oct’20, 9:48pm",
    status: "Sent",
    action: true,
  },
  {
    template: "Acknowledgement-2",
    contact: "2",
    sentdate: "john@gmail.com",
    senton: "9 Oct’20, 9:48pm",
    status: " 8457834993",
    action: true,
  },
];

//Do not Delete
// const button =
//   "font-sans font-semibold lg:text-lg sm:text-xs md:text-sm rounded lg:h-12 sm:h-8 md:h-10 px-6";

export default function MailAcknowledg({ open }) {
  return (
    <div className="grid flex-1 grid-cols-12 p-4 mx-5 shadow md:p-10 md:mx-9">
      {/* Heading */}
      <div className="col-span-11 overflow-x-auto md:mx-6 lg:mx-8">
        <div className="flex justify-between">
          <div
            className="m-3 font-sans text-base font-semibold md:text-xl "
            style={{ color: "#4B5660" }}
          >
            Mail Acknowlegements
          </div>
          <div
            className="m-3 font-sans text-base font-semibold md:text-xl "
            style={{ color: "#4B5660" }}
          >
            Create New Acknowledgement
          </div>
        </div>

        {/* Table */}
        <div className="inline-block min-w-full align-middle shadow ">
          <div className="justify-betweensm:rounded-lg">
            <table className="justify-between min-w-full">
              <thead className="h-16 my-5 table-head ">
                <tr
                  className="font-sans text-lg font-semibold text-center "
                  style={{ color: "#2F2D51" }}
                >
                  <th scope="col" className="px-1 py-3">
                    <input
                      type="checkbox"
                      className="text-purple-900 rounded form-checkbox"
                    />
                  </th>
                  <th scope="col" className="py-3 pl-2 pr-4">
                    Template
                  </th>
                  <th scope="col" className="py-3 pl-2 pr-4">
                    Contacts
                  </th>
                  <th scope="col" className="py-3 pl-2 pr-4 ">
                    Sent date
                  </th>
                  <th scope="col" className="py-3 pl-2 pr-4 ">
                    Sent on
                  </th>
                  <th scope="col" className="py-3 pl-2 pr-4 ">
                    Status
                  </th>
                  <th scope="col" className="py-3 pl-2 pr-4 ">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="p-4 py-8 divide-y divide-gray-200">
                {client.map((item) => (
                  <tr
                    className="font-sans text-lg font-normal text-center table-theme-row rounded-xl"
                    style={{ color: "#525353", borderColor: "#EAEAEA" }}
                    key={item.pan}
                  >
                    <td className="py-3 pl-2 pr-4 ">
                      <input
                        type="checkbox"
                        className="text-purple-900 rounded form-checkbox"
                      />
                    </td>
                    <td className="py-3 pl-2 pr-4 ">
                      <div className="">{item.template}</div>
                    </td>

                    <td className="py-3 pl-2 pr-4">
                      <div className="">{item.contact}</div>
                    </td>

                    <td className="py-3 pl-2 pr-4">
                      <div className="">{item.sentdate}</div>
                    </td>
                    <td className="py-3 pl-2 pr-4">
                      <div className="">{item.senton}</div>
                    </td>
                    <td className="py-3 pl-2 pr-4">
                      <div className="">{item.status}</div>
                    </td>
                    <td className="py-3 pl-2 pr-4">
                      <div className="">{item.action}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="absolute col-span-1 m-2 rounded-full right-8 md:right-20 ring-2 ring-current">
        <XIcon
          className="block w-5 h-5"
          onClick={() => {
            open();
          }}
        />
      </div>
    </div>
  );
}
