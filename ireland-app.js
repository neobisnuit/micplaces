// ─── STATE ───
let activeProvince = null;
let activeCounty = null;
let searchQuery = '';

// ─── COUNTS ───
let totalAttractions = 0;
let totalCounties = 0;
const provinceCounts = {};
const countyNames = [];

DATA.forEach(p => {
  let pCount = 0;
  totalCounties += p.counties.length;
  p.counties.forEach(c => {
    pCount += c.attractions.length;
    countyNames.push(c.name.toLowerCase());
  });
  provinceCounts[p.province] = pCount;
  totalAttractions += pCount;
});

// ─── SAFE DOM HELPERS ───
function $(id) { return document.getElementById(id); }

// ─── RENDER HERO STATS ───
const heroStats = $('hero-stats');
if (heroStats) {
  heroStats.innerHTML = `
    <div class="hero-stat"><span class="hero-stat-number">${DATA.length}</span><span class="hero-stat-label">Provinces</span></div>
    <div class="hero-stat"><span class="hero-stat-number">${totalCounties}</span><span class="hero-stat-label">Counties</span></div>
    <div class="hero-stat"><span class="hero-stat-number">${totalAttractions}</span><span class="hero-stat-label">Places</span></div>
  `;
}

// ─── RENDER PROVINCE SELECT ───
const provinceSelect = $('province-select');
if (provinceSelect) {
  provinceSelect.innerHTML = `<option value="">All provinces</option>` +
    DATA.map(p => `<option value="${p.province}">${p.province} (${provinceCounts[p.province]})</option>`).join('');
}

// ─── RENDER MAIN CONTENT ───
const mainEl = $('main-content');
let html = '';
let imgIdx = 0;

DATA.forEach(p => {
  html += `<div class="province-section" data-province="${p.province}">`;
  html += `<div class="province-header"><span class="province-label">${p.province}</span><div class="province-line"></div></div>`;

  p.counties.forEach(c => {
    const countyId = c.name.toLowerCase().replace(/[^a-z]/g, '');
    html += `<section class="county-section" id="county-${countyId}" data-county="${c.name}" data-province="${p.province}">`;
    html += `<div class="county-header"><h2 class="county-name">${c.name}</h2><span class="county-count">${c.attractions.length} places</span></div>`;
    html += `<div class="attractions-grid">`;

    c.attractions.forEach(a => {
      imgIdx++;
      const imgSrc = IMG[imgIdx] || '';
      html += `<article class="attraction-card" data-name="${a.name.toLowerCase()}" data-desc="${a.desc.toLowerCase()}" data-county="${c.name.toLowerCase()}" data-province="${p.province.toLowerCase()}">`;
      if (imgSrc) html += `<div class="card-img"><img src="${imgSrc}" alt="${a.name}" loading="lazy"></div>`;
      html += `<div class="card-body">`;
      html += `<h3 class="attraction-name">${a.name}</h3>`;
      html += `<p class="attraction-desc">${a.desc}</p>`;
      html += `<a class="attraction-link" href="${a.url}" target="_blank" rel="noopener noreferrer">Visit Website ${ARROW_SVG}</a>`;
      html += `</div></article>`;
    });

    html += `</div></section>`;
  });

  html += `</div>`;
});

if (mainEl) mainEl.innerHTML = html;

// ─── ELEMENTS ───
const searchInput = $('search-input');
const searchClear = $('search-clear');
const countySelect = $('county-select');
const resultCountEl = $('result-count');
const clearFiltersBtn = $('clear-filters');
const emptyStateEl = $('empty-state');
const filterBar = $('filter-bar');
const backToTop = $('back-to-top');

function updateSelectStyles() {
  if (provinceSelect) provinceSelect.classList.toggle('has-value', !!activeProvince);
  if (countySelect) countySelect.classList.toggle('has-value', !!activeCounty);
}

// ─── PROVINCE SELECT ───
if (provinceSelect) {
  provinceSelect.addEventListener('change', () => {
    activeProvince = provinceSelect.value || null;
    activeCounty = null;
    renderCountyOptions();
    updateSelectStyles();
    applyFilters();
  });
}

