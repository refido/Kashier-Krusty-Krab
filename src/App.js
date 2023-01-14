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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/Home'
          element={<Homepage />}
        />
      </Routes>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
