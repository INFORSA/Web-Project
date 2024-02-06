-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Feb 2024 pada 14.56
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

INSERT INTO `artikel` (`ID_Konten`, `ID_Admin`, `Judul`, `Depart`, `Gambar`, `Waktu`, `Isi`) VALUES
(151, 6, 'Testing', 'KPSDM', 'Gambar-1706972891205-868984862.jpeg', '2024-02-03', '<p>KPSDM is here</p>'),
(152, 5, 'Testing ke 2', 'KPSDM', 'Gambar-1707029427479-634527975.jpeg', '2024-02-04', '<p>A</p>'),
(153, 5, 'B', 'KPSDM', 'Gambar-1707058614328-346441615.jpeg', '2024-02-04', '<p>B</p>');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`ID_Konten`),
  ADD UNIQUE KEY `Judul` (`Judul`),
  ADD KEY `admin3` (`ID_Admin`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `artikel`
--
ALTER TABLE `artikel`
  MODIFY `ID_Konten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

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
