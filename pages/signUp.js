import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function register1({ hideSidebar, host, proto }) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [passwordc, setpasswordc] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const [gender, setgender] = useState("");
  const [income, setincome] = useState("");
  const [marital, setmarital] = useState("");
  const [cast, setcast] = useState("");
  const [education, seteducation] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password != passwordc) {
      toast.error("Passwords does not match!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      gender === "" ||
      marital === "" ||
      income === "" ||
      cast === "" ||
      education === "" ||
      gender === "Select" ||
      marital === "Select" ||
      income === "Select" ||
      cast === "Select" ||
      education === "Select"
    ) {
      toast.error("Select all the fields!", {
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
        name,
        password,
        age,
        email,
        gender,
        income,
        marital,
        cast,
        education,
      };

      // let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      const h = proto + host + "/api/signup";
      console.log(h);
      console.log(typeof h, typeof String(h));
      let res = await fetch(String(h), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(data);
      console.log(response);

      setname("");
      setpassword("");
      setpasswordc("");
      setage("");
      setemail("");
      setgender("");
      setincome("");
      setmarital("");
      setcast("");
      seteducation("");

      toast.success("Your account has been created!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //   setTimeout(() => {
      //     router.push("/login");
      //   }, "1200");
    }
  }

  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* pc view */}
      <ToastContainer
        position="top-center"
        // bodyClassName="mobile:w-14"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pc:mt-24 nav:mt-24 mobile:mt-20">
        <section
          className="bg-gradient-to-br from-[rgba(255,153,51,1)] via-white to-[rgba(19,136,8,1)]"
          onClick={hideSidebar}
        >
          <div className="flex flex-col items-center mt-0.25 justify-center h-screen nav:h-fit mobile:h-fit">
            <p className="flex w-full justify-center mt-6 items-center mb-4 text-4xl text-black font-medium">
              Create new account
            </p>
            <div className="flex w-full justify-center items-center">
              <p className="flex items-center mb-6 mr-2 text-md text-black font-normal">
                Already Registered?
              </p>
              <div
                onClick={() => router.push("/login")}
                className="cursor-pointer"
              >
                <p className="flex items-center mb-6 underline text-md text-blue-800 font-normal">
                  Login
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} method="POST">
              <div className="flex mobile:flex-col nav:flex-col mobile:space-y-4 nav:space-y-4 items-center p-4 justify-between">
                <div className="flex flex-col space-y-4 pc:mr-24 w-96 mobile:w-72">
                  {/* NAME */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Full name
                    </label>
                    <input
                      onChange={(e) => setname(e.target.value)}
                      type="name"
                      className="bg-gray-600 text-gray-50 border-2 border-gray-700 rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder=""
                      value={name}
                      required
                    />
                  </div>
                  {/* CREATE PASS */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Create password
                    </label>
                    <input
                      onChange={(e) => setpassword(e.target.value)}
                      type="password"
                      className="bg-gray-600 text-gray-50 border-2 border-gray-700 rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder=""
                      value={password}
                      // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"
                      required
                    />
                  </div>
                  {/* GENDER */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Gender
                    </label>
                    <select
                      onChange={(e) => setgender(e.target.value)}
                      value={gender}
                      id="gender"
                      className="w-full text-gray-50 border-2 border-gray-700 bg-gray-600 focus:ring-4 focus:outline-none font-normal relative rounded-lg text-md p-2.5"
                    >
                      <option value="Select">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {/* INCOME */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Income
                    </label>
                    <select
                      onChange={(e) => setincome(e.target.value)}
                      value={income}
                      id="income"
                      className="w-full text-gray-50 border-2 border-gray-700 bg-gray-600 focus:ring-4 focus:outline-none font-normal relative rounded-lg text-md p-2.5"
                    >
                      <option value="Select">Select</option>
                      <option value="Less than 50,000">Less than 50,000</option>
                      <option value="50,000 - 2,50,000">
                        50,000 - 2,50,000
                      </option>
                      <option value="Greater than 7,00,000">
                        Greater than 7,00,000
                      </option>
                    </select>
                  </div>
                  {/* AGE */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Age
                    </label>
                    <input
                      onChange={(e) => setage(e.target.value)}
                      type="number"
                      className="bg-gray-600 text-gray-50 border-2 border-gray-700 rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder=""
                      value={age}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 w-96 mobile:w-72">
                  {/* EMAIL */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Email
                    </label>
                    <input
                      onChange={(e) => setemail(e.target.value)}
                      type="email"
                      className="bg-gray-600 text-gray-50 border-2 border-gray-700 rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder=""
                      value={email}
                      required
                    />
                  </div>
                  {/* CONFIRM PASS */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Confirm password
                    </label>
                    <input
                      onChange={(e) => setpasswordc(e.target.value)}
                      type="password"
                      className="bg-gray-600 text-gray-50 border-2 border-gray-700 rounded-lg focus:outline-none block w-full p-2.5 "
                      placeholder=""
                      value={passwordc}
                      required
                    />
                  </div>
                  {/* MARITAL STAT */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Marital status
                    </label>
                    <select
                      onChange={(e) => setmarital(e.target.value)}
                      value={marital}
                      id="marital"
                      className="w-full text-gray-50 border-2 border-gray-700 bg-gray-600 focus:ring-4 focus:outline-none font-normal relative rounded-lg text-md p-2.5"
                    >
                      <option value="Select">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Windowed">Windowed</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>
                  {/* CAST */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Cast class
                    </label>
                    <select
                      onChange={(e) => setcast(e.target.value)}
                      value={cast}
                      id="cast"
                      className="w-full text-gray-50 border-2 border-gray-700 bg-gray-600 focus:ring-4 focus:outline-none font-normal relative rounded-lg text-md p-2.5"
                    >
                      <option value="Select">Select</option>
                      <option value="General">General</option>
                      <option value="SEBC">SEBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>
                  {/* EDUCATION */}
                  <div>
                    <label className="block mb-2 text-md font-normal text-black">
                      Education
                    </label>
                    <select
                      onChange={(e) => seteducation(e.target.value)}
                      value={education}
                      id="education"
                      className="w-full text-gray-50 border-2 border-gray-700 bg-gray-600 focus:ring-4 focus:outline-none font-normal relative rounded-lg text-md p-2.5"
                    >
                      <option value="Select">Select</option>
                      <option value="Primary education (Till 8th class)">
                        Primary education (Till 8th class)
                      </option>
                      <option value="Secondary education (Till 10th class)">
                        Secondary education (Till 10th class)
                      </option>
                      <option value="Senior secondary education (TIll 12th class)">
                        Senior secondary education (TIll 12th class)
                      </option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6 w-full flex justify-center items-center mb-12">
                <button
                  type="submit"
                  className="pc:w-1/4 mobile:w-1/2 nav:w-1/2 text-white bg-[#4c6fc0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-lg px-5 py-2.5 text-center"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default register1;
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
