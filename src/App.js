import Navbar from './Navbar.js';
import "./add.css"
import TextForm from './TextForm.js';
import { useState } from 'react';



function App() {
  const [mode, setmode] = useState('light');


  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';


    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.border = 'white';
      document.body.style.color = 'black';

    }
  }

  return (
    <>

      <Navbar name={'TextCounter'} mode={mode} toggle={togglemode}></Navbar>

    
        <div className="container">
        <TextForm heading={"Change Your Text into Uppercase !"} textval={"Enter the inupt :"} ></TextForm>
            </div>
    </>
  )
}

export default App;
