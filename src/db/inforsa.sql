-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Mar 2024 pada 14.01
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
  `Role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`ID_Admin`, `Username`, `Pass`, `Role`) VALUES
(5, 'admin', 'inforsa2024unmul', 'admin'),
(18, 'root', 'superadmin', 'superadmin');

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
  `Isi` varchar(5000) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `artikel`
--

INSERT INTO `artikel` (`ID_Konten`, `ID_Admin`, `Judul`, `Depart`, `Gambar`, `Waktu`, `Isi`, `Status`) VALUES
(152, 5, 'Testing ke 2', 'KPSDM', 'Gambar-1707029427479-634527975.jpeg', '2024-02-04', '<p>A</p>', 'rilis'),
(153, 5, 'B', 'KPSDM', 'Gambar-1707058614328-346441615.jpeg', '2024-02-04', '<p>B</p>', 'rilis');

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
  MODIFY `ID_Admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `artikel`
--
ALTER TABLE `artikel`
  MODIFY `ID_Konten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

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
