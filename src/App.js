// import logo from './logo.svg';
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import AnimalDetails from './pages/AnimalDetails/AnimalDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<AnimalDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
