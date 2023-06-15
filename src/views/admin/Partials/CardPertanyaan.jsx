import { getDatabase, ref, remove } from 'firebase/database';
import React from 'react'

const CardPertanyaan = ({data,no,id}) => {
  const deleteHandler = () => {
    remove(ref(getDatabase(), `pertanyaan/${id}`)).then(() => {
      console.log("success");
    });
  };
  return (
    <div className="border-b-2 p-2 flex justify-between">
    <div>
      <h1 className="text-xl font-bold">
        {no}. {data.text} ({data.typePg === true ?"PG":"ESAY"})
      </h1>
      {data.typePg === true &&  <div className=" mt-1">
        {data?.pilihan?.map(el=>{
          return <p className='ml-6'>{el.hurup}. {el.text}</p>
        })}
      </div>}
     
    </div>
    <div className="flex gap-2 mt-2  ml-[15px] flex-col">
      <button className="bg-white text-blue-500  font-bold h-[30px] flex justify-center items-center rounded-md">
        Edit
      </button>
      <button onClick={deleteHandler} className="bg-white text-blue-500 font-bold h-[30px] flex ustify-center items-center rounded-md">
        Delete
      </button>
    </div>
  </div>
  )
}

export default CardPertanyaan