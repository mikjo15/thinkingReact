import React, { Component } from "react";

function ProductCategoryRow(props) {
  const category = props.category;

  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
