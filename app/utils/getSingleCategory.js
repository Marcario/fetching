import React from "react";

export default async function getSingleCategory(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}
