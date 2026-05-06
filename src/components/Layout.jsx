import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Gemini_Generated_Image_xxmrxxmrxxmrxxmr_removebg_preview_png from '../assets/images/Gemini_Generated_Image_xxmrxxmrxxmrxxmr-removebg-preview.png';
import a6390689_4509_47fc_83f8_5ab15103b572_removebg_preview_png from '../assets/images/a6390689-4509-47fc-83f8-5ab15103b572-removebg-preview.png';
import indian_flag_png from '../assets/images/indian_flag.png';
import suits_png from '../assets/images/suits.png';
import shirts_png from '../assets/images/shirts.png';
import coats_png from '../assets/images/coats.png';
import trouser_charcoal_png from '../assets/images/trouser_charcoal.png';
import kurta_png from '../assets/images/kurta.png';
import acc_ties_png from '../assets/images/acc_ties.png';
import suit_navy_png from '../assets/images/suit_navy.png';
import suit_ivory_png from '../assets/images/suit_ivory.png';
import blazer_png from '../assets/images/blazer.png';
import suit_black_png from '../assets/images/suit_black.png';
import fabric_png from '../assets/images/fabric.png';
import shirt_white_png from '../assets/images/shirt_white.png';
import shirt_stripe_png from '../assets/images/shirt_stripe.png';
import shirt_linen_png from '../assets/images/shirt_linen.png';
import coat_camel_png from '../assets/images/coat_camel.png';
import coat_safari_png from '../assets/images/coat_safari.png';
import coat_peacoat_png from '../assets/images/coat_peacoat.png';
import trouser_navy_png from '../assets/images/trouser_navy.png';
import trouser_linen_png from '../assets/images/trouser_linen.png';
import kurta_indigo_png from '../assets/images/kurta_indigo.png';
import kurta_royal_png from '../assets/images/kurta_royal.png';
import hero_png from '../assets/images/hero.png';
import acc_squares_png from '../assets/images/acc_squares.png';

