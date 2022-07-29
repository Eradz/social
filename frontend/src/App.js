import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import { Main } from './components/Main/Main';
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
 
  return (
    <>
    <BrowserRouter>
        <div className="App">
            <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/home" element={<Main/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
