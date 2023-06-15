import React, { useEffect } from "react";
import Welcome from "./Partials/Welcome";
import Card from "../../components/Card";
import { useState } from "react";
import soal from "../../data/soal";
import PopUpError from "../../components/PopUpError";
import { getDatabase, onValue, ref } from "firebase/database";

const Home = () => {
  let [jawaban, setJawaban] = useState([]);
  let [task, setTask] = useState(0);
  let [name, setName] = useState("anonim");
  const [validation, setValidation] = useState(false);
  const [datas, setDatas] = useState([]);

  const db = getDatabase();

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

  // state color
  const [r,setR] = useState(0)
  const [g,setG] = useState(0)
  const [b,setB] = useState(0)

  const filSoal = datas.filter((el) => {
    return task == el.data.no;
  });
  console.log(datas);
  // color
  useEffect(()=>{
    setR(Math.floor(Math.random()*255))
    setG(Math.floor(Math.random()*255))
    setB(Math.floor(Math.random()*255))
  },[task])


  return (
    <div className={`relative bg-[rgba(${r},${g},${b},.2)] w-screen min-h-screen flex items-center justify-center`}>
      {validation && <PopUpError setValidation={setValidation} label="Wajib Isi..."/>}
      {task == 0 ? (
        <Welcome setTask={setTask} setName={setName} name={name} setValidation={setValidation}/>
      ) : (
        <Card
          setValidation={setValidation}
          dataSoal={filSoal}
          soal={datas}
          setTask={setTask}
          task={task}
          setJawaban={setJawaban}
          dataJawaban={jawaban}
          nama={name}
        />
      )}

    </div>
  );
};

export default Home;
