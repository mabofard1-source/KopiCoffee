import { FiMinus, FiPlus } from 'react-icons/fi';
export default function QuantityControl({ value, onChange }) { return <div className="quantity"><button aria-label="Decrease quantity" onClick={() => onChange(value - 1)}><FiMinus /></button><span>{value}</span><button aria-label="Increase quantity" onClick={() => onChange(value + 1)}><FiPlus /></button></div>; }
