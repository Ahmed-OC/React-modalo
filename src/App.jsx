import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <h1>Modal</h1>
      <p>
        <button onClick={() => open()}>Open Modal</button>
      </p>

      <Modal isOpen={isOpen} close={close} title={'Modal title'} modalStyle={
        {
          background: 'linear-gradient(to right, rgba(255, 215, 0, 0.8), rgba(255, 127, 0, 0.8), rgba(255, 69, 0, 0.8), rgba(255, 20, 147, 0.8))'
        }
      }>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quos, voluptate voluptas dolorum quod
        </p>
      </Modal>
    </div>
  );
}

export default App;