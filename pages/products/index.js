import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark" />
          <img src="/logo.svg" alt="Wankers" height="28" />
        </div>
        <div style={{display:'flex', gap:16}}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <h1>Shop</h1>
      <div className="grid" style={{marginTop:12}}>
        {products.map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  )
}
