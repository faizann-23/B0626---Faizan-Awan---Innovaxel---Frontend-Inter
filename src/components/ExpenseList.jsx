import ExpenseCard from "./ExpenseCard";

function ExpenseList({
  expenses,
  setEditingExpense,
  setDeleteId
}) {

  if (expenses.length === 0) {

    return (

      <div
        className="
        bg-white
        rounded-xl
        shadow
        p-8
        text-center"
      >

        <h2
          className="
          text-xl
          font-semibold"
        >
          No Expenses Found
        </h2>

        <p
          className="
          text-gray-500
          mt-2"
        >
          Add your first expense.
        </p>

      </div>

    );

  }

  const sortedExpenses =
    [...expenses].sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );

  return (

    <div
      className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-4"
    >

      {
        sortedExpenses.map(
          (expense) => (

            <ExpenseCard
              key={expense.id}
              expense={expense}
              setEditingExpense={
                setEditingExpense
              }
              setDeleteId={
                setDeleteId
              }
            />

          )
        )
      }

    </div>

  );
}

export default ExpenseList;