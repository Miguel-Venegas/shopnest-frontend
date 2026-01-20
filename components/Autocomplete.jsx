import { useEffect, useState } from "react";

const CATEGORIES = [
  { label: "All categories", value: "" },
  { label: "Footwear", value: "footwear" },
  { label: "Clothing", value: "clothing" },
  { label: "Accessories", value: "accessories" },
];

const Autocomplete = ({ onChange }) => {
  // Immediate UI state
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");

  // Debounced value (what actually triggers requests)
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce logic (1 second)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  // Notify parent when filters are ready
  useEffect(() => {
    onChange({
      search: debouncedSearch,
      category,
    });
  }, [debouncedSearch, category, onChange]);

  return (
    <div className="card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Search input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search products…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="input-base input-default"
          />
        </div>

        {/* Category select */}
        <div className="sm:w-56">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-base input-default"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
