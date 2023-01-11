import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Historypage from './pages/Historypage';
import Itempage from './pages/Itempage';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route
      path='/'
      element={<Homepage />}
    />
    <Route 
      path='/history-payment'
      element={<Historypage />}
      />
    <Route 
      path='/menu-item'
      element={<Itempage />}
    />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
