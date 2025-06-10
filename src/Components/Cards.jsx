import React from 'react'

export const Cards = ({children,className=``}) => {
  return (
    <div className={`bg-white  rounded-2xl shadow-xl ${className}`}>
        {children}
    </div>
  )
}

export function CardContent({ children, className = `` }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}