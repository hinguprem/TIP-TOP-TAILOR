/* ═══════════════════════════════════════════════
   THE SAFARI TAILOR — CUSTOMISE PAGE SCRIPT
═══════════════════════════════════════════════ */

/* ─── STATE ─── */
const state = {
  step: 1,
  fabric: { id: '1', name: 'Midnight Indigo', type: 'wool', color: '#1a2744', price: 28500 },
  fit: 'slim',
  lining: 'indigo',
  collar: 'peak',
  cuff: '1button',
  button: 'horn',
  pocket: 'flap',
  monogram: '',
  monoPosition: 'cuff',
  size: '40',
};

/* ─── STEP NAVIGATION ─── */
window.goToStep = function (n) {
  // update summary before showing step 5
  if (n === 5) updateOrderSummary();

  // hide current, show target
  document.querySelectorAll('.step-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`step-${n}`);
  if (target) { target.classList.add('active'); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  state.step = n;

  // progress bar
  document.querySelectorAll('.step-item').forEach((item, idx) => {
    const stepNum = idx + 1;
    item.classList.remove('active', 'done');
    if (stepNum < n) item.classList.add('done');
    else if (stepNum === n) item.classList.add('active');
  });
};

document.querySelectorAll('.step-item').forEach((item) => {
  item.addEventListener('click', () => {
    const stepNum = parseInt(item.dataset.step, 10);
    if (stepNum <= state.step) window.goToStep(stepNum);
  });
});

/* ─── FABRIC SELECTION ─── */
const swatchGrid = document.getElementById('fabric-swatch-grid');
if (swatchGrid) {
  swatchGrid.querySelectorAll('.swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      swatchGrid.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      state.fabric = {
        id: btn.dataset.fabric,
        name: btn.dataset.name,
        type: btn.dataset.type,
        color: getComputedStyle(btn).getPropertyValue('--sw-color').trim() || btn.querySelector('.swatch-color')?.style.background || '#1a2744',
        price: parseInt(btn.dataset.price, 10),
      };

      // update selected fabric info
      const sfiName = document.getElementById('sfi-name');
      const sfiSwatch = document.getElementById('sfi-swatch');
      if (sfiName) sfiName.textContent = state.fabric.name;
      if (sfiSwatch) sfiSwatch.style.background = btn.querySelector('.swatch-color')?.style.background || state.fabric.color;

      // update fabric overlay tint
      const overlay = document.getElementById('fabric-overlay');
      if (overlay) overlay.style.background = btn.querySelector('.swatch-color')?.style.background || state.fabric.color;

      updatePrice();
    });
  });
}

/* ─── FABRIC FILTER ─── */
const fabFilterTabs = document.getElementById('fabric-filter-tabs');
if (fabFilterTabs) {
  fabFilterTabs.querySelectorAll('.fab-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      fabFilterTabs.querySelectorAll('.fab-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.swatch-btn').forEach(btn => {
        btn.classList.toggle('hidden', filter !== 'all' && btn.dataset.type !== filter);
      });
    });
  });
}

/* ─── FIT SELECTION ─── */
document.querySelectorAll('.fit-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.fit-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    state.fit = card.dataset.fit;
  });
});

/* ─── LINING ─── */
document.querySelectorAll('.lining-swatch').forEach(s => {
  s.addEventListener('click', () => {
    document.querySelectorAll('.lining-swatch').forEach(l => l.classList.remove('active'));
    s.classList.add('active');
    state.lining = s.dataset.lining;
  });
});

/* ─── DETAIL OPTIONS (collar, cuff, button, pocket) ─── */
document.querySelectorAll('.detail-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const group = opt.dataset.group;
    document.querySelectorAll(`.detail-option[data-group="${group}"]`).forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    state[group] = opt.dataset.val;
  });
});

/* ─── MONOGRAM ─── */
const monoInput = document.getElementById('mono-initials');
const monoPreviewText = document.getElementById('mono-preview-text');
const monoPos = document.getElementById('mono-position');

if (monoInput && monoPreviewText) {
  monoInput.addEventListener('input', () => {
    state.monogram = monoInput.value.toUpperCase();
    monoPreviewText.textContent = state.monogram || '—';
  });
}
if (monoPos) {
  monoPos.addEventListener('change', () => {
    state.monoPosition = monoPos.value;
  });
}

