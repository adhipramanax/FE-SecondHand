import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/ActionButton";
import styles from "../../../assets/css/image-preview.module.css";

const Profile = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    // Use state photo
    const [file, setFile] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [fileIsValid, setFileIsValid] = useState(true);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        const data = {
            name,
            city,
            address,
            phone,
        };
    };

    // Handling on Change and validation file will upload
    const handleOnChangeFile = (event) => {
        if (event.target.files[0].name.match(/\.(jpg|png|jpeg|JPG|JPEG|PNG)$/)) {
            setFile(event.target.files[0]);
            setFileIsValid(true);
        } else {
            setFileUrl("");
            setFileIsValid(false);
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

    // Submit File to Backend
    const handleSubmitPhoto = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("picture", file);

        // axios.post("http://localhost:3000/users/new", formData).then((res) => {
        //     console.log("Success Upload!")
        // }).catch((err) => {
        //     console.log(err.message)
        // })
    };

    return (
        <>
            <div class="col-12">
                <div class={styles.file_upload_wrapper}>
                    <label class={styles.file_label}>
                        {fileUrl !== "" ? <img src={fileUrl} class={styles.image_preview} alt="uploaded_images" /> : ""}
                        <input type="file" class={styles.file_upload} accept="image/*" name="image" onChange={(event) => handleOnChangeFile(event)} />
                    </label>
                </div>

                <Input label="Nama*" type="text" name="name" id="name" width="100%" placeholder="Nama" value={name} onChange={(value) => handleName(value)} />

                <Input label="Kota*" type="text" name="city" id="city" width="100%" placeholder="Kota" value={city} onChange={(value) => handleCity(value)} />

                <Input label="Alamat*" type="text" name="address" id="address" width="100%" placeholder="contoh: Jalan Ikan Hiu 33" value={address} onChange={(value) => handleAddress(value)} />

                <Input label="No Handphone*" type="text" name="phone" id="phone" width="100%" placeholder="contoh: +627834907563" value={phone} onChange={(value) => handlePhone(value)} />

                <Button color="#ffffff" bg="#4B1979" width="100%" text="Simpan" onClick={(e) => handleSubmit(e)} />
            </div>
        </>
    );
};

export default Profile;
