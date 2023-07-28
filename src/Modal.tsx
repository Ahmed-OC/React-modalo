import { createPortal } from "react-dom";
import React from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  modalStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  close: () => void;
  title?: string;
}
const Modal : React.FC<ModalProps> = ({
  children,
  isOpen,
  modalStyle,
  contentStyle,
  close,
  title,
}) => {
  const defaultModalStyle: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const defaultModalContentStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  const mergedModalStyle = { ...defaultModalStyle, ...modalStyle };
  const mergedModalContentStyle = {
    ...defaultModalContentStyle,
    ...contentStyle,
  };
  return createPortal(
    isOpen ? (
      <div className="modal" style={mergedModalStyle} onClick={close}>
        <div
          className="modal-content"
          style={mergedModalContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {!!title && (
              <div className="modal-content-title">
                <h2>{title}</h2>
              </div>
            )}
            <button
              className="modal-content-close"
              onClick={close}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                &times;
              </span>
            </button>
            {children}
          </div>
        </div>
      </div>
    ) : null,
     document.body
  );
};

export default Modal;