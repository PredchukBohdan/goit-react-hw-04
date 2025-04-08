import s from "./ImageModal.module.css";
import Modal from "react-modal";

export const ImageModal = ({ isModalOpen, closeModal, selectedImage }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        content: {
          maxWidth: "80%",
          maxHeight: "80%",
          margin: "auto",
          padding: 0,
          border: "none",
          background: "transparent",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      {selectedImage && (
        <div className={s.modalImageWrapper}>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
            className={s.image}
          />
        </div>
      )}
    </Modal>
  );
};
