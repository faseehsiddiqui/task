import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#514390]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0 w-40 ">
                  
                </div>
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400   hover:text-[#76C0FA] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#76C0FA]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-[#] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#76C0FA]"
                  >
                    <span className="sr-only">View notifications</span>
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Link to={"/profile"}>
                          <Menu.Item>
                            {({ active }) => (
                              <span
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </span>
                            )}
                          </Menu.Item>
                        </Link>
                        <Link to={"/settings"}>
                          <Menu.Item>
                            {({ active }) => (
                              <span
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </span>
                            )}
                          </Menu.Item>
                        </Link>

                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </span>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400 xm:block sm:hidden  "
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="border border-white pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm lg:hidden md:hidden sm:hidden xm:block  w-full"
                  placeholder="Search by Package Name..."
                  type="search"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-[#2e94e2] hover:bg-[##76C0FA] focus:outline-none focus:bg-transparent focus:border-[#76C0FA] focus:text-white lg:hidden md:hidden sm:hidden xm:block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Login
              </button>

              <Link to={"/"}>
                <Disclosure.Button className="sm:text-center text-gray-300  hover:bg-[#76C0FA] hover:text-[#1F2937] block px-3 py-2 rounded-md text-base font-medium w-full text-start">
                  Home
                </Disclosure.Button>
              </Link>
              <Link to={"/about"}>
                <Disclosure.Button className="sm:text-center text-gray-300  hover:bg-[#76C0FA] hover:text-[#1F2937] block px-3 py-2 rounded-md text-base font-medium w-full text-start">
                  About
                </Disclosure.Button>
              </Link>
              <Link to={"/stories"}>
                <Disclosure.Button className="sm:text-center text-gray-300  hover:bg-[#76C0FA] hover:text-[#1F2937] block px-3 py-2 rounded-md text-base font-medium w-full text-start">
                  Stories
                </Disclosure.Button>
              </Link>

              <Link to={"/packages"}>
                <Disclosure.Button className="sm:text-center text-gray-300  hover:bg-[#76C0FA] hover:text-[#1F2937] block px-3 py-2 rounded-md text-base font-medium w-full text-start">
                  Packages
                </Disclosure.Button>
              </Link>

              <Link to={"/booking"}>
                <Disclosure.Button className="sm:text-center text-gray-300  hover:bg-[#76C0FA] hover:text-[#1F2937] block px-3 py-2 rounded-md text-base font-medium w-full text-start">
                  Booking
                </Disclosure.Button>
              </Link>

              <Link to={"/contact"}>
                <Disclosure.Button className="sm:text-center text-gray-300  hover:bg-[#76C0FA] hover:text-[#1F2937] block px-3 py-2 rounded-md text-base font-medium w-full text-start">
                  Contact
                </Disclosure.Button>
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700  ">
              <div className="flex items-center px-5 ">
                <div className="flex-shrink-0 ">
                  {/* <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-[#76C0FA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#76C0FA]"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6 " aria-hidden="true" /> */}
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link to={"/profile"}>
                  <Disclosure.Button className="sm:text-center block px-3 py-2 rounded-md text-base font-medium text-gray-400  hover:bg-[#76C0FA] hover:text-[#1F2937] w-full text-start ">
                    Your Profile
                  </Disclosure.Button>
                </Link>
                <Link to={"/settings"}>
                  <Disclosure.Button className="sm:text-center block px-3 py-2 rounded-md text-base font-medium text-gray-400  hover:bg-[#76C0FA] hover:text-[#1F2937] w-full text-start">
                    Settings
                  </Disclosure.Button>
                </Link>
                <Disclosure.Button className="sm:text-center block px-3 py-2 rounded-md text-base font-medium text-gray-400  hover:bg-[#76C0FA] hover:text-[#1F2937] w-full text-start">
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
