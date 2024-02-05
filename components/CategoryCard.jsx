import Link from "next/link";
import React from "react";

function CategoryCard({ category }) {
  return (
    <Link
      href={`http://localhost:3000/category/${category.id}`}
      className="border border-gray-400 shadow-2xl flex item-center flex-col justify-center py-6 px-4 rounded-md"
    >
      <img
        className="w-[100px] mx-auto  h-[100px] object-cover rounded-full "
        src={category.image}
        alt=""
      />
      <h2 className="text-center">{category.name}</h2>
    </Link>
  );
}

export default CategoryCard;
