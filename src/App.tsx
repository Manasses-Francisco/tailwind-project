import { useState } from "react";

import Pizza1 from "./assets/pizza-1.jpg";
import Pizza5 from "./assets/pizza-5.jpg";
import Pizza7 from "./assets/pizza-7.jpg";

function App() {
  const [click, setClick] = useState(false);

  function handleBurger() {
    setClick((prev) => !prev);
  }

  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        {" "}
        {/** wrapper nav */}
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" className="hover:text-gray-700">
                Food Man
              </a>
            </h1>
            <div
              className="px-4 cursor-pointer md:hidden"
              onClick={handleBurger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <ul className={`text-sm mt-6 ${click ? "" : "hidden"}  md:block`}>
            <li className="text-gray-700 font-bold py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-primary"
              >
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>{" "}
      {/** End nav */}
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Log in
          </a>
          <a
            href="#"
            className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Man</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            {/*** Cards go here */}
            <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
              <img
                src={Pizza1}
                alt="pizza-1"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
              <img
                src={Pizza5}
                alt="pizza-1"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Veg Noodles</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
              <img
                src={Pizza7}
                alt="pizza-1"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Tofu Curry</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-gray-200">Most Popular</h4>

          <div>{/*** Cards go here */}</div>

          <div className="flex justify-center">
            <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
