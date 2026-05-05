import React from 'react';
import { Link } from 'react-router-dom';
import hero_png from '../assets/images/hero.png';
import coat_safari_png from '../assets/images/coat_safari.png';
import blazer_png from '../assets/images/blazer.png';
import coat_camel_png from '../assets/images/coat_camel.png';
import shirt_linen_png from '../assets/images/shirt_linen.png';
import fabric_png from '../assets/images/fabric.png';

export default function CategorySafari() {
  return (
  <main className="page-fade-in">
    <section className="cat-page-hero">
      <img src={hero_png} alt="Safari tailoring collection" className="cat-page-hero-img" />
      <div className="cat-page-hero-overlay"></div>
      <div className="cat-page-hero-content">
        <span className="cat-page-tag">OUR COLLECTIONS</span>
        <h1 className="cat-page-title">Safari</h1>
        <p className="cat-page-sub">A signature blend of utility, elegance, and breathable comfort.</p>
      </div>
    </section>
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">HOME</Link><span className="bc-sep">›</span><Link to="/products">OUR PRODUCTS</Link><span className="bc-sep">›</span><span className="bc-current">SAFARI</span>
    </nav>
    <section className="cat-gallery-section">
      <div className="cat-gallery-header"><div><h2 className="cat-gallery-title">The Safari Collection</h2><div className="cat-gallery-rule"></div></div><span className="cat-gallery-count">6 STYLES</span></div>
      <div className="cat-gallery-grid">
        <div className="gallery-item reveal-up"><div className="gallery-item-img-wrap"><img src={hero_png} alt="Classic Khaki Safari Suit" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Classic Khaki Safari Suit</div><div className="gallery-item-fabric">Linen Cotton Twill</div></div></div>
        <div className="gallery-item gallery-item--tall reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={coat_safari_png} alt="The Safari Field Jacket" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">The Safari Field Jacket</div><div className="gallery-item-fabric">Khaki Linen-Cotton Blend</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={blazer_png} alt="Indigo Safari Jacket" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Indigo Safari Jacket</div><div className="gallery-item-fabric">Wool Barathea</div></div></div>
        <div className="gallery-item gallery-item--wide reveal-up"><div className="gallery-item-img-wrap"><img src={coat_camel_png} alt="Desert Safari Overcoat" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Desert Safari Overcoat</div><div className="gallery-item-fabric">Wool Cashmere Blend</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-1"><div className="gallery-item-img-wrap"><img src={shirt_linen_png} alt="Summer Safari Shirt" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Summer Safari Shirt</div><div className="gallery-item-fabric">Lightweight Irish Linen</div></div></div>
        <div className="gallery-item reveal-up reveal-delay-2"><div className="gallery-item-img-wrap"><img src={fabric_png} alt="Safari fabric swatches" className="gallery-item-img" /><div className="gallery-item-overlay"></div></div><div className="gallery-item-info"><div className="gallery-item-name">Safari Fabric Edit</div><div className="gallery-item-fabric">Breathable Cotton and Linen Weaves</div></div></div>
      </div>
    </section>
    <div className="back-bar"><p className="back-bar-text">Explore more of our handcrafted collections.</p><Link to="/products" className="btn-back">← BACK TO PRODUCTS</Link></div>
  </main>
  );
}
