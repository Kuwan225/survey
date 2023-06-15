import React from "react";

const Welcome = (props) => {
  return (
    <div className="w-[80%] bg-gray-300 relative rounded-lg overflow-hidden">
      <img src="/welcome.jpg" alt=""/>
      <div className="relative flex gap-4 mx-4">
        <label htmlFor="name" className="absolute top-6 left-2 text-gray-500 leading-tight font-[500]">Pengirim :</label>
        <input
        id="name"
          className="pl-[86px] mt-4 shadow bg-white appearance-none border rounded w-full h-full py-2 px-3 text-gray-500 font-[500] leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={"anonim"}
          readOnly
          // placeholder="Nama :"
          // onChange={(e) => props.setName(e.target.value)}
        />
        <button
          onClick={() =>props.name.length > 0 ? props.setTask(1):props.setValidation(true)}
          className={`h-full py-0 px-4 my-4 border-none  rounded-none rounded-sm text-[.9rem] ${props.name.length > 0 ?'bg-blue-500':'bg-gray-400'}`}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default Welcome;
