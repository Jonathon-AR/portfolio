import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  // DiDatabase,
  
} from "react-icons/di";
import {
  SiFirebase,
  SiGnubash,
  SiYolo,
  SiOpencv,
  SiMysql
  // SiGooglecolab
  // SiNextdotjs,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYolo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
