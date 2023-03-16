import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [darkOrLi, setDarkOrLi] = useState('dark');
  const [btntext, setBtnText] = useState('Switch DarkMode');


  const EnableToggle = ()=>{
    if(mode == 'light'){
      setMode('dark');
      setDarkOrLi('light');
      setBtnText('Switch to LightMode');
    }else{
      setMode('light');
      setDarkOrLi('dark');
      setBtnText('Switch to DarkMode');
    }
  }

  return (
    <>

      {/* //u can mention data here */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggle={EnableToggle} dol = {darkOrLi} bt = {btntext}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
