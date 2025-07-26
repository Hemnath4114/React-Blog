import React from 'react';
import colorNames from 'colornames';

const Input = ({colorValue,setColorValue,setHexValue,setIsDark, isDark}) => {
  return (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="Add color name">Enter colour</label>
            <input 
                autoFocus
                type="text"
                placeholder='eg:white'
                required
                value={colorValue}
                onChange={(e)=>{
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                 }}

            />
            <button type="button"
                    onClick={() => setIsDark(!isDark)}        
            >
             Change text color   
            </button>
        </form>
    </>
  )
}

export default Input;