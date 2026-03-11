// ─── STATE ───
let activeProvince = null;
let activeCounty = null;
let searchQuery = '';

// ─── COUNTS ───
let totalAttractions = 0;
let totalCounties = 0;
const provinceCounts = {};

DATA.forEach(p => {
  let pCount = 0;
  totalCounties += p.counties.length;
  p.counties.forEach(c => {
    pCount += c.attractions.length;
  });
  provinceCounts[p.province] = pCount;
  totalAttractions += pCount;
});

// ─── RENDER HERO STATS ───
document.getElementById('hero-stats').innerHTML = `
  <div class="hero-stat"><span class="hero-stat-number">${DATA.length}</span><span class="hero-stat-label">Provinces</span></div>
  <div class="hero-stat"><span class="hero-stat-number">${totalCounties}</span><span class="hero-stat-label">Counties</span></div>
  <div class="hero-stat"><span class="hero-stat-number">${totalAttractions}</span><span class="hero-stat-label">Places</span></div>
`;

// ─── RENDER PROVINCE SELECT ───
const provinceSelect = document.getElementById('province-select');
provinceSelect.innerHTML = `<option value="">All provinces</option>` +
  DATA.map(p => `<option value="${p.province}">${p.province} (${provinceCounts[p.province]})</option>`).join('');

// ─── RENDER MAIN CONTENT ───
const mainEl = document.getElementById('main-content');
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
      html += `<article class="attraction-card" data-name="${a.name.toLowerCase()}" data-desc="${a.desc.toLowerCase()}" data-county="${c.name}" data-province="${p.province}">`;
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

mainEl.innerHTML = html;

// ─── ELEMENTS ───
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const countySelect = document.getElementById('county-select');
const resultCountEl = document.getElementById('result-count');
const clearFiltersBtn = document.getElementById('clear-filters');
const emptyStateEl = document.getElementById('empty-state');
const filterBar = document.getElementById('filter-bar');
const backToTop = document.getElementById('back-to-top');

function updateSelectStyles() {
  provinceSelect.classList.toggle('has-value', !!activeProvince);
  countySelect.classList.toggle('has-value', !!activeCounty);
}

// ─── PROVINCE SELECT ───
provinceSelect.addEventListener('change', () => {
  activeProvince = provinceSelect.value || null;
  activeCounty = null;
  renderCountyOptions();
  updateSelectStyles();
  applyFilters();
});

// ─── COUNTY SELECT ───
function renderCountyOptions() {
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

// ─── SEARCH ───
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = searchInput.value.trim().toLowerCase();
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    applyFilters();
  }, 150);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');
  applyFilters();
  searchInput.focus();
});

// ─── CLEAR ALL ───
clearFiltersBtn.addEventListener('click', () => {
  activeProvince = null;
  activeCounty = null;
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');

  provinceSelect.value = '';
  countySelect.value = '';
  renderCountyOptions();
  updateSelectStyles();
  applyFilters();
});

// ─── APPLY FILTERS ───
function applyFilters() {
  const cards = mainEl.querySelectorAll('.attraction-card');
  const provinceSections = mainEl.querySelectorAll('.province-section');
  const countySections = mainEl.querySelectorAll('.county-section');
  let visibleCount = 0;

  cards.forEach(card => {
    let show = true;

    if (activeProvince && card.dataset.province !== activeProvince) show = false;
    if (activeCounty && card.dataset.county !== activeCounty) show = false;

    if (searchQuery && show) {
      const matchName = card.dataset.name.includes(searchQuery);
      const matchDesc = card.dataset.desc.includes(searchQuery);
      const matchCounty = card.dataset.county.toLowerCase().includes(searchQuery);
      const matchProvince = card.dataset.province.toLowerCase().includes(searchQuery);
      show = matchName || matchDesc || matchCounty || matchProvince;
    }

    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });

  countySections.forEach(section => {
    const allCards = section.querySelectorAll('.attraction-card');
    const visibleCards = Array.from(allCards).filter(c => c.style.display !== 'none');
    section.style.display = visibleCards.length === 0 ? 'none' : '';

    const countEl = section.querySelector('.county-count');
    if (countEl) {
      countEl.textContent = searchQuery ? `${visibleCards.length} of ${allCards.length}` : `${allCards.length} places`;
    }
  });

  provinceSections.forEach(section => {
    const visibleCounties = Array.from(section.querySelectorAll('.county-section')).filter(c => c.style.display !== 'none');
    section.style.display = visibleCounties.length === 0 ? 'none' : '';
  });

  if (resultCountEl) resultCountEl.innerHTML = `<strong>${visibleCount}</strong> ${visibleCount === 1 ? 'place' : 'places'} found`;

  const hasFilters = activeProvince || activeCounty || searchQuery;
  clearFiltersBtn.classList.toggle('visible', hasFilters);
  emptyStateEl.classList.toggle('visible', visibleCount === 0);
  mainEl.style.display = visibleCount === 0 ? 'none' : '';
}


// ─── SCROLL EFFECTS ───
let lastScroll = 0;
function onScroll() {
  const y = window.scrollY;
  filterBar.classList.toggle('scrolled', y > 200);
  backToTop.classList.toggle('visible', y > 600);
  lastScroll = y;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── INITIAL RENDER ───
applyFilters();
