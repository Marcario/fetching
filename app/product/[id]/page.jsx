import getSingleProduct from "@/app/utils/getSingleProduct";
import React from "react";

export default async function page({ params: { id } }) {
  //   console.log(id);
  const singleProduct = await getSingleProduct(
    ` https://api.escuelajs.co/api/v1/products/${id}`
  );
  console.log(singleProduct);
  return (
    <div>
      <h2>{singleProduct.title}</h2>
      <img src={singleProduct.image} alt={singleProduct.title} />
      <p>{singleProduct.price}</p>
      <p>{singleProduct.description}</p>
    </div>
  );
}
