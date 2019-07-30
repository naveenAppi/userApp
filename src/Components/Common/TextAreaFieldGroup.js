import React from 'react'
import classnames from 'classnames';

function TextAreaFieldGroup({
     name, placeholder, value , error , info , onChange
 }) {
  return (
    <div className="form-group">
    <textarea
        placeholder={placeholder}
        name={name}
        className={classnames('form-control from-control-lg', {
            'is-invalid':error
        })}
            value={value}
            onChange={onChange}
          />
          {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
export default TextAreaFieldGroup;