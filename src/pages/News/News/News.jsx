import React from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const newsId = params.id;
  return fetch(`http://localhost:5000/news/${newsId}`);
};

const News = () => {
    const newsById = useLoaderData();
    console.log(newsById);
  return (
    <div>
      <h2>This is News</h2>
    </div>
  );
};

export default News;
