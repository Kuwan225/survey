import { getDatabase, ref, remove } from 'firebase/database';
import Button from "../../../components/Button"

const CardPertanyaan = ({data,no,id}) => {
  const deleteHandler = () => {
    remove(ref(getDatabase(), `pertanyaan/${id}`)).then(() => {
      console.log("success");
    });
  };
  return (
    <div className="border-b-2 p-2 flex justify-between">
    <div>
      <h1 className="text-xl font-bold text-white">
        {no}. {data.text} ({data.typePg === true ?"PG":"ESAY"})
      </h1>
      {data.typePg === true &&  <div className=" mt-1">
        {data?.pilihan?.map((el,idx)=>{
          return <p key={idx} className='ml-6 text-white'>{el.hurup}. {el.text}</p>
        })}
      </div>}
     
    </div>
    <div className="flex gap-2 mt-2  ml-[15px] flex-col">
      <Button style={"bg-yellow-400"}>Edit</Button>
      <Button klik={deleteHandler} style={"bg-yellow-400"}>Delete</Button>
    </div>
  </div>
  )
}

export default CardPertanyaan