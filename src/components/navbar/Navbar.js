import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = ({ logo, sectionLogo, sectionTitle }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 mx-4">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <section className="flex gap-6 items-center justify-center ">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Flowbite Logo" />
            </a>
            <a className="flex flex-row items-center gap-2">
              <img src={sectionLogo} className="h-4 w-4" alt="Flowbite Logo" />
              <h3>{sectionTitle}</h3>
            </a>
          </section>
          <div className="flex flex-row gap-6">
          <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center">Browse Mentors</button>
            <button>
              <Icon icon="system-uicons:bell" className="text-4xl" />
            </button>

            <div className="relative">
              <button
                onClick={() => {
                  setShowMenu(true);
                }}
                onBlur={() => {
                  setShowMenu(false);
                }}
                type="button"
                className="flex items-center rounded-full focus:ring-4 focus:ring-gray-600"
              >
                <Icon icon="healthicons:ui-user-profile" className="text-4xl" />
                <Icon icon="mingcute:down-line" className="text-2xl" />
              </button>
              {/* Dropdown menu */}
              {showMenu && (
                <div className="absolute -left-20 flex flex-col bg-white shadow-md rounded-b-xl">
                  <a className="flex flex-row gap-2 border-b border-gray-300 px-4 py-2 my-1">
                    <Icon icon="iconamoon:profile-thin" className="text-2xl" />
                    <span className="block">My Profile</span>
                  </a>

                  <a className="flex flex-row gap-2 border-b border-gray-300 px-4 py-2 my-1">
                    <Icon icon="ph:wallet-thin" className="text-2xl" />
                    <span className="block">My Profile</span>
                  </a>

                  <a className="flex flex-row gap-2  px-4 pb-4 my-1">
                    <Icon
                      icon="material-symbols-light:logout"
                      className="text-2xl"
                    />
                    <span className="block">My Profile</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
