import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { storeItems } from '../data/items';

export default function Store() {
  return (
    <React.Fragment>
      <h2>Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>;
        })}
      </Row>
    </React.Fragment>
  );
}
