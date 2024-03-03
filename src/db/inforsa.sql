-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Jan 2024 pada 15.24
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inforsa`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `ID_Admin` int(11) NOT NULL,
  `Username` varchar(25) NOT NULL,
  `Pass` varchar(16) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `Gambar` varchar(500) NOT NULL,
  `Gender` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`ID_Admin`, `Username`, `Pass`, `Role`, `Gambar`, `Gender`) VALUES
(5, 'admin', 'admin', 'admin', '', 'pria'),
(6, 'writer', '123', 'writer', 'uploads/sokyung.jpeg', 'perempuan'),
(7, 'writer2', '123', 'writer', '', 'pria'),
(8, 'admin2', '123', 'admin', '', 'pria'),
(9, 'user', '123', 'user', '', 'perempuan'),
(10, 'Zaki', '123', 'user', '', 'pria'),
(11, 'Zaki2', '123', 'writer', 'uploads/ryujin.jpg', 'pria'),
(16, 'fauzan', 'zaki', 'writer', '', 'pria');

-- --------------------------------------------------------

--
-- Struktur dari tabel `artikel`
--

CREATE TABLE `artikel` (
  `ID_Konten` int(11) NOT NULL,
  `ID_Admin` int(11) NOT NULL,
  `Judul` varchar(500) NOT NULL,
  `Depart` varchar(50) NOT NULL,
  `Gambar` varchar(500) NOT NULL,
  `Waktu` date NOT NULL,
  `Isi` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `artikel`
--

INSERT INTO `artikel` (`ID_Berita`, `ID_Admin`, `Judul`, `Jenis`, `Gambar`, `Waktu`, `Isi`) VALUES
(25, 6, 'Hasil Timnas Indonesia U-22 vs Timor Leste U-22 di', 'olahraga', 'uploads/hasil.jpg', '2023-05-07', '<p><strong>PHNOM PENH </strong>– Tim Nasional <a href=\"https://www.okezone.com/tag/timnas-indonesia-u-22\">(Timnas) Indonesia U-22</a> menang telak 3-0 atas Timor Leste U-22 di laga lanjutan Grup A <a href=\"https://www.okezone.com/tag/sea-games-2023\">SEA Games 2023</a>, pada Minggu (7/5/2023) sore WIB. Bermain di Olympic Stadium, Phnom Penh, Kamboja, pasukan Indra Sjafri yang sempat melempem di babak pertama nyatanya berhasil mengamuk di babak kedua.</p><figure class=\"image\"><img src=\"https://s3-ap-southeast-1.amazonaws.com/images.accesstrade.co.id/4e0cb6fb5fb446d1c92ede2ed8780188/logo_20230120075449.png\" alt=\"Shopee\"></figure><p>Voucher Special Okezone</p><p>5.5 BAGI-BAGI CUAN</p><p>Diskon hingga 70% | Flash Sale Rp 99 | Gratis Ongkir Rp 0 | Big Brand Rush Hour Diskon s/d 80%</p><p><strong>S &amp; K</strong></p><p>LIHAT<br>KODE<strong>YSX</strong>Berakhir Sebelum<strong>📅 31 May 2023</strong></p><p>Ya, awalnya Timnas Indonesia U-22 kesulitan melawan Timor Leste meski unggul 1-0 di babak pertama berkat gol Ramadhan Sananta. Baru di babak kedua Garuda Muda mampu bangkit dan mencetak dua gol tambahan lewat brace Fajar Fathur.</p><p>&nbsp;</p><p>Pause</p><p>Unmute</p><p>&nbsp;</p><p>Loaded: 4.65%</p><p>&nbsp;</p><p>Remaining Time&nbsp;-11:21</p><p>Close Player<a href=\"https://unibots.in/\"><img src=\"https://cdn.unibotscdn.com/ubplayer/logo/ub.svg\" alt=\"Unibots.in\"></a></p><p>&nbsp;</p><p>Dengan kemenangan itu, Timnas Indonesia U-22 lolos ke semifinal SEA Games 2023.</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/07/51/2809787/hasill-sea-games-2023-fajar-fathur-antar-timnas-indonesia-u-22-unggul-2-0-atas-timor-leste-oNCImoBWHe.jpg\" alt=\"\"><a href=\"https://bola.okezone.com/read/2023/05/07/51/2809787/hasil-sea-games-2023-fajar-fathur-antar-timnas-indonesia-u-22-unggul-2-0-atas-timor-leste\">Hasil SEA Games 2023: Fajar Fathur Antar Timnas Indonesia U-22 Unggul 2-0 atas Timor Leste</a></p><p><strong>Jalannya Pertandingan</strong></p><p><strong>Babak Pertama</strong></p><p>Timnas Indonesia U-22 masih memainkan sejumlah pemain andalan untuk melawan Timor Leste. Namun, beberapa posisi terlihat ada pergantian pemain.</p><p>Dengan skema tersebut, Garuda Muda justru kesulitan melawan Timor Leste. Pada awal laga, pasukan Indra Sjafri sempat beberapa kali mengancam gawang Timor Leste.</p><p>Namun, setelahnya Timor Leste benar-benar mengurung pertahanan Timnas Indonesia. Beberapa kali gawang Muhammad Adisatryo terancam.</p><p>Beruntung lini pertahanan Timnas Indonesia U-22 masih solid hingga sulit diruntuhkan. Beberapa peluang Timor Leste U-22 pun memang berbahaya, namun mereka gagal mengeksekusi kesempatan itu dengan baik.</p><p><img src=\"https://img.okezone.com/okz/500/library/images/2023/05/07/yjf1e5pyj6qt2qaweh1p_18832.jpg\" alt=\"Timnas Indonesia U-22 vs Timor Leste U-22\"></p><p>Pada saat laga ingin berakhir, Timnas Indonesia U-22 berhasil mencetak gol berkat aksi Ramadhan Sananta. Meneruskan umpan Fajar Fathur, Sananta melakukan sundulan yang masuk ke gawang Timor Leste.</p><p>Alhasil, skor 1-0 pun menutup babak pertama. Indra Sjafri tentunya tetap harus perlu melakukan sesuatu untuk membuat Timnas Indonesia U-22 bermain lebih baik di babak kedua, sebab mereka kesulitan melawan Timor Leste.</p><p>Perlu diingat, kemenangan atas Timor Leste U-22 akan memastikan skuad Garuda Muda lolos ke babak semifinal SEA Games 2023.</p>'),
(26, 6, 'Daftar Top Skor SEA Games 2023: Fajar Fathur Memim', 'olahraga', 'uploads/daftar top.jpg', '2023-05-07', '<p><strong>DAFTAR </strong>top skor<a href=\"https://www.okezone.com/tag/sea-games-2023\"> SEA Games 2023</a> menarik untuk diketahui. Apalagi ada dua nama pemain Tim Nasional (<a href=\"https://www.okezone.com/tag/timnas-indonesia-u-22\">Timnas) Indonesia U-22</a> yang menguasai peringkat pertama dan kedua dari daftar pencetak gol terbanyak di cabang olahraga (cabor) sepakbola putra SEA Games 2023 tersebut.</p><figure class=\"image\"><img src=\"https://s3-ap-southeast-1.amazonaws.com/images.accesstrade.co.id/4e0cb6fb5fb446d1c92ede2ed8780188/logo_20230120075449.png\" alt=\"Shopee\"></figure><p>Voucher Special Okezone</p><p>5.5 BAGI-BAGI CUAN</p><p>Diskon hingga 70% | Flash Sale Rp 99 | Gratis Ongkir Rp 0 | Big Brand Rush Hour Diskon s/d 80%</p><p><strong>S &amp; K</strong></p><p>LIHAT<br>KODE<strong>YSX</strong>Berakhir Sebelum<strong>📅 31 May 2023</strong></p><p>Pertama ada nama Muhammad Fajar Fathur Rahman yang kini bertengger di puncak klasemen daftar top skor SEA Games 2023. Pemain Borneo FC itu memimpin dengan torehan empat golnya.</p><p>&nbsp;</p><p>Pause</p><p>Unmute</p><p>&nbsp;</p><p>Loaded: 0.64%</p><p>&nbsp;</p><p>Remaining Time&nbsp;-10:16</p><p>Close Player<a href=\"https://unibots.in/\"><img src=\"https://cdn.unibotscdn.com/ubplayer/logo/ub.svg\" alt=\"Unibots.in\"></a></p><p>&nbsp;</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/07/51/2809804/klasemen-grup-a-sea-games-2023-kelar-laga-timnas-indonesia-u-22-vs-timor-leste-nyaman-di-puncak-garuda-muda-kunci-tiket-ke-semifinal-lfYCx62qUE.jpg\" alt=\"\"><a href=\"https://bola.okezone.com/read/2023/05/07/51/2809804/klasemen-grup-a-sea-games-2023-kelar-laga-timnas-indonesia-u-22-vs-timor-leste-nyaman-di-puncak-garuda-muda-kunci-tiket-ke-semifinal\">Klasemen Grup A SEA Games 2023 Kelar Laga Timnas Indonesia U-22 vs Timor Leste: Nyaman di Puncak, Garuda Muda Kunci Tiket ke Semifinal</a></p><p>Gol pertama Fajar Fathur dicetak ketika Timnas Indonesia U-22 menang 3-0 atas Filipina. Lalu Fajar Fathur kembali bersinar di laga kontra Myanmar dengan mencetak satu gol dan membawa Garuda Muda menang 5-0.</p><p>Terbaru, Fajar Fathur mencetak brace kala Timnas Indonesia U-22 menang atas Timor Leste dalam laga yang berakhir pada Minggu (7/5/2023) sore WIB. Timnas Indonesia U-22 yang awalnya kesulitan meski sedang unggul 1-0 atas Timor Leste berhasil keluar dari tekanan berkat Fajar Fathur.</p><p><img src=\"https://img.okezone.com/okz/500/library/images/2023/05/07/getx7r6dcnwg4hs4umde_15632.jpg\" alt=\"Fajar Fathur Rahman\"></p><p>Fajar Fathur mencetak dua gol di laga tersebut dan mengunci kemenangan Timnas Indonesia U-22. Dalam laga tersebut, Fajar Fathur layak disebut man of the match, sebab bahkan gol pertama yang dicetak Ramadhan Sananta pun berawal dari assist Fajar Fathur.</p><p>Sementara itu, Sananta yang juga mencetak gol di laga Timnas Indonesia U-22 vs Timor Leste kini berada di peringkat kedua dalam daftar top skor SEA Games 2023. Pemain PSM Makassar itu tercatat sudah mengoleksi tiga gol.</p>'),
(27, 6, 'Klasemen Grup A SEA Games 2023 Kelar Laga Timnas Indonesia U-22 vs Timor Leste: Nyaman di Puncak, Garuda Muda Kunci Tiket ke Semifinal', 'olahraga', 'uploads/klasemen.jpg', '2023-05-07', '<p><strong>KLASEMEN </strong>Grup A <a href=\"https://www.okezone.com/tag/sea-games-2023\">SEA Games 2023</a> kelar laga <a href=\"https://www.okezone.com/tag/timnas-indonesia-u-22\">Timnas Indonesia U-22</a> vs Timor Leste menarik untuk diketahui. Sebab Garuda Muda yang baru saja menang 3-0 atas Timor Leste kini makin mantap bertengger di posisi puncak dengan koleksi sembilan poin.</p><figure class=\"image\"><img src=\"https://s3-ap-southeast-1.amazonaws.com/images.accesstrade.co.id/4e0cb6fb5fb446d1c92ede2ed8780188/logo_20230120075449.png\" alt=\"Shopee\"></figure><p>Voucher Special Okezone</p><p>5.5 BAGI-BAGI CUAN</p><p>Diskon hingga 70% | Flash Sale Rp 99 | Gratis Ongkir Rp 0 | Big Brand Rush Hour Diskon s/d 80%</p><p><strong>S &amp; K</strong></p><p>LIHAT<br>KODE<strong>YSX</strong>Berakhir Sebelum<strong>📅 31 May 2023</strong></p><p>Ya, Timnas Indonesia U-22 baru saja menang atas Timor Leste di laga lanjutan Grup A SEA Games 2023 pada Minggu (7/5/2023) sore WIB. Bermain di Olympic Stadium, Phnom Penh, Kamboja, pasukan Indra Sjafri menang 3-0 berkat gol dari Ramadhan Sananta dan brace Fajar Fathur.</p><p>&nbsp;</p><p>Pause</p><p>Unmute</p><p>&nbsp;</p><p>Loaded: 0.57%</p><p>&nbsp;</p><p>Remaining Time&nbsp;-11:27</p><p>Close Player<a href=\"https://unibots.in/\"><img src=\"https://cdn.unibotscdn.com/ubplayer/logo/ub.svg\" alt=\"Unibots.in\"></a></p><p>&nbsp;</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/07/51/2809793/hasil-timnas-indonesia-u-22-vs-timor-leste-u-22-di-sea-games-2023-menang-3-0-garuda-muda-lolos-ke-semifinal-XGtNqkRaVR.jpg\" alt=\"\"><a href=\"https://bola.okezone.com/read/2023/05/07/51/2809793/hasil-timnas-indonesia-u-22-vs-timor-leste-u-22-di-sea-games-2023-menang-3-0-garuda-muda-lolos-ke-semifinal\">Hasil Timnas Indonesia U-22 vs Timor Leste U-22 di SEA Games 2023: Menang 3-0, Garuda Muda Lolos ke Semifinal</a></p><p>Hasil positif atas Timor Leste itu menjadi kemenangan ketiga Timnas Indonesia U-22 di fase grup. Hal itu berarti Garuda Muda masih sempurna karena mampu melibas tiga laga dengan kemenangan.</p><p>Luar biasanya lagi, tim asuhan Indra Sjafri itu masih clean sheet alias belum kebobolan sama sekali. Seperti saat melawan Filipina, Timnas Indonesia U-22 menang 3-0, lalu kala berjumpa Myanmar menang 5-0, dan terakhir dalam laga melawan Timor Leste, Garuda Muda ngamuk dan menang 5-0.</p><p>Kini Timnas Indonesia U-22 tinggal menyisakan satu pertandingan lagi di fase grup, yakni melawan tim tuan rumah Kamboja. Laga pamungkas Grup A SEA Games 2023 itu akan berlangsung pada Rabu 10 Mei 2023 pukul 19.00 WIB.</p><p><img src=\"https://img.okezone.com/okz/500/library/images/2023/05/07/3p2r550lvkxcu6qiz6u9_12692.jpg\" alt=\"Timnas Indonesia U-22 vs Timor Leste U-22\"></p><p>Meski masih menyisakan satu laga lagi, Timnas Indonesia U-22 sudah mengunci satu tiket ke semifinal. Laga melawan Kamboja pun akan menentukan apakah Timnas Indonesia U-22 bisa menjadi jawara grup atau tidak.</p><p>Pada posisi kedua sendiri saat ini masih dikuasai oleh Kamboja yang baru memainkan dua laga. Tim tuan rumah baru akan memainkan laga ketiganya malam ini, pukul 19.00 WIB dengan melawan Myanmar.</p>'),
(28, 6, 'Profil Dine Mutiara Istri Sahrul Gunawan, CEO Rumah Sakit dengan Dua Anak', 'artis', 'uploads/profil.jpg', '2023-05-07', '<p><strong>JAKARTA</strong> - <a href=\"https://www.okezone.com/tag/Sahrul-Gunawan\">Sahrul Gunawan</a> dan Dine Mutiara akhirnya resmi sah menjadi pasangan suami istri. Pernikahan yang digelar tertutup di Gedong Putih, Kabupaten Bandung Barat (KBB), ini banyak membuat netizen penasaran.</p><p>Tak terkecuali tentang sosok Dine Mutiara yang kini telah sah menjadi istri Sahrul Gunawan. Siapa sangka, bak memang sudah ditakdirkan berjodoh, status Dine juga sama seperti Sahrul.</p><p>&nbsp;</p><p>Pause</p><p>Unmute</p><p>&nbsp;</p><p>Loaded: 6.39%</p><p>&nbsp;</p><p>Remaining Time&nbsp;-11:22</p><p>Close Player<a href=\"https://unibots.in/\"><img src=\"https://cdn.unibotscdn.com/ubplayer/logo/ub.svg\" alt=\"Unibots.in\"></a></p><p>&nbsp;</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/06/33/2809438/sah-sahrul-gunawan-resmi-jadi-suami-dine-mutiara-xF5Vgdt8Vx.jpeg\" alt=\"\"><a href=\"https://celebrity.okezone.com/read/2023/05/06/33/2809438/sah-sahrul-gunawan-resmi-jadi-suami-dine-mutiara\">Sah, Sahrul Gunawan Resmi Jadi Suami Dine Mutiara</a></p><p><img src=\"https://img.okezone.com/okz/500/library/images/2023/05/06/y9gnhytuvylmiki89ioq_12021.jpeg\" alt=\"Profil Dine Mutiara, istri Sahrul Gunawan\"></p><p>Jika Sahrul Gunawan merupakan seorang duda tiga anak, Dine ternyata merupakan seorang janda yang telah memiliki dua anak dari pernikahan sebelumnya.</p><p>Namun tak banyak yang tahu, bahwa Dine Mutiara merupakan bos dari salah satu rumah sakit, yakni CEO dari AMC Hospital, yang berada di Jalan Raya Cileunyi No.01 Bandung.</p><p>Perempuan kelahiran Jakarta, 21 Desember 1980 ini juga menjabat sebagai ketua TPPS (Tim Percepatan Penurunan Stunting) sehingga sering berkunjung ke berbagai rumah sakit yang ada di Bandung.</p><p>Tak hanya sebagai CEO di rumah sakit, Dine Mutiara juga merupakan seorang politisi perempuan, yakni Wakil Ketua Partai Demokrat DPD Jawa Barat. Ia merupakan lulusan Magister Manajemen Bisnis Universitas Katolik Parahyangan.</p><p>Dine juga kerap membagikan potret kesehariannya melalui akun Instagramnya, @dine.pearl. Dari beberapa unggahannya terlihat, perempuan satu ini memiliki gaya hidup nan mewah dan tampilan fashion yang berkelas.</p>'),
(29, 6, 'Dilaporkan Tenri Anisa ke Polisi, Virgoun Janji Akan Kooperatif', 'olahraga', 'uploads/virgoun.jpg', '2023-05-03', '<p><strong>JAKARTA</strong> - Tenri Ajeng Anisa turut melaporkan <a href=\"https://www.okezone.com/tag/virgoun\">Virgoun</a> ke Polda Metro Jaya pada Jumat, 5 Mei 2023 kemarin. Wanita yang dituding sebagai pelakor dalam rumah tangga Virgoun dan Inara Rusli itu diketahui melaporkan pasangan tersebut atas tudingan pencemaran nama baik.</p><figure class=\"image\"><img src=\"https://s3-ap-southeast-1.amazonaws.com/images.accesstrade.co.id/4e0cb6fb5fb446d1c92ede2ed8780188/logo_20230120075449.png\" alt=\"Shopee\"></figure><p>Voucher Special Okezone</p><p>5.5 BAGI-BAGI CUAN</p><p>Diskon hingga 70% | Flash Sale Rp 99 | Gratis Ongkir Rp 0 | Big Brand Rush Hour Diskon s/d 80%</p><p><strong>S &amp; K</strong></p><p>LIHAT<br>KODE<strong>YSX</strong>Berakhir Sebelum<strong>📅 31 May 2023</strong></p><p>Usai dilaporkan, Virgoun dan juga tim kuasa hukumnya mengaku sudah mengetahui hal tersebut. Namun, Sandy Arifin mengaku masih belum bisa berkata banyak terkait laporan Tenri Anisa, lantaran ia sendiri belum mempelajari laporan tersebut.</p><p>&nbsp;</p><p>Loaded: 10.37%</p><p>\"Kami sudah mendapat kabar, informasi, insyaallah kami dari tim kuasa hukum Virgoun hari Senin akan mengkonfirmasi, mempelajari laporan bilamana memang klein kami memang dilaporkan,\" kata Sandy Arifin, selaku kuasa hukum Virgoun saat ditemui beberapa waktu lalu.\"Beliau juga sudah tahu, intinya kita menghormati proses hukum bilamana ada laporan,\" lanjutnya.</p><p><img src=\"https://img.okezone.com/okz/500/library/images/2020/11/19/rvgdf0p8bbbu9onsny9x_21884.jpg\" alt=\"Virgoun\"></p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/05/33/2808789/bantah-settingan-tenri-anisa-mantap-laporkan-virgoun-dan-inara-rusli-PTCSlIJXkF.jpg\" alt=\"\"><a href=\"https://celebrity.okezone.com/read/2023/05/05/33/2808789/bantah-settingan-tenri-anisa-mantap-laporkan-virgoun-dan-inara-rusli\">Bantah Settingan, Tenri Anisa Mantap Laporkan Virgoun dan Inara Rusli</a></p><p>Sementara itu, Sandy memastikan jika pihaknya akan kooperatif apabila Virgoun kelak mendapatkan panggilan untuk menjalani pemeriksaan oleh pihak kepolisian.</p><p>\"Bila juga ada panggilan kami akan kooperatif, akan menghormati proses penyidikan, misalnya memang ada laporan yang dilaporkan kepada klien kami,\" bebernya.</p>'),
(30, 7, 'Penerbangan Reguler Selama KTT ASEAN di Labuan Bajo', 'politik', 'uploads/penerbangan.jpg', '2023-05-03', '<p><strong>JAKARTA - </strong><a href=\"https://www.okezone.com/tag/menhub\"><strong>Menteri Perhubungan</strong></a> (Menhub) Budi Karya Sumadi memastikan tidak menutup penerbangan reguler selama penyelenggaraan Konferensi Tingkat Tinggi (KTT) ke-42 ASEAN 2023 di Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur (NTT) pada 9 hingga 11 Mei 2023 mendatang.</p><p>“Selama kegiatan<a href=\"https://www.okezone.com/tag/ktt-asean\"><strong> KTT ASEAN </strong></a>berlangsung, kami tidak menutup akses penerbangan reguler dari dan ke Labuan Bajo, bahkan operasional bandara kami buka 24 jam dan ada penambahan atau extra flight, untuk penerbangan reguler,” ujar Menhub dalam keterangan resminya, Minggu (7/5/2023).</p><p>Meski begitu, Menhub mengatakan akan melakukan pengaturan dan pemenuhan aspek keselamatan, keamanan, dan kelancaran lima jenis penerbangan yaitu VVIP, militer, charter, private, maupun penerbangan reguler.</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/07/337/2809813/jelang-ktt-asean-menhub-jamin-keamanan-lalu-lintas-penerbangan-bWZkhpwQVK.jpg\" alt=\"\"><a href=\"https://nasional.okezone.com/read/2023/05/07/337/2809813/jelang-ktt-asean-menhub-jamin-keamanan-lalu-lintas-penerbangan\">Jelang KTT ASEAN, Menhub Jamin Keamanan Lalu Lintas Penerbangan</a></p><p>“Di satu sisi, kami berupaya meminimalkan dampak gangguan penerbangan para tamu undangan dan delegasi. Di sisi lain, kami juga berupaya semaksimal mungkin agar masyarakat masih bisa masih bisa berwisata menikmati keindahan Labuan Bajo di saat penyelenggaraan KTT ASEAN. Ini adalah momentum yang baik untuk mempromosikan Labuan Bajo secara nasional maupun internasional,” kata Menhub.</p>'),
(31, 7, 'Jelang KTT ASEAN, Menhub Jamin Keamanan Lalu Lintas Penerbangan', 'politik', 'uploads/jelang.jpg', '2023-05-02', '<p>(Menhub) Budi Karya Sumadi pun menjamin keamanan lalu lintas penerbangan dari dan ke Bandara Komodo, Labuan Bajo. Kesiapan itu telah dilaporkan Menhub kepada Presiden Jokowi saat peninjauan lokasi <a href=\"https://www.okezone.com/tag/ktt-asean\"><strong>KTT ASEAN</strong></a>, Minggu (7/5/2023).</p><p>Menhub mengatakan akan melakukan pemenuhan aspek keselamatan, keamanan dan kelancaran lima jenis penerbangan yaitu VVIP, militer, charter, private, maupun penerbangan reguler. Bahkan, telah dilakukan sejumlah pengaturan untuk menyeimbangkan pergerakan kelima jenis penerbangan tersebut.</p><p>“Selama kegiatan KTT ASEAN berlangsung, kami tidak menutup akses penerbangan reguler dari dan ke Labuan Bajo, bahkan operasional bandara kami buka 24 jam dan ada penambahan atau extra flight, untuk penerbangan reguler,” ujar Menhub dalam keterangan resminya.</p><p>Pengaturan tersebut tertuang dalam Surat Edaran (SE) Direktur Jenderal Perhubungan Udara Nomor SE 6 Tahun 2023 tentang Pengaturan Operasional Penerbangan Selama Penyelenggaraan KTT ASEAN ke-42 Tahun 2023 di Bandar Udara Komodo, Labuan Bajo, yang telah diterbitkan pada 18 April 2023 dan mulai berlaku pada 7 sampai 13 Mei 2023.</p>'),
(32, 7, 'Elite PAN Sebut Erick Thohir Sosok yang Dibutuhkan Indonesia', 'politik', 'uploads/erick.jpg', '2023-05-02', '<p><strong>JAKARTA </strong>- Wakil Ketua Umum PAN Yandri Susanto, mendoakan agar<a href=\"https://www.okezone.com/tag/erick-thohir\"><strong>&nbsp;</strong></a>mendoakan agar Menteri BUMN yang juga Ketua Umum (Ketum) PSSI, <a href=\"https://www.okezone.com/tag/erick-thohir\"><strong>Erick Thohir</strong></a> sebagai Wakil Presiden. Elite&nbsp;<a href=\"https://www.okezone.com/tag/pan\"><strong>PAN </strong></a>itu pun menyebut bahwa sosok seperti Erick Thohir dibutuhkan Indonesia.</p><figure class=\"image\"><img src=\"https://s3-ap-southeast-1.amazonaws.com/images.accesstrade.co.id/4e0cb6fb5fb446d1c92ede2ed8780188/logo_20230120075449.png\" alt=\"Shopee\"></figure><p>Voucher Special Okezone</p><p>5.5 BAGI-BAGI CUAN</p><p>Diskon hingga 70% | Flash Sale Rp 99 | Gratis Ongkir Rp 0 | Big Brand Rush Hour Diskon s/d 80%</p><p><strong>S &amp; K</strong></p><p>LIHAT<br>KODE<strong>YSX</strong>Berakhir Sebelum<strong>📅 31 May 2023</strong></p><p>\"Republik ini butuh sosok Bang Erick Thohir, saya mendoakan insyaallah besok menjadi wakil presiden,” ujar Yandri dilansir Antara, Minggu (7/5/2023).</p><p>Yandri mengatakan, Erick Thohir sosok yang mampu memberikan kesejukan dan menentramkan bagi seluruh masyarakat Indonesia. Karenanya, pemimpin andalan dan kepercayaan Presiden Jokowi ini dinyatakan oleh Yandri cocok untuk menjadi pendamping presiden selanjutnya.</p><p>\"Kami lihat, sosok Bang Erick Thohir ini sangat menyejukkan dan menenteramkan buat kita semua,\" ujarnya.</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/07/320/2809803/pertumbuhan-ekonomi-asean-belum-kebal-krisis-global-OiIx9F195U.jpg\" alt=\"\"><a href=\"https://economy.okezone.com/read/2023/05/07/320/2809803/pertumbuhan-ekonomi-asean-belum-kebal-krisis-global\">Pertumbuhan Ekonomi ASEAN Belum Kebal Krisis Global</a></p><p>Seperti diketahui, Erick Thohir menjadi salah satu sosok pemimpin potensial untuk menjadi Wakil Presiden Indonesia selanjutnya. Berdasarkan hasil survei berbagai lembaga, nama Erick Thohir berada di posisi teraras dalam bursa cawapres Pilpres 2024.</p><p>baca juga:</p><p><img src=\"https://img.okezone.com/okz/300/content/2023/05/07/320/2809803/pertumbuhan-ekonomi-asean-belum-kebal-krisis-global-OiIx9F195U.jpg\" alt=\"\"><a href=\"https://economy.okezone.com/read/2023/05/07/320/2809803/pertumbuhan-ekonomi-asean-belum-kebal-krisis-global\">Pertumbuhan Ekonomi ASEAN Belum Kebal Krisis Global</a></p><p>Seperti diungkapkan oleh hasil survei bulan April Poltracking Indonesia, Erick Thohir berada di posisi pertama bursa cawapres dengan elektabilitas 17,1 persen. Ia mengungguli para politisi lama seperti Gubernur Jawa Barat (Jabar) Ridwan Kamil, Menparekraf Sandiaga Uno dan Ketum Partai Demokrat Agus Harimurti Yudhoyono (AHY).</p>'),
(33, 6, 'Oknum Jaksa Diduga Peras Guru SD Bakal Diperiksa Kejati Sumut ', 'politik', 'uploads/korupsi-manipulasi_169.jpeg', '2023-05-15', '<p>Jakarta - Viral seorang jaksa berinisial EKT diduga memeras guru SD bernama Sarlita di Sumatera Utara. Oknum jaksa dan guru SD tersebut akan diperiksa terkait kasus itu.<br>Kasi Penkum Kejati Sumut Yos A Tarigan mengatakan adapun pemeriksaan itu sesuai dengan Surat Perintah Inspeksi Kasus dengan nomor Surat Perintah Nomor PRINT-23/L.2/H.I.1/05/2023 tanggal 12 Mei 2023 untuk melakukan Inspeksi Kasus terhadap oknum Jaksa EKT.<br><br>\"Atas dasar surat perintah tersebut hari Senin tanggal 15 Mei 2023 akan dilakukan pemeriksaan terhadap oknum Jaksa EKT, pihak pelapor dan pihak-pihak terkait,\" kata Kasi Penkum Kejati Sumut Yos A Tarigan, dilansir detikSumut, Senin (15/5/2023).<br><br>Baca juga:<br>Meski Dibantah, Jaksa di Batu Bara Diduga Peras Guru SD Dicopot-Diperiksa<br>Untuk pemeriksaan terhadap kasus itu, Kejati Sumut telah menyerahkan jaksa EKT ke Bidang Pengawasan untuk pemeriksaan lebih lanjut.<br><br>\"Jaksa EKT telah diserahkan ke Bidang Pengawasan untuk pemeriksaan lebih lanjut,\" terangnya.<br><br>Apabila nantinya dari pemeriksaan dan pengawasan membuktikan oknum jaksa tersebut bersalah, Kejati Sumut akan menindaklanjuti sesuai aturan hukum yang berlaku.</p><figure class=\"image\"><img src=\"https://akcdn.detik.net.id/community/media/visual/2022/05/11/korupsi-manipulasi_169.jpeg?w=700&amp;q=90\" alt=\"poster\"></figure>'),
(40, 11, 'ASD3', 'international', 'uploads/Input_ASD.png', '2023-05-15', '<p>ASD3</p>');

-- --------------------------------------------------------

--
-- Struktur dari tabel `events`
--

CREATE TABLE `events` (
  `ID_Berita` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `CardTitle` varchar(500) NOT NULL,
  `CardSubtitle` varchar(500) NOT NULL,
  `Isi` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `events`
--

INSERT INTO `events` (`ID_Berita`, `Title`, `CardTitle`, `CardSubtitle`, `Isi`) VALUES
(39, 'February 2024', 'OPREC 2024', 'Open Recruitment pengurus INFORSA 2024', 'Ini merupakan kegiatan awal untuk membuka pendaftaran anggota pengurus untuk INFORSA periode 2024/2025.'),
(40, 'Oktober 2024', 'APLIKASI 2024', 'Akselerasi Pengenalan Lingkungan Kampus Sistem Informasi', 'Ajang pengenalan lingkungan kampus untuk mahasiswa baru Program Studi Sistem Informasi tahun 2024'),
(41, 'Maret', 'RAKER INFORSA 2024', 'Rapat kerja kepengurusan 2024', 'Rapat penyampaian proker untuk satu tahun periode kepengurusan kedepan.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `proker`
--

CREATE TABLE `proker` (
  `ID_Proker` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Depart` varchar(50) NOT NULL,
  `Start_Date` datetime NOT NULL,
  `End_Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `proker`
--

INSERT INTO `proker` (`ID_Proker`, `Title`, `Depart`, `Start_Date`, `End_Date`) VALUES
(3, 'OPREC', 'BPI', '2024-02-01 21:54:00', '2024-02-11 21:54:00'),
(4, 'Rapat perdana KPSDM', 'KPSDM', '2024-02-18 15:00:00', '2024-02-18 17:30:00'),
(6, 'Rapat perdana RELEKAT', 'RELEKAT', '2024-02-17 20:00:00', '2024-02-17 22:00:00'),
(7, 'Rapat perdana KOMINFO', 'KOMINFO', '2024-02-18 14:00:00', '2024-02-18 16:30:00'),
(8, 'Rapat perdana Biro INKREF', 'INKREF', '2024-02-18 16:00:00', '2024-02-18 17:30:00'),
(9, 'Rapat perdana RPPM', 'RPPM', '2024-02-18 16:30:00', '2024-02-18 20:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID_Admin`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indeks untuk tabel `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`ID_Konten`),
  ADD UNIQUE KEY `Judul` (`Judul`),
  ADD KEY `admin3` (`ID_Admin`);

--
-- Indeks untuk tabel `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`ID_Berita`);

--
-- Indeks untuk tabel `proker`
--
ALTER TABLE `proker`
  ADD PRIMARY KEY (`ID_Proker`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `ID_Admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `artikel`
--
ALTER TABLE `artikel`
  MODIFY `ID_Berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT untuk tabel `events`
--
ALTER TABLE `events`
  MODIFY `ID_Berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT untuk tabel `proker`
--
ALTER TABLE `proker`
  MODIFY `ID_Proker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `artikel`
--
ALTER TABLE `artikel`
  ADD CONSTRAINT `admin3` FOREIGN KEY (`ID_Admin`) REFERENCES `admin` (`ID_Admin`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
