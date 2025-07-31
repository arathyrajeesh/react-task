import logo from './logo.svg';
import './App.css';
import './components/Header';
import './components/Footer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Client from './components/Client';
import Manage from './components/Manage';
import Spending from './components/Spending';
import Help from './components/Help';
import Design from './components/Design';
import Customers from './components/Customers';
import Marketing from './components/Marketing';



function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Client/>
    <Manage/>
    <Spending/>
    <Help/>
    <Design/>
    <Customers/>
    <Marketing/>
    <Footer/>
    </>
  );

}

export default App;
