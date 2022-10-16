import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function login1({ hideSidebar, host, proto }) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    if (email == "" || password == "") {
      toast.error("Please enter credentials.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = {
        email,
        password,
      };

      // let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      const h = proto + host + "/api/login";
      console.log(h);
      let res = await fetch(h, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(data);
      console.log(response);
      setEmail("");
      setPassword("");

      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success("You are logged in sucessfully!", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          router.push("/");
        }, "1200");
      } else {
        toast.error(response.error, {
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  return (
    <section
      className="bg-gradient-to-br from-[rgba(255,153,51,1)] via-white to-[rgba(19,136,8,1)]"
      onClick={hideSidebar}
    >
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        <p className="flex items-center mb-4 text-4xl text-black font-medium">
          Welcome back!
        </p>
        <div className="flex">
          <p className="flex items-center mb-6 mr-2 text-md text-black font-normal">
            Don't have an account yet?
          </p>
          <div onClick={() => router.push("/signUp")}>
            <p className="flex cursor-pointer items-center mb-6 underline text-md text-blue-800 font-normal">
              Sign up
            </p>
          </div>
        </div>
        <div className="w-full bg-trasparent max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-normal text-black"
                >
                  Email
                </label>
                <input
                  value={email}
                  defaultValue=""
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-600 border-2 border-gray-700 text-gray-50 rounded-lg focus:ring-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-md font-normal text-black"
                >
                  Password
                </label>
                <input
                  value={password}
                  defaultValue=""
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-600 border-2 border-gray-700 text-gray-50 rounded-lg focus:ring-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border-2 border-gray-700 rounded bg-gray-600 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm mobile:text-xs mobile:ml-2">
                    <label htmlFor="remember" className="text-black">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm mobile:text-xs font-normal text-blue-800 underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-gray-50 bg-[#4c6fc0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-lg px-5 py-2.5 text-center"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default login1;
export async function getServerSideProps({ req, res }) {
  const proto =
    req.headers["x-forwarded-proto"] || req.connection.encrypted
      ? "https://"
      : "http://";
  return {
    props: {
      host: req.headers.host,
      proto,
    },
  };
}