import React from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const categoryId = params.id;
  const response = await fetch(`http://localhost:5000/category/${categoryId}`);
  const newsByCategory = await response.json();
  return { newsByCategory };
};

const Category = () => {
  console.log('category rendered');
  const { newsByCategory } = useLoaderData();
  return (
    <div>
      <h2>This is Category: {newsByCategory.length}</h2>
    </div>
  );
};

export default Category;
