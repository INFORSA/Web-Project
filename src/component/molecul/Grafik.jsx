import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Library untuk membaca file spreadsheet

function GrafikCapaian (){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil file spreadsheet (contoh menggunakan SheetJS)
        const response = await fetch('https://docs.google.com/spreadsheets/d/1GQ-BKW8ySPl-U82qGu8aQthanfHlKi2f4luZAWkugdM/edit?usp=drive_web&ouid=104016271076145448655');
        const blob = await response.blob();

        // Membaca file spreadsheet
        const reader = new FileReader();
        reader.onload = (e) => {
          const workbook = XLSX.read(e.target.result, { type: 'binary' });

          // Mendapatkan data dari spreadsheet (misalnya dari sheet pertama)
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          // Mengonversi data menjadi format yang sesuai dengan kebutuhan
          const formattedData = parsedData.map(row => ({
            column1: row[0],
            column2: row[1],
            column3: row[1],
          }));

          // Set data yang telah diambil ke dalam state
          setData(formattedData);
        };

        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Spreadsheet Data</h2>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            {/* Tambahkan kolom lain jika diperlukan */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              {/* Tambahkan kolom lain jika diperlukan */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GrafikCapaian;
