import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import RegularPost from "./components/RegularPost";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

export default function App() {
  return(
  <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogPost" element={<BlogPost/>} />
          <Route path="/regularPost" element={<RegularPost/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  </>
  );
}
