import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';



const orderForm = ({tripCost, options}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>Trip options</h1>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>
);

export default orderForm;