// ─── COUNTY SELECT ───
function renderCountyOptions() {
  if (!countySelect) return;

  if (!activeProvince) {
    countySelect.innerHTML = `<option value="">All counties</option>` +
      DATA.flatMap(p => p.counties).map(c => `<option value="${c.name}">${c.name} (${c.attractions.length})</option>`).join('');
    return;
  }

  const province = DATA.find(p => p.province === activeProvince);
  if (!province) return;

  countySelect.innerHTML = `<option value="">All ${activeProvince} (${provinceCounts[activeProvince]})</option>` +
    province.counties.map(c => `<option value="${c.name}">${c.name} (${c.attractions.length})</option>`).join('');
}

renderCountyOptions();

if (countySelect) {
  countySelect.addEventListener('change', () => {
    activeCounty = countySelect.value || null;
    updateSelectStyles();
    applyFilters();

    if (activeCounty) {
      const countyId = activeCounty.toLowerCase().replace(/[^a-z]/g, '');
      const el = document.getElementById('county-' + countyId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ─── SEARCH ───
let searchTimeout;
if (searchInput) {
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = searchInput.value.trim().toLowerCase();
      if (searchClear) searchClear.classList.toggle('visible', searchQuery.length > 0);
      applyFilters();
    }, 150);
  });
}

if (searchClear) {
  searchClear.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    applyFilters();
    if (searchInput) searchInput.focus();
  });
}

// ─── CLEAR ALL ───
if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener('click', () => {
    activeProvince = null;
    activeCounty = null;
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    if (searchClear) searchClear.classList.remove('visible');

    if (provinceSelect) provinceSelect.value = '';
    if (countySelect) countySelect.value = '';
    renderCountyOptions();
    updateSelectStyles();
    applyFilters();
  });
}

// ─── APPLY FILTERS ───
function applyFilters() {
  if (!mainEl) return;

  const countySections = mainEl.querySelectorAll('.county-section');
  const provinceSections = mainEl.querySelectorAll('.province-section');
  let visibleCount = 0;

  countySections.forEach(section => {
    const sCounty = (section.dataset.county || '').toLowerCase();
    const sProvince = (section.dataset.province || '').toLowerCase();
    const cards = section.querySelectorAll('.attraction-card');

    const countyMatchesSearch = searchQuery && sCounty.includes(searchQuery);
    const provinceMatchesSearch = searchQuery && sProvince.includes(searchQuery);
    const sectionMatchesSearch = countyMatchesSearch || provinceMatchesSearch;

    let sectionVisible = 0;

    cards.forEach(card => {
      let show = true;

      if (activeProvince && card.dataset.province.toLowerCase() !== activeProvince.toLowerCase()) show = false;
      if (activeCounty && card.dataset.county.toLowerCase() !== activeCounty.toLowerCase()) show = false;

      if (searchQuery && show) {
        if (sectionMatchesSearch) {
          show = true;
        } else {
          const matchName = card.dataset.name.includes(searchQuery);
          const matchDesc = card.dataset.desc.includes(searchQuery);
          show = matchName || matchDesc;
        }
      }

      card.style.display = show ? '' : 'none';
      if (show) {
        visibleCount++;
        sectionVisible++;
      }
    });

    section.style.display = sectionVisible === 0 ? 'none' : '';

    const countEl = section.querySelector('.county-count');
    if (countEl) {
      const total = cards.length;
      countEl.textContent = (searchQuery && !sectionMatchesSearch) ? `${sectionVisible} of ${total}` : `${total} places`;
    }
  });

  provinceSections.forEach(section => {
    const hasVisible = Array.from(section.querySelectorAll('.county-section')).some(c => c.style.display !== 'none');
    section.style.display = hasVisible ? '' : 'none';
  });

  if (resultCountEl) resultCountEl.innerHTML = `<strong>${visibleCount}</strong> ${visibleCount === 1 ? 'place' : 'places'} found`;

  const hasFilters = activeProvince || activeCounty || searchQuery;
  if (clearFiltersBtn) clearFiltersBtn.classList.toggle('visible', !!hasFilters);
  if (emptyStateEl) emptyStateEl.classList.toggle('visible', visibleCount === 0);
  if (mainEl) mainEl.style.display = visibleCount === 0 ? 'none' : '';
}

// ─── SCROLL EFFECTS ───
let lastScroll = 0;
function onScroll() {
  const y = window.scrollY;
  if (filterBar) filterBar.classList.toggle('scrolled', y > 200);
  if (backToTop) backToTop.classList.toggle('visible', y > 600);
  lastScroll = y;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── INITIAL RENDER ───
applyFilters();
