import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";

export const loader = async ({ params }) => {
  const categoryId = params.id;
  const response = await fetch(`http://localhost:5000/category/${categoryId}`);
  const newsByCategory = await response.json();
  return { newsByCategory };
};

const Category = () => {
  const { newsByCategory } = useLoaderData();
  return (
    <div>
      {newsByCategory.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
