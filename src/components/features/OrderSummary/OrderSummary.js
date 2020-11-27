import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const orderSummary = ({tripCost, options}) => (
  <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong> </h2>

);

export default orderSummary;