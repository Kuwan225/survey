import React, { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillSave } from "react-icons/ai";

const InputAddAnswer = ({
  setInputJawaban,
  inputJawaban,
  data,
  dataJawaban,
  setDataJawaban,
}) => {
  const [text, setText] = useState("");
  const [isSave, setIsSave] = useState(false);

  const deleteHandler = () => {
    if(!isSave){
        const filterInput = inputJawaban.filter((e) => {
          return e != data;
        });
        setInputJawaban(filterInput);
    }
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const saveHandler = () => {
      if (text.length > 0) {
        setIsSave(true);
      if (isSave === false) {
        const newData = {
          hurup: dataJawaban.length == 0?"A":dataJawaban.length == 1 ?"B":dataJawaban.length == 2?"C":"D",
          text,
        };
        setDataJawaban([...dataJawaban, newData]);
      }else{
        alert("Tidak dapat menyimpan 2 kali")
      }
    } else {
      alert("input tidak boleh kosong!");
    }
  };

  console.log(dataJawaban);

  return (
    <div className="relative my-2">
      <input
        id="pertanyaan"
        className="pr-[80px] shadow bg-white appearance-none border-2 border-gray-400 rounded-lg w-full h-full py-2 px-3 text-gray-700 font-[500] leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Masukan Jawaban"
        onChange={changeHandler}
      />
      <div className="absolute top-1 right-2 flex items-center h-8 gap-2">
        <p
          onClick={saveHandler}
          className="text-blue-500 bg-transparent text-2xl p-0"
        >
          <AiFillSave
            className={`${!isSave && text.length > 0? "text-yellow-400" : "text-gray-400"}`}
          />
        </p>
        ||
        <p
          onClick={deleteHandler}
          className="text-blue-500 bg-transparent text-2xl p-0"
        >
          <AiFillMinusCircle  
            className={`${!isSave ? "text-red-500" : "text-gray-400"}`}
            />
        </p>
      </div>
    </div>
  );
};

export default InputAddAnswer;
