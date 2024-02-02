import response from './response.mjs';
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inforsa'
});

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage: storage });

server.post('/api/insert', upload.single('Gambar'), (req, res) => {
  const { Judul, Waktu, Depart, Isi } = req.body;
  const Gambar = req.file.filename; 
  const ID_AdminValue = 6; 

  const sqlInsert = `INSERT INTO artikel (ID_Admin, Judul, Waktu, Depart, Gambar, Isi) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [ID_AdminValue,Judul, Waktu, Depart, Gambar, Isi];

  db.query(sqlInsert, values, (err, fields) => {
    if (err) {
      console.error('Error = ',err);
      res.status(500).send('Gagal menyimpan data.');
    } else {
      if (fields.affectedRows) {
        response(200, "INI INSERT", "BERHASIL", res);
      } else {
        console.log("Gagal menyimpan data.");
      }
      console.log(fields);
    }
  });
});

server.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM artikel";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// server.get('/api/getmenu', (req, res) => {
//     const sqlSelect = "SELECT * FROM keranjang";
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     });
// });

// server.get('/api/totalharga', (req, res) => {
//     const sqlSelect = "SELECT SUM(Harga) as Totalharga, SUM(Jumlah) as Totaljumlah FROM keranjang";
//     db.query(sqlSelect, (err, rows) => {
//         res.send(rows);
//     });
// });

// server.put('/api/update', (req, res) => {
//     const { Menu, Jumlah, Harga } = req.body;
//     const sqlUpdate = `UPDATE keranjang SET Jumlah = ${Jumlah}, Harga=${Harga} WHERE Menu ='${Menu}'`;
//     db.query(sqlUpdate, (err, fields) => {
//         if (err) throw err;
//         if (fields.affectedRows) {
//             response(200, 'INI UPDATE', 'BERHASIL', res);
//         } else {
//             console.log("gagal");
//         }
//         console.log(fields);
//     });
// });

// server.delete('/api/del', (req, res) => {
//     const sqlUpdate = `TRUNCATE TABLE keranjang`;
//     db.query(sqlUpdate, (err, fields) => {
//         if (err) throw err;
//         if (fields.affectedRows) {
//             console.log("gagal");
//         } else {
//             response(200, 'INI del', 'BERHASIL', res);
//         }
//     });
// });

db.connect((err) => {
    if (err) throw err;
    console.log("Sukses terhubung");
    server.get("/", (req, res) => {
        res.send("OK");
    });
});

server.listen(8000, () => {
    console.log("Started");
});
