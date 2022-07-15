import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"

// Service
import { googleService, loginService } from "../../../services/authService";

// helper
import { emailValidation } from "../../../helpers/emailValidation";
import { fieldEmptyValidation } from "../../../helpers/fieldEmptyValidation";

// Component
import Input from "../../../components/Input";
import Button from "../../../components/ActionButton";
import OutlineButton from "../../../components/OutlineButton";

// Image
import imgLogin from "../../../assets/images/login.png";
import googleIcon from "../../../assets/images/google.png";

// CSS
import "../../../assets/css/register.style.css";

const Index = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState([]);
  const [type, setType] = useState("password");
  const [eyeIcon, setEyeIcon] = useState("bi-eye");
  const [isLoading, setIsLoading] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (value) => {
    const errors = {};

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

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
      );

      const data = {
        name: userInfo.data.name,
        email: userInfo.data.email,
      }

      googleService(data).then(response => {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("payload", JSON.stringify(response.data.data.user));
        localStorage.setItem("isLogin", true);
        localStorage.setItem("role", "buyer");
        navigate("/");
      })
    },
    onError: errorResponse => console.log(errorResponse),
  });

  const handleSubmit = async () => {
    setFormErrors(validate(formValues));

    if (Object.keys(validate(formValues)).length === 0) {
      setIsLoading(true);

      let apiRes = null;
      const data = formValues;

      try {
        apiRes = await loginService(data);
      } finally {
        setIsLoading(false);

        if (apiRes.data.meta.status === "error") {
          setStatus("error");
          setMessage("Email dan password tidak sesuai");
        } else {
          localStorage.setItem("token", apiRes.data.data.token);
          localStorage.setItem("payload", JSON.stringify(apiRes.data.data.user));
          localStorage.setItem("isLogin", true);
          localStorage.setItem("role", "buyer");
          navigate("/");
        }
      }
    }
  };

  return (
    <>
      <div className="container-fluid position-relative">
        <div className="row ">
          <div className="col-6 p-0 img-block">
            <img className=" w-100" style={{ height: "100vh", objectFit: "cover" }} src={imgLogin} alt="" />
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center ">
            {status === "error" ? (
              <div class="alert alert-danger w-50 text-center" role="alert">
                {message}
              </div>
            ) : (
              <></>
            )}
            <form className="form-register-mobile">
              <svg
                onClick={handleBack}
                className="btn-back"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 12H5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="#151515"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Input
                label="Email"
                type="email"
                name="email"
                id="email"
                placeholder="Contoh: Johnshon@gamil.com"
                erorr={formErrors.email}
                value={formValues.email}
                onChange={(value) => handleChange(value)}
              />

              <Input
                label="Password"
                type={type}
                name="password"
                id="password"
                placeholder="Masukan password"
                erorr={formErrors.password}
                value={formValues.password}
                icon={`bi ${eyeIcon}`}
                onClick={(e) => handleType(e)}
                onChange={(value) => handleChange(value)}
              />

              <div className="mt-5 mb-3 w-100">
                {isLoading ? (
                  <Button
                    color="#ffffff"
                    bg="#4B1979"
                    width="100%"
                    icon={
                      "https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e47l4kvh3wbfq7ekl58oelu5421j48s9fyiu5k8cf8n&rid=giphy.gif&ct=s"
                    }
                    disabled
                  />
                ) : (
                  <div class="row button-group">
                    <div class="col-12 mb-3">
                      <Button 
                        color="#ffffff" 
                        bg="#4B1979" 
                        text="Masuk" 
                        width="100%" 
                        onClick={handleSubmit} />
                    </div>
                    <div class="col-12 mb-3">
                      <span class="separator">Atau</span>
                    </div>
                    <div class="col-12">
                      <OutlineButton
                        color="#000000"
                        bg="#000000"
                        text="Masuk dengan Google"
                        width="100%"
                        icon={googleIcon}
                        onClick={() => googleLogin()}
                      />
                    </div>
                  </div>
                )}
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
