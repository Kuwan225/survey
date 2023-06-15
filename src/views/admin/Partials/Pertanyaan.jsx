import React, { useEffect, useState } from "react";
import CardPertanyaan from "./CardPertanyaan";
import ModalAdd from "./ModalAdd";
import { getDatabase, onValue, ref } from "firebase/database";

const Pertanyaan = () => {
  const [openModal,setOpenModal] = useState(false)
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

  return (
    <div className="w-screen min-h-screen bg-yellow-400 px-2 pb-10">
      <ModalAdd setOpenModal={setOpenModal} openModal={openModal}/>
      <div className="w-full flex justify-end">
        <button className="mt-4 mb-2 bg-blue-500 font-bold py-1 ml-2" onClick={()=>setOpenModal(true)}>
          Tambah
        </button>
      </div>

      <div className="bg-blue-500 w-full min-h-[90%] rounded-xl p-2">
        {datas.length > 0 ? <>{datas?.map((el,idx)=>{
        return  <CardPertanyaan key={idx} data={el.data} no={idx+1} id={el.id}/>

        })}</>:<p className='text-4xl text-gray-400 text-center' style={{lineHeight:"90vh"}}>Belum ada pertanyaan</p>}
        
      </div>
    </div>
  );
};

export default Pertanyaan;
