import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import InputAddAnswer from "./InputAddAnswer";
import { getDatabase, onValue, push, ref } from "firebase/database";
import { useSnackbar } from "notistack";

const Form = (props) => {
  // pertanyaan
  const [pertanyaan, setPertanyaan] = useState("");
  // set type
  const [type, setType] = useState("pilihan ganda");

  //   Tambah input handler
  const [inputJawaban, setInputJawaban] = useState([]);

  const plusHandler = (e) => {
    if(pertanyaan.length > 0 && type == "pilihan ganda"){
      e.preventDefault();
      setInputJawaban([...inputJawaban, Math.random()]);
    }
  };
  // get data

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const endPoint = ref(db, `pertanyaan`);
    onValue(endPoint, (snapshot) => {
      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      setDatas(data);
    });
  }, []);

  // save handler
  const [dataJawaban, setDataJawaban] = useState([]);

  const db = getDatabase();
  const { enqueueSnackbar } = useSnackbar();

  const saveHandler = (e) => {
    e.preventDefault();

    if (type == "pilihan ganda") {
      if (dataJawaban.length > 0) {
        push(ref(db, "pertanyaan"), {
          no: datas.length + 1,
          text: pertanyaan,
          typePg: true,
          pilihan: dataJawaban,
        }).then(() => {
          props.setOpenModal(false);
          enqueueSnackbar("Berhasil tambah pertanyaan", "success");
        });
      } else {
        alert("Harus save minimal 1 jawaban");
      }
    } else {
      if (pertanyaan.length > 0) {
        push(ref(db, "pertanyaan"), {
          no: datas.length + 1,
          text: pertanyaan,
          typePg: false,
        }).then(() => {
          props.setOpenModal(false);
          enqueueSnackbar("Berhasil tambah pertanyaan", "success");
        });
      }
    }
  };

  const filSoal = datas.filter(el=>{
    return el.data.typePg === false
  })

  return (
    <form className="p-2" onSubmit={saveHandler}>
      <div>
        <label htmlFor="pertanyaan" className="text-gray-600 font-bold text-lg">
          Pertanyaan :
        </label>
        <div className="flex items-center h-10 my-2">
          <input
            id="pertanyaan"
            className="shadow bg-white appearance-none border-2 border-gray-400 rounded-lg w-full h-full py-2 px-3 text-gray-700 font-[500] leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Masukan Pertanyaan"
            onChange={(e) => {
              setPertanyaan(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="pertanyaan" className="text-gray-600 font-bold text-lg">
          Type Pertanyaan :
        </label>
        <select
          disabled={pertanyaan.length > 0 ? false : true}
          className={`h-10 my-2 ${
            pertanyaan.length > 0 ? "bg-blue-500" : "bg-gray-400"
          } text-white font-bold px-2 rounded-lg`}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={"pilihan ganda"}>PILIHAN GANDA</option>
          
          <option disabled={filSoal.length ==1} value={"esay"}>ESAY</option>
        </select>
      </div>

      {type == "pilihan ganda" && (
        <div className="">
          <div className="flex justify-between items-center">
            <label
              htmlFor="pertanyaan"
              className="text-gray-600 font-bold text-lg"
            >
              Pilihan Jawaban :
            </label>
            <span
              className={`${
                pertanyaan.length > 0 && type == "pilihan ganda"
                  ? "text-blue-500"
                  : "text-gray-400"
              } bg-white text-4xl p-1 pr-[2px]`}
              onClick={plusHandler}
            >
              <AiFillPlusCircle />
            </span>
          </div>
          {inputJawaban.map((el, idx) => {
            return (
              <InputAddAnswer
                key={idx}
                data={el}
                setInputJawaban={setInputJawaban}
                inputJawaban={inputJawaban}
                dataJawaban={dataJawaban}
                setDataJawaban={setDataJawaban}
              />
            );
          })}
        </div>
      )}

      <div className="w-full flex justify-end">
        <button
          className={`${
            type == "esay" && pertanyaan.length > 0
              ? "bg-blue-500"
              : dataJawaban.length > 0 && pertanyaan.length > 0
              ? "bg-blue-500"
              : "bg-gray-400"
          } text-white font-bold py-[6px] mt-4 px-4`}
        >
          SAVE
        </button>
      </div>
    </form>
  );
};

export default Form;
