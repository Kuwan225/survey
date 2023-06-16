import React from 'react'

const Button = ({klik,style,label,children}) => {
  return (
    <button
    onClick={klik}
    className={`h-full text-white font-bold p-2 px-4 border-none rounded-sm text-[.9rem] ${style}`}
  >
    {children}
  </button>
  )
}

export default Button