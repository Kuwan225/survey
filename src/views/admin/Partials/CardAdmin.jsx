import { getDatabase, push, ref, update } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardAdmin = ({ setOpenModal, data }) => {
  const router = useNavigate();

  const db = getDatabase();

  const klikHandler = () => {
    update(ref(db, `answer/${data.id}`), {
      isRead: true,
    })
      .then(() => {
        setOpenModal(true), router(`/admin/${data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="relative rounded-full w-1/4 h-1/4 flex justify-center items-center"
      onClick={klikHandler}
    >
      {data.data.isRead === true ? (
        <img src="/amplop.png" alt="" width={100} className="mt-[-8px]" />
      ) : (
        <img src="/mail.png" alt="" width={90} className="" />
      )}
    </div>
  );
};

export default CardAdmin;
