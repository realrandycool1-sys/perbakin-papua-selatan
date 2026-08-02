/* ============================================
   PERBAKIN DATA STORE
   Sample data + localStorage persistence
   ============================================ */

const STORAGE_KEYS = {
  berita: 'perbakin_berita',
  klub: 'perbakin_klub',
  kontak: 'perbakin_kontak',
  kategori: 'perbakin_kategori',
  regulasi: 'perbakin_regulasi',
  pengurus: 'perbakin_pengurus',
  pengumuman: 'perbakin_pengumuman',
  galeri: 'perbakin_galeri',
  kontak: 'perbakin_kontak',
  initialized: 'perbakin_initialized_v1'
};

// Default sample data
const DEFAULT_DATA = {
  berita: [
    {
      id: 1,
      judul: 'Kejuaraan Menembak Papua Selatan 2026 Resmi Dibuka',
      slug: 'kejuaraan-2026-dibuka',
      kategori: 'Kegiatan',
      tanggal: '2026-07-18',
      excerpt: 'Ketua PERBAKIN Papua Selatan, Yohanes Mahuze, membuka Kejuaraan Daerah di Merauke. 14 kategori perlombaan dipertandingkan selama 3 hari.',
      content: 'Ketua PERBAKIN Provinsi Papua Selatan, Yohanes Mahuze, S.Pd., secara resmi membuka Kejuaraan Menembak Papua Selatan 2026 di Lapangan Tembak Merauke, Sabtu (18/7). Acara akan berlangsung selama tiga hari dengan total 14 kategori perlombaan, mulai dari Air Rifle, Air Pistol, Senapan, hingga Pistol.\n\nDalam sambutannya, Yohanes menyampaikan apresiasi atas semangat para atlet dan pengurus klub yang telah mempersiapkan diri untuk kejuaraan ini. "Ini bukan sekadar kompetisi, tapi juga sarana untuk mempererat tali silaturahmi antar-klub di Papua Selatan," ujarnya.\n\nKejuaraan tahun ini diikuti oleh 8 klub dari 4 kabupaten, dengan total 96 atlet yang akan bertanding. Panitia juga mengundang wasit nasional untuk memastikan penjurian berjalan sesuai standar ISSF.',
      pic: 'pic-grad-1',
      views: 1247
    },
    {
      id: 2,
      judul: 'Atlet Papua Selatan Raih Medali Perak di Kejuaraan Nasional ISSF',
      slug: 'medali-perak-issf',
      kategori: 'Prestasi',
      tanggal: '2026-07-12',
      excerpt: 'Maria Kaize dari Klub Merauque Shooting Club berhasil masuk 3 besar kategori Air Rifle putri pada kejuaraan nasional di Jakarta.',
      content: 'Kabar gembira datang dari dunia menembak Papua Selatan. Maria Kaize, atlet dari Klub Merauque Shooting Club, berhasil meraih medali perak pada Kejuaraan Nasional ISSF yang digelar di Jakarta, 8-12 Juli 2026.\n\nMaria turun di kategori Air Rifle 10m putri dan mencatatkan skor 622.4, hanya terpaut 1.2 poin dari peraih emas. Prestasi ini menjadi yang pertama bagi atlet Papua Selatan di level nasional dalam 5 tahun terakhir.\n\n"Saya sangat bersyukur bisa mengharumkan nama daerah. Ini berkat dukungan PERBAKIN Papua Selatan dan pelatih saya," kata Maria saat dikonfirmasi via telepon.',
      pic: 'pic-grad-2',
      views: 892
    },
    {
      id: 3,
      judul: 'Pelatihan Wasit Juri Lisensi B Dilaksanakan di Boven Digoel',
      slug: 'pelatihan-wasit-bovendigoel',
      kategori: 'Pelatihan',
      tanggal: '2026-07-05',
      excerpt: '15 calon wasit mengikuti pelatihan intensif selama 2 hari penuh di Klub Boven Digoel Shooters.',
      content: 'PERBAKIN Papua Selatan bekerja sama dengan PERBAKIN Pusat menggelar Pelatihan Wasit Juri Lisensi B pada 4-5 Juli 2026 di Boven Digoel. Pelatihan diikuti oleh 15 calon wasit dari berbagai klub di Papua Selatan.\n\nMateri pelatihan meliputi teori penjurian, praktik lapangan, dan ujian kelayakan. Seluruh peserta yang lulus akan mendapatkan lisensi B yang berlaku nasional selama 4 tahun.\n\nKetua Bidang Pembinaan PERBAKIN Papua Selatan, Daniel Yalak, M.Pd., menyampaikan bahwa penambahan jumlah wasit bersertifikat sangat penting untuk mendukung kejuaraan-kejuaraan lokal di daerah.',
      pic: 'pic-grad-3',
      views: 456
    },
    {
      id: 4,
      judul: 'Perpanjangan Iuran Anggota Tahunan 2026 Dimulai',
      slug: 'perpanjangan-iuran-2026',
      kategori: 'Pengumuman',
      tanggal: '2026-06-28',
      excerpt: 'Periode perpanjangan 1 Juni – 31 Juli 2026. Hubungi admin untuk info selengkapnya.',
      content: 'Diberitahukan kepada seluruh anggota PERBAKIN Papua Selatan bahwa periode perpanjangan iuran anggota tahunan 2026 telah dibuka. Batas waktu perpanjangan adalah 31 Juli 2026.\n\nUntuk anggota yang belum melakukan perpanjangan, silakan menghubungi admin via WhatsApp untuk mendapatkan informasi lebih lanjut mengenai nominal dan tata cara pembayaran.\n\nAnggota yang tidak melakukan perpanjangan dalam periode ini akan dinonaktifkan sementara dan tidak dapat mengikuti kejuaraan atau pelatihan yang diselenggarakan oleh PERBAKIN.',
      pic: 'pic-grad-4',
      views: 678
    },
    {
      id: 5,
      judul: 'Rapat Kerja Provinsi 2026 Digelar di Boven Digoel',
      slug: 'raker-provinsi-2026',
      kategori: 'Kegiatan',
      tanggal: '2026-06-20',
      excerpt: 'Membahas program kerja tahun 2026 dan persiapan PORPROV Papua Selatan yang akan datang.',
      content: 'Rapat Kerja Provinsi (Rakerprov) PERBAKIN Papua Selatan 2026 digelar di Boven Digoel pada 18-20 Juni 2026. Rapat ini membahas program kerja tahunan, anggaran, dan persiapan untuk PORPROV Papua Selatan yang akan datang.\n\nSeluruh pengurus provinsi, perwakilan klub, dan beberapa tokoh olahraga daerah hadir dalam rapat ini. Beberapa keputusan penting dihasilkan, termasuk penambahan kuota atlet untuk PORPROV dan standardisasi fasilitas latihan di seluruh klub anggota.',
      pic: 'pic-grad-5',
      views: 534
    },
    {
      id: 6,
      judul: 'Update Regulasi Kategori Air Rifle & Air Pistol 2026',
      slug: 'update-regulasi-2026',
      kategori: 'Regulasi',
      tanggal: '2026-06-10',
      excerpt: 'PERBAKIN pusat mengeluarkan regulasi baru yang berlaku mulai Juli 2026 untuk kategori senjata api pendek.',
      content: 'PERBAKIN Pusat telah mengeluarkan regulasi terbaru untuk kategori Air Rifle dan Air Pistol yang akan berlaku efektif mulai 1 Juli 2026. Beberapa perubahan signifikan meliputi penyesuaian bobot senjata, jarak tembak untuk kategori yunior, dan prosedur pengecekan equipment.\n\nSeluruh klub dan atlet diimbau untuk mengunduh regulasi terbaru melalui halaman Regulasi di website ini. Sosialisasi lebih lanjut akan dilakukan dalam sesi daring yang akan diumumkan kemudian.',
      pic: 'pic-grad-6',
      views: 423
    }
  ],
  klub: [
    { id: 1, nama: 'Merauque Shooting Club', singkatan: 'MSC', kabupaten: 'Merauke', tahun: 2017, atlet: 32, kategori: 4, status: 'Aktif', deskripsi: 'Klub tertua dan terbesar di Papua Selatan, dengan 4 kategori senjata.' },
    { id: 2, nama: 'Boven Digoel Shooters', singkatan: 'BDS', kabupaten: 'Boven Digoel', tahun: 2019, atlet: 18, kategori: 3, status: 'Aktif', deskripsi: 'Klub yang fokus pada pembinaan atlet muda di wilayah Boven Digoel.' },
    { id: 3, nama: 'Mappi Shooting Community', singkatan: 'MSC-M', kabupaten: 'Mappi', tahun: 2020, atlet: 14, kategori: 2, status: 'Aktif', deskripsi: 'Komunitas menembak yang fokus pada kategori Air Rifle dan Air Pistol.' },
    { id: 4, nama: 'Asmat Air Rifle Club', singkatan: 'AARC', kabupaten: 'Asmat', tahun: 2021, atlet: 11, kategori: 2, status: 'Aktif', deskripsi: 'Klub khusus kategori Air Rifle untuk pemula dan atlet muda.' },
    { id: 5, nama: 'Merauke Pistol & Rifle', singkatan: 'MPR', kabupaten: 'Merauke', tahun: 2018, atlet: 22, kategori: 3, status: 'Aktif', deskripsi: 'Klub dengan fokus pada Pistol dan Senapan di Merauke.' },
    { id: 6, nama: 'Club Boven Digoel Baru', singkatan: 'CBDB', kabupaten: 'Boven Digoel', tahun: 2024, atlet: 8, kategori: 1, status: 'Persiapan', deskripsi: 'Klub baru yang sedang dalam tahap pengembangan.' }
  ],
  kategori: [
    { id: 1, nama: 'Air Rifle', icon: '🎯', gambar: 'assets/kategori-air-rifle.jpg', kaliber: '4.5mm (.177)', peluru: 'Timah / Lead pellet (mimis)', tipe: 'Senapan Angin (PCP / Spring)', jarak: '10m (Olympic), 18-41m (multi range)', olympicEvent: '10m Air Rifle, 50m Rifle 3 Positions', deskripsi: 'Senapan angin yang menggunakan tenaga udara bertekanan (PCP) atau pegas untuk menembakkan peluru timah kecil. Umum untuk pemula dan kompetisi indoor karena tidak ada recoil besar, sehingga fokus pada teknik napas, trigger control, dan posisi menembak.', regulasi: 'Sasaran paper target 10 ring pada jarak 10m untuk nomor Olympic. Sistem elektronik untuk penilaian skor digital.' },
    { id: 2, nama: 'Air Pistol', icon: '🔫', gambar: 'assets/kategori-air-pistol.jpg', kaliber: '4.5mm (.177)', peluru: 'Timah / Lead pellet (mimis)', tipe: 'Pistol Angin (PCP / CO2)', jarak: '10m (Olympic)', olympicEvent: '10m Air Pistol', deskripsi: 'Pistol angin sekali tembak (single shot) yang dipegang dengan satu tangan. Kompetisi pada jarak 10 meter dengan sasaran ring 10. Fokus pada kontrol napas, konsentrasi, dan bidikan presisi tinggi. Berat pistol minimal 0.8kg sesuai standar ISSF.', regulasi: '60 tembakan percobaan + 60 tembakan pertandingan dalam waktu 105 menit (pria) atau 75 menit (putri).' },
    { id: 3, nama: 'Senapan', icon: '🎯', gambar: 'assets/kategori-senapan.jpg', kaliber: '.22 LR (smallbore), 7.62mm (bigbore)', peluru: 'Tembaga / Lead bullet', tipe: 'Senapan Api', jarak: '50m (smallbore), 100m & 300m (bigbore)', olympicEvent: '50m Rifle 3 Positions, 300m Rifle', deskripsi: 'Senapan api untuk kategori presisi jarak jauh. Nomor Olympic 50m Rifle 3 Positions menggunakan senapan .22 LR dengan 3 posisi menembak: berdiri, tiarap, dan berlutut. Senapan bigbore (7.62mm) digunakan untuk jarak 100m dan 300m.', regulasi: '3 posisi: 3×20 tembakan (berdiri, tiarap, berlutut). Total 120 tembakan + 60 percobaan.' },
    { id: 4, nama: 'Pistol', icon: '🔫', gambar: 'assets/kategori-pistol.jpg', kaliber: '.22 LR (smallbore), 9mm / .32 / .38 WC (centerfire)', peluru: 'Tembaga / Lead bullet', tipe: 'Pistol Api', jarak: '25m & 50m', olympicEvent: '25m Rapid Fire Pistol, 25m Pistol (W), 50m Pistol', deskripsi: 'Pistol api untuk kategori presisi dan kecepatan. Terdiri dari beberapa nomor: 25m Rapid Fire (8 detik, 6 detik, 4 detik per 5 tembakan), 25m Pistol Putri (presisi + rapid fire), dan 50m Pistol (pria, 60 tembakan presisi).', regulasi: '25m Rapid Fire: 60 tembakan (8+6+4 detik). 25m Pistol Putri: 30 presisi + 30 rapid fire. 50m Pistol: 60 tembakan presisi dalam 120 menit.' }
  ],
  regulasi: [
    { id: 1, judul: 'AD/ART PERBAKIN 2025 (Anggaran Dasar & Anggaran Rumah Tangga)', deskripsi: 'Dokumen resmi Anggaran Dasar dan Anggaran Rumah Tangga PERBAKIN periode 2023-2027. Menjadi pedoman tertinggi organisasi.', tahun: '2025', ukuran: 'PDF · 76 MB · 237 halaman', file: 'assets/ad-art-perbakin-2025.pdf' },
    { id: 2, judul: 'Peraturan Umum Menembak PERBAKIN 2026', deskripsi: 'Peraturan standar untuk semua kategori perlombaan di lingkungan PERBAKIN.', tahun: '2026', ukuran: 'PDF · 2.4 MB' },
    { id: 3, judul: 'Regulasi Air Rifle & Air Pistol', deskripsi: 'Peraturan khusus untuk kategori senjata angin, berlaku mulai Juli 2026.', tahun: '2026', ukuran: 'PDF · 1.8 MB' },
    { id: 4, judul: 'Standar Keamanan Lapangan Tembak', deskripsi: 'Protokol keselamatan yang wajib diterapkan di semua lapangan tembak anggota.', tahun: '2025', ukuran: 'PDF · 1.2 MB' },
    { id: 5, judul: 'Pedoman Penjurian & Wasit Juri', deskripsi: 'Panduan lengkap untuk calon wasit dan juri perlombaan.', tahun: '2025', ukuran: 'PDF · 3.1 MB' },
    { id: 6, judul: 'Aturan Pendirian Klub Baru', deskripsi: 'Syarat dan prosedur untuk mendirikan klub menembak baru di bawah PERBAKIN.', tahun: '2025', ukuran: 'PDF · 0.9 MB' }
  ],
  pengurus: [
    // BADAN PELINDUNG
    { id: 1, group: 'Badan Pelindung', jabatan: 'Ketua', nama: 'Gubernur Papua Selatan' },
    { id: 2, group: 'Badan Pelindung', jabatan: 'Anggota', nama: 'Danrem 174/ATW' },
    { id: 3, group: 'Badan Pelindung', jabatan: 'Anggota', nama: 'Danlantamal XI' },
    { id: 4, group: 'Badan Pelindung', jabatan: 'Anggota', nama: 'Danlanud J.A. Dimara' },
    { id: 5, group: 'Badan Pelindung', jabatan: 'Anggota', nama: 'LO. Polda Papua Selatan' },
    { id: 6, group: 'Badan Pelindung', jabatan: 'Anggota', nama: 'KONI Provinsi Papua Selatan' },

    // BADAN PENASEHAT
    { id: 7, group: 'Badan Penasehat', jabatan: 'Ketua', nama: 'Kapolres Merauke' },
    { id: 8, group: 'Badan Penasehat', jabatan: 'Anggota', nama: 'Kasiintel Korem 174/ATW' },

    // PENGURUS INTI
    { id: 9, group: 'Pengurus Inti', jabatan: 'Ketua Umum', nama: 'Steven Abraham, A.MD.', isKetua: true, foto: 'assets/foto-ketua.jpg' },
    { id: 10, group: 'Pengurus Inti', jabatan: 'Wakil Ketua Umum I', nama: 'Sucahyo Agung Dwi Ariyanto, SIP, M.Si.' },
    { id: 11, group: 'Pengurus Inti', jabatan: 'Wakil Ketua Umum II', nama: 'Drs. Ramadayanto, MM.' },
    { id: 12, group: 'Pengurus Inti', jabatan: 'Sekretaris Umum', nama: 'Dr. H. Ahmad Ali Muddin, SH, M.KN.' },
    { id: 13, group: 'Pengurus Inti', jabatan: 'Wakil Sekretaris Umum', nama: 'Pamudi Wiyono' },
    { id: 14, group: 'Pengurus Inti', jabatan: 'Bendahara Umum', nama: 'Cliff Sintiti Tan' },
    { id: 15, group: 'Pengurus Inti', jabatan: 'Wakil Bendahara Umum', nama: 'Yosep Hendra' },

    // BIDANG TEMBAK SASARAN
    { id: 16, group: 'Bidang Tembak Sasaran', jabatan: 'Ketua', nama: 'Celsius Herman Onthoni, Ir.' },
    { id: 17, group: 'Bidang Tembak Sasaran', jabatan: 'Wakil Ketua', nama: 'H. Dzulkarnaen' },
    { id: 18, group: 'Bidang Tembak Sasaran', jabatan: 'Anggota', nama: 'Sofi Indratno' },
    { id: 19, group: 'Bidang Tembak Sasaran', jabatan: 'Anggota', nama: 'Ismail Burhan' },
    { id: 20, group: 'Bidang Tembak Sasaran', jabatan: 'Anggota', nama: 'Heri Marjoko' },

    // BIDANG BERBURU
    { id: 21, group: 'Bidang Berburu', jabatan: 'Ketua', nama: 'Sunarjo, S.Sos, MM.' },
    { id: 22, group: 'Bidang Berburu', jabatan: 'Wakil Ketua', nama: 'Edi Petrus' },
    { id: 23, group: 'Bidang Berburu', jabatan: 'Anggota', nama: 'Ali Imron' },
    { id: 24, group: 'Bidang Berburu', jabatan: 'Anggota', nama: 'Anton Juniharto Tjong' },
    { id: 25, group: 'Bidang Berburu', jabatan: 'Anggota', nama: 'Eko Rudi Susanto' },

    // BIDANG TEMBAK REAKSI
    { id: 26, group: 'Bidang Tembak Reaksi', jabatan: 'Ketua', nama: 'Rivai T. Lanuru' },
    { id: 27, group: 'Bidang Tembak Reaksi', jabatan: 'Wakil Ketua', nama: 'Adi Galing Pratama' },
    { id: 28, group: 'Bidang Tembak Reaksi', jabatan: 'Anggota', nama: 'Dede Aldhi Syam' },
    { id: 29, group: 'Bidang Tembak Reaksi', jabatan: 'Anggota', nama: 'Fatur Rahman' },
    { id: 30, group: 'Bidang Tembak Reaksi', jabatan: 'Anggota', nama: 'Christian Hadi Kusuma' },

    // BIDANG ORGANISASI
    { id: 31, group: 'Bidang Organisasi', jabatan: 'Ketua', nama: 'Alvin Wijaya' },
    { id: 32, group: 'Bidang Organisasi', jabatan: 'Wakil Ketua', nama: 'Abdul Cholik' },
    { id: 33, group: 'Bidang Organisasi', jabatan: 'Anggota', nama: 'Pramono Heri Lestari' },
    { id: 34, group: 'Bidang Organisasi', jabatan: 'Anggota', nama: 'Puji Eko Budi Utomo' },
    { id: 35, group: 'Bidang Organisasi', jabatan: 'Anggota', nama: 'Muhamad Arifin' },

    // KOMISI KEPELATIHAN & PERWASITAN
    { id: 36, group: 'Komisi Kepelatihan & Perwasitan', jabatan: 'Ketua', nama: 'Rudhy Noer Wachid Aldilla' },
    { id: 37, group: 'Komisi Kepelatihan & Perwasitan', jabatan: 'Wakil Ketua', nama: 'Maradus Situmorang, S.IP' },
    { id: 38, group: 'Komisi Kepelatihan & Perwasitan', jabatan: 'Anggota', nama: 'Nasrul, ST.' },
    { id: 39, group: 'Komisi Kepelatihan & Perwasitan', jabatan: 'Anggota', nama: 'Nardianto' },
    { id: 40, group: 'Komisi Kepelatihan & Perwasitan', jabatan: 'Anggota', nama: 'Vivian Almanda' },

    // KOMISI PEMBINAAN PRESTASI
    { id: 41, group: 'Komisi Pembinaan Prestasi', jabatan: 'Ketua', nama: 'Edi Purwanto, S.Sos' },
    { id: 42, group: 'Komisi Pembinaan Prestasi', jabatan: 'Wakil Ketua', nama: 'Irfan Mansuri' },
    { id: 43, group: 'Komisi Pembinaan Prestasi', jabatan: 'Anggota', nama: 'Yeneke Yovita' },
    { id: 44, group: 'Komisi Pembinaan Prestasi', jabatan: 'Anggota', nama: 'Ilham Salam' },
    { id: 45, group: 'Komisi Pembinaan Prestasi', jabatan: 'Anggota', nama: 'Heni Sugiyanto' },

    // BIDANG SARANA & PRASARANA
    { id: 46, group: 'Bidang Sarana & Prasarana', jabatan: 'Ketua', nama: 'Putu Suta Arnaya, S.Sos' },
    { id: 47, group: 'Bidang Sarana & Prasarana', jabatan: 'Wakil Ketua', nama: 'Pitoyo' },
    { id: 48, group: 'Bidang Sarana & Prasarana', jabatan: 'Anggota', nama: 'Erwin' },
    { id: 49, group: 'Bidang Sarana & Prasarana', jabatan: 'Anggota', nama: 'Ahmad Padjoja' },
    { id: 50, group: 'Bidang Sarana & Prasarana', jabatan: 'Anggota', nama: 'Bagus Bintoro' },

    // BIDANG HUMAS & KEMITRAAN
    { id: 51, group: 'Bidang Humas & Kemitraan', jabatan: 'Ketua', nama: 'Maman Budianto' },
    { id: 52, group: 'Bidang Humas & Kemitraan', jabatan: 'Wakil Ketua', nama: 'Budiyanto, S.IP' },
    { id: 53, group: 'Bidang Humas & Kemitraan', jabatan: 'Anggota', nama: 'Utus Wahyudianto' },
    { id: 54, group: 'Bidang Humas & Kemitraan', jabatan: 'Anggota', nama: 'Iwan Trilaksana' },
    { id: 55, group: 'Bidang Humas & Kemitraan', jabatan: 'Anggota', nama: 'Iswa Fatkurahman' },

    // BIDANG USAHA & DANA
    { id: 56, group: 'Bidang Usaha & Dana', jabatan: 'Ketua', nama: 'Frengki Tirtayasa' },
    { id: 57, group: 'Bidang Usaha & Dana', jabatan: 'Wakil Ketua', nama: 'Heru Sutikno' },
    { id: 58, group: 'Bidang Usaha & Dana', jabatan: 'Anggota', nama: 'Khomarudin' },
    { id: 59, group: 'Bidang Usaha & Dana', jabatan: 'Anggota', nama: 'Sony Christian Kondo' },
    { id: 60, group: 'Bidang Usaha & Dana', jabatan: 'Anggota', nama: 'Suwandiiono' }
  ],
  pengumuman: [
    { id: 1, judul: 'HASIL SELEKSI WASIT JURI LISENSI B TAHUN 2026 PROVINSI PAPUA SELATAN', tanggal: '2026-07-16' },
    { id: 2, judul: 'SELEKSI TERBUKA JABATAN PIMPINAN KLUB PERBAKIN TAHUN 2026', tanggal: '2026-06-29' },
    { id: 3, judul: 'PANDUAN PENDAFTARAN ANGGOTA BARU PERBAKIN PAPUA SELATAN', tanggal: '2026-06-18' },
    { id: 4, judul: 'PEMBERITAHUAN LIBUR SEKRETARIAT PROVINSI TANGGAL 17 AGUSTUS 2026', tanggal: '2026-08-10' }
  ],
  kontak: {
    sekretariat: {
      label: 'Sekretariat',
      icon: '📍',
      iconBg: '#fde7e7',
      iconColor: '#991b1b',
      judul: 'Jl. Parakomando, Merauke',
      subjudul: 'Papua Selatan 99611'
    },
    whatsapp: {
      label: 'WhatsApp Admin',
      icon: '💬',
      iconBg: '#25D366',
      iconColor: '#ffffff',
      judul: '0853-4400-7008',
      subjudul: 'Senin–Sabtu, 08:00–17:00 WIT',
      nomor: '6285344007008'
    },
    email: {
      label: 'Email',
      icon: '✉️',
      iconBg: '#dbeafe',
      iconColor: '#1d4ed8',
      judul: 'sekretariat@perbakinpapsel.id',
      subjudul: ''
    }
  },
  galeri: [
    { id: 1, judul: 'Pembukaan Kejuaraan 2026', kategori: 'Foto', tanggal: '2026-07-18', pic: 'pic-grad-1' },
    { id: 2, judul: 'Pelatihan Wasit Juri', kategori: 'Foto', tanggal: '2026-07-05', pic: 'pic-grad-2' },
    { id: 3, judul: 'Rapat Kerja Provinsi', kategori: 'Foto', tanggal: '2026-06-20', pic: 'pic-grad-3' },
    { id: 4, judul: 'Atlet Berangkat ke Kejurnas', kategori: 'Foto', tanggal: '2026-07-10', pic: 'pic-grad-4' },
    { id: 5, judul: 'Latihan Klub Merauque', kategori: 'Foto', tanggal: '2026-06-15', pic: 'pic-grad-5' },
    { id: 6, judul: 'Pertandingan Persahabatan', kategori: 'Foto', tanggal: '2026-06-08', pic: 'pic-grad-6' },
    { id: 7, judul: 'Pelatihan Pemula', kategori: 'Foto', tanggal: '2026-05-25', pic: 'pic-grad-7' },
    { id: 8, judul: 'Penyerahan Trofi', kategori: 'Foto', tanggal: '2026-05-15', pic: 'pic-grad-8' }
  ]
};

