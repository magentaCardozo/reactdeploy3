import React from 'react'

const Button = ({className,children}) => {
  return (
    <div>
      <button className={`btn btn-outline-success  form-control ${className}`} type="submit">{children}</button>
    </div>
  )
}

export default Button


