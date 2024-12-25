import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddUser() {
    interface addUser {
        firstName: string;
        lastName: string;
        email: string;
        age: number;
        phone: number;
        birthDate: string;
      }
      const { id } = useParams();
      console.log(id);
      const navigate = useNavigate();
      const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm<addUser>();
    
      // Fetch user data if `id` is provided
      useEffect(() => {
        if (id) {
          axios
            .get(`https://dummyjson.com/users/${id}`)
            .then((response) => {
              const dataUser = response.data;
              console.log(dataUser);
              setValue("firstName", dataUser.firstName);
              setValue("lastName", dataUser.lastName);
              setValue("email", dataUser.email);
              setValue("age", dataUser.age);
              setValue("phone", dataUser.phone);
              // Format birthDate for date input
              const formattedDate = new Date(dataUser.birthDate)
                .toISOString()
                .split("T")[0];
              setValue("birthDate", formattedDate);
            })
            .catch((error) => {
              console.error("Failed to fetch user data:", error);
              toast.error("Failed to fetch user data");
            });
        }
      }, [id, setValue]);
    
      const onSubmit = async (data: addUser) => {
        console.log(data);
        if (id) {
          try {
            // Update user
            const response = await axios.put(
              `https://dummyjson.com/users/${id}`,
              data
            );
            console.log(response);
            toast.success("User Updated Successfully");
          } catch (error) {
            console.log(error);
            toast.error("Faild To Update Data");
          }
        } else {
          try {
            // Add new user
            const response = await axios.post(
              `https://dummyjson.com/users/add`,
              data
            );
            console.log(response);
            toast.success("User Added Successfully");
          } catch (error) {
            console.log(error);
            toast.error("Faild To Add User");
          }
        }
        navigate("/dashboard");
      };
      return (
        <div className="bg-stone-50 h-screen p-4">
          <h3 className="text-lg font-bold py-3">
            {id ? "Update User" : "Add User"}
          </h3>
          <hr />
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex shadow-lg md:mx-14 xl:mx-28 my-5 p-5 bg-white rounded-2xl flex-col justify-center items-center  "
          >
            <div className="lg:my-6 flex flex-col lg:flex-row w-full max-w-4xl lg:space-x-4">
              {/* First Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="fname"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter your First Name"
                  className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                    errors.firstName
                      ? ` focus:border-red-600 border-red-600`
                      : ` focus:border-amber-300`
                  } `}
                  {...register("firstName", {
                    required: "First Name is Required!",
                  })}
                />
                {errors.firstName && (
                  <span className=" text-red-600">
                    {errors?.firstName?.message}
                  </span>
                )}
              </div>
              {/* Second Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="lname"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Last Name
                </label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Enter your Last Name"
                  className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                    errors.lastName
                      ? ` focus:border-red-600 border-red-600`
                      : ` focus:border-amber-300`
                  } `}
                  {...register("lastName", { required: "Last Name is Required!" })}
                />
                {errors.lastName && (
                  <span className=" text-red-600">{errors?.lastName?.message}</span>
                )}
              </div>
            </div>
            <div className="lg:my-6 flex flex-col lg:flex-row w-full max-w-4xl lg:space-x-4">
              {/* First Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                    errors.email
                      ? ` focus:border-red-600 border-red-600`
                      : ` focus:border-amber-300`
                  } `}
                  {...register("email", {
                    required: "Email is Required!",
                    pattern: {
                      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Email Not Vaild",
                    },
                  })}
                />
                {errors.email && (
                  <span className=" text-red-600">{errors?.email?.message}</span>
                )}
              </div>
              {/* Second Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  placeholder="Enter your Age"
                  className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                    errors.age
                      ? ` focus:border-red-600 border-red-600`
                      : ` focus:border-amber-300`
                  } `}
                  {...register("age", {
                    required: "Age is Required!",
                    min: 1,
                    max: 70,
                  })}
                />
                {errors.age && (
                  <span className=" text-red-600">{errors?.age?.message}</span>
                )}
              </div>
            </div>
            <div className="lg:my-6 flex flex-col lg:flex-row w-full max-w-4xl lg:space-x-4">
              {/* First Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="Enter your Phone Number"
                  className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                    errors.phone
                      ? ` focus:border-red-600 border-red-600`
                      : ` focus:border-amber-300`
                  } `}
                  {...register("phone", { required: "Phone is Required!" })}
                />
                {errors.phone && (
                  <span className=" text-red-600">{errors?.phone?.message}</span>
                )}
              </div>
              {/* Second Input */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="date"
                  className="text-sm font-medium my-2 text-neutral-500"
                >
                  Birth Date
                </label>
                <input
                  id="date"
                  type="date"
                  placeholder="Enter your Birth Date"
                  className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                    errors.birthDate
                      ? ` focus:border-red-600 border-red-600`
                      : ` focus:border-amber-300`
                  } `}
                  {...register("birthDate", {
                    required: "Birth Date is Required!",
                  })}
                />
                {errors.birthDate && (
                  <span className=" text-red-600">
                    {errors?.birthDate?.message}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-white rounded-sm my-3 md:my-5 w-1/2 p-2"
            >
              {id ? "Update" : "Save"}
            </button>
          </form>
        </div>
      );
}
