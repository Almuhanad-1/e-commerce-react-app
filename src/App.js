import Nav from "./components/Nav";
import Home from "./pages/Home";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Products from "./components/Products";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
