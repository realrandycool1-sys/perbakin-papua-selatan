/* ============================================
   PERBAKIN APP
   Common UI functions: header, footer, toast, lightbox
   ============================================ */

const ADMIN_WA = '6285344007008'; // Ganti dengan nomor admin asli

// Get dynamic WA number from kontak data
function getAdminWA() {
  try {
    const k = getData('kontak');
    return (k && k.whatsapp && k.whatsapp.nomor) || ADMIN_WA;
  } catch (e) {
    return ADMIN_WA;
  }
}

// Render header
function renderHeader(active = '') {
  return `
  <div class="util-bar">
    <div class="wrapper">
      <div class="util-left">
        <span>🇮🇩 Indonesia · Papua Selatan</span>
      </div>
      <div class="util-right">
        <a href="index.html">Beranda</a>
        <a href="#" onclick="event.preventDefault();showToast('Peta situs akan segera tersedia','info')">Peta Situs</a>
        <a href="kontak.html">Kontak</a>
        <a href="login.html" style="color: var(--accent); font-weight: 600;">🔐 Login Admin</a>
        <span>Bahasa Indonesia ▾</span>
      </div>
    </div>
  </div>
  <div class="header-main">
    <div class="wrapper">
      <a href="index.html" class="logo">
        <img src="assets/logo.png" alt="PERBAKIN Papua Selatan" class="logo-img" />
        <div class="logo-text">
          <div class="logo-name">PERBAKIN <em>Papsel</em></div>
          <div class="logo-sub">Persatuan Menembak Seluruh Indonesia<br>Pengurus Provinsi Papua Selatan</div>
        </div>
      </a>
      <div class="header-search">
        <input type="text" id="globalSearch" placeholder="Cari berita, atlet, klub..." />
      </div>
      <a href="https://wa.me/${ADMIN_WA}?text=Halo%20admin%20PERBAKIN%20Papua%20Selatan" target="_blank" class="btn btn-wa btn-sm">💬 Hubungi Admin</a>
    </div>
  </div>
  <nav class="nav">
    <div class="wrapper">
      <a href="index.html" class="${active === 'beranda' ? 'active' : ''}">Beranda</a>
      <a href="berita.html" class="${active === 'berita' ? 'active' : ''}">Berita</a>
      <a href="organisasi.html" class="${active === 'organisasi' ? 'active' : ''}">Organisasi</a>
      <a href="pendaftaran.html" class="${active === 'pendaftaran' ? 'active' : ''}">Pendaftaran</a>
      <a href="galeri.html" class="${active === 'galeri' ? 'active' : ''}">Galeri</a>
      <a href="kontak.html" class="${active === 'kontak' ? 'active' : ''}">Kontak</a>
    </div>
  </nav>
  `;
}

// Render footer
function renderFooter() {
  return `
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo">
            <img src="assets/logo.png" alt="PERBAKIN Papua Selatan" class="logo-img" />
            <div class="logo-text">
              <div class="logo-name" style="color: #fff;">PERBAKIN <em style="color: #fff;">Papsel</em></div>
              <div class="logo-sub" style="color: rgba(255,255,255,0.5);">Persatuan Menembak Seluruh Indonesia<br>Pengurus Provinsi Papua Selatan</div>
            </div>
          </a>
          <p class="footer-about">Wadah resmi olahraga menembak di Provinsi Papua Selatan. Membina atlet, memperkuat klub, dan mengembangkan olahraga menembak yang profesional.</p>
          <div class="footer-contact">
            <strong>📍 Sekretariat</strong>
            Jl. Parakomando, Merauke<br/>Papua Selatan 99611
            <strong>📞 Kontak</strong>
            WhatsApp: 0853-4400-7008<br/>
            Email: sekretariat@perbakinpapsel.id
          </div>
          <div class="footer-social">
            <a href="#">📷</a>
            <a href="#">f</a>
            <a href="#">▶</a>
            <a href="#">𝕏</a>
          </div>
        </div>
        <div>
          <h4>Organisasi</h4>
          <ul>
            <li><a href="organisasi.html?tab=struktur">Struktur</a></li>
            <li><a href="organisasi.html?tab=klub">Klub Menembak</a></li>
            <li><a href="organisasi.html?tab=regulasi">Regulasi</a></li>
            <li><a href="organisasi.html?tab=kategori">Kategori Senjata</a></li>
          </ul>
        </div>
        <div>
          <h4>Halaman</h4>
          <ul>
            <li><a href="index.html">Beranda</a></li>
            <li><a href="berita.html">Berita</a></li>
            <li><a href="galeri.html">Galeri</a></li>
            <li><a href="pendaftaran.html">Pendaftaran</a></li>
            <li><a href="kontak.html">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4>Layanan</h4>
          <ul>
            <li><a href="pendaftaran.html">Daftar Anggota</a></li>
            <li><a href="login.html" style="color: #b87333; font-weight: 600;">🔐 Login Admin</a></li>
            <li><a href="https://wa.me/${ADMIN_WA}" target="_blank">WhatsApp</a></li>
            <li><a href="kontak.html">Kirim Pesan</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom" style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <div>
          <div style="font-size: 11px; color: rgba(255,255,255,0.5); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;">Mitra & Induk Organisasi</div>
          <div style="display: flex; gap: 24px; align-items: center; justify-content: center; flex-wrap: wrap;">
            <div style="text-align: center;">
              <img src="assets/logo-perbakin-pusat.png" alt="PERBAKIN Pusat" style="height: 60px; width: auto; background: #fff; padding: 6px 10px; border-radius: 6px;" />
              <div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 4px;">PERBAKIN Pusat</div>
            </div>
            <div style="text-align: center;">
              <img src="assets/logo-koni.png" alt="KONI Papua Selatan" style="height: 60px; width: auto; background: #fff; padding: 6px 10px; border-radius: 6px;" />
              <div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 4px;">KONI Papua Selatan</div>
            </div>
            <div style="text-align: center;">
              <img src="assets/logo-pemprov.png" alt="Pemprov Papua Selatan" style="height: 60px; width: auto; background: #fff; padding: 6px 10px; border-radius: 6px;" />
              <div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 4px;">Pemprov Papua Selatan</div>
            </div>
          </div>
        </div>
        <div>© 2026 PERBAKIN Papua Selatan · Hak cipta dilindungi</div>
      </div>
    </div>
  </footer>
  `;
}

