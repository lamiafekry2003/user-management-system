import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";


export default function NavBar() {
   // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex  items-center justify-between  p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <MdOutlineManageAccounts size={24} className=" text-gray-400" />
        </Link>

        {/* Mobile Toggle Button */}
        {/* <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div> */}

        {/* Links Section */}
        {/* <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          }  md:flex justify-end md:w-auto md:order-1 ms-auto`}
        > */}
        <div className="flex items-center justify-end ms-auto space-x-3">
          <div className=" flex relative">
            <input
              type="text"
              placeholder="Search"
              className="block py-2 px-2 md:px-4 relative right-0 text-sm outline-none text-gray-900 border border-gray-300 rounded-md bg-transparent focus:ring-yellow-500 focus:border-yellow-500"
            />
            <CiSearch
              size={20}
              className=" absolute right-0 top-2 mx-2 text-gray-500 "
            />
          </div>
          <IoMdNotificationsOutline size={24} className="text-gray-500" />
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
