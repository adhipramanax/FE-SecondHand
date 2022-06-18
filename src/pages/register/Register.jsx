import React from 'react';
import imgLogin from '../../assets/images/login.png';
import { Link } from "react-router-dom";

import imgBack from '../../assets/images/fi_arrow-left.png';
import '../../assets/css/register.style.css';

const Register = () => {
    return (
        <>
            <div className='container-fluid position-relative'>
                <div className="row ">
                    <div className="col-6 p-0 img-block">
                        <img className=' w-100'  style={{ height: "100vh", objectFit: "cover"  }}src={imgLogin} alt="" />
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <form className='form-register-mobile'>
                            <img className='btn-back' src={imgBack} alt="" />
                            <h3 className='fw-bold mb-2'>Daftar</h3>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Nama</label>
                                <input type="name" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Nama Lengkap"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Contoh: johndee@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Masukkan password"/>
                            </div>
                            <div className='mt-5 mb-3 w-100'>
                                <button className='btn btn-color-purple rounded-4 w-100 rounded-pill'>Daftar</button>
                            </div>
                            <div className='register-to-login text-center'>
                                <span>Sudah punya akun? <Link to="/login" className='text-decoration-none fw-bold' style={{ color:"purple" }}> Masuk disini</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
