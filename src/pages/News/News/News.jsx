import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const newsId = params.id;
  return fetch(`http://localhost:5000/news/${newsId}`);
};

const News = () => {
  const newsById = useLoaderData();
  console.log(newsById);
  const { title, image_url, details, category_id } = newsById;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <h1>{title}</h1>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/category/${category_id}`}>
            <Button variant="link">More related news <FaArrowAltCircleRight /></Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default News;
