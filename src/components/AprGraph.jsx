import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import words from "../data/apr2020words";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export function AprGraph() {
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
              <h2>April</h2>
              <p>Though there were still many changes due to COVID-19 it was relatively quiet due to many people self-quarantining and staying inside for the majority of April. In Brazil many searched for emergency aid due to job loss and the effects of the changing economy due to COVID. There was news that Kim Jong Un was in danger due to a surgery according to US Intelligence. </p>
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
