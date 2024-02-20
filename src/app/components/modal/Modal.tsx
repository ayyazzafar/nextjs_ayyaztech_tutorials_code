"use client";
import { useEffect } from "react";
// import style from "./Modal.module.css";
export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
        onClick={onClose}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="bg-white p-5 rounded-md shadow-lg max-w-sm md:ax-w-md mx-auto transition-transform duration-300 transform-gpu"
        >
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </>
  );
};
