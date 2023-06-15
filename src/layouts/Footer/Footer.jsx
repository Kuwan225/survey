import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-blue-800 flex justify-center">
      <p className="flex justify">
        <Link className="flex items-center mr-2" to="/admin/login-admin" style={{color:"yellow"}}>
          <AiOutlineCopyright className="mr-1"/>
          Wan
        </Link>
        || Create by Marwan maulana
      </p>
    </div>
  );
};

export default Footer
