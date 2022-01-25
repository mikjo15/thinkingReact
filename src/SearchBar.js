import React, { Component } from "react";

function SearchBar(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={props.onFilterChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={props.onStockToggle}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
