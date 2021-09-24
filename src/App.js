import React, {useState} from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Textutils from "./components/Textutils";
// import About from "./components/About";
import Alert from './components/Alert';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {

  const [mode, setMode] = useState('light')
  const [bgMode, setbgMode] = useState('light')
  const [button, setButton] = useState('Dark Mode');
  const [alert, setAlert] = useState(null)

  const toggleAlert = (type, message) => {
      setAlert({
        type: type,
        message: message
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    
  }

  const removeToggleClass = () => {
    document.body.classList.remove('#d6cbd3');
    document.body.classList.remove('#9D80BA')
    document.body.classList.remove('#A5B2AA')
  }

  const bgToggle = (cls) => {
    removeToggleClass();
    document.body.classList.add(cls);
    if (bgMode === 'light') {
      setbgMode('#d6cbd3');
      document.body.style.backgroundColor = '#d6cbd3';
    }else if(bgMode === '#d6cbd3'){
      setbgMode('#9D80BA');
      document.body.style.backgroundColor = '#9D80BA';
    } 
    else {
      setbgMode('#A5B2AA');
      document.body.style.backgroundColor = '#A5B2AA';
    }
  }

  

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a1a1a';
      // toggleAlert("success", "Dark Mode is Enabled");
      toast("Dark Mode is Enabled", {
        position: 'top-center',
        autoClose: 3000,
       
      });
      setButton('Light Mode');
      // setLocalStorage.setItem('dark', mode);
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f5f5f5';
      // toggleAlert("success", "Light Mode is Enabled")
      toast("Light Mode is Enabled", {
        position: 'top-center',
        autoClose: 3000,
        
      });
      setButton('Dark Mode');
      // setLocalStorage.setItem('light', mode);
    }
    
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} textButton={button} bgToggle={bgToggle} toggleAlert={toggleAlert}/>
      <Alert alert={alert}/>
      <Textutils mode={mode} bgMode={bgMode} toggleAlert={toggleAlert}/>
      {/* <About /> */}
      <ToastContainer />
    </>
  );
}

export default App;
