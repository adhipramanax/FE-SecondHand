import React from "react";
import casioWOne from "../../../assets/images/Rectangle_24.png";

const HistoryTransaction = () => {
    return (
        <>
            <div class="border p-2 ">
                <div class="col-12 col-md-12 d-flex gap-3">
                    <img src={casioWOne} alt="" srcset="" />
                    <div class="w-100">
                        <h5 className="catalog-title">Jam Tangan Casio</h5>
                        <p class="card-text text-muted">Aksesoris</p>
                        <h5>Rp. 250.000</h5>
                    </div>
                </div>
            </div>

            <div class="border p-2 ">
                <div class="col-12 col-md-12 d-flex gap-3">
                    <img src={casioWOne} alt="" srcset="" />
                    <div class="w-100">
                        <h5 className="catalog-title">Jam Tangan Casio</h5>
                        <p class="card-text text-muted">Aksesoris</p>
                        <h5>Rp. 250.000</h5>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HistoryTransaction;
