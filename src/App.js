import logo from './logo.svg';
import './App.css';
import ButtonPayment from './components/modal-payment';
import ModalDetailTransaction from './components/ModalDetailTransaction';
import ModalAddProduct from './components/ModalAddProduct';
import ModalDetailProduct from './components/ModalDetailProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonPayment></ButtonPayment> */}
        <ModalDetailTransaction></ModalDetailTransaction>
        {/* <ModalAddProduct></ModalAddProduct> */}
        {/* <ModalDetailProduct></ModalDetailProduct> */}
      </header>
    </div>
  );
}

export default App;
