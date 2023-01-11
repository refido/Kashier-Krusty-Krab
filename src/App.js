import './App.css';
// import Login from './pages/Login';

// function App() {
//   return (
//     <Login></Login>
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route
      path='/'
      element={<Homepage />}
    />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
