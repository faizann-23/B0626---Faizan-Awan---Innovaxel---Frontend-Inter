import { useEffect, useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import StatsCards from "./components/StatsCards";
import ConfirmModal from "./components/ConfirmModal";

function App() {

  const [expenses, setExpenses] =
    useState([]);

  const [editingExpense,
    setEditingExpense] =
    useState(null);

  const [filter,
    setFilter] =
    useState("All");

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const [deleteId,
    setDeleteId] =
    useState(null);

  useEffect(() => {

    const savedExpenses =
      JSON.parse(
        localStorage.getItem(
          "expenses"
        )
      ) || [];

    setExpenses(savedExpenses);

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );

  }, [expenses]);

  const addExpense = (
    expense
  ) => {

    setExpenses([
      expense,
      ...expenses
    ]);

  };

  const updateExpense = (
    updatedExpense
  ) => {

    setExpenses(

      expenses.map(
        (expense) =>

          expense.id ===
          updatedExpense.id

            ? updatedExpense

            : expense

      )

    );

    setEditingExpense(null);

  };

  const deleteExpense = (
    id
  ) => {

    setExpenses(

      expenses.filter(
        (expense) =>
          expense.id !== id
      )

    );

  };

  const filteredExpenses =
    expenses.filter(
      (expense) => {

        const matchesCategory =
          filter === "All"
            ? true
            : expense.category
                === filter;

        const matchesSearch =
          expense.title
            .toLowerCase()
            .includes(
              searchTerm
              .toLowerCase()
            );

        return (
          matchesCategory &&
          matchesSearch
        );

      }
    );

  return (

    <div
      className="
      min-h-screen
      bg-gray-100"
    >

      <div
        className="
        max-w-7xl
        mx-auto
        p-6"
      >

        <h1
          className="
          text-5xl
          font-bold
          text-center
          mb-2"
        >

          Personal Expense Tracker

        </h1>

        <p
          className="
          text-center
          text-gray-600
          mb-8"
        >

          Manage your expenses
          professionally

        </p>

        <ExpenseForm
          addExpense={
            addExpense
          }
          editingExpense={
            editingExpense
          }
          updateExpense={
            updateExpense
          }
        />

        <StatsCards
          expenses={expenses}
        />

        <Summary
          expenses={expenses}
        />

        <SearchBar
          searchTerm={
            searchTerm
          }
          setSearchTerm={
            setSearchTerm
          }
        />

        <FilterBar
          filter={filter}
          setFilter={
            setFilter
          }
        />

        <ExpenseList
          expenses={
            filteredExpenses
          }
          setEditingExpense={
            setEditingExpense
          }
          setDeleteId={
            setDeleteId
          }
        />

        <ConfirmModal
          show={
            deleteId !== null
          }
          onClose={() =>
            setDeleteId(null)
          }
          onConfirm={() => {

            deleteExpense(
              deleteId
            );

            setDeleteId(
              null
            );

          }}
        />

      </div>

    </div>

  );
}

export default App;