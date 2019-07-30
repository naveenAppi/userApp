import React from 'react'
import classnames from 'classnames';

function TextFieldGroup({
     name, placeholder , type , value , error , info , onChange, disabled
 }) {
  return (
    <div className="form-group">
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={classnames('form-control from-control-lg', {
            'is-invalid':error
        })}
            value={value}
              onChange={onChange}
              disabled={disabled }
          />
          {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
TextFieldGroup.defaultProps = {
    type:'text'
}
export default TextFieldGroup;