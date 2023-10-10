import './App.css';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About"/>
      <div className="container my-5">
      <TextForm heading="Listen"/>
      </div>
    </>
  );
}

export default App;
