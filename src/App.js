import Login from './pages/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Historypage from './pages/Historypage';
import Itempage from './pages/Itempage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Login />
          }
        />
        <Route
          path='/cashier'
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/history-payment'
          element={
            <ProtectedRoute>
              <Historypage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/menu-item'
          element={
            <ProtectedRoute>
              <Itempage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;

export function ProtectedRoute({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}