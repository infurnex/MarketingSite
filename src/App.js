import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
  const home_ref = React.createRef();
  const selecttype_ref = React.createRef();
  const aboutus_ref = React.createRef();
  const contact_ref = React.createRef();
  return (
    <div className="App">
    <Navbar homeref={home_ref} selecttyperef = {selecttype_ref} aboutusref = {aboutus_ref} contactref={contact_ref} className='navv'/>
    </div>
  );
}

export default App;
