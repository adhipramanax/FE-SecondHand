import React, { useState } from 'react';
import imgLogin from '../../../assets/images/login.png';
import { Link, useNavigate } from "react-router-dom";

// Componenet
import Input from '../../../components/Input';
import Button from '../../../components/ActionButton';

// Service
import { registerService } from '../../../services/authService';

// CSS
import '../../../assets/css/register.style.css';
import { fieldEmptyValidation } from '../../../helpers/fieldEmptyValidation';
import { emailValidation } from '../../../helpers/emailValidation';

const Index = () => {
    const initialValues = { name: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState([]);
    const [type, setType] = useState('password')
    const [eyeIcon, setEyeIcon] = useState('bi-eye');
    const [isLoading, setIsLoading] = useState(false);
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

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
    }

    // const handleClear = () => {
    //     setName('')
    //     setEmail('')
    //     setPassword('')
    // }

    const validate = (value) => {
      const errors = {};

      if(fieldEmptyValidation(value.name)) {
        errors.name = 'Kolom nama tidak boleh kosong';
      }
  
      if (fieldEmptyValidation(value.email)) {
        errors.email = "Kolom email tidak boleh kosong";
      } else if (!emailValidation(value.email)) {
        errors.email = "Email tidak valid";
      }
  
      if (fieldEmptyValidation(value.password)) {
        errors.password = "Kolom password tidak boleh kosong";
      }
  
      return errors;
    };

    const handleSubmit = async (e) => {
      setFormErrors(validate(formValues));

      if (Object.keys(validate(formValues)).length === 0) {
        setIsLoading(true);
      
        let apiRes = null;
        const data = formValues;
  
        try {
          apiRes = await registerService(data);
        } finally {
          setIsLoading(false);
  
          if(apiRes.data.meta.status === 'success') {
            setStatus('success');
            setMessage('Berhasil Melakukan Registrasi')
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }else{
            setStatus('error')
            setMessage('Gagal Melakukan Registrasi')
          }
        }
      }


        // registerService(data)
        //     .then((response) => {
        //         if(response.data.meta.status === 'success'){
        //             setStatus('success')
        //             setMessage('Berhasil Melakukan Registrasi')
        //             handleClear()
        //         }else{
        //             setStatus('error')
        //             setMessage('Gagal Melakukan Registrasi')
        //         }
        //     })
        //     .finally(() => {
        //         setIsLoading(false)
        //     })

    }

    return (
        <>
            <div className='container-fluid position-relative'>
                <div className="row ">
                    <div className="col-6 p-0 img-block">
                        <img className=' w-100' style={{ height: "100vh", objectFit: "cover" }} src={imgLogin} alt="" />
                    </div>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">

                        {status === 'success' 
                        ?
                            <div class="alert alert-success w-50 text-center" role="alert">
                                {message}
                            </div>
                        : status === 'error' 
                        ?
                            <div class="alert alert-danger w-50 text-center" role="alert">
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
                                value={formValues.name}
                                erorr={formErrors.name}
                                onChange={(value) => handleChange(value)}
                            />

                            <Input
                                label="Email"
                                type="text"
                                name="email"
                                id="email"
                                width="100%"
                                placeholder="contoh: fulan@gmail.com"
                                value={formValues.email}
                                erorr={formErrors.email}
                                onChange={(value) => handleChange(value)}
                            />

                            <Input
                                label="Password"
                                type={type}
                                name="password"
                                id="password"
                                width="100%"
                                placeholder="Masukan Password"
                                value={formValues.password}
                                erorr={formErrors.password}
                                icon={`bi ${eyeIcon}`}
                                onClick={(e) => handleType(e)}
                                onChange={(value) => handleChange(value)}
                            />

                            <div className='mt-5 mb-3 w-100'>
                                {isLoading 
                                    ? <Button 
                                        color="#ffffff" 
                                        bg="#4B1979" 
                                        width="100%" 
                                        icon={'https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e47l4kvh3wbfq7ekl58oelu5421j48s9fyiu5k8cf8n&rid=giphy.gif&ct=s'} 
                                        disabled />
                                    : <Button
                                        color="#ffffff"
                                        bg="#4B1979"
                                        width="100%"
                                        text="Daftar"
                                        onClick={(e) => handleSubmit(e)} />
                                }
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
