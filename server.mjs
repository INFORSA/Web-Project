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

// const db = mysql.createConnection({
//   host: 'mysql-165456-0.cloudclusters.net',
//   user: 'admin',
//   password: "evfovqhI",
//   database: 'inforsa'
// });

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

const authDataMap = new Map();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '.uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});

const upload = multer({ storage: storage });

server.post('/api/insert', upload.single('Gambar'), (req, res) => {
  db.connect(() => {
    const { Token, Judul, Waktu, Depart, Isi } = req.body;
    const Gambar = req.file.filename; 
    const authData = authDataMap.get(Token).userId;
    console.log('ini authentication',authData)
    if(authData){
      const ID_AdminValue = authData; 
      const Status = 'un-rilis';
      const sqlInsert = `INSERT INTO artikel (ID_Admin, Judul, Waktu, Depart, Gambar, Isi, S) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const values = [ID_AdminValue,Judul, Waktu, Depart, Gambar, Isi, Status];
    
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
    }
  })
});

server.post('/api/arsip', upload.single('Gambar'), (req, res) => {
  db.connect(() => {
    const { Token, No_Surat, Tujuan, Tanggal, Perihal } = req.body;
    const Gambar = req.file.filename; 
    const authData = authDataMap.get(Token).userId;
    console.log('ini authentication',authData)
    if(authData){
      const ID_AdminValue = authData; 
      const sqlInsert = `INSERT INTO arsip_surat (No_Surat, ID_Admin, Tujuan, Tanggal, Perihal, Foto_Surat) VALUES (?, ?, ?, ?, ?, ?)`;
      const values = [No_Surat, ID_AdminValue, Tujuan, Tanggal, Perihal, Gambar];
    
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
    }
  })
});


server.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM artikel";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

server.get('/api/Artikel/:ID_Konten', (req, res) => {
  const { ID_Konten } = req.params;
  const sqlSelect = `SELECT * FROM artikel WHERE ID_Konten = ?`;
  const values = [ID_Konten];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

server.get('/api/getProker', (req, res) => {
  const sqlSelect = "SELECT * FROM proker";
  db.query(sqlSelect, (err, result) => {
      res.send(result);
  });
});

server.get('/api/Upcoming', (req, res) => {
  const sqlSelect = "SELECT * FROM events";
  db.query(sqlSelect, (err, result) => {
      res.send(result);
  });
});

server.get('/api/getAcc', (req, res) => {
  const sqlSelect = "SELECT * FROM admin";
  db.query(sqlSelect, (err, result) => {
      res.send(result);
  });
});

server.post('/api/auth', (req, res) => {
  const { userId, userToken } = req.body;
  authDataMap.set(userToken,{ userId, userToken });
  console.log('login auth',authDataMap);
  const responseData = {
    status: 'success',
    message: 'Autentikasi berhasil!',
    userId: userId,
    userToken:userToken
  };
  res.json(responseData);
});

server.post('/api/proker', upload.none(), (req, res) => {
  const { Title, Depart, Start_Date, End_Date } = req.body;
  console.log("Received Request Body:", req.body);
  const sqlInsert = `INSERT INTO proker (Title, Depart, Start_Date, End_Date) VALUES (?, ?, ?, ?)`;
  const values = [Title, Depart, Start_Date, End_Date];
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

server.post('/api/event', upload.none(), (req, res) => {
  const { Title, CardTitle, CardSubTitle, Isi } = req.body;
  const sqlInsert = `INSERT INTO events (Title, CardTitle, CardSubTitle, Isi) VALUES (?, ?, ?, ?)`;
  const values = [Title, CardTitle, CardSubTitle, Isi];
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

server.post('/api/arsip_surat', upload.none(), (req, res) => {
  const { No_Surat, ID_Admin, Tujuan, Tanggal, Perihal } = req.body;
  console.log("Received Request Body:", req.body);
  const sqlInsert = `INSERT INTO arsip_surat (No_Surat, ID_Admin, Tujuan, Tanggal, Perihal) VALUES (?, ?, ?, ?, ?)`;
  const values = [No_Surat, ID_Admin, Tujuan, Tanggal, Perihal];
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

server.get('/api/getSurat', (req, res) => {
  const { ID_Admin } = req.params;
  const sqlSelect = "SELECT FROM arsip_surat WHERE ID_Admin = ?";
  const values = [ID_Admin];
  db.query(sqlSelect, values, (err, result) => {
      res.send(result);
  });
});

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