import React, { useEffect, useState } from "react";
import Jawaban from "./Partials/Jawaban";
import Pertanyaan from "./Partials/Pertanyaan";

const Admin = () => {
  const [halaman,setHalaman] = useState("jawaban")
  return (
    <>
      <div className="w-screen flex gap-4 text-xl text-center">
        <p
          className="w-1/2 block bg-blue-500 py-4 rounded-tr-[20px] rounded-tl-[20px]"
          style={{ color: "white", fontWeight: 700 }}
          onClick={()=>{setHalaman("jawaban")}}

        >
          Jawaban
        </p>
        <p
          className="w-1/2 block bg-yellow-400 py-4 rounded-tl-[20px] rounded-tr-[20px]"
          style={{ color: "white", fontWeight: 700 }}
          onClick={()=>{setHalaman("pertanyaan")}}
        >
          Pertanyaan
        </p>
      </div>
      {halaman === "jawaban" ?   <Jawaban/>:<Pertanyaan/>}
    
    </>
  );
};

export default Admin;
