import React from 'react';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Modal from './components/Modal';
import PurchaseForm from './components/purchase.Form';

export default function Routing() {
    return (
    <Router>
       <div>
        <Navbar />
        <Switch>
       <Route exact path='/' component={ProductList} />
       <Route path='/cart' component={Cart} />
       <Route path='/details' component={Details} />
       <Route path='/contact' component={Contact} />
       <Route path='/purchaseForm' component={PurchaseForm}/>
       <Route component={Default} />
       </Switch>
       <Modal />
       </div>
    </Router>
          )
}
