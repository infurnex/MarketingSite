
import React from 'react';
import { Aboutus } from './Aboutus/Aboutus';
import './App.css';
import { Contact } from './Contact/Contact';
import { Displaycollections } from './Displaycollections/Display';
import Navbar from './Navbar/Navbar';
import { Pagestart } from './PageStart/Pagestart';

function App() {
  const home_ref = React.createRef();
  const selecttype_ref = React.createRef();
  const aboutus_ref = React.createRef();
  const contact_ref = React.createRef();
  return (
    <div className="App">
    <Navbar homeref={home_ref} selecttyperef = {selecttype_ref} aboutusref = {aboutus_ref} contactref={contact_ref} className='navv'/>
    <Pagestart ref={home_ref}/>
    <Displaycollections ref={selecttype_ref}/>
    <Aboutus ref={aboutus_ref}/>
    <Contact ref={contact_ref}/>
    </div>
  );
}

export default App;
