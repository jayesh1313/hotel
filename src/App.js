import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Services from './components/Services';
import Title from './components/Title';
import Home from "./components/Home";
import Form from './components/Form';
import Room from './components/Room';
import Payment from './components/Payment';  
import Footer from './components/Footer';
import Body1 from './components/Body1';


function App() {
  return (
    <div >
      
<Router>

<Header></Header> 

<Redirect to="/Home" path="/">
 </Redirect>
 <Route component ={Payment} path={'/Payment'}></Route>
<Route component ={Services} path={'/Services'}></Route>
<Route component ={Room }  path={'/Room'}></Route> 
<Route component ={Home }  path={'/Home'}></Route> 
<Route component ={Form }  path={'/Form'}></Route> 
</Router>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
