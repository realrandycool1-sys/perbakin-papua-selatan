# PERBAKIN Papua Selatan — Website Offline (Demo)

Website offline statis untuk demo & testing fitur. **Tidak perlu server, hosting, atau install apa-apa.** Tinggal buka file `index.html` di browser.

## 🚀 Cara Pakai

1. **Buka website**: Double-click `index.html` di folder ini, atau klik kanan → Open with browser.
2. **Login admin**: Buka `admin.html` atau `login.html` (khusus pengurus).
3. **Coba fitur**: Tambah/edit/hapus berita, klub, pengurus dari admin. Lihat perubahan langsung di website publik.

## 📁 Struktur File

```
perbakin-website/
├── index.html              ← Beranda (13 section)
├── berita.html             ← Listing berita + filter + pagination
├── berita-detail.html      ← Detail artikel
├── organisasi.html         ← Multi-tab: Struktur, Klub, Regulasi, Kategori
├── pendaftaran.html        ← Form + WhatsApp CTA
├── galeri.html             ← Galeri + lightbox
├── kontak.html             ← Form kontak + info
├── admin.html              ← Panel admin (CRUD)
└── assets/
    ├── style.css           ← Main stylesheet
    ├── data.js             ← Sample data + localStorage helpers
    └── app.js              ← Common UI (header, footer, toast, lightbox)
```

## ✨ Fitur yang Bisa Dicoba

### Halaman Publik
- ✅ Navigasi lengkap (Beranda, Berita, Organisasi, Pendaftaran, Galeri, Kontak)
- ✅ Beranda dengan 13 section (hero, featured, news, banner, gateway, layanan, pengumuman, galeri)
- ✅ Filter berita berdasarkan kategori
- ✅ Pagination berita
- ✅ Search global (coba ketik "kejuaraan" atau "rapat")
- ✅ Detail berita dengan auto-increment views
- ✅ Multi-tab Organisasi (Struktur, Klub, Regulasi, Kategori)
- ✅ Filter klub berdasarkan kabupaten
- ✅ Lightbox galeri (klik foto + arrow keys)
- ✅ Form pendaftaran → WhatsApp
- ✅ Form kontak → localStorage

### Admin Panel
- ✅ Login khusus pengurus (username + password)
- ✅ Dashboard dengan 8 statistik
- ✅ CRUD Berita (tambah, edit, hapus, dengan form lengkap)
- ✅ CRUD Klub (5 field + filter kabupaten)
- ✅ CRUD Pengurus
- ✅ CRUD Pengumuman
- ✅ CRUD Galeri
- ✅ View Pendaftar (dari form publik)
- ✅ View Pesan Masuk (dari form kontak)
- ✅ Tombol chat WhatsApp langsung ke pendaftar
- ✅ Reset data ke kondisi awal

## 🧪 Skenario Testing yang Disarankan

1. **Coba CRUD Berita**
   - Login admin → Berita → "+ Tambah Berita"
   - Isi form → Simpan
   - Buka `berita.html` → berita baru muncul di urutan atas

2. **Coba Form Pendaftaran**
   - Buka `pendaftaran.html`
   - Isi form atau klik "Buka WhatsApp" langsung
   - Cek di admin → Pendaftar → data masuk

3. **Coba Form Kontak**
   - Buka `kontak.html`
   - Kirim pesan
   - Cek di admin → Pesan Masuk

4. **Coba Lightbox**
   - Buka `galeri.html` atau klik foto di beranda
   - Pakai arrow keys ← → untuk navigasi
   - Tekan ESC untuk close

5. **Coba Filter & Search**
   - Di `berita.html`, klik filter kategori
   - Ketik "medali" di search bar header

6. **Coba Reset Data**
   - Login admin → Pengaturan → Reset Semua Data
   - Semua kembali ke sample awal

## 💾 Data Persistence

Semua data tersimpan di **browser localStorage**. Ini berarti:
- ✅ Data persist antar reload
- ✅ Tidak perlu backend/database
- ⚠️ Data **tidak** sync antar browser/device
- ⚠️ Data hilang kalau browser cache dibersihkan
- ⚠️ Untuk produksi, butuh backend (WordPress/Node.js/dll)

## 🎨 Design System

- **Primary**: Deep red (#991B1B) — warna PERBAKIN
- **Secondary**: Dark navy (#0F172A)
- **Accent**: Copper (#B87333)
- **Background**: Soft gray (#F5F5F7)
- **Typography**: DM Serif Display (headlines) + Outfit (body)

## 🔧 Kustomisasi

Untuk integrasi ke produksi, edit:

1. **`assets/app.js`** — Ganti `ADMIN_WA` dengan nomor WhatsApp asli
2. **`assets/data.js`** — Tambah/edit sample data
3. **`assets/style.css`** — Sesuaikan warna & layout
4. **Halaman** — Ganti placeholder content dengan konten asli

## 📞 Catatan

- Semua "foto" di mockup ini adalah **CSS gradient** (placeholder). Ganti dengan foto asli saat integrasi.
- WhatsApp link berfungsi (membuka wa.me) tapi nomor admin masih placeholder.
- Form submissions tersimpan lokal, belum terkirim ke server manapun.
