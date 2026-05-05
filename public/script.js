/* ═══════════════════════════════════════════════
   TIP TOP TAILOR — MAIN SCRIPT
═══════════════════════════════════════════════ */

/* ─── PRODUCT CATALOG (all searchable items) ─── */
const CATALOG = {
  categories: [
    { name: 'Suits',       slug: 'suits',       page: 'category-suits.html',       image: 'suits.png',   keywords: ['suit','suits','two piece','three piece','formal','business','tuxedo','blazer','charcoal','navy','ivory','linen','pinstripe','glen plaid','safari blazer'] },
    { name: 'Shirts',      slug: 'shirts',      page: 'category-shirts.html',      image: 'shirts.png',  keywords: ['shirt','shirts','dress shirt','formal shirt','business shirt','linen shirt','cotton','oxford','stripe','bengal','voile','sea island'] },
    { name: 'Coats',       slug: 'coats',       page: 'category-coats.html',       image: 'coats.png',   keywords: ['coat','coats','jacket','trench','overcoat','peacoat','safari jacket','khaki','outerwear','blazer'] },
    { name: 'Pants',       slug: 'pants',       page: 'category-pants.html',       image: 'trouser_charcoal.png', keywords: ['pant','pants','trouser','trousers','chinos','flannel','linen pants','slim','dress pants','herringbone','khaki','navy pants'] },
    { name: 'Kurtas',      slug: 'kurtas',      page: 'category-kurtas.html',      image: 'kurta.png',   keywords: ['kurta','kurtas','sherwani','indian','festive','embroidered','khadi','ethnic','silk','brocade','pintuck','casual kurta'] },
    { name: 'Accessories', slug: 'accessories', page: 'category-accessories.html', image: 'acc_ties.png', keywords: ['accessories','accessory','tie','ties','pocket square','cufflinks','belt','suspenders','bow tie','silk','leather'] },
    { name: 'Indo Western', slug: 'indo-western', page: 'category-indo-western.html', image: 'suit_navy.png', keywords: ['indo western','indo-western','bandhgala','jodhpuri','fusion wear','indian formal'] },
    { name: 'Safari',      slug: 'safari',      page: 'category-safari.html',      image: 'hero.png', keywords: ['safari','safari suit','safari jacket','field jacket','bush shirt'] },
    { name: 'Pathani',     slug: 'pathani',     page: 'category-pathani.html',     image: 'kurta_indigo.png', keywords: ['pathani','pathani suit','ethnic wear','kurta pyjama'] },
    { name: 'Fabric Materials', slug: 'fabric-materials', page: 'category-fabric-materials.html', image: 'fabric.png', keywords: ['fabric','materials','shirt piece','suit piece','pant piece','cloth'] },
  ],
  products: [
    // Suits
    { name: 'Classic Charcoal Two-Piece',   category: 'Suits',       page: 'category-suits.html',       image: 'suits.png',          fabric: 'Super 120s Worsted Wool',   keywords: ['charcoal suit','classic suit','two piece','grey suit','business suit'] },
    { name: 'Navy Pinstripe Three-Piece',   category: 'Suits',       page: 'category-suits.html',       image: 'suit_navy.png',      fabric: 'Zegna Trofeo Wool',         keywords: ['navy suit','pinstripe','three piece','formal'] },
    { name: 'Ivory Linen Summer Suit',      category: 'Suits',       page: 'category-suits.html',       image: 'suit_ivory.png',     fabric: 'Pure Linen, Unlined',        keywords: ['linen suit','ivory suit','summer suit','white suit'] },
    { name: 'The Indigo Safari Blazer',     category: 'Suits',       page: 'category-suits.html',       image: 'blazer.png',         fabric: 'Wool Barathea, Peak Lapels', keywords: ['safari blazer','indigo blazer','safari suit','blue blazer'] },
    { name: 'Black Tie Evening Suit',       category: 'Suits',       page: 'category-suits.html',       image: 'suit_black.png',     fabric: 'Wool Barathea, Silk Lapels', keywords: ['tuxedo','black suit','evening suit','formal','black tie'] },
    { name: 'Glen Plaid Business Suit',     category: 'Suits',       page: 'category-suits.html',       image: 'fabric.png',         fabric: 'Loro Piana Wool-Silk Blend', keywords: ['glen plaid','business suit','check suit','office'] },
    // Shirts
    { name: 'Sea Island Cotton Shirt',      category: 'Shirts',      page: 'category-shirts.html',      image: 'shirts.png',         fabric: 'Sea Island Cotton',          keywords: ['sea island','cotton shirt','white shirt','dress shirt'] },
    { name: 'Classic White Dress Shirt',    category: 'Shirts',      page: 'category-shirts.html',      image: 'shirt_white.png',    fabric: '2-Ply Egyptian Cotton',      keywords: ['white shirt','dress shirt','formal shirt','classic shirt','white dress shirt'] },
    { name: 'Bengal Stripe Business Shirt', category: 'Shirts',      page: 'category-shirts.html',      image: 'shirt_stripe.png',   fabric: '140s Cotton Poplin',          keywords: ['stripe shirt','bengal stripe','business shirt','striped','blue stripe'] },
    { name: 'Fine Linen Summer Shirt',      category: 'Shirts',      page: 'category-shirts.html',      image: 'shirt_linen.png',    fabric: 'Irish Linen, Casual Fit',    keywords: ['linen shirt','summer shirt','casual shirt','blue shirt'] },
    { name: 'Oxford Button-Down',           category: 'Shirts',      page: 'category-shirts.html',      image: 'fabric.png',         fabric: 'Royal Oxford Weave',         keywords: ['oxford shirt','button down','casual','oxford weave'] },
    { name: 'Formal Evening Shirt',         category: 'Shirts',      page: 'category-shirts.html',      image: 'suits.png',          fabric: 'Swiss Voile, Pleated Bib',   keywords: ['evening shirt','formal shirt','tuxedo shirt','voile','pleated'] },
    // Coats
    { name: 'The Classic Trench Coat',      category: 'Coats',       page: 'category-coats.html',       image: 'coats.png',          fabric: 'Water-Resistant Cotton Gabardine', keywords: ['trench coat','raincoat','beige coat','classic coat'] },
    { name: 'Camel Wool Overcoat',          category: 'Coats',       page: 'category-coats.html',       image: 'coat_camel.png',     fabric: 'Double-Faced Wool Cashmere', keywords: ['camel coat','overcoat','wool coat','winter coat','camel'] },
    { name: 'The Safari Field Jacket',      category: 'Coats',       page: 'category-coats.html',       image: 'coat_safari.png',    fabric: 'Khaki Linen-Cotton Blend',   keywords: ['safari jacket','field jacket','khaki jacket','summer jacket'] },
    { name: 'Navy Double-Breasted Peacoat', category: 'Coats',       page: 'category-coats.html',       image: 'coat_peacoat.png',   fabric: 'Melton Wool, Horn Buttons',  keywords: ['peacoat','navy coat','double breasted','naval coat'] },
    { name: 'The Club Blazer',              category: 'Coats',       page: 'category-coats.html',       image: 'blazer.png',         fabric: 'Flannel Wool, Gold Buttons', keywords: ['blazer','club blazer','sport coat','flannel blazer'] },
    { name: 'Shawl Collar Overcoat',        category: 'Coats',       page: 'category-coats.html',       image: 'suits.png',          fabric: 'Herringbone Tweed',          keywords: ['shawl collar','tweed coat','herringbone','overcoat'] },
    // Pants
    { name: 'Charcoal Flannel Pants',       category: 'Pants',       page: 'category-pants.html',       image: 'trouser_charcoal.png', fabric: '13oz Flannel Wool, Double Pleat', keywords: ['flannel pants','charcoal pants','grey pants','double pleat','formal pants','trousers'] },
    { name: 'Navy Slim Pants',              category: 'Pants',       page: 'category-pants.html',       image: 'trouser_navy.png',   fabric: 'Super 100s Wool, Flat Front', keywords: ['navy pants','slim pants','flat front','dress pants','trousers'] },
    { name: 'Ivory Linen Pants',            category: 'Pants',       page: 'category-pants.html',       image: 'trouser_linen.png',  fabric: 'Pure Linen, Relaxed Fit',    keywords: ['linen pants','ivory pants','summer pants','white pants','trousers'] },
    { name: 'Herringbone Tweed Pants',      category: 'Pants',       page: 'category-pants.html',       image: 'fabric.png',         fabric: 'Harris Tweed, Wide Leg',     keywords: ['herringbone','tweed pants','wide leg','check pants','trousers'] },
    { name: 'Khaki Tailored Chinos',        category: 'Pants',       page: 'category-pants.html',       image: 'suits.png',          fabric: 'Brushed Cotton, Slim Cut',   keywords: ['chinos','khaki pants','casual pants','cotton pants','trousers'] },
    { name: 'Black Evening Pants',          category: 'Pants',       page: 'category-pants.html',       image: 'suit_black.png',     fabric: 'Barathea Wool, Silk Braid',  keywords: ['black pants','evening pants','tuxedo pants','formal pants','trousers'] },
    // Indo Western
    { name: 'Midnight Bandhgala Set',       category: 'Indo Western', page: 'category-indo-western.html', image: 'suit_navy.png',     fabric: 'Wool Blend with Satin Facing', keywords: ['bandhgala','indo western','jodhpuri'] },
    { name: 'Ivory Jodhpuri Ensemble',      category: 'Indo Western', page: 'category-indo-western.html', image: 'suit_ivory.png',    fabric: 'Jacquard Silk Blend', keywords: ['jodhpuri','indo western','wedding'] },
    { name: 'Festive Fusion Blazer',        category: 'Indo Western', page: 'category-indo-western.html', image: 'blazer.png',        fabric: 'Textured Wool with Hand Finish', keywords: ['fusion blazer','indo western','festive blazer'] },
    // Safari
    { name: 'Classic Khaki Safari Suit',    category: 'Safari',      page: 'category-safari.html',      image: 'hero.png',          fabric: 'Linen Cotton Twill', keywords: ['safari suit','khaki safari'] },
    { name: 'Indigo Safari Jacket',         category: 'Safari',      page: 'category-safari.html',      image: 'blazer.png',        fabric: 'Wool Barathea', keywords: ['safari jacket','indigo safari'] },
    { name: 'Summer Field Safari Shirt',    category: 'Safari',      page: 'category-safari.html',      image: 'shirt_linen.png',   fabric: 'Lightweight Irish Linen', keywords: ['safari shirt','field shirt'] },
    // Pathani
    { name: 'Classic Black Pathani',        category: 'Pathani',     page: 'category-pathani.html',     image: 'suit_black.png',    fabric: 'Cotton Satin', keywords: ['pathani black','pathani suit'] },
    { name: 'Royal Blue Pathani',           category: 'Pathani',     page: 'category-pathani.html',     image: 'kurta_indigo.png',  fabric: 'Silk Cotton Blend', keywords: ['pathani blue','ethnic suit'] },
    { name: 'Ivory Pathani Set',            category: 'Pathani',     page: 'category-pathani.html',     image: 'kurta_royal.png',   fabric: 'Matte Finish Linen', keywords: ['pathani ivory','pathani wedding'] },
    // Fabric materials
    { name: 'Shirt Piece Fabric Selection', category: 'Fabric Materials', page: 'category-fabric-materials.html', image: 'shirt_white.png', fabric: 'Egyptian Cotton and Linen', keywords: ['shirt piece','shirt fabric'] },
    { name: 'Suit Piece Fabric Selection',  category: 'Fabric Materials', page: 'category-fabric-materials.html', image: 'suits.png',      fabric: 'Super 120s Wool and Blends', keywords: ['suit piece','suit fabric'] },
    { name: 'Pant Piece Fabric Selection',  category: 'Fabric Materials', page: 'category-fabric-materials.html', image: 'trouser_charcoal.png', fabric: 'Wool, Cotton and Stretch Blends', keywords: ['pant piece','pants fabric','trouser fabric'] },
    // Kurtas
    { name: 'Ivory Embroidered Kurta',      category: 'Kurtas',      page: 'category-kurtas.html',      image: 'kurta.png',          fabric: 'Pure Cotton, Chikankari',    keywords: ['ivory kurta','embroidered kurta','white kurta','chikankari','cotton kurta'] },
    { name: 'Indigo Festive Kurta',         category: 'Kurtas',      page: 'category-kurtas.html',      image: 'kurta_indigo.png',   fabric: 'Silk-Cotton, Mandarin Collar', keywords: ['indigo kurta','festive kurta','blue kurta','silk kurta','party kurta'] },
    { name: 'Royal Sherwani Kurta',         category: 'Kurtas',      page: 'category-kurtas.html',      image: 'kurta_royal.png',    fabric: 'Brocade Silk, Zari Embroidery', keywords: ['sherwani','royal kurta','wedding kurta','brocade','gold kurta','formal kurta'] },
    { name: 'Classic Safari-Style Kurta',   category: 'Kurtas',      page: 'category-kurtas.html',      image: 'hero.png',           fabric: 'Handloom Linen',             keywords: ['safari kurta','linen kurta','casual kurta','classic'] },
    { name: 'Pintuck Formal Kurta',         category: 'Kurtas',      page: 'category-kurtas.html',      image: 'fabric.png',         fabric: 'Fine Georgette, Band Collar', keywords: ['pintuck','formal kurta','georgette','band collar'] },
    { name: 'Casual Short Kurta',           category: 'Kurtas',      page: 'category-kurtas.html',      image: 'suit_ivory.png',     fabric: 'Khadi Cotton, Modern Fit',   keywords: ['short kurta','casual kurta','khadi','everyday kurta'] },
    // Accessories
    { name: 'Bespoke Silk Ties',            category: 'Accessories', page: 'category-accessories.html', image: 'acc_ties.png',       fabric: 'Seven-Fold Silk',            keywords: ['tie','ties','silk tie','necktie','bespoke tie'] },
    { name: 'Linen Pocket Squares',         category: 'Accessories', page: 'category-accessories.html', image: 'acc_squares.png',    fabric: 'Irish Linen',                keywords: ['pocket square','handkerchief','linen square'] },
    { name: 'Sterling Silver Cufflinks',    category: 'Accessories', page: 'category-accessories.html', image: 'fabric.png',         fabric: '925 Sterling Silver',        keywords: ['cufflinks','silver cufflinks','monogram','accessories'] },
    { name: 'Full-Grain Leather Belt',      category: 'Accessories', page: 'category-accessories.html', image: 'blazer.png',         fabric: 'Vegetable-Tanned Leather',   keywords: ['belt','leather belt','waist belt'] },
    { name: 'Bespoke Bow Ties',             category: 'Accessories', page: 'category-accessories.html', image: 'suit_black.png',     fabric: 'Silk Grosgrain, Self-Tie',   keywords: ['bow tie','bowtie','formal tie','silk bow'] },
    { name: 'Silk Braces / Suspenders',     category: 'Accessories', page: 'category-accessories.html', image: 'suit_navy.png',      fabric: 'Woven Silk, Leather Ends',   keywords: ['braces','suspenders','silk braces'] },
  ]
};
window.CATALOG = CATALOG;

