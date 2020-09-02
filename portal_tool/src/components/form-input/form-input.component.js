import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, type, ...otherProps }) => (
  <div className="group">
    {type === 'select' ? (
      <select className="form-input" onChange={handleChange} {...otherProps} />
    ) : (
      <input className="form-input" onChange={handleChange} {...otherProps} />
    )}
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
