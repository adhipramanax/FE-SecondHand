import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../../components/Input";
import Button from "../../../components/ActionButton";

import imgLogin from "../../../assets/images/login.png";
import "../../../assets/css/register.style.css";
import { loginService } from "../../../services/authService";

import { authContext } from "../../../provider/authProvider";

const Index = () => {
    const statusLogin = React.useContext(authContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [status, setStatus] = useState('');
    // const [message, setMessage] = useState([]);
    const [type, setType] = useState("password");
    const [eyeIcon, setEyeIcon] = useState("bi-eye");
    const navigate = useNavigate();

    const handleType = (e) => {
        e.preventDefault();
        if (type === "password") {
            setEyeIcon("bi-eye-slash");
            return setType("text");
        }

        setEyeIcon("bi-eye");
        return setType("password");
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        const data = {
            email,
            password,
        };

        loginService(data).then((response) => {
            localStorage.setItem("token", response.data.token);
            statusLogin.setIsLogin(true);
            navigate("/");
        });
    };

    return (
        <>
            {console.log(statusLogin.isLogin)}
            <div className="container-fluid position-relative">
                <div className="row ">
                    <div className="col-6 p-0 img-block">
                        <img className=" w-100" style={{ height: "100vh", objectFit: "cover" }} src={imgLogin} alt="" />
                    </div>
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <form className="form-register-mobile">
                            <svg onClick={handleBack} className="btn-back" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <Input label="Masuk" type="email" name="email" id="email" placeholder="Contoh: Johnshon@gamil.com" value={email} onChange={(value) => handleEmail(value)} />

                            <Input
                                label="Password"
                                type={type}
                                name="password"
                                id="password"
                                placeholder="Masukan password"
                                value={password}
                                icon={`bi ${eyeIcon}`}
                                onClick={(e) => handleType(e)}
                                onChange={(value) => handlePassword(value)}
                            />
                            <div className="mt-5 mb-3 w-100">
                                <Button color="#ffffff" bg="#4B1979" text="Masuk" width="100%" onClick={(e) => handleSubmit(e)} />
                            </div>
                            <div className="register-to-login text-center">
                                <span>
                                    Belum punya akun?{" "}
                                    <Link to="/register" className="text-decoration-none fw-bold" style={{ color: "purple" }}>
                                        {" "}
                                        Daftar disini
                                    </Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
