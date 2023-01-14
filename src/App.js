import './App.css';
// import ButtonPayment from './components/modal-payment';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ButtonPayment></ButtonPayment>
//       </header>
//     </div>

import Login from './pages/Login';
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
          element={<Login />}
        />
        <Route
          path='/Home'
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
    </BrowserRouter >
  );
}

export default App;
