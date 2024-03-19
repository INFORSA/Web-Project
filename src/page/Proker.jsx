import { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";

function Proker() {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [depart, setDepart] = useState("");

  const handleInsert = async () => {
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Depart", depart);
    formData.append("Start_Date", formatDateForInput(start));
    formData.append("End_Date", formatDateForInput(end));

    try {
      const response = await fetch("https://api.inforsa-unmul.org/api/proker", {
        method: "POST",
        body: formData,
      });
        if (response.ok) {
            await Swal.fire({
              title: "Berhasil",
              text: "Kegiatan berhasil ditambahkan",
              icon: "success"
            }).then(() => {
              window.location.href = '/';
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

  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-5">
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Timeline
      </Typography>

      <form onSubmit={handleInsert}>
        <TextField
          label="Nama Kegiatan"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Departemen</InputLabel>
          <Select
            label="Departemen"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
          >
            <MenuItem value="BPI">BPI</MenuItem>
            <MenuItem value="KPSDM">KPSDM</MenuItem>
            <MenuItem value="RPPM">RPPM</MenuItem>
            <MenuItem value="RELEKAT">RELEKAT</MenuItem>
            <MenuItem value="KOMINFO">KOMINFO</MenuItem>
            <MenuItem value="INKREF">INKREF</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Kegiatan dimulai"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={formatDateForInput(start)}
          onChange={(e) => setStart(new Date(e.target.value))}
          margin="normal"
        />

        <TextField
          label="Kegiatan Berakhir"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={formatDateForInput(end)}
          onChange={(e) => setEnd(new Date(e.target.value))}
          margin="normal"
        />

        </form>
        <Button onClick={handleInsert} type="button" variant="contained" color="primary" style={{ marginTop: "16px" }}>
            Upload
        </Button>
    </Container>
    </div>
  );
}

export default Proker;
