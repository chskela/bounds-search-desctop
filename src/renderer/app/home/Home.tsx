import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import AppForm from './AppForm';

const Home: FC = () => {
  return (
    <Container className="mt-5">
      <Col>
        <Row>
          <AppForm />
        </Row>
        <Row>dfgdf</Row>
      </Col>
    </Container>
  );
};

export default Home;
