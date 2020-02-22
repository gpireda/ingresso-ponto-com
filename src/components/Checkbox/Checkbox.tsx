import React from "react";

import "./Checkbox.module.scss";

interface ICheckboxProps {
  checked: boolean;
  onChange: any;
  type: any;
}

const Checkbox: React.FC<ICheckboxProps> = ({ checked, onChange, type }) => (
  <span key={type.id}>
    <label>
      <input
        checked={checked}
        id={type.type}
        type="checkbox"
        onChange={e => onChange(e, type.id)}
        value={type.type}
      />
      {type.type}
    </label>
  </span>
);

export default Checkbox;