/* ─── MEASURE OPTIONS ─── */
document.querySelectorAll('.measure-option-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.measure-option-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ─── SIZE BUTTONS ─── */
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.size = btn.dataset.size;

    const sizeDisplay = document.getElementById('selected-size-display');
    if (sizeDisplay) sizeDisplay.textContent = state.size;

    // auto-fill approximate measurements
    const sizeMeasurements = {
      '36': { chest: 96, waist: 80, shoulder: 42, sleeve: 62, back: 74, neck: 36 },
      '38': { chest: 99, waist: 84, shoulder: 43, sleeve: 63, back: 75, neck: 37 },
      '40': { chest: 102, waist: 88, shoulder: 45, sleeve: 64, back: 76, neck: 38 },
      '42': { chest: 107, waist: 93, shoulder: 46, sleeve: 65, back: 77, neck: 39 },
      '44': { chest: 112, waist: 98, shoulder: 47, sleeve: 66, back: 78, neck: 40 },
      '46': { chest: 117, waist: 103, shoulder: 48, sleeve: 67, back: 79, neck: 41 },
      '48': { chest: 122, waist: 108, shoulder: 49, sleeve: 68, back: 80, neck: 42 },
    };

    const m = sizeMeasurements[state.size];
    if (m) {
      ['chest','waist','shoulder','sleeve','back','neck'].forEach(k => {
        const el = document.getElementById(`m-${k}`);
        if (el) el.value = m[k];
      });
    }
  });
});

/* ─── PREVIEW THUMBS ─── */
const thumbBtns = document.querySelectorAll('.thumb-btn');
const previewBlazer = document.getElementById('preview-blazer');
const thumbImages = { front: 'blazer.png', back: 'suits.png', detail: 'fabric.png', worn: 'hero.png' };

thumbBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    thumbBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.id.replace('thumb-', '');
    if (previewBlazer && thumbImages[key]) {
      previewBlazer.src = thumbImages[key];
    }
  });
});

/* ─── PRICE UPDATE ─── */
function updatePrice () {
  const priceDisplay  = document.getElementById('price-display');
  const osPriceEl     = document.getElementById('os-price');
  const formatted     = '₹' + state.fabric.price.toLocaleString('en-IN');
  if (priceDisplay) priceDisplay.textContent = formatted;
  if (osPriceEl)    osPriceEl.textContent    = formatted;
}

/* ─── ORDER SUMMARY ─── */
function updateOrderSummary () {
  const labelMap = {
    fit: { slim: 'Slim', classic: 'Classic English', modern: 'Relaxed' },
    collar: { peak: 'Peak Lapel', notch: 'Notch Lapel', shawl: 'Shawl Collar' },
    cuff: { '1button': '1 Button', '2button': '2 Button', working: 'Working Buttonholes' },
    button: { horn: 'Horn', metal: 'Metal', corozo: 'Corozo' },
    pocket: { flap: 'Flap Pockets', jetted: 'Jetted Pockets', patch: 'Patch Pockets' },
  };

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set('os-fabric', `${state.fabric.name} — ${state.fabric.type.charAt(0).toUpperCase() + state.fabric.type.slice(1)}`);
  set('os-fit', labelMap.fit[state.fit] || state.fit);
  set('os-collar', labelMap.collar[state.collar] || state.collar);
  set('os-cuff', labelMap.cuff[state.cuff] || state.cuff);
  set('os-button', labelMap.button[state.button] || state.button);
  set('os-pocket', labelMap.pocket[state.pocket] || state.pocket);
  set('os-mono', state.monogram ? `${state.monogram} (${state.monoPosition})` : 'None');
  updatePrice();
}

/* ─── CONFIRM ORDER ─── */
window.confirmOrder = function () {
  const modal = document.getElementById('order-success-modal');
  const overlay = document.getElementById('modal-overlay');
  const refNum = document.getElementById('osm-ref-num');

  // generate a random ref
  const ref = 'ST-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000);
  if (refNum) refNum.textContent = ref;

  modal?.classList.add('open');
  modal?.setAttribute('aria-hidden', 'false');
  overlay?.classList.add('visible');
  document.body.style.overflow = 'hidden';
};

/* ─── INITIALISE ─── */
(function init () {
  updatePrice();
  const sizeDisplay = document.getElementById('selected-size-display');
  if (sizeDisplay) sizeDisplay.textContent = state.size;

  // initialise sfi-swatch from default selected swatch color
  const defSwatch = document.querySelector('.swatch-btn.active .swatch-color');
  if (defSwatch) {
    const sfiSwatch = document.getElementById('sfi-swatch');
    if (sfiSwatch) sfiSwatch.style.background = defSwatch.style.background;
  }
})();
