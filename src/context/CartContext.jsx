import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => { try { return JSON.parse(localStorage.getItem('kopi-cart')) || []; } catch { return []; } });
  useEffect(() => localStorage.setItem('kopi-cart', JSON.stringify(cart)), [cart]);
  const add = (product, qty = 1) => setCart(c => { const item = c.find(x => x.id === product.id); return item ? c.map(x => x.id === product.id ? { ...x, qty: x.qty + qty } : x) : [...c, { ...product, qty }]; });
  const update = (id, qty) => setCart(c => qty < 1 ? c.filter(x => x.id !== id) : c.map(x => x.id === id ? { ...x, qty } : x));
  const remove = id => setCart(c => c.filter(x => x.id !== id));
  const count = useMemo(() => cart.reduce((sum, x) => sum + x.qty, 0), [cart]);
  const total = useMemo(() => cart.reduce((sum, x) => sum + x.qty * x.price, 0), [cart]);
  return <CartContext.Provider value={{ cart, add, update, remove, count, total }}>{children}</CartContext.Provider>;
}
