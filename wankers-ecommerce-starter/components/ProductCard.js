import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="100%" height="auto" />
      <div className="card-inner">
        <h3>{product.name}</h3>
        <div className="price">${product.price.toFixed(2)}</div>
        <div style={{display:'flex', gap:8}}>
          <Link href={`/products/${product.slug}`} className="btn">View</Link>
          <a href={product.buyUrl} className="btn" target="_blank" rel="noreferrer">Buy now</a>
        </div>
      </div>
    </div>
  )
}
