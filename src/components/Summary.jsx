import CategoryChart
from "./CategoryChart";

import {
  calculateTotalSpent,
  getCategoryTotals
}
from "../utils/expenseHelpers";

function Summary({
  expenses
}) {

  const totalSpent =
    calculateTotalSpent(
      expenses
    );

  const categories =
    getCategoryTotals(
      expenses
    );

  return (

    <div
      className="
      bg-white
      p-6
      rounded-xl
      shadow
      mb-6"
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4"
      >
        Summary
      </h2>

      <h3
        className="
        text-lg
        mb-4"
      >
        Total Spending:
        <span
          className="
          font-bold
          ml-2"
        >
          Rs. {totalSpent}
        </span>
      </h3>

      {
        expenses.length > 0
        &&
        <CategoryChart
          categories={
            categories
          }
        />
      }

    </div>

  );
}

export default Summary;