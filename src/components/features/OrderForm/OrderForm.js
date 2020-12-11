import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';


const orderForm = ({tripCost, options, setOrderOption}) => (
  <Grid>
    <h1>Trip options</h1>
    <Row>
      {pricing.map((option) => <Col key={option.id} md={4}><OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option}/></Col>)}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>
);

export default orderForm;