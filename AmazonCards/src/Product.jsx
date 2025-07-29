import React from "react";
import Price from "./Price";
import "./product.css";

const Product = ({ title, idx }) => {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];

  return (
    <>
      <div className="products">
        <p>{title} </p>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrice[idx]} />
      </div>
    </>
  );
};

export default Product;
