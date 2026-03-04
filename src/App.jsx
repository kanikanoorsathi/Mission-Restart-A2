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
      <div class="navbar bg-base-100 shadow-sm">
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
             
             <li><a href="">Home</a></li>
             <li><a href="">Changelog</a></li>
             <li><a href="">Blog</a></li>
             <li><a href="">Download</a></li>
             <li><a href="">Contact</a></li>
              
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          
        </div>
        <div class="navbar-end">
          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
             <li><a href="">Home</a></li>
             <li><a href="">Changelog</a></li>
             <li><a href="">Blog</a></li>
             <li><a href="">Download</a></li>
             <li><a href="">Contact</a></li>
          </ul>
          </div>
          <div>
            <a  class="btn">New Ticket</a>
          </div>
        </div>
      </div>
      {/* navbar ended here */}
    </>
  );
}

export default App;
