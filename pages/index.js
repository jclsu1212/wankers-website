import Link from 'next/link'
import products from '@/data/products.json'
import ProductCard from '@/components/ProductCard'

export default function Home() {
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

      <section className="hero">
        <h1 style={{marginTop:0}}>Life’s short—just stroke it.</h1>
        <p style={{opacity:.9, maxWidth:720}}>
          Premium formulas for maximum glide. Designed for the Daily Wankers Club.
        </p>
        <div style={{marginTop:16}}>
          <Link href="/products" className="btn">Shop the collection</Link>
        </div>
      </section>

      <section>
        <h2>Best sellers</h2>
        <div className="grid" style={{marginTop:12}}>
          {products.slice(0, 3).map(p => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Wankers • <Link href="/policies/shipping">Shipping & Returns</Link> • <Link href="/policies/privacy">Privacy</Link>
      </footer>
    </div>
  )
}
