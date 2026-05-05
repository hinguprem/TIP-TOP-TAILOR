import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Customise from './components/Customise';
import Products from './components/Products';
import CategoryAccessories from './components/CategoryAccessories';
import CategoryCoats from './components/CategoryCoats';
import CategoryKurtas from './components/CategoryKurtas';
import CategoryShirts from './components/CategoryShirts';
import CategorySuits from './components/CategorySuits';
import CategoryPants from './components/CategoryPants';
import CategoryIndoWestern from './components/CategoryIndoWestern';
import CategorySafari from './components/CategorySafari';
import CategoryPathani from './components/CategoryPathani';
import CategoryFabricMaterials from './components/CategoryFabricMaterials';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category-accessories" element={<CategoryAccessories />} />
          <Route path="/category-coats" element={<CategoryCoats />} />
          <Route path="/category-kurtas" element={<CategoryKurtas />} />
          <Route path="/category-shirts" element={<CategoryShirts />} />
          <Route path="/category-suits" element={<CategorySuits />} />
          <Route path="/category-pants" element={<CategoryPants />} />
          <Route path="/category-trousers" element={<CategoryPants />} />
          <Route path="/category-indo-western" element={<CategoryIndoWestern />} />
          <Route path="/category-safari" element={<CategorySafari />} />
          <Route path="/category-pathani" element={<CategoryPathani />} />
          <Route path="/category-fabric-materials" element={<CategoryFabricMaterials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
