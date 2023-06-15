import React from "react";
import { VscError } from "react-icons/vsc";

const PopUpError = (props) => {
  return (
    <div className="bg-black/50 z-10 absolute left-0 top-0 w-screen h-screen flex justify-center items-center">
      <div className="text-black rounded-lg overflow-hidden shadow-xl bg-white w-[60%] flex flex-col gap-6 pt-10  items-center">
        <VscError size={"90px"} color="red" />
        <h1 className="text-3xl font-bold mt-[-20px] text-red-500">Oops!</h1>
        <p>{props.desc || "ERROR"}</p>
        <button onClick={()=>props.setValidation(false)} className="rounded-none text-white bg-red-500 w-full mt-[40px]">
          Back
        </button>
      </div>
    </div>
  );
};

export default PopUpError;