/* Search helper — scores a query against an item */
function scoreMatch(query, item) {
  const q = query.toLowerCase().trim();
  const nameMatch = item.name.toLowerCase().includes(q);
  const keyMatch  = (item.keywords || []).some(k => k.includes(q) || q.includes(k));
  const catMatch  = item.category ? item.category.toLowerCase().includes(q) : false;
  const fabMatch  = item.fabric ? item.fabric.toLowerCase().includes(q) : false;
  if (nameMatch) return 3;
  if (keyMatch)  return 2;
  if (catMatch || fabMatch) return 1;
  return 0;
}

function runSearch(query) {
  const resultsEl = document.getElementById('search-results');
  if (!resultsEl) return;

  const q = query.trim();
  if (!q) {
    resultsEl.innerHTML = '<p class="search-hint">Type to search suits, shirts, kurtas, coats…</p>';
    return;
  }

  const matchedCats  = CATALOG.categories.filter(c => scoreMatch(q, c) > 0);
  const matchedProds = CATALOG.products
    .map(p => ({ ...p, _score: scoreMatch(q, p) }))
    .filter(p => p._score > 0)
    .sort((a, b) => b._score - a._score);

  if (!matchedCats.length && !matchedProds.length) {
    resultsEl.innerHTML = `
      <div class="search-no-results">
        <p>No results found for "${q}"</p>
        <span>Try: suits, shirts, kurtas, blazer, linen…</span>
      </div>`;
    return;
  }

  let html = '';

  if (matchedCats.length) {
    html += '<p class="search-section-title">Categories</p><div class="search-cat-chips">';
    matchedCats.forEach(c => {
      html += `
        <a href="${c.page}" class="search-cat-chip">
          <img src="${c.image}" alt="${c.name}" loading="lazy"/>
          ${c.name}
        </a>`;
    });
    html += '</div>';
  }

  if (matchedProds.length) {
    html += '<p class="search-section-title">Products</p><div class="search-prod-grid">';
    matchedProds.slice(0, 9).forEach(p => {
      html += `
        <a href="${p.page}" class="search-prod-card">
          <img src="${p.image}" alt="${p.name}" class="search-prod-card-img" loading="lazy"/>
          <div class="search-prod-card-info">
            <div class="search-prod-card-name">${p.name}</div>
            <div class="search-prod-card-cat">${p.category}</div>
          </div>
        </a>`;
    });
    html += '</div>';
  }

  resultsEl.innerHTML = html;
}