// Initialize data from localStorage or defaults
function initializeData() {
  if (!localStorage.getItem(STORAGE_KEYS.initialized)) {
    Object.keys(DEFAULT_DATA).forEach(key => {
      localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(DEFAULT_DATA[key]));
    });
    localStorage.setItem(STORAGE_KEYS.initialized, 'true');
  }
}

function getData(key) {
  initializeData();
  const data = localStorage.getItem(STORAGE_KEYS[key]);
  return data ? JSON.parse(data) : [];
}

function setData(key, data) {
  localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(data));
}

function addItem(key, item) {
  const data = getData(key);
  const maxId = data.reduce((max, d) => Math.max(max, d.id || 0), 0);
  item.id = maxId + 1;
  if (key === 'berita' && !item.slug) {
    item.slug = item.judul.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  if (key === 'berita' && !item.views) item.views = 0;
  data.unshift(item);
  setData(key, data);
  return item;
}

function updateItem(key, id, updates) {
  const data = getData(key);
  const idx = data.findIndex(d => d.id === id);
  if (idx >= 0) {
    data[idx] = { ...data[idx], ...updates };
    setData(key, data);
    return data[idx];
  }
  return null;
}

function deleteItem(key, id) {
  const data = getData(key);
  const filtered = data.filter(d => d.id !== id);
  setData(key, filtered);
}

function resetData() {
  Object.keys(STORAGE_KEYS).forEach(k => localStorage.removeItem(STORAGE_KEYS[k]));
  initializeData();
}

// Utilities
function formatDate(dateStr) {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const d = new Date(dateStr);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
