import Login from './pages/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Historypage from './pages/Historypage';
import Itempage from './pages/Itempage';
import { useEffect, useState } from 'react';

function App() {
  const [media, setMedia] = useState(window.matchMedia("(min-width: 816px)").matches)

  useEffect(()=>{
    window
      .matchMedia("(min-width:816px)")
      .addEventListener('change', e=>setMedia(e.matches))
  }, [])
  return (
    <BrowserRouter>
      {media && (<Routes>
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
      </Routes>)}

      {!media && (<h1>Squidward doesn't like smartphone view, please use desktop!</h1>)}
      
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