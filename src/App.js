import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';
import { ProductProvider } from '../src/Context';

function App() {
  return (
    <div>
     
      <ProductProvider>
      <Routing />
      </ProductProvider>
      
      
    </div>
  )
}

export default App;
