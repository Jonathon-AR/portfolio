import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfigg = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

firebase.initializeApp(firebaseConfigg);


function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const projectsCollection = db.collection("projects");

    projectsCollection.onSnapshot((snapshot) => {
      const projectsData = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        projectsData.push({ id: doc.id, ...data });
      });
      setProjects(projectsData);
    });
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {console.log(projects) && projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPaths={project.imgPaths}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
