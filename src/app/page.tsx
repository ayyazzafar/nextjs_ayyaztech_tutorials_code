"use client";
import { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { useModal } from "./components/modal/ModalContext";

export default function Home() {
  let { isModalOpen, setIsModalOpen }: any = useModal();

  function handleDelete() {
    console.log("Deleting...");
    alert("Item deleted!");
  }
  return (
    <>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Open Modal
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <p>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>

          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
              onClick={() => {
                setIsModalOpen(false);
                handleDelete();
              }}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors ml-2"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}
