import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import logo from "../assets/images/navbar-logo.png";
import { Link } from "react-router-dom";
import { UsersIcon, UserIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import BellIcon from "../assets/svg/notification.svg";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", key: "home", current: true },
  { name: "ITR Filing", key: "itr", href: "/itrDashboard", current: false },
  { name: "Clients", key: "client", href: "/clients", current: false },
  { name: "Vendors", key: "vendor", href: "/vendors", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [currentRoute, setCurrentRoute] = useState(navigation[0]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  /* 
  Created By: Tushar
   Created On: 24th June,2021
   Description:To handle dynamic navbar. 
   Company Name: Seven Square Tech Pvt. Ltd. */

  const setNewRoute = (item) => {
    navigation.map((route) => {
      //It will check for string match and navigate accordingly.
      if (item.indexOf(route.key) != -1) {
        route.current = true;
        return true;
      } else {
        if (item == "/" && route.name == "Home") {
          route.current = true;
        } else route.current = false;
        return false;
      }
    });
    setCurrentRoute(item);
  };

  useEffect(() => {
    setNewRoute(location.pathname);
  }, []);

  return (
    <div className="flex-1 gap-3 lg:mt-9 lg:mx-9 perpal-bg">
      <nav className="relative px-4 py-4 flex justify-between items-center ">
        <button className="text-3xl font-bold leading-none xs:relative md:relative lg:absolute left-11 xs:left-7 md:left-7 sm:left-7 xl:left-7 lg:left-7 2xl:left-7">
          <img className="block h-9 w-auto" src={logo} alt="Workflow" />
        </button>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setOpenDrawer(openDrawer === false ? true : false)}
          >
            <svg
              className="block h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="#ffffff"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-5 lg:left-52 xl:left-72 transform lg:flex lg:mx-auto  lg:items-center lg:w-auto ,xl:flex xl:mx-auto  xl:items-center xl:w-auto lg:space-x-4 xl:space-x-0">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setNewRoute(item.href)}
              className={classNames(
                item.current
                  ? "bg-white rounded-3xl font-sans font-semibold text-lg lg:text-lg md:text-lg sm:text-sm"
                  : " hover:rounded-3xl hover:text-white font-sans font-semibold text-lg lg:text-lg md:text-lg sm:text-sm",
                "md:px-5 md:py-1 lg:px-3 lg:py-1 xl:px-5 xl:py-2 rounded-md"
              )}
              style={{
                color: item.current ? "#2A254F" : "#9D9BAE",
              }}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* ============================ */}
        <div className="hidden lg:inline-block lg:ml-auto relative justify-end mr-2">
          {" "}
          <button className="p-2 rounded-full text-gray-400 hover:text-white outline-none ring-2 ring-white">
            {" "}
            <span className="sr-only">View notifications</span>{" "}
            <img src={BellIcon} alt="BellIcon" className="h-5 w-5 text-white" />{" "}
          </button>{" "}
        </div>
        <Menu
          as="div"
          className="hidden lg:inline-block relative w-60 lg:w-52 xl:w-52 2xl:w-52 justify-end mr-2"
        >
          {({ open }) => (
            <>
              <div>
                <Menu.Button
                  className="text-center font-semibold hover:bg-gray-100 bg-white rounded-full w-full      
                          hidden lg:inline-block lg:ml-auto lg:mr-3 text-sm text-gray-900 transition duration-200 justify-end"
                >
                  <button
                    className="lg:px-3 lg:py-2 sm:py-1 sm:px-1 rounded-full justify-between font-sans font-bold  w-full flex gap-1 items-center "
                    style={{ color: "#4B5660" }}
                  >
                    <span
                      className="h-8 w-8 p-2  text-center rounded-full text-white bg-theme"
                      aria-hidden="true"
                    >
                      P
                    </span>
                    <span className="xl:block 2xl:block">36AA764867HG65</span>
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="hidden lg:inline-block absolute justify-end bg-white py-6 px-6 rounded-md light-perple-bg w-64 z-10"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="organisation-setting"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <UsersIcon className="h-5 w-5" />
                        <span className="opacity-40" color="#2A254F">
                          Organization setting
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/users"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "items-center gap-3 flex  px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <UserIcon className="h-5 w-5" />
                        <span className="opacity-40" color="#2A254F">
                          Users
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <UserIcon className="h-5 w-5" />
                        <span className="opacity-40" color="#2A254F">
                          Linked Account
                        </span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>

        <Menu
          as="div"
          className="hidden lg:inline-block relative w-60 lg:w-52 xl:w-52 2xl:w-52 justify-end"
        >
          {({ open }) => (
            <>
              <div>
                <Menu.Button
                  className="text-center font-semibold hover:bg-gray-100 bg-white rounded-full w-full      
                          hidden lg:inline-block lg:ml-auto lg:mr-3 text-sm text-gray-900 transition duration-200 justify-end"
                >
                  <button
                    className="lg:px-3 lg:py-2 sm:py-1 sm:px-1 rounded-full justify-between font-sans font-bold  w-full flex gap-1 items-center "
                    style={{ color: "#4B5660" }}
                  >
                    <span
                      className="h-8 w-8 p-2 text-center rounded-full text-white bg-theme"
                      aria-hidden="true"
                    >
                      P
                    </span>
                    <span className="xl:block 2xl:block">Purpleplum Digi</span>
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="hidden lg:inline-block absolute justify-end bg-white py-6 px-6 rounded-md light-perple-bg w-64 z-10"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/organisation-setting"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <UsersIcon className="h-5 w-5" />
                        <span className="opacity-40" color="#2A254F">
                          Organization setting
                        </span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/users">
                        <buton
                          // href="/users"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "items-center gap-3 flex  px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <UserIcon className="h-5 w-5" />
                          <span className="opacity-40" color="#2A254F">
                            Users
                          </span>
                        </buton>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <UserIcon className="h-5 w-5" />
                        <span className="opacity-40" color="#2A254F">
                          Linked Account
                        </span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </nav>
      <div
        className={
          openDrawer ? "navbar-menu relative z-50 perpal-bg" : "hidden"
        }
      >
        <div className="navbar-backdrop fixed inset-0 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 perpal-bg border-r overflow-y-auto">
          <div className="flex justify-end mb-8">
            <button
              className="navbar-close"
              onClick={() => setOpenDrawer(false)}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setNewRoute(item.href)}
                  className={classNames(
                    item.current
                      ? "bg-white rounded-3xl font-sans font-semibold text-lg lg:text-lg md:text-lg sm:text-sm w-full block text-center"
                      : " hover:rounded-3xl hover:text-white font-sans font-semibold text-lg lg:text-lg md:text-lg sm:text-sm w-full block text-center",
                    "px-5 py-3 mb-3 rounded-md"
                  )}
                  style={{
                    color: item.current ? "#2A254F" : "#9D9BAE",
                  }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {/* ============================*/}
              <Menu as="div" className="relative pb-5">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="block px-4 py-1 text-xs text-center font-semibold   hover:bg-gray-100  bg-white rounded-full w-full">
                        <button
                          className="lg:px-3 lg:py-2 sm:py-1 sm:px-1 rounded-full justify-between font-sans font-bold  w-full flex gap-1 items-center"
                          style={{ color: "#4B5660" }}
                        >
                          <span
                            className="h-8 w-8 p-2  text-center rounded-full text-white bg-theme"
                            aria-hidden="true"
                          >
                            P
                          </span>
                          <span className="xl:block text-lg">
                            36AA764867HG65
                          </span>
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="bg-white py-6 px-6 rounded-md light-perple-bg w-full"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="organisation-setting"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UsersIcon className="h-5 w-5" />
                              <span className="opacity-40" color="#2A254F">
                                Organization setting
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/users"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "items-center gap-3 flex  px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UserIcon className="h-5 w-5" />
                              <span className="opacity-40" color="#2A254F">
                                Users
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UserIcon className="h-5 w-5" />
                              <span className="opacity-40" color="#2A254F">
                                Linked Account
                              </span>
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
              <Menu as="div" className="relative pb-5">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="block px-4 py-1 text-xs text-center font-semibold  hover:bg-gray-100  bg-white rounded-full w-full">
                        <button
                          className="lg:px-3 lg:py-2 sm:py-1 sm:px-1 rounded-full justify-between font-sans font-bold w-full flex gap-1 items-center "
                          style={{ color: "#4B5660" }}
                        >
                          <span
                            className="h-8 w-8 p-2  text-center rounded-full text-white bg-theme"
                            aria-hidden="true"
                          >
                            P
                          </span>
                          <span className="xl:block text-lg">
                            Purpleplum Digi
                          </span>
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="bg-white py-6 px-6 rounded-md light-perple-bg w-full"
                      >
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="organisation-setting"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UsersIcon className="h-5 w-5" />
                              <span className="opacity-40" color="#2A254F">
                                Organization setting
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/users"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "items-center gap-3 flex  px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UserIcon className="h-5 w-5" />
                              <span className="opacity-40" color="#2A254F">
                                Users
                              </span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "items-center gap-3 flex px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UserIcon className="h-5 w-5" />
                              <span className="opacity-40" color="#2A254F">
                                Linked Account
                              </span>
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
