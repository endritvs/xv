import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import xv from "./xv.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "Career Stats", href: "stats", current: false },
  { name: "Career", href: "about-stats", current: false },
  { name: "Photos", href: "gallery", current: false },
  { name: "Video", href: "video", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [currentNav, setNavigation] = useState(navigation);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      setTimeout(() => setScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: to === item.href,
    }));

    setNavigation(updatedNavigation);
  };

  return (
    <Disclosure as="nav" className={`bg-gray-800 ${scrolling ? "shadow-lg" : ""}`}>
      {({ open }) => (
        <>
          <div className="flex justify-center mx-auto px-2 !w-full sm:px-6 lg:px-8">
            <div className="fixed bg-gray-800 w-full z-10 flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-[10px] flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch justify-start lg:justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <img src={xv} className="lg:hidden mr-3 h-12" alt="XV Logo" loading="lazy" />

                  <img
                    src={xv}
                    className="hidden lg:block mr-3 h-10"
                    alt="XV Logo" loading="lazy"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {currentNav.map((item) => (
                      <Link
                        to={item.href}
                        spy={true}
                        smooth={true}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-extrabold "
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onSetActive={() => handleSetActive(item.href)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden fixed bg-gray-800 z-10 rounded-b-[10px] w-full mt-[50px]">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-center">
              {currentNav.map((item) => (
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block text-center w-full px-3 py-2 rounded-md text-base font-extrabold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
