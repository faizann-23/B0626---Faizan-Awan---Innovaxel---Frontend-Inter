import { useEffect, useState } from "react";

function ExpenseForm({
  addExpense,
  editingExpense,
  updateExpense
}) {

  const [formData, setFormData] =
    useState({
      title: "",
      amount: "",
      category: "Food",
      date: "",
      notes: ""
    });

  useEffect(() => {

    if (editingExpense) {
      setFormData(editingExpense);
    }

  }, [editingExpense]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (
      Number(formData.amount) <= 0
    ) {
      alert(
        "Amount must be greater than 0"
      );
      return;
    }

    if (!formData.date) {
      alert("Date is required");
      return;
    }

    if (editingExpense) {

      updateExpense(formData);

    } else {

      addExpense({
        ...formData,
        id: Date.now()
      });

    }

    setFormData({
      title: "",
      amount: "",
      category: "Food",
      date: "",
      notes: ""
    });

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="
      bg-white
      p-6
      rounded-xl
      shadow-md
      mb-6"
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4"
      >
        {
          editingExpense
            ? "Edit Expense"
            : "Add Expense"
        }
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        gap-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
        >

          <option>Food</option>
          <option>Transport</option>
          <option>Utilities</option>
          <option>Shopping</option>
          <option>Health</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Other</option>

        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />

      </div>

      <textarea
        name="notes"
        placeholder="Notes (Optional)"
        value={formData.notes}
        onChange={handleChange}
        className="
        border
        p-2
        rounded
        w-full
        mt-4"
      />

      <button
        className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-4
        py-2
        rounded
        mt-4"
      >
        {
          editingExpense
            ? "Update Expense"
            : "Add Expense"
        }
      </button>

    </form>
  );
}

export default ExpenseForm;