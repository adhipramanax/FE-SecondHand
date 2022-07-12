import React, {useState} from "react";

import Modal from "../../../components/Modal";
import ActionButton from "../../../components/ActionButton";
import DisableButton from "../../../components/DisableButton";
import { updateStatusProduct } from "../../../services/productService";
import { updateStatusOffer } from "../../../services/offerService";

const ModalStatus = ({data, param}) => {
    console.log(data);
    const [status, setStatus] = useState(null);

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = () => {
        if(status === 'sold'){
            const bodyData = {
                status_sell: true
            }

            updateStatusProduct(bodyData, data?.Product?.id).then( response => console.log(response));
        }else{
            const bodyData = {
                offer_status: false
            }
    
            updateStatusOffer(bodyData, data.id).then( () => window.location.href = `/seller/offer/product/${param}` );
        }

    }

  return (
    <>
      <Modal target={`modalStatus`}>
        <h5 class="mb-4">Perbarui status penjualan produkmu</h5>
        <div onChange={e => handleStatus(e)}>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="status" id="sold" value="sold" />
            <label class="form-check-label" for="sold">
                Berhasil terjual
            </label>
            <p class="text-muted">Kamu telah sepakat menjual produk ini kepada pembeli</p>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="status" id="cancel" value="cancel" />
            <label class="form-check-label" for="cancel">
                Batalkan transaksi
            </label>
            <p class="text-muted">Kamu membatalkan transaksi produk ini dengan pembeli</p>
            </div>
        </div>
        <div class="mt-4">
            {status === "sold" || status === "cancel"
                ? <ActionButton color="#FFFFFF" bg="#4B1979" width="100%" text="Kirim" onClick={() => handleSubmit()} />

                : <DisableButton width="100%" text="Kirim" />
            }
        </div>
      </Modal>
    </>
  );
};

export default ModalStatus;
