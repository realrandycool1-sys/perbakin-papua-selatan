/* ============================================
   PERBAKIN APP
   Common UI functions: header, footer, toast, lightbox
   ============================================ */

const ADMIN_WA = '6285344007008'; // Ganti dengan nomor admin asli

// URL parsers (untuk embed video/link eksternal di lightbox)
function parseGoogleDriveUrl(url) {
  if (!url) return null;
  let m = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  m = url.match(/\/uc\?.*id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  return null;
}

function parseYouTubeUrl(url) {
  if (!url) return null;
  let m = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (m) return m[1];
  m = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (m) return m[1];
  m = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
  if (m) return m[1];
  return null;
}

// Berita helpers (untuk index, berita, berita-detail)
function getBeritaCoverStyle(b) {
  if (b.cover && b.cover.data) {
    if (b.cover.type && b.cover.type.startsWith('video')) {
      return 'background: #000;';
    }
    return `background-image: url('${b.cover.data}'); background-size: cover; background-position: center;`;
  }
  return '';
}

function getBeritaCoverOverlay(b) {
  if (b.cover && b.cover.data && b.cover.type && b.cover.type.startsWith('video')) {
    return '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fff; font-size: 32px; text-shadow: 0 2px 8px rgba(0,0,0,0.6); pointer-events: none;">▶</div>';
  }
  return '';
}

function getBeritaHref(b) {
  if (b.externalUrl) return b.externalUrl;
  return `berita-detail.html?id=${b.id}`;
}

function getBeritaTarget(b) {
  return b.externalUrl ? 'target="_blank" rel="noopener"' : '';
}

function getBeritaBadge(b) {
  if (b.externalUrl && b.source) {
    return `<span class="tag" style="background: #f59e0b; color: #fff; margin-left: 6px;">📰 ${b.source}</span>`;
  }
  return '';
}

function getSourceFromUrl(url) {
  try {
    const u = new URL(url);
    let host = u.hostname.replace(/^www\./, '');
    const map = {
      'kompas.com': 'Kompas.com',
      'detik.com': 'Detik.com',
      'tempo.co': 'Tempo.co',
      'cnnindonesia.com': 'CNN Indonesia',
      'bbc.com': 'BBC',
      'bbc.co.id': 'BBC Indonesia',
      'cnbcindonesia.com': 'CNBC Indonesia',
      'liputan6.com': 'Liputan6',
      'antaranews.com': 'Antara News',
      'republika.co.id': 'Republika',
      'merdeka.com': 'Merdeka.com',
      'suara.com': 'Suara.com',
      'tribunnews.com': 'Tribun News',
      'kumparan.com': 'Kumparan',
      'okezone.com': 'Okezone'
    };
    for (const [key, val] of Object.entries(map)) {
      if (host.includes(key)) return val;
    }
    return host.split('.').slice(-2, -1)[0].charAt(0).toUpperCase() + host.split('.').slice(-2, -1)[0].slice(1);
  } catch (e) {
    return null;
  }
}

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
      <a href="klub.html" class="${active === 'klub' ? 'active' : ''}">Klub Menembak</a>
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
            <li><a href="klub.html">Klub Menembak</a></li>
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
let lightboxFiles = []; // flattened list of {albumIdx, fileIdx, data, type, name}

function flattenLightboxItems(items) {
  lightboxFiles = [];
  items.forEach((item, albumIdx) => {
    if (item.files && item.files.length > 0) {
      item.files.forEach((f, fileIdx) => {
        if (f.data) {
          lightboxFiles.push({
            albumIdx, fileIdx,
            type: f.type,
            name: f.name,
            data: f.data,
            judul: item.judul,
            tanggal: item.tanggal,
            kategori: item.kategori
          });
        }
      });
    }
    // Tambah video eksternal (YouTube / Google Drive) kalau ada
    if (item.videoLink) {
      const ytId = parseYouTubeUrl(item.videoLink);
      const driveId = parseGoogleDriveUrl(item.videoLink);
      if (ytId) {
        lightboxFiles.push({
          albumIdx, fileIdx: -2,
          type: 'youtube',
          name: 'YouTube',
          data: `https://www.youtube.com/embed/${ytId}`,
          judul: item.judul,
          tanggal: item.tanggal,
          kategori: item.kategori
        });
      } else if (driveId) {
        lightboxFiles.push({
          albumIdx, fileIdx: -3,
          type: 'gdrive',
          name: 'Google Drive',
          data: `https://drive.google.com/file/d/${driveId}/preview`,
          judul: item.judul,
          tanggal: item.tanggal,
          kategori: item.kategori
        });
      }
    }
    if ((!item.files || item.files.length === 0) && !item.videoLink) {
      // Legacy: gradient
      lightboxFiles.push({
        albumIdx, fileIdx: -1,
        type: 'gradient',
        name: item.pic,
        data: null,
        judul: item.judul,
        tanggal: item.tanggal,
        kategori: item.kategori
      });
    }
  });
}

function openLightbox(items, index) {
  lightboxItems = items;
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
        <div id="lbPic" style="width: min(80vw, 700px); aspect-ratio: 1; background: #1a1a1a; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden;"></div>
        <div class="lightbox-info">
          <div class="title" id="lbTitle"></div>
          <div id="lbMeta"></div>
          <div id="lbCounter" style="font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px;"></div>
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
  flattenLightboxItems(items);
  // index = album index, find first file of that album
  if (index >= 0 && index < items.length) {
    const found = lightboxFiles.findIndex(f => f.albumIdx === index);
    if (found >= 0) lightboxIndex = found;
    else lightboxIndex = 0;
  } else {
    lightboxIndex = 0;
  }
  updateLightbox();
  lb.classList.add('active');
}

function updateLightbox() {
  const f = lightboxFiles[lightboxIndex];
  if (!f) return;
  const picEl = document.getElementById('lbPic');
  if (f.type === 'video' || (f.type && f.type.startsWith('video'))) {
    picEl.innerHTML = `<video src="${f.data}" controls autoplay style="max-width: 100%; max-height: 80vh;"></video>`;
  } else if (f.type === 'youtube') {
    picEl.innerHTML = `<iframe src="${f.data}?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width: min(80vw, 700px); aspect-ratio: 16/9; max-height: 80vh;"></iframe>`;
  } else if (f.type === 'gdrive') {
    picEl.innerHTML = `<iframe src="${f.data}" frameborder="0" allow="autoplay" allowfullscreen style="width: min(80vw, 700px); aspect-ratio: 16/9; max-height: 80vh;"></iframe>`;
  } else if (f.type && f.type.startsWith('image')) {
    picEl.innerHTML = `<img src="${f.data}" style="max-width: 100%; max-height: 80vh; object-fit: contain;">`;
  } else {
    // Legacy gradient
    picEl.innerHTML = '';
    picEl.className = 'gradient ' + f.name;
  }
  document.getElementById('lbTitle').textContent = f.judul;
  const metaParts = [(f.kategori || ''), formatDate(f.tanggal)];
  if (f.name && f.type !== 'gradient') metaParts.push(f.name);
  document.getElementById('lbMeta').textContent = metaParts.filter(Boolean).join(' · ');
  document.getElementById('lbCounter').textContent = (lightboxIndex + 1) + ' / ' + lightboxFiles.length;
}

function navigateLightbox(dir) {
  if (lightboxFiles.length === 0) return;
  lightboxIndex = (lightboxIndex + dir + lightboxFiles.length) % lightboxFiles.length;
  updateLightbox();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('active');
    const picEl = document.getElementById('lbPic');
    if (picEl) picEl.innerHTML = ''; // stop video
  }
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
