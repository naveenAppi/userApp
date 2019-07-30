import React from 'react'
import classnames from 'classnames';

function InputGroup({
     name, placeholder, value , error , onChange , type , icon
 }) {
  return (
      <div className="input-group mb-3">
          <div className="input-group-prepend">
              <span className="input-group-text">
              <i className={icon} />
              </span>
          </div>
          <input
              type={type}
        placeholder={placeholder}
        name={name}
        className={classnames('form-control from-control-lg', {
            'is-invalid':error
        })}
            value={value}
            onChange={onChange}
          />
            {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
export default InputGroup;