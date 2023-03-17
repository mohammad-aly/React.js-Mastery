import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    }else{
      setMode('light');
      setDarkOrLi('dark');
      setBtnText('Switch to DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* //u can mention data here */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggle={EnableToggle} dol = {darkOrLi} bt = {btntext}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter the Text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