const imageMap = {
  'suits.png': suits_png,
  'shirts.png': shirts_png,
  'coats.png': coats_png,
  'trouser_charcoal.png': trouser_charcoal_png,
  'kurta.png': kurta_png,
  'acc_ties.png': acc_ties_png,
  'suit_navy.png': suit_navy_png,
  'suit_ivory.png': suit_ivory_png,
  'blazer.png': blazer_png,
  'suit_black.png': suit_black_png,
  'fabric.png': fabric_png,
  'shirt_white.png': shirt_white_png,
  'shirt_stripe.png': shirt_stripe_png,
  'shirt_linen.png': shirt_linen_png,
  'coat_camel.png': coat_camel_png,
  'coat_safari.png': coat_safari_png,
  'coat_peacoat.png': coat_peacoat_png,
  'trouser_navy.png': trouser_navy_png,
  'trouser_linen.png': trouser_linen_png,
  'kurta_indigo.png': kurta_indigo_png,
  'kurta_royal.png': kurta_royal_png,
  'hero.png': hero_png,
  'acc_squares.png': acc_squares_png,
};

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const mapUrl = 'https://maps.app.goo.gl/xjjvSR4R5rw2fJHQ6';
  const whatsAppUrl = 'https://wa.me/919924124507';
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ categories: [], products: [] });

  const scoreMatch = (query, item) => {
    const q = query.toLowerCase().trim();
    const nameMatch = item.name?.toLowerCase().includes(q);
    const keyMatch = (item.keywords || []).some((k) => k.includes(q) || q.includes(k));
    const catMatch = item.category ? item.category.toLowerCase().includes(q) : false;
    const fabMatch = item.fabric ? item.fabric.toLowerCase().includes(q) : false;
    if (nameMatch) return 3;
    if (keyMatch) return 2;
    if (catMatch || fabMatch) return 1;
    return 0;
  };

  // Re-run vanilla scripts for page-specific elements (like scroll reveal, parallax)
  useEffect(() => {
    if (window.initSafariScripts) {
      setTimeout(() => window.initSafariScripts(), 50);
    }
    if (location.pathname === '/customise' && window.initCustomiseScripts) {
      setTimeout(() => window.initCustomiseScripts(), 50);
    }
    setMenuOpen(false); // close menu on navigate
    setSearchOpen(false); // close search on navigate
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeSearch = () => setSearchOpen(false);
  
  // Basic search logic port
  const handleSearch = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (!q) {
      setSearchResults({ categories: [], products: [] });
      return;
    }
    if (!window.CATALOG) return;

    const categories = window.CATALOG.categories
      .filter((c) => scoreMatch(q, c) > 0)
      .map((c) => ({
        name: c.name,
        url: `/${c.page.replace('.html', '')}`,
        img: c.image,
      }));

    const products = window.CATALOG.products
      .map((p) => ({ ...p, _score: scoreMatch(q, p) }))
      .filter((p) => p._score > 0)
      .sort((a, b) => b._score - a._score)
      .slice(0, 9)
      .map((p) => ({
        name: p.name,
        type: p.category,
        url: `/${p.page.replace('.html', '')}`,
        img: p.image,
      }));

    setSearchResults({ categories, products });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeSearch();
    const firstResult = searchResults.categories[0] || searchResults.products[0];
    if (e.key === 'Enter' && firstResult) {
      navigate(firstResult.url);
      closeSearch();
    }
  };

  return (
    <>
      <header className="site-header" id="site-header">
        <div className="top-flag-line" aria-label="Since 1979">
          <span className="flag-icon" aria-hidden="true">
            <img src={indian_flag_png} alt="Indian Flag" className="flag-circle-img" />
          </span>
          <span className="flag-text">Since 1979</span>
          <span className="flag-icon" aria-hidden="true">
            <img src={indian_flag_png} alt="Indian Flag" className="flag-circle-img" />
          </span>
        </div>
        <div className="header-inner">
          <Link to="/" className="logo-wrap" id="logo-link" aria-label="Tip Top Tailor Home">
            <div className="logo-img-container">
              <img src={Gemini_Generated_Image_xxmrxxmrxxmrxxmr_removebg_preview_png} alt="Tip Top Tailor" className="logo-img" />
            </div>
            <div className="logo-text">
              <span className="logo-the">TIP TOP</span>
              <span className="logo-name">TAILOR</span>
            </div>
          </Link>

          <nav className="main-nav" id="main-nav" aria-label="Primary navigation">
            <ul className="nav-list">
              <li><Link to="/products" className={`nav-link ${location.pathname==='/products'?'active':''}`}>OUR PRODUCTS</Link></li>
              <li><Link to="/contact" className={`nav-link ${location.pathname==='/contact'?'active':''}`}>CONTACT US</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" id="btn-search" aria-label="Search" onClick={() => { setSearchOpen(true); setTimeout(() => document.getElementById('search-input')?.focus(), 100); }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
            </button>
            <a
              className="icon-btn"
              aria-label="Open location in Google Maps"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} id="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} id="mobile-nav" aria-hidden={!menuOpen}>
          <ul>
            <li><Link to="/products" className="mob-link">OUR PRODUCTS</Link></li>
            <li><Link to="/contact" className="mob-link">CONTACT US</Link></li>
          </ul>
        </nav>
      </header>

      <div className={`search-overlay ${searchOpen ? 'open' : ''}`} id="search-overlay" aria-hidden={!searchOpen} onClick={(e) => e.target.id === 'search-overlay' && closeSearch()}>
        <div className="search-wrap">
          <div className="search-box">
            <svg className="search-icon-inline" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
            <input type="text" id="search-input" placeholder="Search suits, shirts, kurtas, coats..." autoComplete="off" spellCheck="false" value={searchQuery} onChange={handleSearch} onKeyDown={handleKeyDown} />
            <button className="search-close" id="search-close" aria-label="Close search" onClick={closeSearch}>&#x2715;</button>
          </div>
          <div className="search-results" id="search-results" data-react-search="true" aria-live="polite">
            {!searchQuery ? (
              <p className="search-hint">Type to search suits, shirts, kurtas, coats...</p>
            ) : searchResults.categories.length === 0 && searchResults.products.length === 0 ? (
              <div className="search-no-results">
                <p>No results found for "{searchQuery}"</p>
                <span>Try: suits, shirts, kurtas, blazer, linen...</span>
              </div>
            ) : (
              <>
                {searchResults.categories.length > 0 && (
                  <>
                    <p className="search-section-title">Categories</p>
                    <div className="search-cat-chips">
                      {searchResults.categories.map((res, i) => (
                        <Link to={res.url} className="search-cat-chip" key={`cat-${i}`} onClick={closeSearch}>
                          <img src={imageMap[res.img] || fabric_png} alt={res.name} loading="lazy" />
                          {res.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
                {searchResults.products.length > 0 && (
                  <>
                    <p className="search-section-title">Products</p>
                    <div className="search-prod-grid">
                      {searchResults.products.map((res, i) => (
                        <Link to={res.url} className="search-prod-card" key={`prod-${i}`} onClick={closeSearch}>
                          <img src={imageMap[res.img] || fabric_png} alt={res.name} className="search-prod-card-img" loading="lazy" />
                          <div className="search-prod-card-info">
                            <div className="search-prod-card-name">{res.name}</div>
                            <div className="search-prod-card-cat">{res.type}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <main className="page-fade-in">
        {children}
      </main>

      <footer className="site-footer" id="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={a6390689_4509_47fc_83f8_5ab15103b572_removebg_preview_png} alt="Tip Top Tailor" className="footer-logo-img" />
              <div className="footer-logo-text"><span className="fl-the">TIP TOP</span><span className="fl-name">TAILOR</span></div>
            </div>
            <p className="footer-tagline">Handcrafted bespoke menswear.<br />Est. MCMXLVII, India.</p>
            <div className="footer-socials" aria-label="Social links">
              <a className="social-link" href="https://www.instagram.com/tiptoptailors.main/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.8" />
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Correct WhatsApp icon with speech bubble and phone handset */}
              <a className="social-link" href={whatsAppUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M16.002 3.2C9.046 3.2 3.4 8.737 3.4 15.563c0 2.437.713 4.81 2.065 6.849L3.2 28.8l6.617-2.027a13.04 13.04 0 006.185 1.565h.006c6.955 0 12.6-5.537 12.6-12.364S22.957 3.2 16.002 3.2zm0 22.675h-.005c-1.926 0-3.814-.519-5.45-1.497l-.39-.232-4.054 1.303 1.337-3.794-.254-.41a10.48 10.48 0 01-1.582-5.582c0-5.705 4.75-10.344 10.403-10.344 2.775 0 5.381 1.07 7.34 3.013a10.19 10.19 0 013.033 7.324c0 5.706-4.75 10.22-10.378 10.22zm5.7-7.745c-.313-.156-1.85-.907-2.138-1.01-.287-.102-.497-.155-.706.157-.209.312-.808 1.01-1.003 1.22-.186.207-.372.233-.685.078-.313-.156-1.32-.483-2.513-1.538-.93-.826-1.555-1.847-1.738-2.159-.182-.313-.019-.479.137-.633.14-.14.313-.365.469-.548.156-.183.208-.313.313-.521.104-.208.052-.39-.026-.548-.078-.157-.706-1.69-.966-2.315-.254-.607-.515-.525-.706-.535l-.6-.01c-.209 0-.548.078-.835.391-.287.313-1.098 1.062-1.098 2.592 0 1.53 1.124 3.007 1.28 3.216.156.208 2.21 3.336 5.358 4.677.749.32 1.333.512 1.789.655.752.237 1.436.204 1.977.124.603-.089 1.85-.75 2.112-1.472.261-.722.261-1.342.183-1.472-.078-.13-.287-.208-.6-.364z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links-group">
            <h3 className="footer-col-title">Collections</h3>
            <ul>
              <li><Link to="/category-suits" id="fl-suits">Suits</Link></li>
              <li><Link to="/category-shirts" id="fl-shirts">Shirts</Link></li>
              <li><Link to="/category-coats" id="fl-coats">Coats &amp; Outerwear</Link></li>
              <li><Link to="/category-pants" id="fl-pants">Pants</Link></li>
              <li><Link to="/category-kurtas" id="fl-kurtas">Kurtas</Link></li>
              <li><Link to="/category-accessories" id="fl-accessories">Accessories</Link></li>
              <li><Link to="/category-indo-western" id="fl-indo-western">Indo Western</Link></li>
              <li><Link to="/category-safari" id="fl-safari">Safari</Link></li>
              <li><Link to="/category-pathani" id="fl-pathani">Pathani</Link></li>
              <li><Link to="/category-fabric-materials" id="fl-fabric-materials">Fabric Materials</Link></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h3 className="footer-col-title">Services</h3>
            <ul>
              <li><Link to="/customise" id="fl-bespoke">Bespoke Tailoring</Link></li>
              <li><Link to="#" id="fl-mtm">Made-to-Measure</Link></li>
              <li><Link to="#" id="fl-consult">Consultation</Link></li>
              <li><Link to="#" id="fl-alterations">Alterations</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Tip Top Tailor. All rights reserved.</p>
          <a
            href="https://www.linkedin.com/in/prem-hingu/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-creator"
            aria-label="LinkedIn profile of Prem Hingu"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Created by Prem Hingu
          </a>
        </div>
      </footer>

      <a
        href={whatsAppUrl}
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Proper WhatsApp icon */}
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M16.002 3.2C9.046 3.2 3.4 8.737 3.4 15.563c0 2.437.713 4.81 2.065 6.849L3.2 28.8l6.617-2.027a13.04 13.04 0 006.185 1.565h.006c6.955 0 12.6-5.537 12.6-12.364S22.957 3.2 16.002 3.2zm0 22.675h-.005c-1.926 0-3.814-.519-5.45-1.497l-.39-.232-4.054 1.303 1.337-3.794-.254-.41a10.48 10.48 0 01-1.582-5.582c0-5.705 4.75-10.344 10.403-10.344 2.775 0 5.381 1.07 7.34 3.013a10.19 10.19 0 013.033 7.324c0 5.706-4.75 10.22-10.378 10.22zm5.7-7.745c-.313-.156-1.85-.907-2.138-1.01-.287-.102-.497-.155-.706.157-.209.312-.808 1.01-1.003 1.22-.186.207-.372.233-.685.078-.313-.156-1.32-.483-2.513-1.538-.93-.826-1.555-1.847-1.738-2.159-.182-.313-.019-.479.137-.633.14-.14.313-.365.469-.548.156-.183.208-.313.313-.521.104-.208.052-.39-.026-.548-.078-.157-.706-1.69-.966-2.315-.254-.607-.515-.525-.706-.535l-.6-.01c-.209 0-.548.078-.835.391-.287.313-1.098 1.062-1.098 2.592 0 1.53 1.124 3.007 1.28 3.216.156.208 2.21 3.336 5.358 4.677.749.32 1.333.512 1.789.655.752.237 1.436.204 1.977.124.603-.089 1.85-.75 2.112-1.472.261-.722.261-1.342.183-1.472-.078-.13-.287-.208-.6-.364z"/>
        </svg>
      </a>
    </>
  );
}
