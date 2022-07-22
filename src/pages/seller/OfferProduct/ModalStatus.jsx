import React, {useState} from "react";

// Service
import { updateStatusProduct } from "../../../services/productService";
import { updateStatusOffer } from "../../../services/offerService";

import { messageContext, alertContext, modalContext } from "./"

// Component
import Modal from "../../../components/MyModal";
import ActionButton from "../../../components/ActionButton";
import DisableButton from "../../../components/DisableButton";


const ModalStatus = ({data, param}) => {
    const messageContextValue = React.useContext(messageContext)
    const modalContextValue = React.useContext(modalContext)
    const alertContextValue = React.useContext(alertContext)

    const [status, setStatus] = useState(null);

    const handleToggleModal = () => {
        modalContextValue.setShowModal(false)
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = async () => {
        if(status === 'sold'){
            let apiRes;
            const bodyData = {
                status_sell: true
            }

            try {
                apiRes = await updateStatusProduct(bodyData, data?.Product?.id)
            } finally {
                modalContextValue.setShowModal(false)

                if (apiRes.data.meta.status === "success") {
                    messageContextValue.setStatusError("success");
                    messageContextValue.setMessage(`Status produk berhasil diperbarui`);
                    setTimeout(() => {
                        window.location.href = '/seller/store#catalog'
                    }, 700);
                }else{
                    messageContextValue.setStatusError("error");
                    messageContextValue.setMessage("terjadi kesalahan ulangi lagi nanti");
                }

                setTimeout(() => {
                    alertContextValue.setShowAlert(true);
                }, 500);
            }

        }else{
            let apiRes;
            const bodyData = {
                offer_status: false
            }

            try {
                apiRes = await updateStatusOffer(bodyData, data.id)
            } finally {
                modalContextValue.setShowModal(false)

                if (apiRes.data.meta.status === "success") {
                    messageContextValue.setStatusError("success");
                    messageContextValue.setMessage(`Transaksi dibatalkan`);
                }else{
                    messageContextValue.setStatusError("error");
                    messageContextValue.setMessage("terjadi kesalahan ulangi lagi nanti");
                }


                setTimeout(() => {
                    alertContextValue.setShowAlert(true);
                }, 500);
            }

        }

    }

  return (
    <>
      <Modal show={modalContextValue.showModal} close={handleToggleModal}>
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
