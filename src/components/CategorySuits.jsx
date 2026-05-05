import React from 'react';
import { Link } from 'react-router-dom';
import suits_png from '../assets/images/suits.png';
import suit_navy_png from '../assets/images/suit_navy.png';
import suit_ivory_png from '../assets/images/suit_ivory.png';
import blazer_png from '../assets/images/blazer.png';
import suit_black_png from '../assets/images/suit_black.png';
import fabric_png from '../assets/images/fabric.png';

export default function CategorySuits() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={suits_png} alt="Bespoke suits" className="cat-page-hero-img"/>
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Suits</h1>
        <p className="cat-page-sub">Precision-crafted for the discerning gentleman — from the boardroom to the banquet.</p>
      </div>
    </section>

    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <Link to="/products" id="bc-products">OUR PRODUCTS</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">SUITS</span>
    </nav>

    <section className="cat-gallery-section" id="cat-gallery">
      <div className="cat-gallery-header">
        <div>
          <h2 className="cat-gallery-title">The Suits Collection</h2>
          <div className="cat-gallery-rule"></div>
        </div>
        <span className="cat-gallery-count">6 STYLES</span>
      </div>
      <div className="cat-gallery-grid" id="suits-gallery">
        <div className="gallery-item gallery-item--tall reveal-up" id="suit-1">
          <div className="gallery-item-img-wrap">
            <img src={suits_png} alt="Classic Charcoal Two-Piece Suit" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Classic Charcoal Two-Piece</div>
            <div className="gallery-item-fabric">Super 120s Worsted Wool</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="suit-2">
          <div className="gallery-item-img-wrap">
            <img src={suit_navy_png} alt="Navy Pinstripe Three-Piece" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Navy Pinstripe Three-Piece</div>
            <div className="gallery-item-fabric">Zegna Trofeo Wool</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="suit-3">
          <div className="gallery-item-img-wrap">
            <img src={suit_ivory_png} alt="Ivory Linen Summer Suit" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Ivory Linen Summer Suit</div>
            <div className="gallery-item-fabric">Pure Linen, Unlined</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--wide reveal-up" id="suit-4">
          <div className="gallery-item-img-wrap">
            <img src={blazer_png} alt="The Indigo Safari Blazer" className="gallery-item-img" style={{objectPosition: "center 20%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">The Indigo Safari Blazer</div>
            <div className="gallery-item-fabric">Wool Barathea, Peak Lapels</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="suit-5">
          <div className="gallery-item-img-wrap">
            <img src={suit_black_png} alt="Black Tie Evening Suit" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Black Tie Evening Suit</div>
            <div className="gallery-item-fabric">Wool Barathea, Silk Lapels</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="suit-6">
          <div className="gallery-item-img-wrap">
            <img src={fabric_png} alt="Glen Plaid — Fabric Detail" className="gallery-item-img" style={{objectPosition: "center center", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Glen Plaid Business Suit</div>
            <div className="gallery-item-fabric">Loro Piana Wool-Silk Blend</div>
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
