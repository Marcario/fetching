"use client";
import React from "react";
import Link from "next/link";
import ProductCards from "./ProductCards";

function Products(products) {
  const finalproducts = products.products;
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
        {finalproducts.slice(0, 12).map((prdt, i) => {
          return (
            <>
              <ProductCards prdt={prdt} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
