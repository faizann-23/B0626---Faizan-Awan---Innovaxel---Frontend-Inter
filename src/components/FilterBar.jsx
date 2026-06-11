function FilterBar({
  filter,
  setFilter
}) {

  return (

    <div className="mb-6">

      <select
        value={filter}
        onChange={(e) =>
          setFilter(
            e.target.value
          )
        }
        className="
        border
        p-3
        rounded-lg"
      >

        <option value="All">
          All Categories
        </option>

        <option value="Food">
          Food
        </option>

        <option value="Transport">
          Transport
        </option>

        <option value="Utilities">
          Utilities
        </option>

        <option value="Shopping">
          Shopping
        </option>

        <option value="Health">
          Health
        </option>

        <option value="Education">
          Education
        </option>

        <option value="Entertainment">
          Entertainment
        </option>

        <option value="Other">
          Other
        </option>

      </select>

    </div>

  );
}

export default FilterBar;