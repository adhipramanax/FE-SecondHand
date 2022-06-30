import React from "react";

const Profile = () => {
    return (
        <>
            <div class="col-12">
                <p>Nama*</p>
                <input class="input-style mb-3" type="text" placeholder="Nama" />
                <p>Kota*</p>
                <input class="input-style mb-3" type="text" placeholder="Kota" />
                <p>Alamat*</p>
                <input class="input-style mb-3" type="text" placeholder="Contoh: Jalan Ikan Hiu 33" />
                <p>No Handphone*</p>
                <input class="input-style mb-3" type="text" placeholder="contoh: +627834907563" />
                <button class="btn btn-color-purple w-100 mt-4">Simpan</button>
            </div>
        </>
    );
};

export default Profile;
