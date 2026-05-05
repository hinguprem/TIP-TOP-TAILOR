import React from 'react';
import { Link } from 'react-router-dom';
import coats_png from '../assets/images/coats.png';
import coat_camel_png from '../assets/images/coat_camel.png';
import coat_safari_png from '../assets/images/coat_safari.png';
import coat_peacoat_png from '../assets/images/coat_peacoat.png';
import blazer_png from '../assets/images/blazer.png';
import suits_png from '../assets/images/suits.png';

export default function CategoryCoats() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={coats_png} alt="Bespoke coats and outerwear" className="cat-page-hero-img"/>
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Coats &amp; Outerwear</h1>
        <p className="cat-page-sub">Timeless silhouettes built to withstand the seasons — and the years.</p>
      </div>
    </section>

    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <Link to="/products" id="bc-products">OUR PRODUCTS</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">COATS &amp; OUTERWEAR</span>
    </nav>

    <section className="cat-gallery-section" id="cat-gallery">
      <div className="cat-gallery-header">
        <div>
          <h2 className="cat-gallery-title">The Outerwear Collection</h2>
          <div className="cat-gallery-rule"></div>
        </div>
        <span className="cat-gallery-count">6 STYLES</span>
      </div>
      <div className="cat-gallery-grid" id="coats-gallery">
        <div className="gallery-item gallery-item--wide reveal-up" id="coat-1">
          <div className="gallery-item-img-wrap">
            <img src={coats_png} alt="The Classic Trench Coat" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">The Classic Trench Coat</div>
            <div className="gallery-item-fabric">Water-Resistant Cotton Gabardine</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="coat-2">
          <div className="gallery-item-img-wrap">
            <img src={coat_camel_png} alt="Camel Wool Overcoat" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Camel Wool Overcoat</div>
            <div className="gallery-item-fabric">Double-Faced Wool Cashmere</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="coat-3">
          <div className="gallery-item-img-wrap">
            <img src={coat_safari_png} alt="Safari Field Jacket" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">The Safari Field Jacket</div>
            <div className="gallery-item-fabric">Khaki Linen-Cotton Blend</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--tall reveal-up" id="coat-4">
          <div className="gallery-item-img-wrap">
            <img src={coat_peacoat_png} alt="Navy Peacoat" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Navy Double-Breasted Peacoat</div>
            <div className="gallery-item-fabric">Melton Wool, Horn Buttons</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="coat-5">
          <div className="gallery-item-img-wrap">
            <img src={blazer_png} alt="The Club Blazer" className="gallery-item-img" style={{objectPosition: "center 20%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">The Club Blazer</div>
            <div className="gallery-item-fabric">Flannel Wool, Gold Buttons</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="coat-6">
          <div className="gallery-item-img-wrap">
            <img src={suits_png} alt="Shawl Collar Overcoat" className="gallery-item-img" style={{objectPosition: "center 40%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Shawl Collar Overcoat</div>
            <div className="gallery-item-fabric">Herringbone Tweed</div>
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
