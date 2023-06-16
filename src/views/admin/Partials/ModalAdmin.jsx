import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChildModal from "./ChildModal";
import { useNavigate, useParams } from "react-router-dom";
import { getDatabase, ref, onValue,child,get } from "firebase/database";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "black",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "hidden",
};


const ModalAdmin = (props) => {
  const router = useNavigate()
  const {id} = useParams()
  
  const handleClose = () => {
    props.setOpenModal(false);
    router('/admin')
  };

  const [data, setData] = useState({});

  const db = getDatabase();

  useEffect(() => {
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `answer/${id}`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     setData(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });
    const endPoint = ref(db, `answer/${id}`);
    onValue(endPoint, (snapshot) => {
      setData(snapshot.val());
    });
  }, [id]);
  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "90%", borderRadius: 6 }}>
          <div className="w-full font-bold bg-blue-500 py-4 text-center text-white">
            <h1 className="text-2xl">Dari : {data?.nama}</h1>
          </div>
          <div className="p-4">
            {
              data?.survey?.map((el,idx)=>(
                <div key={idx}>
                 <h2 id="parent-modal-title" className="text-lg font-bold">{el.no}. {el.soal}</h2>
            <p id="parent-modal-description" className="ml-[17px] text-lg">
              {el.hurup}. {el.jawaban}
            </p>
                </div>
              ))
          }
          </div>
          <ChildModal text={data?.pesan}/>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAdmin;
