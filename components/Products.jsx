"use client";
import React from "react";
import ProductCard from "./ProductCard";

function Products({ products }) {
  console.log(products);
  // const finalproducts = products.products;
  // console.log(finalproducts);
  return (
    <div>
      {/* <div>
        <Link
          href="#"
          className="border border-gray-400 shadow-2xl flex item-center flex-col justify-center py-6 px-4 rounded-md"
        >
          <img
            className="w-[100px] mx-auto  h-[100px] object-cover rounded-full "
            src={products.image}
            alt=""
          />
          <h2 className="text-center">Products</h2>
        </Link>
      </div> */}
      <div className="grid grid-cols-4 gap-4 p-8">
        {products.slice(0, 13).map((prdt, i) => {
          return <ProductCard prdt={prdt} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Products;
