import React from 'react';
import { Link } from 'react-router-dom';
import kurta_png from '../assets/images/kurta.png';
import kurta_indigo_png from '../assets/images/kurta_indigo.png';
import kurta_royal_png from '../assets/images/kurta_royal.png';
import hero_png from '../assets/images/hero.png';
import fabric_png from '../assets/images/fabric.png';
import suit_ivory_png from '../assets/images/suit_ivory.png';

export default function CategoryKurtas() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={kurta_png} alt="Bespoke Indian kurtas" className="cat-page-hero-img" style={{objectPosition: "center top", }}/>
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Kurtas</h1>
        <p className="cat-page-sub">A celebration of Indian heritage — reimagined with the precision of bespoke tailoring.</p>
      </div>
    </section>

    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/" id="bc-home">HOME</Link>
      <span className="bc-sep">›</span>
      <Link to="/products" id="bc-products">OUR PRODUCTS</Link>
      <span className="bc-sep">›</span>
      <span className="bc-current">KURTAS</span>
    </nav>

    <section className="cat-gallery-section" id="cat-gallery">
      <div className="cat-gallery-header">
        <div>
          <h2 className="cat-gallery-title">The Kurtas Collection</h2>
          <div className="cat-gallery-rule"></div>
        </div>
        <span className="cat-gallery-count">6 STYLES</span>
      </div>
      <div className="cat-gallery-grid" id="kurtas-gallery">
        <div className="gallery-item gallery-item--tall reveal-up" id="kurta-1">
          <div className="gallery-item-img-wrap">
            <img src={kurta_png} alt="Ivory Embroidered Kurta" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Ivory Embroidered Kurta</div>
            <div className="gallery-item-fabric">Pure Cotton, Chikankari Embroidery</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="kurta-2">
          <div className="gallery-item-img-wrap">
            <img src={kurta_indigo_png} alt="Indigo Festive Kurta" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Indigo Festive Kurta</div>
            <div className="gallery-item-fabric">Silk-Cotton Blend, Mandarin Collar</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="kurta-3">
          <div className="gallery-item-img-wrap">
            <img src={kurta_royal_png} alt="Royal Sherwani Kurta" className="gallery-item-img" style={{objectPosition: "center top", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Royal Sherwani Kurta</div>
            <div className="gallery-item-fabric">Brocade Silk, Zari Embroidery</div>
          </div>
        </div>
        <div className="gallery-item gallery-item--wide reveal-up" id="kurta-4">
          <div className="gallery-item-img-wrap">
            <img src={hero_png} alt="Kurta lifestyle shot" className="gallery-item-img" style={{objectPosition: "center 30%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Classic Safari-Style Kurta</div>
            <div className="gallery-item-fabric">Handloom Linen, Relaxed Fit</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-1" id="kurta-5">
          <div className="gallery-item-img-wrap">
            <img src={fabric_png} alt="Kurta Fabric Detail" className="gallery-item-img" style={{objectPosition: "center center", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Pintuck Formal Kurta</div>
            <div className="gallery-item-fabric">Fine Georgette, Band Collar</div>
          </div>
        </div>
        <div className="gallery-item reveal-up reveal-delay-2" id="kurta-6">
          <div className="gallery-item-img-wrap">
            <img src={suit_ivory_png} alt="Casual Short Kurta" className="gallery-item-img" style={{objectPosition: "center 40%", }} loading="lazy"/>
            <div className="gallery-item-overlay"></div>
          </div>
          <div className="gallery-item-info">
            <div className="gallery-item-name">Casual Short Kurta</div>
            <div className="gallery-item-fabric">Khadi Cotton, Modern Fit</div>
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
