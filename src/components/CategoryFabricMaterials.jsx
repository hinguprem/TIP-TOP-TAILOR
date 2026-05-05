import React from 'react';
import { Link } from 'react-router-dom';
import fabric_png from '../assets/images/fabric.png';
import shirt_white_png from '../assets/images/shirt_white.png';
import shirts_png from '../assets/images/shirts.png';
import suits_png from '../assets/images/suits.png';
import trouser_charcoal_png from '../assets/images/trouser_charcoal.png';
import suit_navy_png from '../assets/images/suit_navy.png';

export default function CategoryFabricMaterials() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero">
      <img src={fabric_png} alt="Fabric materials collection" className="cat-page-hero-img" style={{objectPosition: 'center center'}} />
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Fabric Materials</h1>
        <p className="cat-page-sub">Shirt, suit and pant piece fabrics selected for drape, comfort, and longevity.</p>
      </div>
    </section>
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">HOME</Link><span className="bc-sep">›</span><Link to="/products">OUR PRODUCTS</Link><span className="bc-sep">›</span><span className="bc-current">FABRIC MATERIALS</span>
    </nav>
    <section className="cat-gallery-section">
      <div className="cat-gallery-header"><div><h2 className="cat-gallery-title">Fabric Materials Collection</h2><div className="cat-gallery-rule"></div></div><span className="cat-gallery-count">6 STYLES</span></div>
      <div className="cat-gallery-grid">
        <div className="gallery-item reveal-up"><div className="gallery-item-img-wrap"><img src={shirt_white_png} alt="Shirt piece fabric selection" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Shirt Piece Fabric Selection</div><div className="gallery-item-fabric">Egyptian Cotton and Linen</div></div></div>
        <div className="gallery-item gallery-item--tall reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={suits_png} alt="Suit piece fabric selection" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Suit Piece Fabric Selection</div><div className="gallery-item-fabric">Super 120s Wool and Blends</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={trouser_charcoal_png} alt="Pant piece fabric selection" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Pant Piece Fabric Selection</div><div className="gallery-item-fabric">Wool, Cotton and Stretch Blends</div></div></div>
        <div className="gallery-item gallery-item--wide reveal-up"><div className="gallery-item-img-wrap"><img src={fabric_png} alt="Premium suiting swatches" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Premium Suiting Swatches</div><div className="gallery-item-fabric">Italian Wool, Tropical Wool, and Blends</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={shirts_png} alt="Shirting material bundles" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Shirting Material Bundles</div><div className="gallery-item-fabric">Poplin, Oxford, and Fine Linen</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={suit_navy_png} alt="Occasion fabric edit" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Occasion Fabric Edit</div><div className="gallery-item-fabric">Ceremonial and Evening Cloths</div></div></div>
      </div>
    </section>
    <div className="back-bar"><p className="back-bar-text">Explore more of our handcrafted collections.</p><Link to="/products" className="btn-back">← BACK TO PRODUCTS</Link></div>
  </main>
  );
}
