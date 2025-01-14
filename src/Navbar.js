import React from 'react'
import "./add.css"
function Navbar(props) {

  return (
    <div>
      <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid" id='shad'>
    <a className="navbar-brand" href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
          
      </ul>
      
      <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
  <input className="form-check-input bg-primay" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
</div>


    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
