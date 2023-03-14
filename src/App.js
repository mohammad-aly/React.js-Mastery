import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

      {/* //u can mention data here */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze"/>
      </div>
    </>
  );
}

export default App;
