import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionCheckboxes from './OrderOptionCheckboxes.js';
import OrderOptionNumber from './OrderOptionNumber.js';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, id, setOrderOption, currentValue, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})} currentValue={currentValue}
        />
      </div>
    );
  }
};

export default OrderOption;