// Mount header and footer
function mount(active = '') {
  const headerEl = document.getElementById('app-header');
  const footerEl = document.getElementById('app-footer');
  if (headerEl) headerEl.innerHTML = renderHeader(active);
  if (footerEl) footerEl.innerHTML = renderFooter();
  setupGlobalSearch();
}

// Toast notification
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Lightbox
let lightboxItems = [];
let lightboxIndex = 0;

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.id = 'lightbox';
    lb.innerHTML = `
      <button class="lightbox-close" onclick="closeLightbox()">✕</button>
      <button class="lightbox-nav prev" onclick="navigateLightbox(-1)">‹</button>
      <button class="lightbox-nav next" onclick="navigateLightbox(1)">›</button>
      <div class="lightbox-content">
        <div class="gradient" id="lbPic"></div>
        <div class="lightbox-info">
          <div class="title" id="lbTitle"></div>
          <div id="lbMeta"></div>
        </div>
      </div>
    `;
    document.body.appendChild(lb);
    lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }
  updateLightbox();
  lb.classList.add('active');
}

function updateLightbox() {
  const item = lightboxItems[lightboxIndex];
  document.getElementById('lbPic').className = 'gradient ' + item.pic;
  document.getElementById('lbTitle').textContent = item.judul;
  document.getElementById('lbMeta').textContent = item.kategori + ' · ' + formatDate(item.tanggal);
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  updateLightbox();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('active');
}

// Global search
function setupGlobalSearch() {
  const input = document.getElementById('globalSearch');
  if (!input) return;
  let timeout;
  input.addEventListener('input', (e) => {
    clearTimeout(timeout);
    const q = e.target.value.trim();
    if (q.length < 2) return;
    timeout = setTimeout(() => {
      const allBerita = getData('berita');
      const allKlub = getData('klub');
      const matched = [];
      allBerita.forEach(b => {
        if (b.judul.toLowerCase().includes(q.toLowerCase()) || b.excerpt.toLowerCase().includes(q.toLowerCase())) {
          matched.push({ type: 'Berita', item: b });
        }
      });
      allKlub.forEach(k => {
        if (k.nama.toLowerCase().includes(q.toLowerCase()) || k.kabupaten.toLowerCase().includes(q.toLowerCase())) {
          matched.push({ type: 'Klub', item: k });
        }
      });
      showSearchResults(matched, q);
    }, 300);
  });
}

function showSearchResults(matched, query) {
  if (matched.length === 0) {
    showToast(`Tidak ada hasil untuk "${query}"`, 'error');
    return;
  }
  const top3 = matched.slice(0, 3);
  const summary = top3.map(m => `${m.type}: ${m.item.judul || m.item.nama}`).join(' | ');
  showToast(`Ditemukan ${matched.length} hasil untuk "${query}"`, 'success');
  if (confirm(`Hasil pencarian untuk "${query}":\n\n${summary}\n\nLihat di halaman Berita?`)) {
    window.location.href = `berita.html?q=${encodeURIComponent(query)}`;
  }
}

// WhatsApp helper
function openWA(message = '') {
  const url = `https://wa.me/${getAdminWA()}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function pendaftaranWA() {
  const msg = `Halo Admin PERBAKIN Papua Selatan, saya ingin mendaftar sebagai anggota baru.

Nama: 
Domisili: 
Klub tujuan: 

Mohon info selanjutnya. Terima kasih.`;
  openWA(msg);
}

// Tab switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  const tab = document.getElementById('tab-' + tabId);
  const btn = document.querySelector(`.tab[data-tab="${tabId}"]`);
  if (tab) tab.classList.add('active');
  if (btn) btn.classList.add('active');
  // Update URL
  const url = new URL(window.location);
  url.searchParams.set('tab', tabId);
  window.history.pushState({}, '', url);
}

// Modal
function showModal(content) {
  let backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'modal-backdrop';
    backdrop.innerHTML = `<div class="modal" id="modal-content"></div>`;
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  }
  document.getElementById('modal-content').innerHTML = content;
  backdrop.classList.add('active');
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeData();
});
