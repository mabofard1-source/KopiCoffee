import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiShoppingBag, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import logo from '../assets/kopi-logo.png';
export default function Navbar() { const [open, setOpen] = useState(false); const { count } = useCart(); const links = [['/','Home'],['/menu','Menu'],['/contact','Contact']]; return <header><nav className="nav container"><Link to="/" className="logo" onClick={() => setOpen(false)}><img src={logo} alt="Kopi Specialty Coffee" /></Link><button className="menu-toggle" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button><div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([to, text]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} end={to === '/'}>{text}</NavLink>)}<NavLink to="/cart" className="cart-link" onClick={() => setOpen(false)}><FiShoppingBag /> Cart <i>{count}</i></NavLink></div></nav></header>; }
