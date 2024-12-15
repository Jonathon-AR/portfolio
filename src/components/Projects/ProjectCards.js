import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => {
    setSlide((slide + 1) % props.imgPaths.length);
  };

  const handlePrevSlide = () => {
    setSlide((slide - 1 + props.imgPaths.length) % props.imgPaths.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (event.key === "ArrowRight") {
        handleNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slide]);

  return (
    <Card className="project-card-view">
      <div className="img-container">
        <Card.Img
          variant="top"
          src={props.imgPaths[slide]}
          alt="card-img"
        />
        <div className="slide-buttons">
          <Button variant="light" onClick={handlePrevSlide}>
            &lt;
          </Button>
          <Button variant="light" onClick={handleNextSlide}>
            &gt;
          </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"} {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
