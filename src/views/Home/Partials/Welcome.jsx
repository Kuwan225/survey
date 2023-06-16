import React from "react";
import Button from "../../../components/Button";

const Welcome = (props) => {
  return (
    <div className="w-[80%] bg-gray-300 relative rounded-lg overflow-hidden">
      <img src="/welcome.jpg" alt=""/>
      <div className="relative flex gap-4 mx-4 my-4 items-center">
        <label htmlFor="name" className="absolute top-[10px] left-2 text-gray-500 leading-tight font-[500]">Pengirim :</label>
        <input
        id="name"
          className="pl-[86px] shadow bg-white appearance-none border rounded w-full h-full py-2 px-3 text-gray-500 font-[500] leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={"anonim"}
          readOnly
          // placeholder="Nama :"
          // onChange={(e) => props.setName(e.target.value)}
        />
       <Button klik={() =>props.name.length > 0 ? props.setTask(1):props.setValidation(true)} style={props.name.length > 0 ?'bg-blue-500':'bg-gray-400'}>START</Button>
      </div>
    </div>
  );
};

export default Welcome;
