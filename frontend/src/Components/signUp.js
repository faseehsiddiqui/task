import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const schema = yup
  .object({
    Email: yup.string().required(),
  })
  .required();
export default function SignUp() {
  const navigate = useNavigate();
  // const [email, setemail] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    // setemail(data);
    localStorage.setItem("Email", JSON.stringify(data));
    axios.post("http://localhost:5500/signup", data).then((res) => {
      if (res.data.code) {
        toast.success("otp code is sending", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/model");
        }, 2000);
      } else {
        toast.error("wrong email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  // localStorage.setItem("Email", email);
  return (
    <div>
      <ToastContainer />
      <div className="h-[89.8vh] flex justify-center  bg-gray-200 ">
        <div className="flex-1 flex flex-col  py-12   px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24  ">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6  text-3xl font-semibold text-gray-900">
                Register your account
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6 ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="flex justify-evenly"></div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        autoComplete="email"
                        {...register("Email")}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {errors.Email && <span>Enter your email</span>}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <label className="ml-2 text-sm">
                        Already have a account?{" "}
                        <Link
                          to="/login"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </Link>
                      </label>
                    </div>
                  </div>
                  <div>
                    {/* <Link to="/model"> */}
                    <button
                      type="submit"
                      className="w-full flex justify-center mt-7 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
                    </button>
                    {/* </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
