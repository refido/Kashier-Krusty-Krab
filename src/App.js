import './App.css';
import SidebarMenu from './components/SidebarMenu';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <SideBar>
        <SidebarMenu />
      </SideBar>
    </div>
  );
}

const SideBar = styled.div`
    padding: 10;
`;

export default App;
