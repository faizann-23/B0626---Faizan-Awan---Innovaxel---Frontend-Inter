function ConfirmModal({
  show,
  onClose,
  onConfirm
}) {

  if (!show) {
    return null;
  }

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center"
    >

      <div
        className="
        bg-white
        p-6
        rounded-xl
        shadow-lg
        w-80"
      >

        <h2
          className="
          text-xl
          font-bold
          mb-2"
        >
          Delete Expense
        </h2>

        <p
          className="
          text-gray-600
          mb-4"
        >
          Are you sure you want
          to delete this expense?
        </p>

        <div
          className="
          flex
          justify-end
          gap-2"
        >

          <button
            onClick={onClose}
            className="
            px-4
            py-2
            border
            rounded"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
            px-4
            py-2
            bg-red-600
            text-white
            rounded"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );
}

export default ConfirmModal;