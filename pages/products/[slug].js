import products from '@/data/products.json'
import Link from 'next/link'

export default function ProductDetail({ product }) {
  if (!product) return <div className="container"><p>Product not found.</p></div>
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
      <div className="hero">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
          <img src={product.image} alt={product.name} style={{width:'100%', borderRadius:12}} />
          <div>
            <h1 style={{marginTop:0}}>{product.name}</h1>
            <div className="price">${product.price.toFixed(2)}</div>
            <p style={{opacity:.9}}>{product.description}</p>
            <div style={{display:'flex', gap:12, marginTop:12}}>
              <a href={product.buyUrl} className="btn" target="_blank" rel="noreferrer">Buy now</a>
              <Link href="/products" className="btn" style={{background:'#fff', color:'#111'}}>Back to shop</Link>
            </div>
            <div style={{marginTop:18, opacity:.85, fontSize:14}}>
              <p><strong>Shipping:</strong> Fast, discreet packaging. Free over $50.</p>
              <p><strong>Returns:</strong> 30-day hassle-free.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: products.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.slug === params.slug) || null
  return { props: { product } }
}
