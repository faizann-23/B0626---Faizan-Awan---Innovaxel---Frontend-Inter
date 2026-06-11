import { FaEdit, FaTrash } from "react-icons/fa";

function ExpenseCard({
  expense,
  setEditingExpense,
  setDeleteId
}) {

  return (

    <div
      className="
      bg-white
      rounded-xl
      shadow-md
      p-4
      hover:shadow-lg
      transition"
    >

      <div className="flex justify-between">

        <h3
          className="
          text-lg
          font-bold"
        >
          {expense.title}
        </h3>

        <span
          className="
          text-green-600
          font-bold"
        >
          Rs. {expense.amount}
        </span>

      </div>

      <p
        className="
        text-gray-600
        mt-2"
      >
        {expense.category}
      </p>

      <p
        className="
        text-gray-500"
      >
        {expense.date}
      </p>

      {
        expense.notes && (
          <p
            className="
            mt-2
            text-sm"
          >
            {expense.notes}
          </p>
        )
      }

      <div
        className="
        flex
        gap-2
        mt-4"
      >

        <button
          onClick={() =>
            setEditingExpense(expense)
          }
          className="
          bg-yellow-500
          hover:bg-yellow-600
          text-white
          p-2
          rounded"
        >
          <FaEdit />
        </button>

        <button
          onClick={() =>
            setDeleteId(expense.id)
          }
          className="
          bg-red-600
          hover:bg-red-700
          text-white
          p-2
          rounded"
        >
          <FaTrash />
        </button>

      </div>

    </div>

  );
}

export default ExpenseCard;