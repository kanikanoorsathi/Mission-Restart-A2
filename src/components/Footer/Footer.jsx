import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer starts here */}
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="text-white text-xl">CS — Ticket System</h6>
          <p className="text-gray-400">Lorem Ipsum is simply dummy text of the</p>
        </nav>
        <nav>
          <h6 className="text-white">Company</h6>
          <a className="link link-hover text-gray-400">About Us</a>
          <a className="link link-hover text-gray-400">Our Mission</a>
          <a className="link link-hover text-gray-400">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="text-white">Services</h6>
          <a className="link link-hover text-gray-400">Products & Services</a>
          <a className="link link-hover text-gray-400">Customer Stories</a>
          <a className="link link-hover text-gray-400">Download Apps</a>
        </nav>
        <nav>
          <h6 className="text-white">Information</h6>
          <a className="link link-hover text-gray-400">Privacy Policy</a>
          <a className="link link-hover text-gray-400">Terms & Conditions</a>
          <a className="link link-hover text-gray-400">Join Us</a>
        </nav>

        <nav>
          <h6 className="text-white">Social Links</h6>
          <a className="link link-hover text-gray-400">@CS — Ticket Systeme</a>
          <a className="link link-hover text-gray-400">@CS — Ticket Systeme</a>
          <a className="link link-hover text-gray-400">@CS — Ticket Systeme</a>
          <a className="link link-hover text-gray-400">support@cst.com</a>
        </nav>
      </footer>
      {/* footer ended here */}

      <footer className="footer footer-center sm:footer-horizontal bg-neutral text-neutral-content text-center items-center  p-6 border-t border-gray-800">
        <p> © 2025 CS — Ticket System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
