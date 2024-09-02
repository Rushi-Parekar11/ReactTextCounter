import React from 'react'
import { useState } from 'react'

function Just() {
     const [click,setClick]=useState('hi')
     function onch(event){
        setClick(event.target.value)
        let a=click
        console.log(a);
      }

      function changval(){
        setClick("hello")
      }
     
  return (
    <div>
      <h1>Count is :{click}</h1>
      <input type="text" value={click} onChange={onch}/>
      <button onClick={changval}>click</button>
    </div>
  )
}

export default Just
