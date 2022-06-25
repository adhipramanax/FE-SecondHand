import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogin from '../../../assets/images/login.png';
import { useNavigate} from 'react-router-dom';
import '../../../assets/css/register.style.css';

const Index = () => {
    const [type, setType] = useState('password');
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

    return (
        <>
            <div className='container-fluid position-relative'>
                <div className="row ">
                    <div className="col-6 p-0 img-block">
                        <img className=' w-100'  style={{ height: "100vh", objectFit: "cover"  }}src={imgLogin} alt="" />
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <form className='form-register-mobile'>
                            <svg onClick={handleBack} className='btn-back' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3 className='fw-bold mb-2'>Masuk</h3>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Contoh: johndee@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <div className="position-relative">
                                    <input type={type} className="form-control" id="exampleInputPassword1" placeholder="Masukkan password"/>
                                    <i className={`bi ${eyeIcon} position-absolute show-password`} onClick={handleType}></i>
                                </div>
                            </div>
                            <div className='mt-5 mb-3 w-100'>
                                <button className='btn btn-color-purple rounded-4 w-100 rounded-pill'>Daftar</button>
                            </div>
                            <div className='register-to-login text-center'>
                                <span>Belum punya akun? <Link to="/register" className='text-decoration-none fw-bold' style={{ color:"purple" }}> Daftar disini</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
