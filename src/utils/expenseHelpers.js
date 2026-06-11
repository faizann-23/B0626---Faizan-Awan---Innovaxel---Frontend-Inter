export const calculateTotalSpent = (expenses) => {
  return expenses.reduce(
    (sum, expense) =>
      sum + Number(expense.amount),
    0
  );
};

export const getCategoryTotals = (expenses) => {
  const categories = {};

  expenses.forEach((expense) => {
    if (categories[expense.category]) {
      categories[expense.category] +=
        Number(expense.amount);
    } else {
      categories[expense.category] =
        Number(expense.amount);
    }
  });

  return categories;
};

export const getHighestExpense = (
  expenses
) => {
  if (expenses.length === 0) {
    return 0;
  }

  return Math.max(
    ...expenses.map((expense) =>
      Number(expense.amount)
    )
  );
};