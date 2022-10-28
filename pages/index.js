import { useEffect } from "react";

function Home2() {
  return (
    <>
      <div className="nav:hidden mobile:hidden">
        <div className="w-full overflow-hidden">
          <form
            className="flex justify-between items-center ml-20 w-full  mt-[23vh] mb-40 h-auto"
            method="post"
          >
            <div className="flex flex-col">
              <div className=" w-3/4">
                <p className="nav:text-lg text-2xl mb-4 font-semibold text-left w-3/4">
                  You can use Akam to learn about Gujarat government schemes for
                  which you qualify, also gives you a list of all government
                  initiatives that are being hurried.
                </p>
              </div>
              <div className="flex items-center w-3/4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2 text-white absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  id="search"
                  className="bg-gray-700 border w-3/4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white"
                  placeholder="Type here"
                  required=""
                  name="search"
                />
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-6 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex -ml-28 flex-col justify-center w-full p-5">
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a
                  href="https://www.google.com"
                  className="text-blue-700 text-lg"
                >
                  https://www.google.com
                </a>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a
                  href="https://www.google.com"
                  className="text-blue-700 text-lg"
                >
                  https://www.google.com
                </a>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a
                  href="https://www.google.com"
                  className="text-blue-700 text-lg"
                >
                  https://www.google.com
                </a>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a
                  href="https://www.google.com"
                  className="text-blue-700 text-lg"
                >
                  https://www.google.com
                </a>
              </div>
            </div>
          </form>
          <div className="ml-12 mb-6">
            <p className="text-3xl font-semibold text-gray-800 ">
              Browse schemes by catagories:
            </p>
          </div>
          <div className="ml-10 mt-18 flex w-full justify-start space-x-16">
            <div className="max-w-[15rem] rounded-3xl border border-gray-200 shadow-md bg-gray-700">
              <div className="p-5">
                <a href="schemes/agriculture/" name="agriculture">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Agriculture
                  </h5>
                </a>
                <p className="mb-3 text-md font-normal text-gray-400">
                  All the schemes related to Agricluture.
                </p>
              </div>
            </div>
            <div className="max-w-[15rem] rounded-3xl border border-gray-200 shadow-md bg-gray-700">
              <div className="p-5">
                <a href="schemes/agriculture/" name="education">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Education
                  </h5>
                </a>
                <p className="mb-3 text-md font-normal text-gray-400">
                  All the schemes related to Education.
                </p>
              </div>
            </div>
            <div className="max-w-[15rem] rounded-3xl border border-gray-200 shadow-md bg-gray-700">
              <div className="p-5">
                <a href="schemes/startup/" name="startup">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Startup
                  </h5>
                </a>
                <p className="mb-3 text-md font-normal text-gray-400">
                  All the schemes related to Startup.
                </p>
              </div>
            </div>
            <div className="max-w-[15rem] rounded-3xl border border-gray-200 shadow-md bg-gray-700">
              <div className="p-5">
                <a href="schemes/other/" name="other">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Others
                  </h5>
                </a>
                <p className="mb-3 text-md font-normal text-gray-400">
                  All the schemes related to others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function responsiveHome({ hideSidebar }) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function trans() {
    // let count = 0;
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    while (true) {
      for (let i = 0; i < 3; i = (i + 1) % 3) {
        if (i == 0) {
          await sleep(4000);
          try {
            card3.style.opacity = 0;
            card1.style.opacity = 1;
          } catch (error) {
            return;
          }
        } else if (i == 1) {
          await sleep(4000);
          try {
            card1.style.opacity = 0;
            card2.style.opacity = 1;
          } catch (error) {
            return;
          }
        } else {
          // card2.style.transform = "translateX(100%)";
          await sleep(4000);
          try {
            card2.style.opacity = 0;
            card3.style.opacity = 1;
          } catch (error) {
            return;
          }
        }
      }
    }
  }
  // trans();
  function clearInput() {
    setTimeout(() => {
      document.getElementById("search").value = "";
    }, 5000);
  }
  function startDictation() {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();
      setTimeout(() => {
        document.getElementById("listening").style.display = "flex";
      }, 750);
      recognition.onresult = function (e) {
        document.getElementById("search").value = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById("listening").style.display = "none";
        console.log("yay");
        // document.getElementById('voice_form').submit();
      };
    } else {
      alert("voice recognition is not supported");
    }
  }
  return (
    <div className="w-full overflow-x-hidden h-screen" onClick={hideSidebar}>
      <form
        className="flex justify-between items-center pc:ml-10 w-full mt-[23vh] mb-32 h-auto nav:flex-col temp:flex-col mobile:flex-col"
        method="post"
        id="voice_form"
      >
        <div className="flex flex-col nav:justify-center mobile:justify-center nav:w-full mobile:w-full">
          <div className="w-3/4 nav:w-full mobile:w-full">
            <p className="nav:text-lg mobile:text-lg text-3xl mb-4 font-semibold text-left nav:text-center mobile:text-center w-3/4 nav:w-full mobile:w-full nav:px-16 mobile:px-12">
              You can use Akam to learn about Gujarat government schemes for
              which you qualify, also gives you a list of all government
              initiatives that are being hurried.
            </p>
          </div>
          <div className="nav:w-full mobile:w-full nav:flex mobile:flex nav:justify-center mobile:justify-center nav:items-center mobile:items-center">
            <div className="flex mobile:flex-col items-center w-3/4 relative overflow-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mobile:w-5 mobile:h-5 mobile:left-0 w-6 h-6 ml-2 mobile:mt-1.5 text-white absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                id="search"
                className="bg-gray-700 mobile:mb-2 border w-3/4 mobile:w-full border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 mobile:pl-10 p-2.5 mobile:p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white"
                placeholder="Type here"
                required
                name="search"
              />
              <div className="flex">
                <button
                  onClick={clearInput}
                  type="submit"
                  className="inline-flex transition-all items-center py-2.5 px-6 mobile:py-1.5 mobile:px-5 ml-2 text-sm font-semibold text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
                <button
                  onClick={startDictation}
                  className="inline-flex transition-all items-center px-2.5 py-2 mobile:py-1 mobile:px-1.5 ml-2 text-sm font-semibold text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mobile:w-5 mobile:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 nav:w-full mobile:w-full nav:flex mobile:flex nav:justify-center mobile:justify-center">
            <p
              id="listening"
              className="text-3xl mobile:text-2xl hidden font-medium text-blue-600"
            >
              Listening...
            </p>
          </div>
        </div>
        <div className="temp:ml-0 temp:mt-10 mobile:mt-20 flex h-96 items-center justify-center temp:items-center temp:justify-center overflow-auto pc:-ml-[25%] flex-col pc:justify-start w-full p-5">
          <div className="flex h-48 items-center w-full temp:justify-start justify-center relative">
            <div
              id="card1"
              className="absolute transition-all duration-[1000ms] max-w-md temp:max-w-sm nav:max-w-sm mobile:max-w-xs rounded-3xl border border-gray-200 shadow-md bg-gray-700"
            >
              <div className="p-5">
                <div className="text-3xl mobile:text-2xl mb-2 text-white font-semibold">
                  Scheme name
                </div>
                <div className="text-sm mb-4 text-white font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sunt ad optio vitae ex atque, vero excepturi quae animi
                  reiciendis veritatis temporibus laudantium repudiandae
                  deleniti.
                </div>
                <div className="">
                  <a href="{% url 'dynamic_scheme' scheme.id %}">
                    <div className="inline-flex transition-all items-center py-2.5 px-6 mobile:py-1.5 mobile:px-5 ml-2 text-sm font-semibold text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View more
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="ml-12 mb-6 mobile:text-center mobile:ml-0 nav:text-center nav:ml-0">
        <p className="text-3xl nav:text-2xl mobile:text-xl font-semibold text-gray-800">
          Browse schemes by catagories:
        </p>
      </div>
      <div className="mobile:hidden ml-10 nav:ml-0 mobile:ml-0 mb-24 mt-18 flex w-full items-center justify-start nav:justify-center mobile:justify-center space-x-16">
        <div className="flex items-center nav:flex-col mobile:flex-col nav:space-y-12 mobile:space-y-10 pc:space-x-16 ">
          <div className="max-w-[15rem] max-h-sm rounded-3xl border border-gray-200 shadow-md bg-gray-700">
            <div className="p-5">
              <a href="schemes/agriculture/" name="agriculture">
                <h5 className="mb-2 text-xl mobile:text-lg font-bold tracking-tight text-white">
                  Agriculture
                </h5>
              </a>
              <p className="mb-3 mobile:hidden text-md font-normal text-gray-400">
                All the schemes related to Agricluture.
              </p>
            </div>
          </div>
          <div className="max-w-[15rem] max-h-sm rounded-3xl border border-gray-200 shadow-md bg-gray-700">
            <div className="p-5">
              <a href="schemes/education/" name="education">
                <h5 className="mb-2 text-xl mobile:text-lg font-bold tracking-tight text-white">
                  Education
                </h5>
              </a>
              <p className="mb-3 mobile:hidden text-md font-normal text-gray-400">
                All the schemes related to Education.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center nav:flex-col mobile:flex-col nav:space-y-12 mobile:space-y-10 pc:space-x-16">
          <div className="max-w-[15rem] max-h-sm rounded-3xl border border-gray-200 shadow-md bg-gray-700">
            <div className="p-5">
              <a href="schemes/startup/" name="startup">
                <h5 className="mb-2 text-xl mobile:text-lg font-semibold tracking-tight text-white">
                  Startup
                </h5>
              </a>
              <p className="mb-3 mobile:hidden text-md font-normal text-gray-400">
                All the schemes related to Startup.
              </p>
            </div>
          </div>
          <div className="max-w-[15rem] max-h-sm rounded-3xl border border-gray-200 shadow-md bg-gray-700">
            <div className="p-5">
              <a href="schemes/other/" name="other">
                <h5 className="mb-2 text-xl mobile:text-lg font-extrabold tracking-tight text-white">
                  Others
                </h5>
              </a>
              <p className="mb-3 mobile:hidden text-md font-normal text-gray-400">
                All the schemes related to others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden mb-24 mt-18 mobile:flex flex-col space-y-4 w-full items-center justify-center">
        <div className="rounded-2xl w-1/2 border border-gray-200 shadow-md bg-gray-700">
          <div className="px-8 py-2">
            <a href="schemes/agriculture/" name="agriculture">
              <h5 className="mb-2 text-xl text-center mobile:text-lg font-bold tracking-tight text-white">
              Agriculture
              </h5>
            </a>
          </div>
        </div>
        <div className="rounded-2xl w-1/2 border border-gray-200 shadow-md bg-gray-700">
          <div className="px-8 py-2">
            <a href="schemes/education/" name="education">
              <h5 className="mb-2 text-xl text-center mobile:text-lg font-bold tracking-tight text-white">
              Education
              </h5>
            </a>
          </div>
        </div>
        <div className="rounded-2xl w-1/2 border border-gray-200 shadow-md bg-gray-700">
          <div className="px-8 py-2">
            <a href="schemes/startup/" name="startup">
              <h5 className="mb-2 text-xl text-center mobile:text-lg font-bold tracking-tight text-white">
              Startup
              </h5>
            </a>
          </div>
        </div>
        <div className="rounded-2xl w-1/2 border border-gray-200 shadow-md bg-gray-700">
          <div className="px-8 py-2">
            <a href="schemes/other/" name="other">
              <h5 className="mb-2 text-xl text-center mobile:text-lg font-bold tracking-tight text-white">
                Others
              </h5>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 bg-gray-700 py-1 px-0.5 mobile:py-0.5">
        <marquee
          behavior="scroll"
          scrollamount="9"
          className="text-md font-medium text-white mobile:text-sm"
        >
          MYSY scheme is ending on date 00/00/0000.
        </marquee>
      </div>
    </div>
  );
}
// export default Home2;
export default responsiveHome;
