import React from 'react';
import { Link } from 'react-router-dom';
import fabric_png from '../assets/images/fabric.png';
import trouser_charcoal_png from '../assets/images/trouser_charcoal.png';
import trouser_navy_png from '../assets/images/trouser_navy.png';
import trouser_linen_png from '../assets/images/trouser_linen.png';
import suits_png from '../assets/images/suits.png';
import suit_black_png from '../assets/images/suit_black.png';

export default function CategoryPants() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={fabric_png} alt="Fine fabric for bespoke pants" className="cat-page-hero-img" style={{objectPosition: 'center center'}} />
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Pants</h1>
        <p className="cat-page-sub">Every detail considered - the foundation of a well-dressed man.</p>
      </div>
    </section>

    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <Link to="/products" id="bc-products">OUR PRODUCTS</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">PANTS</span>
    </nav>

    <section className="cat-gallery-section" id="cat-gallery">
      <div className="cat-gallery-header">
        <div>
          <h2 className="cat-gallery-title">The Pants Collection</h2>
          <div className="cat-gallery-rule"></div>
        </div>
        <span className="cat-gallery-count">6 STYLES</span>
      </div>
      <div className="cat-gallery-grid" id="pants-gallery">
        <div className="gallery-item reveal-up">
          <div className="gallery-item-img-wrap">
            <img src={trouser_charcoal_png} alt="Charcoal Flannel Pants" className="gallery-item-img" loading="lazy" />
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Charcoal Flannel Pants</div>
            <div className="gallery-item-fabric">13oz Flannel Wool, Double Pleat</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--tall reveal-up reveal-delay-1">
          <div className="gallery-item-img-wrap">
            <img src={trouser_navy_png} alt="Navy Slim Pants" className="gallery-item-img" loading="lazy" />
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Navy Slim Pants</div>
            <div className="gallery-item-fabric">Super 100s Wool, Flat Front</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2">
          <div className="gallery-item-img-wrap">
            <img src={trouser_linen_png} alt="Ivory Linen Pants" className="gallery-item-img" loading="lazy" />
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Ivory Linen Pants</div>
            <div className="gallery-item-fabric">Pure Linen, Relaxed Fit</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--wide reveal-up">
          <div className="gallery-item-img-wrap">
            <img src={fabric_png} alt="Herringbone pants fabric" className="gallery-item-img" loading="lazy" />
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Herringbone Tweed Pants</div>
            <div className="gallery-item-fabric">Harris Tweed, Wide Leg</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1">
          <div className="gallery-item-img-wrap">
            <img src={suits_png} alt="Khaki Tailored Chinos" className="gallery-item-img" loading="lazy" style={{objectPosition: 'center 60%'}} />
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Khaki Tailored Chinos</div>
            <div className="gallery-item-fabric">Brushed Cotton, Slim Cut</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2">
          <div className="gallery-item-img-wrap">
            <img src={suit_black_png} alt="Black Evening Pants" className="gallery-item-img" loading="lazy" style={{objectPosition: 'center 70%'}} />
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Black Evening Pants</div>
            <div className="gallery-item-fabric">Barathea Wool, Silk Braid</div>
          </div>
        </div>
      </div>
    </section>

    <div className="back-bar">
      <p className="back-bar-text">Explore more of our handcrafted collections.</p>
      <Link to="/products" className="btn-back" id="back-to-products">← BACK TO PRODUCTS</Link>
    </div>
  </main>
  );
}
