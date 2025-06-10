import React from 'react'

const Button = ({children,className = ``,disabled = false,...props}) => {

  return (
    <Button 
    className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    {...props}
    >
     {children}
    </Button>
  )
}

export default Button