/* ─── MAIN DOM READY ─── */
window.initSafariScripts = function() {

  /* ─── STICKY HEADER SHADOW ─── */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });
  }

  /* ─── HAMBURGER / MOBILE NAV ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      mobileNav.setAttribute('aria-hidden', String(!open));
    });
    mobileNav.querySelectorAll('.mob-link').forEach(l => {
      l.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ─── SEARCH OVERLAY ─── */
  const searchBtn     = document.getElementById('btn-search');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose   = document.getElementById('search-close');
  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const reactSearchEnabled = searchResults?.dataset.reactSearch === 'true';

  function openSearch() {
    searchOverlay?.classList.add('open');
    searchOverlay?.setAttribute('aria-hidden', 'false');
    searchInput?.focus();
    document.body.style.overflow = 'hidden';
    if (searchResults && !searchInput?.value) {
      searchResults.innerHTML = '<p class="search-hint">Type to search suits, shirts, kurtas, coats…</p>';
    }
  }

  function closeSearch() {
    searchOverlay?.classList.remove('open');
    searchOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (!reactSearchEnabled) {
    searchBtn?.addEventListener('click', openSearch);
    searchClose?.addEventListener('click', closeSearch);
    searchOverlay?.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

    /* Live search on input */
    let searchTimer;
    searchInput?.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => runSearch(searchInput.value), 180);
    });

    /* Enter key → navigate to first result */
    searchInput?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const firstLink = searchResults?.querySelector('a');
        if (firstLink) { window.location.href = firstLink.href; }
      }
    });
  }

  /* ─── SCROLL REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ─── HERO PARALLAX ─── */
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      heroImg.style.transform = `scale(1) translateY(${window.scrollY * 0.28}px)`;
    }, { passive: true });
  }

};

