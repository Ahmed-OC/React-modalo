import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  modalStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  close: () => void;
  title?: string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  CloseIcon?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  closeStyle?: React.CSSProperties;
}
const Modal : React.FC<ModalProps> = ({
  children,
  isOpen,
  modalStyle,
  contentStyle,
  close,
  title,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  CloseIcon,
  titleStyle,
  closeStyle,
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

  useEffect(() => {
    if (closeOnEsc) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          close();
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }
    return;
  }, [close, closeOnEsc]);


  return createPortal(
    isOpen ? (
      <div className="modal" style={mergedModalStyle} onClick={closeOnOverlayClick ? close : undefined}>
        <div
          className="modal-content"
          style={mergedModalContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {!!title && (
              <div className="modal-content-title" 
              style={titleStyle}
              >
                <h2>{title}</h2>
              </div>
            )}
            <button
              className="modal-content-close"
              onClick={close}
              style={closeStyle}
            >
              {CloseIcon ? (
                CloseIcon
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ display: "block" }}
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
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