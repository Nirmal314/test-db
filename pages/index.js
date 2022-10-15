

export default function Home2() {
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
                <a href="https://www.google.com" className="text-blue-700 text-lg">
                  https://www.google.com
                </a>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a href="https://www.google.com" className="text-blue-700 text-lg">
                  https://www.google.com
                </a>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a href="https://www.google.com" className="text-blue-700 text-lg">
                  https://www.google.com
                </a>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-normal">
                  Scheme name [this bracket is just to increase length of line]
                </div>
                <a href="https://www.google.com" className="text-blue-700 text-lg">
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