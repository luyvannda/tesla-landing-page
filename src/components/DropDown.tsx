import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button className="z-20">
          <a href="#menu" className="nav_link">
            Menu
          </a>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#modelS"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-center text-xl"
                  )}
                >
                  Model S
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#model3"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-center text-xl"
                  )}
                >
                  Model 3
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#modelX"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-center text-xl"
                  )}
                >
                  Model X
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#modelY"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-center text-xl"
                  )}
                >
                  Model Y
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#solarRoof"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-center text-xl"
                  )}
                >
                  Solar Roof
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#solarPanels"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-center text-xl"
                  )}
                >
                  Solar Panels
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
