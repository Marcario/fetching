import Categories from "@/components/Categories";
import React from "react";
import getData from "./utils/getData";
import Products from "@/components/Products";
import getProducts from "./utils/getProducts";

export default async function page() {
  const categories = await getData(
    "https://api.escuelajs.co/api/v1/categories"
  );
  const allproducts = await getProducts("https://api.escuelajs.co/api/v1/products");
  const products = allproducts;
  return (
    <div>
      <div className="bg-white">
        <Categories categories={categories} />
      </div>

      <div className="bg-red-500k">
        <h2 className="text-3xl font-medium">Products</h2>
        <Products products={products} />
      </div>
    </div>
  );
}
