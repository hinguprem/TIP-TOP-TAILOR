import React from 'react';
import { Link } from 'react-router-dom';
import suits_png from '../assets/images/suits.png';
import shirts_png from '../assets/images/shirts.png';
import coats_png from '../assets/images/coats.png';
import fabric_png from '../assets/images/fabric.png';
import kurta_png from '../assets/images/kurta.png';
import blazer_png from '../assets/images/blazer.png';
import trouser_charcoal_png from '../assets/images/trouser_charcoal.png';
import hero_png from '../assets/images/hero.png';
import suit_navy_png from '../assets/images/suit_navy.png';

export default function Products() {
  return (
  <main className="page-fade-in">

    
    <section className="products-hero" id="products-hero">
      <p className="products-hero-tag">EST. MCMXLVII · HANDCRAFTED IN INDIA</p>
      <h1 className="products-hero-title">Our Collections</h1>
      <p className="products-hero-sub">Each garment a testament to the finest tailoring traditions — crafted for the modern gentleman.</p>
    </section>

    
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">OUR PRODUCTS</span>
    </nav>

    
    <section className="products-section" id="products-section">
      <div className="products-grid" id="products-grid">

        
        <Link to="/category-suits" className="prod-card reveal-up" id="prod-suits">
          <div className="prod-card-img-wrap">
            <img src={suits_png} alt="Bespoke suits collection" className="prod-card-img" loading="lazy"/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Classic charcoal to glen plaid — tailored precisely to your silhouette.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Suits</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        
        <Link to="/category-shirts" className="prod-card reveal-up reveal-delay-1" id="prod-shirts">
          <div className="prod-card-img-wrap">
            <img src={shirts_png} alt="Premium bespoke shirts collection" className="prod-card-img" loading="lazy"/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Egyptian cotton, Sea Island & fine linen — the finest fabrics for your shirt.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Shirts</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        
        <Link to="/category-coats" className="prod-card reveal-up reveal-delay-2" id="prod-coats">
          <div className="prod-card-img-wrap">
            <img src={coats_png} alt="Coats and outerwear collection" className="prod-card-img" loading="lazy"/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Outerwear built to last a lifetime — from field coats to formal overcoats.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Coats &amp; Outerwear</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        
        <Link to="/category-pants" className="prod-card reveal-up" id="prod-pants">
          <div className="prod-card-img-wrap">
            <img src={trouser_charcoal_png} alt="Tailored pants collection" className="prod-card-img" loading="lazy" style={{objectPosition: "center center", }}/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Precision-cut pants and chinos in the finest wool, linen and cotton blends.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Pants</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        
        <Link to="/category-kurtas" className="prod-card reveal-up reveal-delay-1" id="prod-kurtas">
          <div className="prod-card-img-wrap">
            <img src={kurta_png} alt="Traditional Indian kurtas collection" className="prod-card-img" loading="lazy"/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Heritage Indian silhouettes reimagined for the contemporary gentleman.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Kurtas</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        
        <Link to="/category-accessories" className="prod-card reveal-up reveal-delay-2" id="prod-accessories">
          <div className="prod-card-img-wrap">
            <img src={blazer_png} alt="Accessories collection" className="prod-card-img" loading="lazy" style={{objectPosition: "center 30%", }}/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>The finishing touches — ties, pocket squares, cufflinks and more.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Accessories</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        <Link to="/category-indo-western" className="prod-card reveal-up" id="prod-indo-western">
          <div className="prod-card-img-wrap">
            <img src={suit_navy_png} alt="Indo western collection" className="prod-card-img" loading="lazy" />
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>A fusion of Indian heritage cuts with modern tailoring and luxury fabrics.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Indo Western</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        <Link to="/category-safari" className="prod-card reveal-up reveal-delay-1" id="prod-safari">
          <div className="prod-card-img-wrap">
            <img src={hero_png} alt="Safari collection" className="prod-card-img" loading="lazy" />
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Our signature safari styles built for comfort, movement, and timeless elegance.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Safari</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        <Link to="/category-pathani" className="prod-card reveal-up reveal-delay-2" id="prod-pathani">
          <div className="prod-card-img-wrap">
            <img src={kurta_png} alt="Pathani collection" className="prod-card-img" loading="lazy" />
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Traditional Pathani silhouettes with refined fit, clean structure, and premium finish.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Pathani</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

        <Link to="/category-fabric-materials" className="prod-card reveal-up" id="prod-fabric-materials">
          <div className="prod-card-img-wrap">
            <img src={fabric_png} alt="Shirt suit and pant fabric materials" className="prod-card-img" loading="lazy" style={{objectPosition: "center center", }}/>
            <div className="prod-card-overlay"></div>
            <div className="prod-card-desc">
              <p>Shirt, suit and pant piece fabrics sourced for durability, comfort, and premium drape.</p>
              <span className="prod-card-cta">VIEW COLLECTION</span>
            </div>
          </div>
          <div className="prod-card-info">
            <span className="prod-card-name">Fabric Materials</span>
            <span className="prod-card-arrow">→</span>
          </div>
        </Link>

      </div>
    </section>

    
    <div className="signature-strip">
      <div className="strip-inner">
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span>HAND-STITCHED</span>
        </div>
        <div className="strip-dot"></div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
          <span>MADE-TO-MEASURE</span>
        </div>
        <div className="strip-dot"></div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
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

  </main>
  );
}
