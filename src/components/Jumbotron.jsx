import React from 'react';
import '../App.css';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';

export function JumbotronSect() {
    return (
        <Jumbotron class="jumbotron d-flex align-items-center">
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={8}>
                        <div>
                            <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}