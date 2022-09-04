import React from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Categories from './components/Categories/Categories.jsx';
import Products from './components/Products/Products.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
