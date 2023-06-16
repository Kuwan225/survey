import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-blue-500 flex justify-center">
      <p className="flex justify">
        <Link className="flex items-center mr-2" to="/admin-login" style={{color:"yellow"}}>
          <AiOutlineCopyright className="mr-1"/>
          Wan
        </Link>
        <span className="text-white">|| Create by Marwan maulana</span>
      </p>
    </div>
  );
};

export default Footer