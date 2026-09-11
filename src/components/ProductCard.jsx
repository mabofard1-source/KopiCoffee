import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
export default function ProductCard({ product }) { const { add } = useCart(); return <article className="product-card"><Link to={`/product/${product.id}`} className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span>{product.category}</span></Link><div className="product-info"><h3>{product.name}</h3><div className="card-bottom"><b>{product.price} <small>L.E</small></b><button onClick={() => add(product)} aria-label={`Add ${product.name} to cart`}><FiPlus /> Add</button></div></div></article>; }
