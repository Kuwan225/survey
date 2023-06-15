import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Form from "./Form";


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


const ModalAdd = (props) => {
  const handleClose = () => {
    props.setOpenModal(false);
  };

  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "90%", borderRadius: 6 }}>
            <div className="bg-blue-500 py-4">
            <h1 className="text-xl text-center font-bold text-white">TAMBAH PERTANYAAN</h1>
            </div>
       <Form setOpenModal={props.setOpenModal}/>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAdd;
