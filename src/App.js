import logo from './logo.svg';
import './App.css';
import Starting from './components/Starting';
import Datagridtable from './components/Datagridtable';
import Tabledata from './components/Tabledata';
import Dataentitytable from './components/Dataentitytable';
import Navbar from './components/Headder/NavBar/Navbar';
import Stepper from './components/Stepper/Stepper'
import { useState } from 'react';
function App() {
  const [value,setValue]=useState(0)
  return (
    <>
    <Navbar></Navbar>
    <Stepper />
    {/* <div className="App">

     <Starting/>
     <Dataentitytable/>
     <Tabledata></Tabledata>
     fghjkl;ghjklfghjkljhgfhj
    </div> */}
    </>
  );
}

export default App;
