import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import image from '../../assets/inforsa.png'
import { useContext, useEffect, useState } from "react";
import Axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { scaleDown } from "../../framerMotion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

function Login(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    // const secretKey = import.meta.env.VITE_SECRETKEY
    const { login } = useContext(AuthContext);
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleProcess = async () =>{
        if (!Username || !Password) {
            Swal.fire({
                title: "Data Invalid",
                icon: "error",
              });
            return;
          }
      
          try {
            const response = await Axios.post(import.meta.env.VITE_LOGIN, { Username, Password });
            const { token } = response.data;
            const decoded = jwtDecode(token);
            const user = { Username: decoded.Username };
      
            const expirationTime = new Date(decoded.exp * 1000);
            localStorage.setItem("token", token);
            localStorage.setItem("expirationTime", expirationTime);
            localStorage.setItem("username", user);
      
            login(user);
            try {
                await Swal.fire({
                    title: "Berhasil Login",
                    text: "Welcome back Admin INFORSA",
                    icon: "success"
                  }).then(() => {
                    window.location.href = '/';
                  });
            } catch (error) {
                Swal.fire({
                    title: "Gagal Login",
                    text: "Terjadi kesalahan saat mencoba login.",
                    icon: "error"
                });
            }
            Swal.fire({
              title: "Selamat Datang",
              icon: "success",
            });
            } catch (error) {
                Swal.fire({
                    title: "Data Invalid",
                    icon: "error",
                  });
            }
    }
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
    <motion.div {...scaleDown} id='/' className="w-full h-auto overflow-x-hidden overflow-y-hidden">
        <Helmet>
            <title>Login INFORSA 2024</title>
        </Helmet>
        <div className="min-h-screen bg-login flex items-center justify-center lg:justify-end">
            <div className='p-4 lg:bg-transparent md:bg-blue-950 bg-form-login'>
                <div className="flex justify-center">
                    <LazyLoadImage loading="lazy" className="w-24" src={image} alt="" />
                </div>
                <h1 className='text-4xl text-center font-bold font-serif text-white'>Welcome Back</h1>
                <form onSubmit={handleProcess} className="text-white">
                    <TextField
                        className="text-white"
                        label="Username"
                        sx={{
                            '& label': {
                              color: 'white',
                            },
                            '& label.Mui-focused': {
                              color: 'white',
                            },
                            '& .MuiInputBase-input':{
                                color:'white'
                            }
                          }}
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setUsername(e.target.value) }
                        margin="normal"
                    />
                    <TextField
                        className="text-white"
                        label="Password"
                        sx={{
                            '& label': {
                              color: 'white',
                            },
                            '& label.Mui-focused': {
                              color: 'white',
                            },
                            '& .MuiInputBase-input':{
                                color:'white'
                            }
                          }}
                        fullWidth
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                        className="text-white"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button onClick={handleProcess} type="button" variant="contained" color="success" className="mt-2 w-full">
                        Login
                    </Button>
                </form>
            </div> 
        </div>
    </motion.div>
    )
}

export default Login;