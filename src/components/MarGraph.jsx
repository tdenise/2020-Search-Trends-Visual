import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import words from "../data/mar2020words";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export function MarGraph() {
  // const data = [
  //     { text: 'Hey', value: 1000 },
  //     { text: 'lol', value: 200 },
  //     { text: 'first impression', value: 800 },
  //     { text: 'very cool', value: 1000000 },
  //     { text: 'duck', value: 10 },
  //   ];

  const max = 100;
  const callbacks = {};
  //https://react-wordcloud.netlify.app/props#options

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "Palatino",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 3,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  const styles = {
    fontSize: 15,
    marginTop: "8%",
    marginBottom: "8%"
  };

  const styles2 = {
    fontSize: 15,
    marginTop: "15%",
    marginBottom: "8%"
  };

  return (
    <Container>
      <Row>
        <Col md={4} style= {styles}>
            <div>
              <h2>March</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </Col>
        <Col></Col>
        <Col md={6}>
          <div className="2020Words" style={styles2}>
            <ReactWordcloud words={words} options={options} maxWords={max} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
