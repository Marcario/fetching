"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";

function Categories({ categories }) {
  // console.log(categories);
  const newCategories = categories.slice(0, 6);
  // console.log(newCategories);
  return (
    <div>
      {/* header */}

      <div className="flex item-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-medium">Popular categories</h2>
          <p>Choose from wide variety of items</p>
        </div>
        <Link
          href="#"
          className="flex item-center gap-2 text-gray-400 hover:text-gray-900"
        >
          <span className="">All Categories</span>
          <ChevronRight />
        </Link>
      </div>
      {/* categories */}
      <div>
        <h2 className="text-3xl font-medium">Categories</h2>
        <div className="py-8 gap-6 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
          {/* categorycard */}
          {newCategories.map((category, i) => {
            return <CategoryCard category={category} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
