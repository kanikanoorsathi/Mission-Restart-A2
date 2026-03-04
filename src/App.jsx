// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Vite + React</h1> */}

      {/* navbar starts here */}
      <div class="navbar bg-base-100 shadow-sm sticky top-0">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Changelog</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost font-bold text-xl">CS — Ticket System</a>
        </div>
        <div class="navbar-end hidden lg:flex"></div>
        <div class="navbar-end">
          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-black text-xs">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Changelog</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <a class="btn bg-[#422AD5] text-white py-4 px-4 rounded-lg">
              <span class=" text-sm">+</span> New Ticket
            </a>
          </div>
        </div>
      </div>
      {/* navbar ended here */}

      {/* footer starts here */}
      <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 class="text-white text-xl">CS — Ticket System</h6>
          <p class="text-gray-400">Lorem Ipsum is simply dummy text of the</p>
        </nav>
        <nav>
          <h6 class="text-white">Company</h6>
          <a class="link link-hover text-gray-400">About Us</a>
          <a class="link link-hover text-gray-400">Our Mission</a>
          <a class="link link-hover text-gray-400">Contact Saled</a>
        </nav>
        <nav>
          <h6 class="text-white">Services</h6>
          <a class="link link-hover text-gray-400">Products & Services</a>
          <a class="link link-hover text-gray-400">Customer Stories</a>
          <a class="link link-hover text-gray-400">Download Apps</a>
        </nav>
        <nav>
          <h6 class="text-white">Information</h6>
          <a class="link link-hover text-gray-400">Privacy Policy</a>
          <a class="link link-hover text-gray-400">Terms & Conditions</a>
          <a class="link link-hover text-gray-400">Join Us</a>
        </nav>

        <nav>
          <h6 class="text-white">Social Links</h6>
          <a class="link link-hover text-gray-400">@CS — Ticket Systeme</a>
          <a class="link link-hover text-gray-400">@CS — Ticket Systeme</a>
          <a class="link link-hover text-gray-400">@CS — Ticket Systeme</a>
          <a class="link link-hover text-gray-400">support@cst.com</a>
        </nav>
      </footer>
      {/* footer ended here */}

      <footer class="footer footer-center sm:footer-horizontal bg-neutral text-neutral-content text-center items-center  p-6 border-t border-gray-800">
          <p> © 2025 CS — Ticket System. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
