import React, { FC } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const AppForm: FC = () => {
  return (
    <Form>
      <Col>
        <Row className="mb-3">
          <Col xs={2}>
            <Form.Group as={Row}>
              <Col xs={8}>
                <Form.Control defaultValue={7} size="lg" />
              </Col>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col
            xs={5}
            className="d-flex justify-content-center align-items-center fs-4"
          >
            {' Доходность, % '}
          </Col>
          <Col xs={2}>
            <Form.Group as={Row}>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Form.Label>
              <Col xs={8}>
                <Form.Control defaultValue={12} size="lg" />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={2}>
            <Form.Group as={Row}>
              <Col xs={8}>
                <Form.Control defaultValue={97} size="lg" />
              </Col>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col
            xs={5}
            className="d-flex justify-content-center align-items-center fs-4"
          >
            {' Цена, % '}
          </Col>
          <Col xs={2}>
            <Form.Group as={Row}>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Form.Label>
              <Col xs={8}>
                <Form.Control defaultValue={102} size="lg" />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={2}>
            <Form.Group as={Row}>
              <Col xs={8}>
                <Form.Control defaultValue={9} size="lg" />
              </Col>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Form.Label>
            </Form.Group>
          </Col>
          <Col
            xs={5}
            className="d-flex justify-content-center align-items-center fs-4"
          >
            {' Дюрация, мес. '}
          </Col>
          <Col xs={2}>
            <Form.Group as={Row}>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Form.Label>
              <Col xs={8}>
                <Form.Control defaultValue={18} size="lg" />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col
            xs={7}
            className="d-flex justify-content-center align-items-center fs-5"
          >
            {' Кол-во сделок в каждый из 15 последних дней, шт. '}
          </Col>
          <Col xs={2}>
            <Form.Group as={Row}>
              <Form.Label
                column
                xs={2}
                className="text-center align-middle fs-4 px-0"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Form.Label>
              <Col xs={8}>
                <Form.Control defaultValue={300} size="lg" />
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Col>
    </Form>
  );
};
export default AppForm;
