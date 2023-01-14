// import ButtonPayment from './components/modal-payment';
// import ModalDetailTransaction from './components/ModalDetailTransaction';
// import ModalAddProduct from './components/ModalAddProduct';
// import ModalDetailProduct from './components/ModalDetailProduct';

        {/* <ButtonPayment></ButtonPayment> */}
        {/* <ModalDetailTransaction></ModalDetailTransaction> */}
        {/* <ModalAddProduct></ModalAddProduct> */}
        {/* <ModalDetailProduct></ModalDetailProduct> */}

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
          path='/cashier'
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
