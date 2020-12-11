import React from 'react';
import '../App.css';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';

export function JumbotronSect() {
    let styles = {
        marginTop: '9%',
      };
    return (
        <Jumbotron class="d-flex align-items-center jumbotron  ">
            <Container style={styles}>
                <Row >
                    <Col></Col>
                    <Col md={8}>
                        <div >
                            <h1>Review of 2020</h1>
                            <p>
                                2020 has been an eventful year packed with a lifetime of events. Our group wanted to explore the year's top search trends for each month of the year using data visualization.
                                The data is composed of search trends from the entire world, not just the United States. 
                            </p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}