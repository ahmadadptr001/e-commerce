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
    <Router>
      <Routes>

        <Route
          path="/"
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

        <Route path="/shop" element={<MainShop />} />
        <Route path="/a_year_in_indonesia" element={<A_Year_Main />}></Route>
        <Route path="/about" element={<AboutMain />}></Route>
        <Route path="/contact" element={<ContactMain />}></Route>


        <Route
          path="/shop-more"
          element={
            <>
              <Navigation onSearchChange={handleInputChange} />
              <HeroSection category={"all category"} />
              <MainContent />
            </>
          } />

          <Route path="/shop-more/electronics" element={<Electronics />} />
          <Route path="/shop-more/jewelery" element={<Jewelery />} />
          <Route path="/shop-more/men's" element={<Mens />} />
          <Route path="/shop-more/women's" element={<Womens />} />
          <Route path="/shop-more/searching" element={<Searching />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
