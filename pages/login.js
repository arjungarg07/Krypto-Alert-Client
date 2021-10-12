import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import login from "../public/alert.svg";
import logoo from "../public/logoo.svg";

export default function Login() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = ({ username, password }) => {
    console.log(username,password);
  };
  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              Hugo
            </a>
            {/* <Image src={logoo} height={100} width={300} alt="knak"/> */}
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="username" className="text-lg">
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  placeholder="Username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  required = "true"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  required="true"
                />
              </div>

              <button
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              >Log In </button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don&apos;t have an account?{" "}
                <a href="/pages/register" className="underline font-semibold">
                  Register here.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="md:block"
            width={800}
            height={910}
            src={login}
            alt="Login Wallpaper"
          />
        </div>
      </div>
    </div>
  );
}
