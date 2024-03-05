import Home from "./Component/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./Component/Head";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Bag from "./MenuPages/Bag";
import Watch from "./MenuPages/Watch";
import Shoes from "./MenuPages/Shoes";

import Tshirt from "./MenuPages/Tshirt";
import Jeans from "./MenuPages/Jeans";
import Footer from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Shirt from "./MenuPages/Shirt";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Bag" element={<Bag />} />
        <Route path="Watch" element={<Watch />} />

        <Route path="Tshirt" element={<Tshirt />} />
        <Route path="Jeans" element={<Jeans />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="shirt" element={<Shirt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
