import getSingleProduct from "@/app/utils/getSingleProduct";
import React from "react";

export default async function page({ params: { id } }) {
  //   console.log(id);
  const singleProduct = await getSingleProduct(
    ` https://api.escuelajs.co/api/v1/products/${id}`
  );
  // console.log(singleProduct);
  return (
    <div className="max-w-3xl mx-auto  items-center p-20">
      <h2>{singleProduct.title}</h2>
      <img
        src={singleProduct.images}
        alt={singleProduct.title}
        className="max-w-60  rounded-full  "
      />
      <p>${singleProduct.price}</p>
      <p>{singleProduct.description}</p>
      <button className="bg-green-600 py-2 px-6 rounded-lg mt-5 ">
        Add To Cart
      </button>
    </div>
  );
}
