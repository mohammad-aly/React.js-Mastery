import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [darkOrLi, setDarkOrLi] = useState('dark');
  const [btntext, setBtnText] = useState('Switch DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500);
  }


  const EnableToggle = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setDarkOrLi('light');
      setBtnText('Switch to LightMode');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      // }, 1500);

    }else{
      setMode('light');
      setDarkOrLi('dark');
      setBtnText('Switch to DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //dynamically changing title
      document.title = "TextUtils - Light Mode";

    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      {/* //u can mention data here */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggle={EnableToggle} dol = {darkOrLi} bt = {btntext}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter the Text to analyze" mode={mode}/>}> */}
            <TextForm showAlert = {showAlert} heading="Enter the Text to analyze" mode={mode}/>
            {/* </Route> */}
        {/* </Routes> */}
    
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
