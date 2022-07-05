import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/ActionButton";

const Profile = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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

    return (
        <>
            <div class="col-12">
                <Input label="Foto" type="file" name="photo" id="photo" width="100%" placeholder="Foto" />

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
