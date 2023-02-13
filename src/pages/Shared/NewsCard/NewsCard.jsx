import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id, author, details, title, image_url, rating, total_view } = news;
  return (
    <div className="mb-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              src={author.img}
              style={{ height: "60px" }}
              className="me-2"
              roundedCircle
            />
            <div>
              <p className="mb-0">{author?.name}</p>
              <p className="mb-0">{author?.published_date?.split(" ")[0]}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 200 ? (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}>Read more</Link>
              </>
            ) : (
              details
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" />
            <p className="ms-2 mb-0">{rating?.number}</p>
          </div>
          <div className="d-flex align-items-center">
            <FaEye />
            <p className="ms-2 mb-0">{total_view}</p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
