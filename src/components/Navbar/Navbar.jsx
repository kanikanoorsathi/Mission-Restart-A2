import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50"> 
      <nav className="bg-base-100 shadow-sm">
        <div className=" flex  justify-between items-center mx-auto py-6">
         {/* navbar starts here */}
            <div>
               <div className="navbar-start">
                   <div className="dropdown">
                       <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                           <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                    <a className="btn btn-ghost font-bold text-xl">CS — Ticket System</a>
                </div>
            </div>
            {/* Navber ended */}

            <div className="navbar-end">
                <div className="flex">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black text-sm">
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
                        <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] cursor-pointer text-white py-4 px-4 rounded-lg" href="#">
                             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                             New Ticket
                        </a>
                </div>
            </div>

            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
