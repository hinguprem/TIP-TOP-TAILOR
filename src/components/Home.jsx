import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero_png from '../assets/images/hero.png';
import suits_png from '../assets/images/suits.png';
import shirts_png from '../assets/images/shirts.png';
import coats_png from '../assets/images/coats.png';
import fabric_png from '../assets/images/fabric.png';
import blazer_png from '../assets/images/blazer.png';
import logo_jpg from '../assets/images/logo.jpg';
import wedding_suits_png from '../assets/images/wedding_suits.png';
import bulk_order_suits_png from '../assets/images/bulk_order_suits.png';

// Hero slides data — quotes + background images
const heroSlides = [
  {
    line1: 'CRAFT YOUR',
    line2: 'LEGACY.',
    line3: 'BESPOKE\u00a0MENSWEAR.',
    sub: 'Every stitch tells your story. Every fabric carries your legacy.',
    img: hero_png,
  },
  {
    line1: 'DRESS WITH',
    line2: 'PURPOSE.',
    line3: 'TAILOR-MADE\u00a0EXCELLENCE.',
    sub: 'Where precision meets passion — your garment, your identity.',
    img: suits_png,
  },
  {
    line1: 'WEAR YOUR',
    line2: 'STORY.',
    line3: 'HANDCRAFTED\u00a0ARTISTRY.',
    sub: 'From the finest fabrics to the last hand-sewn stitch — made for you alone.',
    img: fabric_png,
  },
  {
    line1: 'DEFINE YOUR',
    line2: 'STYLE.',
    line3: 'TIMELESS\u00a0ELEGANCE.',
    sub: 'Because what you wear speaks before you do. Let it speak volumes.',
    img: coats_png,
  },
];

