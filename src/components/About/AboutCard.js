import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p  style={{ textAlign: "justify" }}>
            Hello there! I am <span className="purple">Aarnav Rastogi </span>
            from <span className="purple"> Lucknow, India.</span>
            <br /> I am a final year student pursuing my Bachelors in Comp. Engg. at DY Patil's RAIT
            <br />
            Additionally, I work as a freelance Web Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="pink">
            <li className="about-activity">
              <ImPointRight /> Reading History
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Aarnav</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
