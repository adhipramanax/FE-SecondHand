import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Service
import { findProduct, offerProduct } from "../../../services/productService";

// Provider
import { historyTransactionContext } from "../../../provider/historyTransactionProvider"

// Component
import ProductCardDetail from "../../../components/ProductCardDetail";
import ActionButton from "../../../components/ActionButton";
import DisableButton from "../../../components/DisableButton";
import Alert from "../../../components/Alert";
import Input from "../../../components/Input";
import Modal from "../../../components/MyModal";

const ProductContainer = () => {
  const params = useParams();
  const historyTransactionValue = React.useContext(historyTransactionContext);
  
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);

    const body = {
      offer_price: price,
      id_product: product.id,
    };

    offerProduct(body)
      .then((response) => {
        if (response.data.meta.status === "success") {
          setStatus("success");
          setMessage(response.data.meta.message);
        } else {
          setStatus("error");
          setMessage("terjadi kesalahan ulangi lagi nanti");
        }
      })
      .finally(() => {
        setIsLoading(false);
        setShowModal(false);
        setShowAlert(true);
      });
  };

  useEffect(() => {
    findProduct(params.id).then((response) => {
        setProduct(response.data.data)
    });
  }, []);

  return (
    <>
      <Alert
        show={showAlert}
        close={handleToggleAlert}
        type={status}
        message={message}
        style={{ "margin-left": "200px" }}
      />
      <ProductCardDetail data={product}>
        {/* Modal Button Trigger */}
        {historyTransactionValue.historyTransaction === null ?(
          <ActionButton
            color="#ffffff"
            bg="#4B1979"
            text="Saya tertarik dan ingin nego"
            width="100%"
            onClick={handleToggleModal}
          />
        ): historyTransactionValue.historyTransaction.filter(item => item.product.id === Number(params.id) && (item.offer.offer_status) === null).length > 0 ?(
          <DisableButton
            text="Menunggu respon penjual"
            width="100%"
          />
        ):(
          <ActionButton
            color="#ffffff"
            bg="#4B1979"
            text="Saya tertarik dan ingin nego"
            width="100%"
            onClick={handleToggleModal}
          />
        )}
        
        {/* Modal */}
        <Modal show={showModal} close={handleToggleModal}>
          <h5>Masukkan Harga Tawarmu</h5>
          <p class="text-muted">
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.
          </p>
          <div class="card offer-modal mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-1 pe-0">
                  <img src={product?.seller?.url_photo} alt="profile" width={50} height={50} />
                </div>

                <div class="col-11 ps-5 pe-0">
                  <h5 class="mb-0">{product.name}</h5>
                  <p class="card-text text-muted mb-0">Rp. {product.price}</p>
                </div>
              </div>
            </div>
          </div>
          <Input
            label="Harga Tawar"
            type="price"
            name="price"
            id="price"
            placeholder="Rp. 0,00"
            onChange={(value) => handlePrice(value)}
          />
          <div class="mt-4">
            {isLoading ? (
              <ActionButton
                color="#ffffff"
                bg="#4B1979"
                width="100%"
                icon={
                  "https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e47l4kvh3wbfq7ekl58oelu5421j48s9fyiu5k8cf8n&rid=giphy.gif&ct=s"
                }
                disabled
              />
            ) : (
              <ActionButton color="#FFFFFF" bg="#4B1979" width="100%" text="Kirim" onClick={(e) => handleSubmit(e)} />
            )}
          </div>
        </Modal>
      </ProductCardDetail>
    </>
  );
};

export default ProductContainer;
