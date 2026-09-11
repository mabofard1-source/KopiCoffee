import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import QuantityControl from '../components/QuantityControl';
export default function ProductDetails() { const { id } = useParams(); const product = products.find(p => p.id === id); const [qty, setQty] = useState(1); const { add } = useCart(); if (!product) return <section className="container not-found"><h1>That cup wandered off.</h1><Link className="button" to="/menu">Back to menu</Link></section>; return <section className="details container"><Link className="back" to="/menu"><FiArrowLeft /> Back to menu</Link><div className="details-grid"><div className="details-image"><img src={product.image} alt={product.name} /><span>{product.category}</span></div><div className="details-copy"><p className="eyebrow">Kopi specialty coffee</p><h1>{product.name}</h1><p className="details-price">{product.price} <small>L.E</small></p><p>{product.description}</p><div className="purchase"><QuantityControl value={qty} onChange={n => setQty(Math.max(1,n))} /><button className="button" onClick={() => add(product, qty)}>Add to cart</button></div></div></div></section>; }
