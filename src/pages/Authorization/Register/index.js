import React, { useState } from 'react';
import imgLogin from '../../../assets/images/login.png';
import { Link, useNavigate } from "react-router-dom";
import '../../../assets/css/register.style.css';
import Input from '../../../components/Input';
import Button from '../../../components/ActionButton';
import { registerService } from '../../../services/authService';

const Index = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState([]);
    const [type, setType] = useState('password')
    const [eyeIcon, setEyeIcon] = useState('bi-eye');
    const navigate = useNavigate();

    const handleType = (e) => {
        e.preventDefault();
        if (type === 'password') {
            setEyeIcon('bi-eye-slash');
            return setType('text');
        }

        setEyeIcon('bi-eye');
        return setType('password');
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClear = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (e) => {
        const data = {
            name,
            email,
            password
        }

        registerService(data).then((response) => {
            if(response.data.meta.status === 'success'){
                setStatus('success')
                setMessage('Berhasil Melakukan Registrasi')
                handleClear()
            }else{
                setStatus('error')
                setMessage('Gagal Melakukan Registrasi')
            }
            
        })

    }

    return (
        <>
            <div className='container-fluid position-relative'>
                <div className="row ">
                    <div className="col-6 p-0 img-block">
                        <img className=' w-100' style={{ height: "100vh", objectFit: "cover" }} src={imgLogin} alt="" />
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center ">

                        {status === 'success' 
                        ?
                            <div class="alert alert-success" role="alert">
                                {message}
                            </div>
                        : status === 'error' 
                        ?
                            <div class="alert alert-danger" role="alert">
                            {message}
                            </div>
                        : ''
                        }

                        <form className='form-register-mobile'>
                            <svg onClick={handleBack} className='btn-back' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className='fw-bold mb-2 '>Daftar</h3>
                            <Input
                                label="Nama"
                                type="text"
                                name="name"
                                id="name"
                                width="100%"
                                placeholder="Masukan Nama"
                                value={name}
                                onChange={(value) => handleName(value)}
                            />

                            <Input
                                label="Email"
                                type="text"
                                name="email"
                                id="email"
                                width="100%"
                                placeholder="contoh: fulan@gmail.com"
                                value={email}
                                onChange={(value) => handleEmail(value)}
                            />

                            <Input
                                label="Password"
                                type={type}
                                name="password"
                                id="password"
                                width="100%"
                                placeholder="Masukan Password"
                                value={password}
                                icon={`bi ${eyeIcon}`}
                                onClick={(e) => handleType(e)}
                                onChange={(value) => handlePassword(value)}
                            />

                            <div className='mt-5 mb-3 w-100'>
                                <Button
                                    color="#ffffff"
                                    bg="#4B1979"
                                    width="100%"
                                    text="Daftar"
                                    onClick={(e) => handleSubmit(e)}
                                />
                            </div>
                            <div className='register-to-login text-center'>
                                <span>Sudah punya akun? <Link to="/login" className='text-decoration-none fw-bold' style={{ color: "purple" }}> Masuk disini</Link></span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
