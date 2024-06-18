import { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";

function Arsip() {
  const [noSurat, setNoSurat] = useState("");
  const [tanggal, setTanggal] = useState(new Date());
  const [tujuan, setTujuan] = useState("");
  const [gambar, setGambar] = useState(null);
  const [perihal, setPerihal] = useState("");
  const [jenis, setJenis] = useState("");
  const Token = localStorage.getItem('token');
  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      const allowedExtensions = ["jpg", "jpeg", "png", 'PNG', 'JPG', 'JPEG'];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
  
      if (!allowedExtensions.includes(fileExtension)) {
        alert("Hanya file JPG, JPEG, dan PNG yang diizinkan.");
        e.target.value = ""; 
      } else {
        setGambar(e.target.files[0])
      }
    }
  };

  const handleInsert = async () => {
    const formData = new FormData();
    formData.append("Token", Token);
    formData.append("No_Surat", noSurat);
    formData.append("Tujuan", tujuan);
    formData.append("Tanggal", tanggal.toISOString().substring(0, 16));
    formData.append("Perihal", perihal);
    formData.append("Foto_Surat", gambar);
    formData.append("Jenis", jenis);

    try {
      const response = await fetch("https://api.inforsa-unmul.org/api/arsip", {
        method: "POST",
        body: formData,
      });
        if (response.ok) {
            await Swal.fire({
              title: "Berhasil",
              text: "Surat berhasil ditambahkan",
              icon: "success"
            }).then(() => {
              window.location.href = '/';
            });
        } 
        else {
            const errorMessage = await response.text();
            alert(`Gagal mengunggah surat. Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error("Terjadi kesalahan.Error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-5">
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Arsip Surat
      </Typography>

      <form onSubmit={handleInsert}>
        <TextField
          label="No Surat"
          fullWidth
          variant="outlined"
          value={noSurat}
          onChange={(e) => setNoSurat(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Tanggal Surat"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={tanggal.toISOString().substring(0, 16)}
          onChange={(e) => setTanggal(new Date(e.target.value))}
          margin="normal"
        />

        <TextField
          label="Tujuan Surat"
          fullWidth
          variant="outlined"
          value={tujuan}
          onChange={(e) => setTujuan(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Gambar"
          type="file"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={(e) => handleUpload(e)}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Jenis Surat</InputLabel>
          <Select
            label="Jenis Surat"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <MenuItem value="SuratMasuk">Surat Masuk</MenuItem>
            <MenuItem value="SuratKeluar">Surat Keluar</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Perihal Surat"
          fullWidth
          variant="outlined"
          value={perihal}
          onChange={(e) => setPerihal(e.target.value)}
          margin="normal"
        />

        <Button onClick={handleInsert} type="button" variant="contained" color="primary" style={{ marginTop: "16px" }}>
          Upload
        </Button>
      </form>
    </Container>
    </div>
  );
}

export default Arsip;
