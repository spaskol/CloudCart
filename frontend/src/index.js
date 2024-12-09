import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 }
];

ReactDOM.render(<ProductList products={products} />, document.getElementById("root"));
