import './App.css';
import Home from './Pages/Home/Home';
import LoginRegister from './Pages/Login-Register/Login-Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lr' element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
