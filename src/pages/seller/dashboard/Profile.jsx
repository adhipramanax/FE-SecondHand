import React, { useState, useEffect } from "react";

// Service
import { getProfile, updateProfile } from "../../../services/profileService";

// Componenet
import Alert from "../../../components/Alert";
import Button from "../../../components/ActionButton";
import Input from "../../../components/Input";

// Image
import defaultPic from "../../../assets/images/deafaultPic.png"

// CSS
import styles from "../../../assets/css/image-preview.module.css";
import { fieldEmptyValidation } from "../../../helpers/fieldEmptyValidation";
import { numberValidation } from "../../../helpers/numberValidation";
import { phoneNumberValidation } from "../../../helpers/phoneNumberValidation";

const Profile = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState([]);
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    // Use state photo
    const [file, setFile] = useState("");
    const [fileUrl, setFileUrl] = useState("");

    // Handling on Change and validation file will upload
    const handleOnChangeFile = (event) => {
        setFile(event.target.files[0])
    };

    const handleToggleAlert = () => {
        setShowAlert(!showAlert);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (value) => {
        const errors = {};
  
        if(fieldEmptyValidation(value.name)) {
          errors.name = 'Kolom nama tidak boleh kosong';
        }
    
        if (fieldEmptyValidation(value.city)) {
          errors.city = "Kolom kota tidak boleh kosong";
        }

        if (fieldEmptyValidation(value.address)) {
            errors.address = "Kolom alamat tidak boleh kosong";
        }

        if (fieldEmptyValidation(value.phone)) {
            errors.phone = "Kolom no handphone tidak boleh kosong";
        }else if(!numberValidation(value.phone)){
            errors.phone = "Kolom no handphone harus berupa angka";
        }else if(!phoneNumberValidation(value.phone)){
            errors.phone = "No handphone tidak valid, harus diawali dengan 62 dan max terdiri dari 13 digit";
        }
    
        return errors;
      };

    const handleSubmit = async () => {
        setFormErrors(validate(formValues));

        
        if (Object.keys(validate(formValues)).length === 0) {
            setIsLoading(true);
            
            let apiRes = null;
            let formData = new FormData();
            formData.append("name", formValues.name);
            formData.append("city", formValues.city);
            formData.append("address", formValues.address);
            formData.append("phone_number", formValues.phone);
            formData.append("image", file);
            
            try {
                apiRes = await updateProfile(formData, profile.id);
            } finally {
                setIsLoading(false);
                setShowAlert(true);

                if (apiRes.data.meta.status === "success") {
                    setStatus("success");
                    setMessage("profile berhasil diperbarui");
                } else {
                    setStatus("error");
                    setMessage("terjadi kesalahan ulangi lagi nanti");
                }
            }

        }
    };

    // Handling Preview File
    useEffect(() => {
        let fileData = false;
        if (file !== "") {
            fileData = new FileReader();
            fileData.onload = (event) => {
                if (event.target.result) {
                    setFileUrl(event.target.result);
                }
            };
            fileData.readAsDataURL(file);
        }
    }, [file]);

    useEffect(() => {
        getProfile().then(response => {
            setProfile(response.data.data)
            setFormValues({
                name: response.data.data.name,
                city: response.data.data.city,
                address: response.data.data.address,
                phone: response.data.data.phone_number,
            })
            setFileUrl(response.data.data.url_photo)
        });
    }, []);

    return (
        <>
            <Alert show={showAlert} close={handleToggleAlert} type={status} message={message} optionClass={'ms-5'} />
            <div class="col-12">
                <div class={styles.file_upload_wrapper}>
                    <label class={styles.file_label}>
                        {(fileUrl !== "" || fileUrl !== null) ? <img src={fileUrl} class={styles.image_preview} alt="uploaded_images" /> : <img src={defaultPic} class={styles.image_preview} alt="uploaded_images" />}
                        <input type="file" class={styles.file_upload} accept="image/*" name="image" onChange={(event) => handleOnChangeFile(event)} />
                    </label>
                </div>

                <Input label="Nama*" type="text" name="name" id="name" width="100%" placeholder="Nama" value={formValues.name} erorr={formErrors.name} onChange={(value) => handleChange(value)} />

                <Input label="Kota*" type="text" name="city" id="city" width="100%" placeholder="Kota" value={formValues.city} erorr={formErrors.city} onChange={(value) => handleChange(value)} />

                <Input label="Alamat*" type="text" name="address" id="address" width="100%" placeholder="Alamat" value={formValues.address} erorr={formErrors.address} onChange={(value) => handleChange(value)} />

                <Input label="No Handphone*" type="text" name="phone" id="phone" width="100%" placeholder="contoh: 627834907563" value={formValues.phone} erorr={formErrors.phone} onChange={(value) => handleChange(value)} />

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
                        text="Simpan" 
                        onClick={() => handleSubmit()} />
                }
            </div>
        </>
    );
};

export default Profile;
