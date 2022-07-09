import logo from './logo.svg';
import './App.css';
// import navbar from './components/navbar';
import NavBar from './components/Navbar';
import { BrowserView,MobileView } from 'react-device-detect';
import H3Card from './components/H3Card/H3Card';
import H6Card from './components/H6Card/H6Card';
import H5Card from './components/H5Card/H5Card';
import H9Card from './components/H9Card/H9Card';
import H1Card from './components/H1Card/H1Card';
function App() {
  return (
    <div className="App">
       <BrowserView>
              <h3 style={{ textAlign: "center" }}>
                This website is currently supported only for mobile devices.
                Please switch to a mobile device or simulate one using inspect
                element to view the same.
              </h3>
        </BrowserView>
        <MobileView>
        <NavBar></NavBar>
      <H3Card></H3Card>
      <H6Card></H6Card>
      <H5Card></H5Card>
      
      <H5Card></H5Card>
      <H9Card></H9Card>
      <H1Card></H1Card>
        </MobileView>
        
      
      
    </div>
  );
}

export default App;
