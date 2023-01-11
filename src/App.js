import './App.css';

// import SidebarMenu from './components/SidebarMenu';
// import styled from 'styled-components';

// function App() {
//  return (
//    <div>
//      <SideBar>
//        <SidebarMenu />
//      </SideBar>
//    </div>

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

// const SideBar = styled.div`
//    padding: 10;
// `;

export default App;
