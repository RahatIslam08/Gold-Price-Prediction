// src/components/SectionModal.js
import React from "react";

const SectionModal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "800px",
          width: "90%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2>{title}</h2>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            fontSize: "18px",
          }}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SectionModal;