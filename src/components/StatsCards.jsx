import {
  calculateTotalSpent,
  getHighestExpense
}
from "../utils/expenseHelpers";

function StatsCards({
  expenses
}) {

  const totalSpent =
    calculateTotalSpent(
      expenses
    );

  const highestExpense =
    getHighestExpense(
      expenses
    );

  return (

    <div
      className="
      grid
      md:grid-cols-3
      gap-4
      mb-6"
    >

      <div
        className="
        bg-white
        p-5
        rounded-xl
        shadow"
      >

        <h3
          className="
          text-gray-500"
        >
          Total Expenses
        </h3>

        <p
          className="
          text-3xl
          font-bold"
        >
          {expenses.length}
        </p>

      </div>

      <div
        className="
        bg-white
        p-5
        rounded-xl
        shadow"
      >

        <h3
          className="
          text-gray-500"
        >
          Total Spent
        </h3>

        <p
          className="
          text-3xl
          font-bold"
        >
          Rs. {totalSpent}
        </p>

      </div>

      <div
        className="
        bg-white
        p-5
        rounded-xl
        shadow"
      >

        <h3
          className="
          text-gray-500"
        >
          Highest Expense
        </h3>

        <p
          className="
          text-3xl
          font-bold"
        >
          Rs. {highestExpense}
        </p>

      </div>

    </div>

  );
}

export default StatsCards;