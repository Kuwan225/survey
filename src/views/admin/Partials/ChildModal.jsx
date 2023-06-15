import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color:"black",
  borderRadius:5,
  overflow:"hidden"
};

export function ChildModal({text}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <div className='w-full flex justify-center'>
      <Button onClick={handleOpen}>Buka Pesan</Button>
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "60%" }}>
        <div className="w-full font-bold bg-blue-500 py-4 text-center text-white">
            <h1 className="text-2xl">Pesan</h1>
          </div>
          <div className='p-4'>

          {/* <h2 id="child-modal-title">Text in a child modal</h2> */}
          <p id="child-modal-description">
            {text}
          </p>
          </div>
          <div className='w-full flex justify-center'>
          <Button onClick={handleClose}>Tutup Pesan</Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
