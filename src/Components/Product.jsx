import React, { useState } from "react";

const product = [];
const Product = () => {
  const [product, setuser] = useState([
    { name: "ALice", age: 20 },
    { name: "Bryan", age: 30 },
    { name: "Jhon", age: 40 },
    { name: "Brat", age: 50 },
  ]);
  const usercount = product.length;
  const averageage =
    product.reduce((acc, item) => acc + item.age, 0) / usercount;
  return (
    <>
      <h1>User list</h1>
      <ul>
        {product.map((elem, index) => {
          return (
            <li>
              {elem.name}__{elem.age} years
            </li>
          );
        })}
      </ul>
      <p>Total users{usercount}</p>
      <p>Average age{averageage}</p>
    </>
  );
};

export default Product;
