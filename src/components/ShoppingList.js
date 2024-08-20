import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;