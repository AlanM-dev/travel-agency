import React from 'react';
import {formatPrice} from '../../../utils/formatPrice.js';
import styles from './OrderOption.scss';
import Icon from '../../../components/common/Icon/Icon.js';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (

  <div className={styles.icons}>
    {required ? '' : (
      <div 
        className={styles.icon + ' ' + styles.iconActive} 
        key={null} >
        ---------- 
        <Icon name={'times-circle'}/>
      </div>
    )}

    {values.map(value => (
      <div 
        className={styles.icon + ' ' + ((value.id == currentValue)? styles.iconActive : '')} 
        key={value.id} 
        onClick={ () => setOptionValue(value.id) } >
        {value.name} 
        ({formatPrice(value.price)})
        <Icon name={value.icon}/>
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;