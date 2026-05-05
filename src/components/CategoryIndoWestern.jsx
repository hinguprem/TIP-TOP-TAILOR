import React from 'react';
import { Link } from 'react-router-dom';
import suit_navy_png from '../assets/images/suit_navy.png';
import suit_ivory_png from '../assets/images/suit_ivory.png';
import blazer_png from '../assets/images/blazer.png';
import suits_png from '../assets/images/suits.png';
import fabric_png from '../assets/images/fabric.png';
import kurta_royal_png from '../assets/images/kurta_royal.png';

export default function CategoryIndoWestern() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero" id="cat-hero">
      <img src={suit_navy_png} alt="Indo western tailoring collection" className="cat-page-hero-img" />
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Indo Western</h1>
        <p className="cat-page-sub">Indian heritage silhouettes refined with contemporary bespoke tailoring.</p>
      </div>
    </section>
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">HOME</Link><span className="bc-sep">›</span><Link to="/products">OUR PRODUCTS</Link><span className="bc-sep">›</span><span className="bc-current">INDO WESTERN</span>
    </nav>
    <section className="cat-gallery-section">
      <div className="cat-gallery-header"><div><h2 className="cat-gallery-title">The Indo Western Collection</h2><div className="cat-gallery-rule"></div></div><span className="cat-gallery-count">6 STYLES</span></div>
      <div className="cat-gallery-grid">
        <div className="gallery-item reveal-up"><div className="gallery-item-img-wrap"><img src={suit_navy_png} alt="Midnight Bandhgala Set" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Midnight Bandhgala Set</div><div className="gallery-item-fabric">Wool Blend with Satin Facing</div></div></div>
        <div className="gallery-item gallery-item--tall reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={suit_ivory_png} alt="Ivory Jodhpuri Ensemble" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Ivory Jodhpuri Ensemble</div><div className="gallery-item-fabric">Jacquard Silk Blend</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={blazer_png} alt="Festive Fusion Blazer" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Festive Fusion Blazer</div><div className="gallery-item-fabric">Textured Wool with Hand Finish</div></div></div>
        <div className="gallery-item gallery-item--wide reveal-up"><div className="gallery-item-img-wrap"><img src={suits_png} alt="Regal Ceremonial Set" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Regal Ceremonial Set</div><div className="gallery-item-fabric">Fine Wool with Structured Shoulder</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={kurta_royal_png} alt="Royal Contrast Kurta Set" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Royal Contrast Kurta Set</div><div className="gallery-item-fabric">Brocade Silk Blend</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={fabric_png} alt="Textured Indo western fabric" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Textured Signature Weave</div><div className="gallery-item-fabric">Premium Festive Fabric Selection</div></div></div>
      </div>
    </section>
    <div className="back-bar"><p className="back-bar-text">Explore more of our handcrafted collections.</p><Link to="/products" className="btn-back">← BACK TO PRODUCTS</Link></div>
  </main>
  );
}
