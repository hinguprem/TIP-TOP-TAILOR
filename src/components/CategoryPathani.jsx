import React from 'react';
import { Link } from 'react-router-dom';
import kurta_indigo_png from '../assets/images/kurta_indigo.png';
import kurta_royal_png from '../assets/images/kurta_royal.png';
import suit_black_png from '../assets/images/suit_black.png';
import kurta_png from '../assets/images/kurta.png';
import fabric_png from '../assets/images/fabric.png';
import suit_ivory_png from '../assets/images/suit_ivory.png';

export default function CategoryPathani() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero">
      <img src={kurta_indigo_png} alt="Pathani collection" className="cat-page-hero-img" />
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Pathani</h1>
        <p className="cat-page-sub">Traditional Pathani tailoring with clean cuts and contemporary fit.</p>
      </div>
    </section>
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">HOME</Link><span className="bc-sep">›</span><Link to="/products">OUR PRODUCTS</Link><span className="bc-sep">›</span><span className="bc-current">PATHANI</span>
    </nav>
    <section className="cat-gallery-section">
      <div className="cat-gallery-header"><div><h2 className="cat-gallery-title">The Pathani Collection</h2><div className="cat-gallery-rule"></div></div><span className="cat-gallery-count">6 STYLES</span></div>
      <div className="cat-gallery-grid">
        <div className="gallery-item reveal-up"><div className="gallery-item-img-wrap"><img src={suit_black_png} alt="Classic Black Pathani" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Classic Black Pathani</div><div className="gallery-item-fabric">Cotton Satin</div></div></div>
        <div className="gallery-item gallery-item--tall reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={kurta_indigo_png} alt="Royal Blue Pathani" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Royal Blue Pathani</div><div className="gallery-item-fabric">Silk Cotton Blend</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={kurta_royal_png} alt="Ivory Pathani Set" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Ivory Pathani Set</div><div className="gallery-item-fabric">Matte Finish Linen</div></div></div>
        <div className="gallery-item gallery-item--wide reveal-up"><div className="gallery-item-img-wrap"><img src={kurta_png} alt="Heritage Pathani Kurta" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Heritage Pathani Kurta</div><div className="gallery-item-fabric">Handloom Cotton</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={suit_ivory_png} alt="Celebration Pathani Set" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Celebration Pathani Set</div><div className="gallery-item-fabric">Premium Festive Blend</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={fabric_png} alt="Pathani fabric materials" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Pathani Fabric Materials</div><div className="gallery-item-fabric">Breathable Structured Weaves</div></div></div>
      </div>
    </section>
    <div className="back-bar"><p className="back-bar-text">Explore more of our handcrafted collections.</p><Link to="/products" className="btn-back">← BACK TO PRODUCTS</Link></div>
  </main>
  );
}
