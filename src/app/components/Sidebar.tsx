import { useModal } from "./modal/ModalContext";

export default function Sidebar() {
  const { isModalOpen, setIsModalOpen }: any = useModal();

  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        backgroundColor: "lightgray",
      }}
    >
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open From Sidebar
      </button>
    </div>
  );
}
