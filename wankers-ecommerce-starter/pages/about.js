import Link from 'next/link'
export default function About() {
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
      <h1>About Wankers</h1>
      <p style={{opacity:.9, maxWidth:760}}>
        Cheeky, premium, and built for real life. We craft high-quality formulas with a sense of humor—
        because intimacy products can be effective and fun at the same time.
      </p>
    </div>
  )
}
