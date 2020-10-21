import React from 'react'

export default function TextInputGroup({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input className={ "form-control form-control-lg " + (error? "is-invalid": "")}
      type={type}
      name={name}
      placeholder={placeholder}
      value= {value}
      onChange= {onChange}
      />
      {
        error? (<div className="invalid-feedback">{error}</div>) : null
      }
      
    </div>
  )
}
