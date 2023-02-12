import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);
  return (
    <div>
      <h5>All Category</h5>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
