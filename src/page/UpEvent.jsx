import { useState, useEffect } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import Swal from "sweetalert2";

function UpEvent() {
  const [title, setTitle] = useState("");
  const [cardtitle, setcardtitle] = useState("");
  const [cardsub, setcardsub] = useState("");
  const [isi, setisi] = useState("");

  const handleInsert = async () => {
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("CardTitle", cardtitle);
    formData.append("CardSubTitle", cardsub);
    formData.append("Isi", isi);

    try {
      const response = await fetch("http://localhost:8000/api/event", {
        method: "POST",
        body: formData,
      });
        if (response.ok) {
            await Swal.fire({
              title: "Berhasil",
              text: "Kegiatan berhasil ditambahkan",
              icon: "success"
            }).then(() => {
              window.location.href = '/MoreEvent';
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
        Upload UPCOMING EVENT
      </Typography>

      <form onSubmit={handleInsert}>
        <TextField
          label="Bulan Kegiatan"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
            label="Nama Kegiatan"
            fullWidth
            variant="outlined"
            value={cardtitle}
            onChange={(e) => setcardtitle(e.target.value)}
            margin="normal"
            />
        <TextField
          label="Sub deskripsi"
          fullWidth
          variant="outlined"
          value={cardsub}
          onChange={(e) => setcardsub(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Deskripsi Kegiatan"
          fullWidth
          variant="outlined"
          value={isi}
          onChange={(e) => setisi(e.target.value)}
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

export default UpEvent;
