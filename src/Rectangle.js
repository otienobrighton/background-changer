import React from 'react'

const rectangle = ({colorValue}) => {
  return (
    <section 
    className="square"
    style={{ backgroundColor : colorValue }}>
        <p>{colorValue ? colorValue : "empty value"}</p>

    </section>
  )
}

rectangle.defaultProps = {
    colorValue: "Empty Color Value"
}

export default rectangle
