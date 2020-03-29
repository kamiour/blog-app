import React from "react";

const Select = ({ options, ...props }) => {
  return <select {...props}>
    {options.map(option => <option value={option.value} disabled={option.disabled}>{option.label}</option>)}
  </select>
}

export default Select;