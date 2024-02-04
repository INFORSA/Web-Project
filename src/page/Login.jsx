import { TextField, Button } from "@mui/material";
import image from '../assets/inforsa.png'
import { useEffect, useState } from "react";
import Axios from 'axios';
import Swal from 'sweetalert2';
import CryptoJS from "crypto-js";

function Login(){
    useEffect(()=>{
        getAcc();
        window.scrollTo(0, 0);
    },[])
    const secretKey = 'INFORSASIUNMUL2024'
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Acc,setAcc]= useState([]);
    const getAcc = async () => {
        const response = await Axios.get("http://localhost:8000/api/getAcc");
        setAcc(response.data);
      };
    const generateToken = () => {
        const timestamp = Date.now().toString();
        const randomString = Math.random().toString(36).substring(7);
        const expirationTime = Date.now() + 60 * 60 * 1000;
        const tokenPayload = { timestamp, randomString, expirationTime };
      
        const token = CryptoJS.HmacSHA256(JSON.stringify(tokenPayload), secretKey).toString(CryptoJS.enc.Hex);
      
        return token;
      };
    const handleProcess = async () =>{
        const found = Acc.find(item => item.Username === Username && item.Pass === Password);
        const generatedToken = generateToken();
        console.log('Generated Token:', generatedToken);
        localStorage.setItem('token', generatedToken)
        localStorage.setItem('ID', found.ID_Admin)
        const Token = generatedToken
        const ID = found.ID_Admin
        const requestData = {
            userId: ID,
            userToken: Token
          };
        fetch('http://localhost:8000/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respon dari server:', data);
        })
        .catch(error => {
            console.error('Gagal melakukan permintaan ke server:', error);
        });
        if(found){
            try {
                await Swal.fire({
                    title: "Berhasil Login",
                    text: "Welcome back Admin INFORSA",
                    icon: "success"
                  }).then(() => {
                    window.location.href = '/';
                  });
            } catch (error) {
                console.error(error);
                Swal.fire({
                    title: "Gagal Login",
                    text: "Terjadi kesalahan saat mencoba login.",
                    icon: "error"
                });
            }
        }
    }
    return(
        <div className="min-h-screen bg-login flex items-center justify-center">
            <div className='bg-white p-4 rounded-2xl'>
                <div className="flex justify-center">
                    <img className="w-24" src={image} alt="" />
                </div>
                <h1 className='text-4xl text-center font-bold font-serif'>Welcome Back</h1>
                <form onSubmit={handleProcess}>
                    <TextField
                        label="Username"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    <Button onClick={handleProcess} type="button" variant="contained" color="success" className="mt-2 w-full">
                        Login
                    </Button>
                </form>
            </div> 
        </div>
    )
}

export default Login;