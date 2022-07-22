import React, { useState } from "react";

// Component
import IconButton from "../IconButton";
import TextLink from '../TextLink';

import styles from "../../assets/css/notif.style.module.css";
import clock from "../../assets/images/Rectangle-33.png";

const Index = ({data, mobile = false}) => {
    const [isShow, setShow] = useState(false);

    const toggleNotif = () => {
        setShow(!isShow);
    };

    return (
        <>
        {!mobile ? (
            <div class={`${styles.notifWrapper}`}>
                <IconButton icon={"bi bi-bell"} badge={true} text={data?.length} onClick={toggleNotif} />
                <div class={`${styles.notif} ${isShow ? styles.show : ""}`}>
                    <div class={`${styles.notifItem}`}>
                        <div class="row">
                            <div class="col-2">
                                <img src={clock} class="notif-image w-100" />
                            </div>
                            <div class="col-10">
                                <div class="notif-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-7">
                                                    <p class={`${styles.notifType}`}>Penawaran produk</p>
                                                </div>
                                                <div class="col-5">
                                                    <p class={`${styles.notifTime} text-end`}>20 Apr, 14:04</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <h5 class={`${styles.notifProduct}`}>Jam Tangan Casio</h5>
                                            <h5 class={`${styles.notifPrice}`}>Rp 250.000</h5>
                                            <h5 class={`${styles.notifOffer}`}>Ditawar Rp 200.000</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <TextLink to={"/notification"} text={"Notifikasi"} />
        )}
        </>
    );
};

export default Index;
