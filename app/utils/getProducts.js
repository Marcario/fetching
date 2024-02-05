import React from "react";

export default async function getProducts(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}
