import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" value={value} onChange={onChange} />
    </div>
  );
}

export default InputField;
