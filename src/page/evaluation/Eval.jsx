import { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

function Eval() {
  const [waktuUpload, setWaktuUpload] = useState(new Date());
  const [jenis, setJenis] = useState("");
  const [isi, setIsi] = useState("");

  const handleInsert = async () => {
    const formData = new FormData();
    formData.append("Waktu", waktuUpload.toISOString().substring(0, 16));
    formData.append("Jenis", jenis);
    formData.append("Isi", isi);

    try {
      const response = await fetch("https://api.inforsa-unmul.org/aspirasi/insert", {
        method: "POST",
        body: formData,
      });
        if (response.ok) {
            await Swal.fire({
              title: "Berhasil",
              text: "Aspirasi berhasil dimasukkan",
              icon: "success"
            }).then(() => {
              window.location.href = '/';
            });
        } 
        else {
            const errorMessage = await response.text();
            alert(`Gagal mengunggah Aspirasi. Error: ${errorMessage}`);
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
    <Helmet>
        <title>Aspirasi Mahasiswa</title>
    </Helmet>
    <Container>
      <Typography variant="h4" align="center" fontWeight='bold' gutterBottom>
        Upload Aspirasi
      </Typography>
      <div className="text-center">
        <p className="text-md">
            Aspirasi ini berisi tentang kritik, saran hingga evaluasi untuk birokrat, prodi maupun INFORSA itu sendiri
            silakan isi dengan baik.
        </p>
      </div>
      <form onSubmit={handleInsert}>

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Jenis Aspirasi</InputLabel>
          <Select
            label="Departemen"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <MenuItem value="Birokrat">Birokrat</MenuItem>
            <MenuItem value="Prodi">Prodi</MenuItem>
            <MenuItem value="Dosen">Dosen</MenuItem>
            <MenuItem value="BPI">BPI</MenuItem>
            <MenuItem value="BPH">BPH</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Waktu"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={waktuUpload.toISOString().substring(0, 16)}
          onChange={(e) => setWaktuUpload(new Date(e.target.value))}
          margin="normal"
        />
        <h2 className="ml-1 my-2 font-light text-lg">Isi Aspirasi</h2>
        <ReactQuill theme="snow" value={isi} onChange={setIsi} />

        <Button onClick={handleInsert} type="button" variant="contained" color="primary" style={{ marginTop: "16px" }}>
          Upload
        </Button>
      </form>
    </Container>
    </div>
  );
}

export default Eval;
