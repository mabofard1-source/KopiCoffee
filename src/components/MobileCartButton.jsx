import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function MobileCartButton() {
  const { count, total } = useCart();
  if (!count) return null;
  return <Link className="mobile-cart" to="/cart"><FiShoppingBag /><span><small>Your cart · {count} item{count > 1 ? 's' : ''}</small><b>{total} L.E</b></span><em>View</em></Link>;
}
