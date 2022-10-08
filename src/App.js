import './App.css';
import Template from "./components/Template"
import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Formheader from './components/Formheader'
import Home from './components/Home';
import Question_forms from './components/Question_forms';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/form/:id' element={<Question_forms />} />
        </Routes>
        <Routes>
          <Route  path='/question' element={<Question_forms />} />
        </Routes>
        
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
