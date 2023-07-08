import * as React from 'react';
import Modal from 'react-modal';
import { confetti } from "tsparticles-confetti"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


interface PropTypes {
  isModalOpen: boolean,
  onClose(event: React.MouseEvent<Element, MouseEvent>): void,
  title: string,
  renderItems: object
}


const ModalComponent = ({
  isModalOpen,
  onClose,
  title,
  renderItems
}: PropTypes) => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  }

  const lightConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 3,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["☀️", "🔥", "🌈", "🌞", "🌟", "⭐️"],
        },
      },
    })
  }

  const lightShoot = () => {
    setTimeout(lightConfetti, 0)
    setTimeout(lightConfetti, 100)
    setTimeout(lightConfetti, 200)
  }
  React.useEffect(() => {
    console.log("ok")
    lightShoot()
  }, []);
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel={title}
      >
        {renderItems}
      </Modal>
    </div>
  )
}

export default ModalComponent;

