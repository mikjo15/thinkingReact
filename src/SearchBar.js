import React, { Component } from "react";

class SearchBar extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} />
        <p>
          <input type="checkbox" checked={inStockOnly} /> Only show products in
          stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
