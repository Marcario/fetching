import React from "react";
import getProducts from "../utils/getProducts";
import Products from "@/components/Products";
import getData from "../utils/getData";

export default async function page({ searchParams }) {
  const { query } = searchParams;
  console.log(query);
  const products = await getProducts(
    "https://api.escuelajs.co/api/v1/products"
  );
  const categories = await getData(
    "https://api.escuelajs.co/api/v1/categories"
  );
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  const filteredProductsByCategory = products.filter((product) =>
    product.category.name.toLowerCase().includes(query)
  );
  const allProducts = [...filteredProducts, ...filteredProductsByCategory];
  console.log(filteredProductsByCategory);
  return (
    <div className="">
      <h2 className="text-3xl font-medium">
        {allProducts.length} Results for Searh -{" "}
        <span className="capitalize">{query}</span>
      </h2>
      <Products products={allProducts} />
    </div>
  );
}
