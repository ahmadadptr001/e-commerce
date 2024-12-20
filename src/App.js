import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "boxicons/css/boxicons.min.css";

import './App.css';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

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
import Auth from "./components-shop/auth/auth";
import Signin from "./components-shop/signin/signinPage";
import Signup from "./components-shop/signup/signupPage";
import Cart from "./components-shop/shopping-cart/cart";

function App() {
  
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (term) => {
      setSearchTerm(term)
  }

  const [badgeCount, setBadgeCount] = useState(0)

  function handleBadgeCount() {
    setBadgeCount(badgeCount + 1)
  }

  const [titleImageProduct, setTitleImageProduct] = useState([]);

  return (
    <>
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
          basename="/e-commerce"
          element={
            <>
              <Navigation onSearchChange={handleInputChange} badgeCount={badgeCount}/>
              <HeroSection category={"all category"} />
              {/* <MainContent handleBadgeCount={handleBadgeCount} setTitleImageProduct={(newProduct) => setTitleImageProduct((prev) => [...prev, newProduct]) }/> */}
              <MainContent handleBadgeCount={handleBadgeCount} setTitleImageProduct={setTitleImageProduct}/>
            
            </>
          } />

          <Route basename="/e-commerce" path="/shop-more/electronics" element={<Electronics />} />
          <Route basename="/e-commerce" path="/shop-more/jewelery" element={<Jewelery />} />
          <Route basename="/e-commerce" path="/shop-more/men's" element={<Mens />} />
          <Route basename="/e-commerce" path="/shop-more/women's" element={<Womens />} />
          <Route basename="/e-commerce" path="/shop-more/searching" element={<Searching />} />
          <Route basename="/e-commerce" path="/shop-more/auth" element={<Auth />} />
          <Route basename="/e-commerce" path="/shop-more/signin" element={<Signin />} />
          <Route basename="/e-commerce" path="/shop-more/signup" element={<Signup />} />
          <Route basename="/e-commerce" path="/shop-more/cart" element={<Cart titleImageProduct={titleImageProduct}/>} />

      </Routes>
      <Footer />
      </>
  );
}

export default App;
