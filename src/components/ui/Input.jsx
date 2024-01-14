import React from 'react'
import { FaSearch } from 'react-icons/fa';


const Input = ({className}) => {
  const style1={
    border :"solid 0.5px purple",
  }
  return (
<div className={`input-group ${className}`}>
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary dropdown-toggle" style={style1} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catégorie</button>
  </div>
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
    <div class="input-group-append">
    <button class="btn btn-outline-secondary " type="button" style={style1}>   <FaSearch size={24} color="#333" /></button>
  </div>
</div>
  )
}

export default Input
