import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleShorten = (e) => {
    e.preventDefault();
    setShortUrl(`${window.location.origin}/#${btoa(longUrl)}`);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${newsletterEmail}`);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <h2>⚡ Snipe</h2>
          <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* PAGE 1 – PINK BACKGROUND WITH DIRECT CONTENT */}
     {/* HERO PAGE */}
<section className="first-page">
  <div className="hero-container">
    
    {/* LEFT SIDE */}
    <div className="hero-left">
      <h1>Snipe-URL Shortener, Branded Short Links & Analytics</h1>
      <p>
        Simplify your links and track performance with ease.
        Create clean, powerful short URLs in seconds.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">Create Free Account</button>
        <button className="secondary-btn">View Plans</button>
      </div>
    </div>

    {/* RIGHT SIDE CARD */}
    <div className="hero-card">
      <h3>🔗 Shorten a Link</h3>

      <form onSubmit={handleShorten}>
        <label>Long URL</label>
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Paste long URL here"
          required
        />

        <button type="submit">Shorten Link</button>
      </form>

      {shortUrl && (
        <div className="result-card" style={{ marginTop: "16px" }}>
          <input readOnly value={shortUrl} />
          <button
            className="secondary-btn"
            onClick={() => navigator.clipboard.writeText(shortUrl)}
          >
            Copy
          </button>
        </div>
      )}
    </div>

  </div>
</section>

      {/* PAGE 2 – INFO SECTION */}
      <section className="info-page">
        <div className="info-container">
          {/* TOP SECTION */}
          <div className="info-top">
            <div>
              <h2>We Are Spread All Over the Archipelago.</h2>
              <p className="subtitle">
                A trusted platform helping thousands manage and shorten links efficiently.
              </p>
              <button className="primary-btn">Get Started</button>
            </div>

            <div className="stats">
              <div><h3>300K+</h3><p>Projects</p></div>
              <div><h3>48+</h3><p>Partners</p></div>
              <div><h3>52K+</h3><p>Customers</p></div>
              <div><h3>125K+</h3><p>Links Shortened</p></div>
            </div>
          </div>

          {/* BENEFITS */}
          <h3 className="benefit-title">Benefit of URL Shortening</h3>

          <div className="benefits">
            <div className="benefit-card">
              <span>01</span>
              <h4>Saves Space</h4>
              <p>Fits long URLs into character-restricted platforms (social media, SMS).</p>
            </div>

            <div className="benefit-card">
              <span>02</span>
              <h4>Improve Aesthetics</h4>
              <p>Makes links look cleaner, less intimidating, and more professional.</p>
            </div>

            <div className="benefit-card">
              <span>03</span>
              <h4>Allows Link Management</h4>
              <p>Change the destination URL of a published link without editing the post.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3 – SMART PAYS SECTION */}
      <section className="third-page">
        <div className="third-container">
          {/* TOP SECTION */}
          <div className="third-top">
            <div className="third-content">
              <h2>A people-first approach to payment processing</h2>
              <p>
                Your payment challenges are our challenges, and your goals are our priority. 
                We're here to help you design the right solution to drive business growth and 
                set up custom fee profiles to optimize payments profitability. SmartPays 
                support team is also available 24/7 to address emergencies.
              </p>
              <button className="primary-btn">More About Us</button>
            </div>
            
            <div className="third-image">
              {/* Placeholder for image - you can replace with actual image */}
              <div style={{
                width: '100%',
                height: '400px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                Snipe
              </div>
            </div>
          </div>
          
          {/* NEWSLETTER SECTION */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3>Sign up for the Snipe Newsletter</h3>
              <p>
                Stay updated with the latest payment processing trends, tips, and exclusive offers.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* FOOTER */}
          <div className="page-footer">
            <p>© 2024 Snipe. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;