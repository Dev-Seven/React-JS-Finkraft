import React, { useState } from "react";
import { Link } from "react-router-dom";

import Edit from "../assets/svg/edit.svg";

import Navbar from "../Routing/navbar";
import { Text } from "tailwind-react-ui";
import Switch from "react-switch";
import AddUser from "./add-user";

const people = [
  {
    name: "Stephen Curry",
    email: "stephencurry123@gmail.com",
    email2: "stephencurry123@gmail.com ",
    role: "Administrator",
    creatOn: "9 Sep’20",
    access: true,
  },
  {
    name: "FKLPS8844T",
    email: "stephencurry123@gmail.com ",
    email2: "stephencurry123@gmail.com ",
    role: "Accounts",
    creatOn: "9 Sep’20",
    access: true,
  },
  {
    name: "FKLPS8844T",
    email: "2021 - 2022",
    email2: "",
    role: "Finance",
    creatOn: "9 Sep’20",
    access: false,
  },
  // More people...
];

export default function UserList({ show }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Navbar />

      <div className="flex flex-col mx-3 sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9">
      <div className="container-shadow px-10 pb-10">
        <div
          className="items-center justify-between w-full text rounded-t gap-2 text-left  my-7 lg:flex xl:flex 2xl:flex"
          style={{ color: "#2A254F" }}
        >
          <div>
            <Text bold color="#222222" size="xl">
              Purpleplum Digital |{" "}
            </Text>
            <Text bold color="#222222" size="base">
              PAN: FKSLS7368O
            </Text>
          </div>
          <Link className="block md:flex text-lg font-semibold mt-3 md:mt-0" onClick={openModal}>
            + Add User
          </Link>
          <AddUser closeModal={closeModal} show={showModal} />
        </div>

        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="border-gray-200 sm:rounded-lg">
              <table className="min-w-full justify-between">
                <thead className="table-head h-16 my-5 ">
                  <tr
                    className=" font-semibold font-sans text-lg text-center"
                    style={{ color: "#2F2D51" }}
                  >
                    <th scope="col" className="px-4 py-3">
                      User Name
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Email Address
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Role
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Created On
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Application Access
                    </th>
                    <th scope="col" className="px-4 py-3">
                      {"  "}
                    </th>
                  </tr>
                </thead>

                <tbody className=" py-8 divide-y divide-gray-200 p-4">
                  {people.map((person) => (
                    <tr
                      className="font-normal font-sans text-lg text-center table-theme-row rounded-xl"
                      style={{ color: "#525353", borderColor: "#EAEAEA" }}
                      key={person.pan}
                    >
                      <td className="px-4 py-3 ">
                        <div className="">{person.name}</div>
                      </td>

                      <td className="px-4 py-3">
                        <div className="">{person.email}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="">{person.role}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="">{person.creatOn}</div>
                      </td>
                      <td className="px-4 py-3">
                        <Switch
                          onChange={(e) => (person.access = !person.access)}
                          checked={person.access}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onHandleColor="#FFFFFF"
                          onColor="#D85454"
                          height={22}
                          width={40}
                          handleDiameter={12}
                        />
                      </td>

                      <td className="px-4 py-3 ">
                        <button
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <img src={Edit} alt="edit"></img>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
