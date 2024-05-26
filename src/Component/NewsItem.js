import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function NewsItem(props) {
  const renderImage = () => {
    if (props.image) {
      return (
        <Card.Img
          variant="top"
          src={props.image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    } else {
      // Render default image if props.image is falsy
      return (
        <Card.Img
          variant="top"
          src="https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" // Provide the URL for the default image here
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
  };

  return (
    <div className="container my-3">
      <Card style={{}}>
        <div style={{ maxHeight: "200px", overflow: "hidden" }}>
          {renderImage()}
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>
            <small>
              by {props.author ? props.author : "Unknown"} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </Card.Text>
          <Button href={props.url} target="blank" variant="dark">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
