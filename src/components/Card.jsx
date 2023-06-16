import React, { useState } from "react";
import List from "./List";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import {getDatabase,push,ref} from "firebase/database"

const Card = (props) => {
  const { dataSoal, dataJawaban,soal, setJawaban, task, setTask, setValidation } =
    props;

  const [answer, setAnswer] = useState({});
  const [pesan, setPesan] = useState("");
  const [checked, setChecked] = useState();

  const router = useNavigate();
  const db = getDatabase()
  const handleFinish =() => {
    if (task != soal.length && dataSoal[0]?.data?.no == task) {
      setJawaban([...dataJawaban, answer]);
      setChecked();
      setValidation(false);
      setTask(task + 1);
    } else if (task == soal.length && pesan.length >0) {
      setJawaban([...dataJawaban, answer]);
      push(ref(db,"answer"),{
        nama:props.nama,
        survey:[...dataJawaban],
        pesan,
        isRead:false
      }).then(()=>{
        router("/thank");
      }).catch(error=>{
        console.log(error);
      })
    } else {
      setValidation(true);
      console.log("3");
    }
  }
  return (
      <div className="bg-blue-100 text-black w-[80%] shadow-xl rounded-md overflow-hidden">
        <div className="pt-10 relative border-none w-full p-8 h-[50%] bg-blue-500 flex justify-center items-center font-bold text-gray-700">
          <span className="w-8 h-8 flex justify-center items-center font-bold absolute top-[5px] bg-white left-[5px] rounded-full text-black text-md">
            {task}
          </span>
          <p className="text-white text-center">{dataSoal[0]?.data?.text}</p>
        </div>
        <div className="w-full bg-white p-4 flex flex-col">
          {dataSoal[0]?.data?.typePg === true ?<> {dataSoal[0]?.data?.pilihan.map((el, idx) => {
            return (
              <List
                key={idx}
                label={el.hurup}
                desc={el.text}
                klik={() => {
                  const newData = {
                    id: idx,
                    no: task,
                    soal: dataSoal[0]?.data.text,
                    jawaban: el.text,
                    hurup:el.hurup,
                  };
                  setAnswer(newData);
                  setChecked(idx);
                }}
                bg={idx == checked ? "bg-yellow-300" : "bg-transparent"}
                bgHurup={idx == checked ? "bg-blue-500" : "bg-gray-400"}
              />
            );
          })}</> :<textarea className="bg-white p-2 border-2 mb-4" placeholder="Masukan Pesan :" onChange={(e)=>setPesan(e.target.value)}/>}
         
          <div className="w-full flex flex-col">
            {/* Next Fitur */}
            {/* <button
              onClick={() =>props.setTask((el) => el - 1)}
              className="w-full my-4 border-none text-white bg-blue-500 rounded-none rounded-sm text-[.9rem]"
            >
              Back
            </button> */}

            <Button klik={handleFinish} style={answer.no == task || pesan.length >0 ? "bg-blue-500" : "bg-gray-400"}>{soal.length > task ? "Next" : "Finnish"}</Button>
          </div>
        </div>
    </div>
  );
};

export default Card;
