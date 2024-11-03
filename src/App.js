import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "boxicons/css/boxicons.min.css";

import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import A_year from "./components/a_year";
import NotepadPage from "./components/notepadPage";
import Motivation from "./components/motivation";
import Follow from "./components/follow";
import Footer from "./components/footer";

// untuk berpindah halaman
import MainShop from "./components/ShopPage/mainShop";
import A_Year_Main from "./components/mainPage/a_year_main";
import AboutMain from "./components/About/aboutMain";
import ContactMain from "./components/Contact/ContactMain";

//  khusus untuk shope more
import Navigation from "./components-shop/navigation";
import MainContent from "./components-shop/mainContent";
import HeroSection from "./components-shop/HeroSection";
import Electronics from "./components-shop/electronics";
import Jewelery from "./components-shop/jewelery";
import Mens from "./components-shop/men's clothing";
import Womens from "./components-shop/women's clothing";
import Searching from "./components-shop/searching";

function App() {
  
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (term) => {
      setSearchTerm(term)
  }

  return (
<<<<<<< HEAD
    <Router basename="/e-commerce">
=======
    <Router basename="/e-commerce/">
>>>>>>> 7cccb2b65bacac382c9c165a5a42799d0edfb8b7
      <Routes>

        <Route
          path="/"
          basename="/e-commerce"
          element={
            <>
              
              <Navbar />
              <Hero />
              <A_year />
              <NotepadPage />
              <Motivation />
              <Follow />
              
            </>
          } />

        <Route basename="/e-commerce" path="/shop" element={<MainShop />} />
        <Route basename="/e-commerce" path="/a_year_in_indonesia" element={<A_Year_Main />}></Route>
        <Route basename="/e-commerce" path="/about" element={<AboutMain />}></Route>
        <Route basename="/e-commerce"path="/contact" element={<ContactMain />}></Route>


        <Route
          path="/shop-more"
          element={
            <>
              <Navigation onSearchChange={handleInputChange} />
              <HeroSection category={"all category"} />
              <MainContent />
            </>
          } />

          <Route basename="/e-commerce" path="/shop-more/electronics" element={<Electronics />} />
          <Route basename="/e-commerce" path="/shop-more/jewelery" element={<Jewelery />} />
          <Route basename="/e-commerce" path="/shop-more/men's" element={<Mens />} />
          <Route basename="/e-commerce" path="/shop-more/women's" element={<Womens />} />
          <Route basename="/e-commerce" path="/shop-more/searching" element={<Searching />} />
            
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
