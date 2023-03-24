import React from 'react'
import './Navbar.css'

export default function Navbar(props) {

  return (
    <div className='navbar-div'>
      <p onClick={()=> { props.homeref.current.scrollIntoView({behavior : 'smooth'})}}>
        Home
      </p>
      <p onClick={()=> { props.selecttyperef.current.scrollIntoView({behavior : 'smooth'})}}>
        collections
      </p>
      <p onClick={()=> { props.aboutusref.current.scrollIntoView({behavior : 'smooth'})}}>
        About us
      </p>
      <p onClick={()=> { props.contactref.current.scrollIntoView({behavior : 'smooth'})}}>
        Contact
      </p>
    </div>
  )
}