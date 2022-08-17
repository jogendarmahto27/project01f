import CustomerData from "./components/CustomerData";
import Navbar from "./components/Navbar";
import TestTransaction from "./components/TestTransaction";
import Login from "./pages/Login";
import {BrowserRouter,Routes,Link } from 'react-router-dom';
import { Route } from "react-router";
import TransactionDetails from "./components/TransactionDetails";
import Receipt from "./components/Receipt";


// code for routing between the pages

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>

        <Route  exact path='/' element={<Login />}/>
        <Route path='/transaction' element={<TestTransaction/>}/>
        <Route  path='/customer' element={<CustomerData/>}/>
        <Route  path='/transactiondetails' element={<TransactionDetails />}/>
        <Route  path='/logout' element={<Login/>}/>
        <Route path = '/receipt' element={<Receipt/>}/>

      </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