// Featured section slides
const featuredSlides = [
  {
    id: 'safari',
    tag: 'FEATURED THIS SEASON',
    title: 'The Indigo\nSafari Blazer',
    desc: 'Rich indigo wool barathea, peak lapels, functional button cuffs and hand-sewn buttonholes. Our signature piece — reinvented every season.',
    price: null,
    cta: 'CUSTOMISE YOURS',
    ctaLink: '/customise',
    img: blazer_png,
    theme: 'dark', // dark bg
  },
  {
    id: 'wedding',
    tag: 'WEDDING COLLECTIONS',
    title: 'Dressed for\nYour Big Day',
    desc: 'Celebrate the most precious moments together. Our bespoke wedding suits for brothers, friends and groomsmen — crafted in rich golden yellow and classic black.',
    price: null,
    cta: 'EXPLORE WEDDING SUITS',
    ctaLink: '/category-suits',
    img: wedding_suits_png,
    theme: 'wedding', // yellow & black
  },
  {
    id: 'bulk',
    tag: 'BULK ORDERS WELCOME',
    title: 'Outfit Your\nEntire Team',
    desc: 'From corporate events to family ceremonies — we accept bulk orders with the same quality and precision as every individual bespoke garment.',
    price: null,
    cta: 'ENQUIRE NOW',
    ctaLink: '/contact',
    img: bulk_order_suits_png,
    theme: 'bulk', // grey & maroon
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [prevHeroIndex, setPrevHeroIndex] = useState(null);
  const [heroAnim, setHeroAnim] = useState('enter'); // 'enter' on first paint
  const [resetDots, setResetDots] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [featuredAnim, setFeaturedAnim] = useState('');

  // Helper: advance hero slide
  const advanceHero = (nextIndex) => {
    const from = heroIndex;
    setHeroAnim('exit');
    // Trigger dot progress-bar restart
    setResetDots(true);
    setTimeout(() => {
      setPrevHeroIndex(from);
      setHeroIndex(nextIndex);
      setHeroAnim('enter');
      setResetDots(false);
      setTimeout(() => setHeroAnim(''), 900);
    }, 420);
  };

  // Hero auto-rotate every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      advanceHero((heroIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroIndex]);

  // Featured auto-rotate every 10s
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedAnim('exit');
      setTimeout(() => {
        setFeaturedIndex((i) => (i + 1) % featuredSlides.length);
        setFeaturedAnim('enter');
        setTimeout(() => setFeaturedAnim(''), 700);
      }, 450);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[heroIndex];
  const currentFeatured = featuredSlides[featuredIndex];

  const goToFeatured = (idx) => {
    if (idx === featuredIndex) return;
    setFeaturedAnim('exit');
    setTimeout(() => {
      setFeaturedIndex(idx);
      setFeaturedAnim('enter');
      setTimeout(() => setFeaturedAnim(''), 700);
    }, 450);
  };

  const goToHero = (idx) => {
    if (idx === heroIndex) return;
    advanceHero(idx);
  };

  return (
  <main>

    {/* ── HERO ── */}
    <section className="hero" id="hero">
      {/* Sliding background images with Ken Burns effect */}
      <div className="hero-img-wrap">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt="Hero"
            className={[
              'hero-bg-img',
              i === heroIndex ? 'hero-bg-active' : '',
              i === prevHeroIndex ? 'hero-bg-leaving' : '',
            ].join(' ').trim()}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Quote content with per-element stagger animations */}
      <div className={`hero-slide-content ${
        heroAnim === 'exit' ? 'hero-slide-exit' :
        heroAnim === 'enter' ? 'hero-slide-enter' : ''
      }`}>
        <div className="hero-eyebrow">EST. MCMXLVII · HANDCRAFTED IN INDIA</div>
        <h1 className="hero-headline">
          <span className="hero-line1">{currentHero.line1}</span>
          <span className="hero-line2">{currentHero.line2}</span>
          <span className="hero-line3">{currentHero.line3}</span>
        </h1>
        <p className="hero-sub">{currentHero.sub}</p>
        <div className="hero-cta-group">
          <Link to="/customise" className="btn-primary" id="hero-cta-explore">BEGIN YOUR BESPOKE JOURNEY</Link>
          <a href="#categories" className="btn-ghost" id="hero-cta-collections">EXPLORE COLLECTIONS</a>
        </div>
      </div>

      {/* Progress-bar dots */}
      <div className="hero-dots" aria-label="Slide indicators">
        {heroSlides.map((_, i) => (
          <button
            key={`${i}-${resetDots ? 'r' : 'n'}`}
            className={`hero-dot ${i === heroIndex ? 'active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goToHero(i)}
          />
        ))}
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </section>

    {/* ── SIGNATURE STRIP ── */}
    <div className="signature-strip">
      <div className="strip-inner">
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>HAND-STITCHED</span>
        </div>
        <div className="strip-dot"></div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 12h6M9 15h4" />
          </svg>
          <span>MADE-TO-MEASURE</span>
        </div>
        <div className="strip-dot"></div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
          <span>PREMIUM FABRICS</span>
        </div>
        <div className="strip-dot"></div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>IN-STORE PICKUP</span>
        </div>
      </div>
    </div>

    {/* ── CATEGORIES ── */}
    <section className="categories" id="categories">
      <div className="section-header">
        <p className="section-tag">OUR COLLECTIONS</p>
        <h2 className="section-title">Dress with Purpose</h2>
        <div className="title-rule"></div>
      </div>
      <div className="cat-grid">

        <article className="cat-card cat-card--large" id="cat-suits">
          <Link to="/category-suits" className="cat-link">
            <div className="cat-img-wrap">
              <img src={suits_png} alt="Bespoke charcoal suit on mannequin" className="cat-img" loading="lazy" />
              <div className="cat-img-overlay"></div>
            </div>
            <div className="cat-info">
              <span className="cat-label">SUITS</span>
              <span className="cat-arrow">→</span>
            </div>
            <div className="cat-hover-content">
              <p>From classic charcoal to glen plaid — tailored precisely to your silhouette.</p>
              <span className="cat-cta">VIEW COLLECTION</span>
            </div>
          </Link>
        </article>

        <article className="cat-card" id="cat-shirts">
          <Link to="/category-shirts" className="cat-link">
            <div className="cat-img-wrap">
              <img src={shirts_png} alt="Premium fabric swatches for bespoke shirts" className="cat-img" loading="lazy" />
              <div className="cat-img-overlay"></div>
            </div>
            <div className="cat-info">
              <span className="cat-label">SHIRTS</span>
              <span className="cat-arrow">→</span>
            </div>
            <div className="cat-hover-content">
              <p>Egyptian cotton, Sea Island or fine linen — the finest fabrics for your shirt.</p>
              <span className="cat-cta">VIEW COLLECTION</span>
            </div>
          </Link>
        </article>

        <article className="cat-card" id="cat-coats">
          <Link to="/category-coats" className="cat-link">
            <div className="cat-img-wrap">
              <img src={coats_png} alt="Bespoke beige trench coat on hanger" className="cat-img" loading="lazy" />
              <div className="cat-img-overlay"></div>
            </div>
            <div className="cat-info">
              <span className="cat-label">COATS</span>
              <span className="cat-arrow">→</span>
            </div>
            <div className="cat-hover-content">
              <p>Outerwear to last a lifetime — from field coats to formal overcoats.</p>
              <span className="cat-cta">VIEW COLLECTION</span>
            </div>
          </Link>
        </article>

        <article className="cat-card cat-card--banner" id="cat-pants">
          <Link to="/category-pants" className="cat-link">
            <div className="cat-banner-content">
              <p className="cat-banner-tag">NEW SEASON</p>
              <h3 className="cat-banner-title">Pants &amp; Accessories</h3>
              <p className="cat-banner-sub">The finishing touches that define a gentleman.</p>
              <span className="cat-cta-light">DISCOVER MORE →</span>
            </div>
          </Link>
        </article>

      </div>
    </section>

    {/* ── CRAFT STORY ── */}
    <section className="craft-story" id="craft">
      <div className="craft-inner">
        <div className="craft-text">
          <p className="section-tag">OUR PHILOSOPHY</p>
          <h2 className="craft-title">The Art of<br /><em>Tip Top Tailoring</em></h2>
          <p className="craft-desc">Inspired by the storied tradition of colonial safari jackets — reimagined for the modern
            gentleman. Every garment begins as a conversation, evolves through craftsmanship, and concludes as a legacy
            piece.</p>
          <ul className="craft-list">
            <li><span className="craft-num">01</span><span>Select your fabric from over 400 premium cloths</span></li>
            <li><span className="craft-num">02</span><span>Choose your cut, fit and style details</span></li>
            <li><span className="craft-num">03</span><span>Measurements taken by our master tailors</span></li>
            <li><span className="craft-num">04</span><span>Collect your finished garment at our atelier — ready for you to
                wear</span></li>
          </ul>
          <Link to="/customise" className="btn-primary" id="craft-cta">START YOUR ORDER</Link>
        </div>
        <div className="craft-visual">
          <div className="craft-img-frame">
            <img src={fabric_png} alt="Close-up of premium dark navy suit fabric texture" className="craft-img"
              loading="lazy" />
            <div className="craft-img-accent"></div>
          </div>
          <div className="craft-stat-card">
            <div className="stat-number">400+</div>
            <div className="stat-label">Fabric Choices</div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FEATURED CAROUSEL ── */}
    <section className={`featured-banner featured-banner--${currentFeatured.theme}`} id="featured">
      <div className={`fb-inner ${featuredAnim === 'exit' ? 'fb-slide-exit' : featuredAnim === 'enter' ? 'fb-slide-enter' : ''}`}>
        <div className="fb-text">
          <p className="section-tag light-tag">{currentFeatured.tag}</p>
          <h2 className="fb-title">
            {currentFeatured.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i < currentFeatured.title.split('\n').length - 1 && <br />}</React.Fragment>
            ))}
          </h2>
          <p className="fb-desc">{currentFeatured.desc}</p>
          {currentFeatured.price && (
            <div className="fb-price">Starting from <strong>{currentFeatured.price}</strong></div>
          )}
          <Link to={currentFeatured.ctaLink} className="btn-light" id="fb-cta">{currentFeatured.cta}</Link>
        </div>
        <div className="fb-img-wrap">
          <img src={currentFeatured.img} alt={currentFeatured.tag} className="fb-img" loading="lazy" />
        </div>
      </div>

      {/* Slide navigation dots */}
      <div className="fb-dots" aria-label="Featured slide indicators">
        {featuredSlides.map((slide, i) => (
          <button
            key={i}
            className={`fb-dot ${i === featuredIndex ? 'active' : ''}`}
            aria-label={`Featured slide ${i + 1}`}
            onClick={() => goToFeatured(i)}
          />
        ))}
      </div>

      {/* Slide labels */}
      <div className="fb-slide-labels">
        {featuredSlides.map((slide, i) => (
          <button
            key={i}
            className={`fb-slide-label ${i === featuredIndex ? 'active' : ''}`}
            onClick={() => goToFeatured(i)}
          >
            {i === 0 ? 'Safari Blazer' : i === 1 ? 'Wedding' : 'Bulk Orders'}
          </button>
        ))}
      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <p className="section-tag">CLIENT VOICES</p>
        <h2 className="section-title">Words of distinction</h2>
        <div className="title-rule"></div>
      </div>
      <div className="testi-grid">
        <blockquote className="testi-card" id="testi-1">
          <div className="testi-stars">★★★★★</div>
          <p>"The suit I received was nothing short of extraordinary. The fabric choice, the fit, the finishing — it
            surpassed even my highest expectations."</p>
          <footer>
            <strong>Arjun Mehta</strong>
            <span>CEO, Bombay · Suit &amp; Safari Jacket</span>
          </footer>
        </blockquote>
        <blockquote className="testi-card" id="testi-2">
          <div className="testi-stars">★★★★★</div>
          <p>"I've worn Savile Row, I've worn Milan — but nothing compares to the personal approach of Tip Top Tailor. A
            truly bespoke experience."</p>
          <footer>
            <strong>Rahul Kapoor</strong>
            <span>Architect, Delhi · Three Piece Suit</span>
          </footer>
        </blockquote>
        <blockquote className="testi-card" id="testi-3">
          <div className="testi-stars">★★★★★</div>
          <p>"The attention to detail is remarkable. My monogram is perfectly placed and the hand-stitching on the
            lapels is simply impeccable."</p>
          <footer>
            <strong>Vikram Nair</strong>
            <span>Barrister, Bangalore · Blazer &amp; Pants</span>
          </footer>
        </blockquote>
      </div>
    </section>

    {/* ── BRAND STORY ── */}
    <section className="brand-story" id="brand">
      <div className="brand-img-container">
        <img src={logo_jpg} alt="Tip Top Tailor logo — bespoke menswear" className="brand-bg-img" loading="lazy"
          style={{objectFit: "contain", objectPosition: "center center", background: "#f8f0e6", }} />
        <div className="brand-overlay-dark" style={{background: "rgba(12,20,40,0.18)", }}></div>
        
        <div className="hang-tag-wrap">
          <div className="hang-tag">
            <div className="hang-tag-hole"></div>
            <div className="hang-tag-string"></div>
            <div className="hang-tag-inner">
              <div className="tag-logo">
                <img src={logo_jpg} alt="Tip Top Tailor" className="tag-svg"
                  style={{width: "64px", height: "80px", objectFit: "contain", objectPosition: "center center", display: "block", margin: "0 auto 12px", }} />
              </div>
              <div className="tag-brand">TIP TOP TAILOR</div>
              <div className="tag-divider"></div>
              <div className="tag-sub">BESPOKE MENSWEAR</div>
              <div className="tag-num">#TTT-2024-0247</div>
              <div className="tag-footer">HANDCRAFTED IN INDIA</div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-text-panel">
        <p className="section-tag">THE MARK OF DISTINCTION</p>
        <h2 className="brand-title">A Label Worth<br /><em>Wearing</em></h2>
        <p className="brand-desc">Every Tip Top Tailor garment carries our signature hang tag — a mark of provenance,
          craftsmanship, and individuality. Inside the jacket, a handwritten note from your tailor. Outside, an identity
          that is entirely yours.</p>
        <Link to="/customise" className="btn-primary" id="brand-cta">BEGIN YOUR COMMISSION</Link>
      </div>
    </section>

    <section className="store-statement" id="store-statement">
      <p>Tip Top Tailor Store is a premium men's clothing store in India.</p>
    </section>

  </main>
  );
}
