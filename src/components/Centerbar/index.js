import React from 'react'
import "./index.css"



const Centerbar = ({color}) => {
 
 
    return (
   <>
    <div className='Centerbar'> 
        <h3>Background-color</h3> {color}
        <div className='color-solid'></div>
    </div>
   </>
  )


}

export default Centerbar