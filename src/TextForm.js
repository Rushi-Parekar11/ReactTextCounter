import React from 'react'
import "./add.css"
import { useState } from 'react'

function TextForm(props) {
    function clickon(event){
        let newtxt=text.toUpperCase();
        settext(newtxt);
    }

    function clickonlower(){
        let newtt=text.toLowerCase();
        settext(newtt);
    }


    function onch(event){
        settext(event.target.value);
    }

    function clear(){
         settext("")

    }
    function cpy() {
        var cptext = document.getElementById("exampleFormControlTextarea1");
            cptext.select();
            navigator.clipboard.writeText(cptext.value)
            
    }
    

    const [text,settext]=useState("")


    return (
        <>
        <div id='med' className='container'>
             <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.textval}{text.substring(0,25)} ....</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={onch} placeholder='Enter the text !'></textarea>

                <button style={{ width:160 }} type="button" className="btn btn-primary " onClick={clickon}>Change to Uppercase</button>
                <button style={{ width:160 }} type="button" className="btn btn-primary " onClick={clickonlower}>Change to Lowercase</button>
                <button type="button" className="btn btn-primary " onClick={cpy}>Copy</button>
                <button type="button" className="btn btn-success " onClick={clear}>Clear</button>

            </div>
        </div>


        <div className="container" id='tcs'>
            <h3>Text summery</h3>
            <p>Text are {text.split(" ").length} laters and the {text.length} characters !</p>
            <p>you have {0.008 * text.split(" ").length} Minutes for read this. </p>
        </div>
         


             <div className="container mx-7">
             <h1 id='yu'>Preview</h1>
             </div>

        <div className="container" id='note'>
        <h5 placeholder="see Privew here">{text}</h5>    
        </div>
        
        </>
    )
}

export default TextForm
