import { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";

function Upload() {
  const [judul, setJudul] = useState("");
  const [waktuUpload, setWaktuUpload] = useState(new Date());
  const [jenis, setJenis] = useState("");
  const [gambar, setGambar] = useState(null);
  const [isi, setIsi] = useState("");

  console.log(gambar);
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
    formData.append("Judul", judul);
    formData.append("Waktu", waktuUpload.toISOString().substring(0, 16));
    formData.append("Depart", jenis);
    formData.append("Gambar", gambar);
    formData.append("Isi", isi);

    try {
      const response = await fetch("http://localhost:8000/api/insert", {
        method: "POST",
        body: formData,
      });
        if (response.ok) {
            Swal.fire({
              title: "Berhasil",
              text: "Artikel berhasil ditambahkan",
              icon: "success"
            });
        } 
        else {
            const errorMessage = await response.text();
            alert(`Gagal mengunggah artikel. Error: ${errorMessage}`);
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
        Upload Kegiatan
      </Typography>

      <form onSubmit={handleInsert}>
        <TextField
          label="Judul"
          fullWidth
          variant="outlined"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Waktu Upload"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={waktuUpload.toISOString().substring(0, 16)}
          onChange={(e) => setWaktuUpload(new Date(e.target.value))}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Departemen</InputLabel>
          <Select
            label="Departemen"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <MenuItem value="KPSDM">KPSDM</MenuItem>
            <MenuItem value="RPPM">RPPM</MenuItem>
            <MenuItem value="RELEKAT">RELEKAT</MenuItem>
            <MenuItem value="KOMINFO">KOMINFO</MenuItem>
            <MenuItem value="INKREF">INKREF</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Gambar"
          type="file"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          onChange={(e) => handleUpload(e)}
          margin="normal"
        />

        <ReactQuill theme="snow" value={isi} onChange={setIsi} />

        <Button onClick={handleInsert} type="button" variant="contained" color="primary" style={{ marginTop: "16px" }}>
          Upload
        </Button>
      </form>
    </Container>
    </div>
  );
}

export default Upload;
