import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar2/Navbar';
import Banner from './Components/Banner/Banner';

import Cards from './Components/Card/Cards';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="mx-auto  ">
    <Header></Header>
  
    <Navbar></Navbar>
    <Banner></Banner>
    <Cards></Cards>
    <Footer></Footer>
   
    </div>
  );
}

export default App;
