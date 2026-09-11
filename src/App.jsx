import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import MobileCartButton from './components/MobileCartButton';

export default function App() {
  return <div className="app"><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/product/:id" element={<ProductDetails />} /><Route path="/cart" element={<Cart />} /><Route path="/contact" element={<Contact />} /></Routes></main><MobileCartButton /><Footer /></div>;
}
