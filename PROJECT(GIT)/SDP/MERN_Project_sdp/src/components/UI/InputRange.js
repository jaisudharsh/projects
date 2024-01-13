import React from 'react'

const InputRange = ({handleValue, min, max, name, value}) => {
  return (
        <input type="range" name={name} step='1' className='w-full' onChange={handleValue} min={min} max={max} value={value}/>
  )
}

export default InputRange