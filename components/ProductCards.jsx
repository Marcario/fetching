"use client";
import Link from "next/link";
import React from "react";

function ProductCards({ prdt }) {
  // console.log(prdt);

  return (
    <div className="flex">
      <Link
        href={`http://localhost:3000/product/${prdt.id}`}
        className="border border-gray-400 shadow-2xl flex item-center flex-col justify-center py-6 px-4 rounded-md"
      >
        <img
          className="w-[100px] mx-auto  h-[100px] object-cover rounded-full "
          src={prdt.images[0]}
          alt=""
        />
        <h2 className="text-center">{prdt.title}</h2>
        <h2 className="text-center line-clamp-2">{prdt.description}</h2>
        <h2 className="text-center">{prdt.price}</h2>
      </Link>
    </div>
  );
}

export default ProductCards;
