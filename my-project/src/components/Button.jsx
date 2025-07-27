import React from 'react'

const Button = ({ reqType, setReqType, buttontext}) => {
  return (
    <button 
        type='button'
        className={buttontext === reqType ? 'selected' : null}
        onClick={() => setReqType(buttontext)}
    >
        {buttontext}
    </button>
  )
}

export default Button