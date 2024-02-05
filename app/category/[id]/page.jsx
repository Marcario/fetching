import getSingleCategory from "@/app/utils/getSingleCategory";
import React from "react";

export default async function page({ params: { id } }) {
  const SingleCategory = await getSingleCategory(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  return (
    <div>
      <p>{SingleCategory.id}</p>
      <p>{SingleCategory.name}</p>
      <img src={SingleCategory.image} alt={SingleCategory.name} />
    </div>
  );
}
