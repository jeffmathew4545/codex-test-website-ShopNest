import { useState } from "react";
import "./App.css";

const PRODUCTS = [
  { id: 1, emoji: "🕯️", name: "Amber Soy Candle", category: "Home & Living", price: "₹899" },
  { id: 2, emoji: "🎧", name: "Wireless Earbuds Pro", category: "Electronics", price: "₹2,499" },
  { id: 3, emoji: "🧴", name: "Aloe Vera Serum", category: "Skincare", price: "₹649" },
  { id: 4, emoji: "☕", name: "Ceramic Mug Set", category: "Kitchen", price: "₹1,199" },
];

const POSTS = [
  { tag: "LIFESTYLE", title: "10 Ways to Make Your Home Feel Cozy This Monsoon", excerpt: "From warm lighting to soft textiles — small changes that make a big difference.", date: "June 14, 2025", read: "5 min read" },
  { tag: "TECH", title: "Best Wireless Audio Gear Under ₹3000 Right Now", excerpt: "We tested 12 earbuds so you don't have to. Here's what actually delivers.", date: "June 8, 2025", read: "7 min read" },
  { tag: "SKINCARE", title: "Why Aloe Vera is Still the King of Natural Serums", excerpt: "Dermatologists weigh in on this timeless ingredient and why it belongs in every routine.", date: "May 30, 2025", read: "4 min read" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (name) => {
    setCart((c) => [...c, name]);
    notify(`✓ ${name} added to cart`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail) {
      setShowModal(false);
      notify(`Logged in as ${loginEmail}`);
      setLoginEmail("");
      setLoginPass("");
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      notify("🎉 Subscribed! Check your inbox.");
      setEmail("");
    }
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="logo">ShopNest</div>
        <ul className="nav-links">
          <li><a href="#products">Shop</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <button className="btn-sm ghost" onClick={() => setShowModal(true)}>Login</button>
          <button className="btn-sm">🛒 Cart ({cart.length})</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Summer Collection 2025</p>
          <h1>Find Things<br />You'll <span>Love</span><br />Every Day.</h1>
          <p>A curated collection of everyday essentials — from cozy home goods to sleek tech accessories, delivered right to your door.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>
              Shop Now
            </button>
            <button className="btn-outline">View Lookbook</button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-section" id="products">
        <div className="section-label">Our Collection</div>
        <div className="section-title">Trending This Week</div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-img">{p.emoji}</div>
              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-muted">{p.category}</div>
                <div className="product-price">{p.price}</div>
                <button className="add-btn" onClick={() => addToCart(p.name)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="section blog-section" id="blog">
        <div className="section-label">From Our Journal</div>
        <div className="section-title">Latest Articles</div>
        <div className="blog-grid">
          {POSTS.map((post, i) => (
            <div className="blog-card" key={i}>
              <span className="blog-tag">{post.tag}</span>
              <div className="blog-title">{post.title}</div>
              <div className="blog-excerpt">{post.excerpt}</div>
              <div className="blog-meta">{post.date} · {post.read}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section newsletter-section" id="newsletter">
        <div className="section-label accent">Stay In The Loop</div>
        <div className="section-title light">Get 10% Off Your First Order</div>
        <p className="newsletter-sub">Subscribe for exclusive deals, new arrivals, and lifestyle inspiration.</p>
        {subscribed ? (
          <div className="subscribed-msg">🎉 You're subscribed! Check your inbox.</div>
        ) : (
          <form className="form-row" onSubmit={handleSubscribe}>
            <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Subscribe</button>
          </form>
        )}
        <div className="form-note">No spam, unsubscribe anytime. We respect your privacy.</div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div>
          <div className="footer-logo">ShopNest</div>
          <div className="footer-copy">© 2025 ShopNest. All rights reserved.</div>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Shipping Info</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-copy">Made with ❤️ in Kerala, India</div>
      </footer>

      {/* LOGIN MODAL */}
      {showModal && (
        <div className="overlay" onClick={(e) => e.target.className === "overlay" && setShowModal(false)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
              <label>Password</label>
              <input type="password" placeholder="••••••••" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} required />
              <button type="submit" className="modal-btn">Sign In</button>
            </form>
            <div className="modal-foot">Don't have an account? <a href="#">Create one →</a></div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="toast show">{toast}</div>}
    </>
  );
}
