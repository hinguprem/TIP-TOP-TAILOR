import React from 'react';
import { Link } from 'react-router-dom';
import blazer_png from '../assets/images/blazer.png';
import acc_ties_png from '../assets/images/acc_ties.png';
import acc_squares_png from '../assets/images/acc_squares.png';
import fabric_png from '../assets/images/fabric.png';
import suit_black_png from '../assets/images/suit_black.png';
import suit_navy_png from '../assets/images/suit_navy.png';

export default function CategoryAccessories() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={blazer_png} alt="Accessories and finishing touches" className="cat-page-hero-img" style={{objectPosition: "center 30%", }}/>
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Accessories</h1>
        <p className="cat-page-sub">The details that distinguish — curated to complete the well-dressed gentleman.</p>
      </div>
    </section>

    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <Link to="/products" id="bc-products">OUR PRODUCTS</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">ACCESSORIES</span>
    </nav>

    <section className="cat-gallery-section" id="cat-gallery">
      <div className="cat-gallery-header">
        <div>
          <h2 className="cat-gallery-title">The Accessories Collection</h2>
          <div className="cat-gallery-rule"></div>
        </div>
        <span className="cat-gallery-count">6 STYLES</span>
      </div>
      <div className="cat-gallery-grid" id="accessories-gallery">
        <div className="gallery-item gallery-item--wide reveal-up" id="acc-1">
          <div className="gallery-item-img-wrap">
            <img src={acc_ties_png} alt="Silk Ties Collection" className="gallery-item-img" style={{objectPosition: "center center", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Bespoke Silk Ties</div>
            <div className="gallery-item-fabric">Seven-Fold Silk, Hand-Rolled Edges</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="acc-2">
          <div className="gallery-item-img-wrap">
            <img src={acc_squares_png} alt="Pocket Squares" className="gallery-item-img" style={{objectPosition: "center center", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Linen Pocket Squares</div>
            <div className="gallery-item-fabric">Irish Linen, Hand-Stitched Border</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="acc-3">
          <div className="gallery-item-img-wrap">
            <img src={fabric_png} alt="Fine Fabric Detail" className="gallery-item-img" style={{objectPosition: "center center", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Sterling Silver Cufflinks</div>
            <div className="gallery-item-fabric">925 Sterling Silver, Monogrammed</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--tall reveal-up" id="acc-4">
          <div className="gallery-item-img-wrap">
            <img src={blazer_png} alt="Blazer and Accessories" className="gallery-item-img" style={{objectPosition: "center 30%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Full-Grain Leather Belt</div>
            <div className="gallery-item-fabric">Vegetable-Tanned Leather, Brass Buckle</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="acc-5">
          <div className="gallery-item-img-wrap">
            <img src={suit_black_png} alt="Formal Suit with Accessories" className="gallery-item-img" style={{objectPosition: "center 20%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Bespoke Bow Ties</div>
            <div className="gallery-item-fabric">Silk Grosgrain, Self-Tie</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="acc-6">
          <div className="gallery-item-img-wrap">
            <img src={suit_navy_png} alt="Navy Suit with Accessories" className="gallery-item-img" style={{objectPosition: "center 30%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Silk Braces / Suspenders</div>
            <div className="gallery-item-fabric">Woven Silk, Leather Ends</div>
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
