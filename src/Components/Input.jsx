// Components/Input.jsx
import React from 'react';

const Input = React.forwardRef(({ type, value, onChange, placeholder, className }, ref) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      ref={ref} // Forward the ref to the native input element
    />
  );
});

export default Input;