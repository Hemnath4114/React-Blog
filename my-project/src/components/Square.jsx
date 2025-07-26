import React from 'react'

const Square = ({colorValue,hexValue, isDark}) => {
  return (
    <>
        <div style={
            {
                backgroundColor: colorValue,
                color: isDark ? "#000" : "#fff" 
            }
            } >  
            <p>
                {colorValue ? colorValue : "Empty value"}
            </p>
            <p>
                {hexValue ? hexValue : null}
            </p>
        </div>
    </>
  )
}

Square.defaultProps={
    colorValue: "Empty color value"
}

export default Square