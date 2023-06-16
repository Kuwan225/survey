import React, { useEffect, useState } from 'react'
import ModalAdmin from './ModalAdmin';
import CardAdmin from './CardAdmin';
import { getDatabase, ref, onValue } from "firebase/database";

const Jawaban = () => {
    const [openModal, setOpenModal] = useState(false);
  const [datas, setDatas] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const endPoint = ref(db, `answer`);
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
    <div className=" w-screen h-screen bg-blue-500 pt-[45px] px-2">
    <ModalAdmin openModal={openModal} setOpenModal={setOpenModal} />
    <div className="flex flex-wrap justify-center gap-2 bg-yellow-400 min-h-[200px] pt-2 rounded-lg">
      {datas.length > 0 ?<> {datas?.map((el, idx) => {
        return (
          <CardAdmin key={idx} setOpenModal={setOpenModal} data={el} />
        );
      })}</>:<p className='text-2xl text-gray-500 text-center' style={{lineHeight:"200px"}}>Belum ada yang jawab</p>}
      
    </div>
  </div>
  )
}

export default Jawaban