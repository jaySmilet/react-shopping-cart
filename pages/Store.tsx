import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { storeItems } from '../data/items';

export default function Store() {
  return (
    <React.Fragment>
      <Row>
        {storeItems.map((item) => {
          return <Col>{JSON.stringify(item)}</Col>;
        })}
      </Row>
    </React.Fragment>
  );
}
