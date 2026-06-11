function SearchBar({
  searchTerm,
  setSearchTerm
}) {

  return (

    <div className="mb-4">

      <input
        type="text"
        placeholder="Search expense..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
        className="
        w-full
        border
        p-3
        rounded-lg"
      />

    </div>

  );
}

export default SearchBar;