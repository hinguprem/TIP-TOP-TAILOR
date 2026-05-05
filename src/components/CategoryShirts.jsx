import React from 'react';
import { Link } from 'react-router-dom';
import shirts_png from '../assets/images/shirts.png';
import shirt_white_png from '../assets/images/shirt_white.png';
import shirt_stripe_png from '../assets/images/shirt_stripe.png';
import shirt_linen_png from '../assets/images/shirt_linen.png';
import fabric_png from '../assets/images/fabric.png';
import suits_png from '../assets/images/suits.png';

export default function CategoryShirts() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={shirts_png} alt="Bespoke shirts" className="cat-page-hero-img"/>
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Shirts</h1>
        <p className="cat-page-sub">The finest fabrics, cut to perfection — where craftsmanship meets everyday elegance.</p>
      </div>
    </section>

    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <Link to="/products" id="bc-products">OUR PRODUCTS</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">SHIRTS</span>
    </nav>

    <section className="cat-gallery-section" id="cat-gallery">
      <div className="cat-gallery-header">
        <div>
          <h2 className="cat-gallery-title">The Shirts Collection</h2>
          <div className="cat-gallery-rule"></div>
        </div>
        <span className="cat-gallery-count">6 STYLES</span>
      </div>
      <div className="cat-gallery-grid" id="shirts-gallery">
        <div className="gallery-item reveal-up" id="shirt-1">
          <div className="gallery-item-img-wrap">
            <img src={shirts_png} alt="Sea Island Cotton Shirt" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Sea Island Cotton Shirt</div>
            <div className="gallery-item-fabric">Sea Island Cotton, Spread Collar</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--tall reveal-up reveal-delay-1" id="shirt-2">
          <div className="gallery-item-img-wrap">
            <img src={shirt_white_png} alt="Classic White Dress Shirt" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Classic White Dress Shirt</div>
            <div className="gallery-item-fabric">2-Ply Egyptian Cotton</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="shirt-3">
          <div className="gallery-item-img-wrap">
            <img src={shirt_stripe_png} alt="Bengal Stripe Business Shirt" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Bengal Stripe Business Shirt</div>
            <div className="gallery-item-fabric">140s Cotton Poplin</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--wide reveal-up" id="shirt-4">
          <div className="gallery-item-img-wrap">
            <img src={shirt_linen_png} alt="Fine Linen Summer Shirt" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Fine Linen Summer Shirt</div>
            <div className="gallery-item-fabric">Irish Linen, Casual Fit</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="shirt-5">
          <div className="gallery-item-img-wrap">
            <img src={fabric_png} alt="Oxford Button-Down Shirt" className="gallery-item-img" style={{objectPosition: "center center", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Oxford Button-Down</div>
            <div className="gallery-item-fabric">Royal Oxford Weave</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="shirt-6">
          <div className="gallery-item-img-wrap">
            <img src={suits_png} alt="Formal Evening Shirt" className="gallery-item-img" style={{objectPosition: "center 40%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Formal Evening Shirt</div>
            <div className="gallery-item-fabric">Swiss Voile, Pleated Bib</div>
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
