import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Profile() {
    interface User {
        id: number;
        name: string;
        email: string;
        firstName: string;
        lastName: string;
        image: string;
        age: number;
        phone: number;
        birthDate: string | number;
      }
    
      interface AuthcontextType {
        userData: User | null;
      }
      const { userData } = useContext(AuthContext) as AuthcontextType;
      console.log(userData);
      // Format birthDate to YYYY-MM-DD
      const formatDate = (date: string | number) => {
        if (!date) return "";
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };
      return (
        <div className="bg-stone-50 h-screen p-4">
          <h3 className="text-lg font-bold py-3">Profile</h3>
          <hr />
          <div className="imge flex justify-center items-center relative top-0 md:top-5">
            <img
              src={userData?.image}
              alt=""
              className=" w-20 h-20 md:w-32 md:h-32 rounded-full "
            />
          </div>
          <form
            action=""
            className="flex -mt-10  md:-mt-9 shadow-lg md:mx-14 xl:mx-28  p-5 bg-white rounded-2xl  flex-col justify-center items-center"
          >
            <div className="lg:my-6 flex flex-col lg:flex-row w-full max-w-4xl lg:space-x-4">
              {/* First Name Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="fname"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  First Name
                </label>
                <input
                  id="fname"
                  value={userData?.firstName || ""}
                  type="text"
                  placeholder="Enter your First Name"
                  className="border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0"
                  readOnly
                />
              </div>
              {/* Last Name Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="lname"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Last Name
                </label>
                <input
                  id="lname"
                  value={userData?.lastName || ""}
                  type="text"
                  placeholder="Enter your Last Name"
                  className="border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0"
                  readOnly
                />
              </div>
            </div>
            <div className="lg:my-6 flex flex-col lg:flex-row w-full max-w-4xl lg:space-x-4">
              {/* Email Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  value={userData?.email || ""}
                  type="email"
                  placeholder="Enter your Email"
                  className="border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0"
                  readOnly
                />
              </div>
              {/* Age Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="age"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Age
                </label>
                <input
                  id="age"
                  value={userData?.age || ""}
                  type="number"
                  placeholder="Enter your Age"
                  className="border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0"
                  readOnly
                />
              </div>
            </div>
            <div className="lg:my-6 flex flex-col lg:flex-row w-full max-w-4xl lg:space-x-4">
              {/* Phone Number Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  value={userData?.phone || ""}
                  type="phone"
                  placeholder="Enter your Phone Number"
                  className="border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0"
                  readOnly
                />
              </div>
              {/* Birth Date Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="date"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Birth Date
                </label>
                <input
                  id="date"
                  value={formatDate(userData?.birthDate || "")}
                  type="date"
                  placeholder="Enter your Birth Date"
                  className="border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0"
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      );
}
