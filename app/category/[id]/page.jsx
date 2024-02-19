import getSingleCategory from "@/app/utils/getSingleCategory";
import React from "react";

export default async function page({ params: { id } }) {
  const SingleCategory = await getSingleCategory(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  return (
    <div className="max-w-3xl mx-auto  items-center p-20">
      <img
        src={SingleCategory.image}
        alt={SingleCategory.name}
        className="max-w-80 rounded-2xl"
      />
      <p>{SingleCategory.id}</p>
      <p>{SingleCategory.name}</p>
    </div>
  );
}
