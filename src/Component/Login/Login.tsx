import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export default function Login() {
    interface LoginFormInputs {
        username: string;
        password: string;
      }
      interface AuthcontextType {
        saveUserDate: () => void;
      }
      const { saveUserDate } = useContext(AuthContext) as AuthcontextType;
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginFormInputs>();
      const navigate = useNavigate();
      const onSubmit = async (data: LoginFormInputs) => {
        try {
          const response = await axios.post(
            "https://dummyjson.com/auth/login",
            data
          );
          console.log(response);
          toast.success("Login is success");
          saveUserDate();
          navigate("/dashboard");
          localStorage.setItem("userToken", response?.data?.accessToken);
        } catch (error) {
          console.log(error);
          toast.error("Login faild");
        }
      };
    
      return (
        <div className="bg-gradient-to-br from-yellow-500 to-amber-300 w-full h-screen flex justify-center items-center shadow-custom">
          <div className=" bg-white mx-3 lg:mx-0  md:w-1/2 xl:w-1/4 rounded-2xl px-8 py-9 ">
            <h1 className={` relative text-2xl  font-bold lef `}>
              User Management System
            </h1>
            <h4 className=" text-center mt-6 text-xl font-semibold">SIGNIN</h4>
            <p className=" text-center text-sm mt-2 mb-6 text-neutral-500 font-normal leading-4">
              Enter your credentials to access your account
            </p>
            <form
              action=""
              className=" flex flex-col mt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                htmlFor="username"
                className=" text-sm font-medium my-2 text-neutral-500"
              >
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className={` border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                  errors.username
                    ? ` focus:border-red-600 border-red-600`
                    : ` focus:border-amber-300`
                } `}
                {...register("username", { required: "username is Required!" })}
              />
              {errors.username && (
                <span className=" text-red-600">{errors?.username?.message}</span>
              )}
              {/* password */}
              <label
                htmlFor="pass"
                className=" text-sm font-medium my-2 text-neutral-500"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className={`border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 ${
                  errors.password
                    ? ` focus:border-red-600 border-red-600`
                    : ` focus:border-amber-300`
                }`}
                {...register("password", { required: "Password is Required" })}
              />
              {errors.password && (
                <span className=" text-red-600">{errors?.password?.message}</span>
              )}
              <button
                type="submit"
                className="bg-yellow-500 text-white rounded-md my-5 p-2"
              >
                SIGNIN
              </button>
            </form>
          </div>
        </div>
      );
}
