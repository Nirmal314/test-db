import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import "../styles/globals.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import React from "react";
import fv from "../public/innovators_logo.png";
import Image from "next/image";
import Navitemsmobile from "../components/Navitemsmobile";
import Link from "next/link";
import Navitemslight from "../components/Navitemslight";

function MyApp({ Component, pageProps, pp }) {
  const router = useRouter();
  const [user, setUser] = useState({ value: null });
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       includedLanguages: "en,gu,hi,ta,mr", // include this for selected languages
  //       // layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
  //       crossDomain:true
  //     },
  //     "google_translate_element"
  //   );
  // };

  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      hideSidebar();
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  function logout() {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    toast.success("You have been logged out.", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function hideSidebar() {
    if (!isHidden) {
      document.getElementById("sidebar").classList.remove("translate-x-0");
      document.getElementById("sidebar").classList.add("-translate-x-full");
      setIsHidden(true);
    }
  }
  return (
    <>
      <Head>
        <title>Innovators</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LoadingBar
        color="#3976c1"
        progress={progress}
        waitingTime={400}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* <Navbar logout={logout} user={user} key={key} /> */}
      <div key={key}>
        <div
          className="h-full transition-all pc:-translate-x-full -translate-x-full z-[1000] fixed mobile:top-20 nav:top-24 bg-gray-900 mobile:w-1/2 nav:w-80 "
          id="sidebar"
        >
          <div className="w-full mt-10 flex flex-col jutsify-center items-center">
            <Link href="/">
              <a>
                <Navitemsmobile title={"Home"}></Navitemsmobile>
              </a>
            </Link>
            <Link href="/getSchemes">
              <a>
                <Navitemsmobile title={"All schemes"}></Navitemsmobile>
              </a>
            </Link>
            <Navitemsmobile title={"Check eligibility"}></Navitemsmobile>
            <Navitemsmobile title={"Contact us"}></Navitemsmobile>

            {user.value && (
              <div
                className="mobile:text-sm rounded-md w-full flex justify-center items-center text-white border-none font-normal text-base px-4 mobile:py-4 nav:py-2"
                onClick={logout}
              >
                <p className="cursor-pointer">Logout</p>
              </div>
            )}
            {!user.value && (
              <div onClick={hideSidebar}>
                <Link href="/login">
                  <a>
                    <Navitemsmobile title={"Login / Register"}></Navitemsmobile>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* end sidebar for ipad & mobile view */}

        {/* start desktop view */}

        <div className="nav:hidden mobile:hidden">
          <div className="w-full top-0 z-50 fixed h-24 p-10 bg-gray-50 text-white shadow-md flex justify-between items-center">
            <Image height={70} width={70} src={fv} alt="LOGO" />

            <div className="space-x-10 flex">
              <div className="space-x-4 flex">
                <Link href="/">
                  <a>
                    <Navitemslight title={"Home"}></Navitemslight>
                  </a>
                </Link>
                <Link href="/getSchemes">
                  <a>
                    <Navitemslight title={"All schemes"}></Navitemslight>
                  </a>
                </Link>
                <Navitemslight title={"Check eligibility"}></Navitemslight>
                <Navitemslight title={"Contact us"}></Navitemslight>
                {user.value && (
                  <div onClick={logout}>
                    <Navitemslight title={"Logout"}></Navitemslight>
                  </div>
                )}
                {!user.value && (
                  <Link href="/login">
                    <a>
                      <Navitemslight title={"Login / Register"}></Navitemslight>
                    </a>
                  </Link>
                )}
              </div>
            </div>
            {/* <div id="google_translate_element"></div> */}
          </div>
        </div>

        {/* end desktop view  */}

        {/* start ipad view */}

        <div className="nav:flex hidden">
          <div className="w-full top-0 z-50 fixed h-24 p-10 bg-white text-black shadow-md flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => {
                document
                  .getElementById("sidebar")
                  .classList.toggle("-translate-x-full");
                setIsHidden(!isHidden);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <Image height={60} width={60} src={fv} alt="LOGO" />
          </div>
        </div>

        {/* end ipad view */}

        {/* start mobile view */}

        <div className="mobile:flex hidden">
          <div className="w-full top-0 z-50 fixed h-10 p-10 bg-gray-50 text-black shadow-md flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => {
                document
                  .getElementById("sidebar")
                  .classList.toggle("-translate-x-full");
                // console.log("hmm");
                setIsHidden(!isHidden);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <Image height={55} width={55} src={fv} alt="LOGO" />
          </div>
        </div>
      </div>
      <main>
        <Component {...pageProps} hideSidebar={hideSidebar} />
        {/* <Component {...pageProps} /> */}
      </main>
    </>
  );
}

function myapp2({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
