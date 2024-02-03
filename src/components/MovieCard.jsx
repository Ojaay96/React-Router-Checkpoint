import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      {" "}
      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Img height={"200px"} variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
