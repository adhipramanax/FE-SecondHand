import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Service
import { findProduct, offerProduct } from "../../../services/productService";

// Provider
import { historyTransactionContext } from "../../../provider/historyTransactionProvider";
import { profileContext } from "../../../provider/profileProvider";

// Component
import ProductCardDetail from "../../../components/ProductCardDetail";
import ActionButton from "../../../components/ActionButton";
import OutlineButton from "../../../components/OutlineButton";
import DisableButton from "../../../components/DisableButton";
import Alert from "../../../components/Alert";
import Input from "../../../components/Input";
import Modal from "../../../components/MyModal";
import ModalAlert from "../../../components/ModalAlert";

const ProductContainer = () => {
  const isLogin = localStorage.getItem("isLogin");
  const user = JSON.parse(localStorage.getItem("payload"));
  const wishlistValue = JSON.parse(localStorage.getItem("wishlist")) || [];

  const params = useParams();
  const historyTransactionValue = React.useContext(historyTransactionContext);
  const profileValue = React.useContext(profileContext); 

  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const [wishlist, setWishlist] = useState(wishlistValue);
  const [isAdded, setIsAdded] = useState(wishlist.filter(item => item.id_product === Number(params.id) && item.id_user === user.id ).length > 0);
  const [isWait, setIsWait] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleWishlist = () => {
      setWishlist([...wishlist, { id_product: product.id, id_user: user.id }]);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, { id_product: product.id, id_user: user.id }]));
      setStatus("success");
      setMessage("Berhasil menambahkan ke dalam daftar keinginan");
      setShowAlert(true);
      setIsAdded(true);
  };

  const handleRemoveWishlist = () => {
    let index = wishlist.findIndex((item) => item.id_product === product.id);
    if(index > -1) {
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setWishlist(wishlist);
    }
    setStatus("success");
    setMessage("Berhasil menghapus dari dalam daftar keinginan");
    setShowAlert(true);
    setIsAdded(false)
  };

  const fetchProduct = () => {
    findProduct(params.id).then((response) => {
      setProduct(response.data.data);
    });
  }

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
        setIsWait(true);
      });
  };

  useEffect(() => {
    fetchProduct()
    
    if(isLogin){
      if(historyTransactionValue?.historyTransaction === null){
        setIsWait(historyTransactionValue?.historyTransaction === null);
      }else{
        setIsWait(historyTransactionValue?.historyTransaction.filter((item) => item.product.id === Number(params.id) && item.offer.offer_status === null).length > 0)
      }

    }else{
      setIsWait(false)
    }
  }, [historyTransactionValue?.historyTransaction]);

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
        {isLogin ? (
          <>
            {historyTransactionValue.historyTransaction === null ? (
              <div class="row">
                <div class="col-12 mb-3">
                  <ActionButton
                    color="#ffffff"
                    bg="#4B1979"
                    text="Saya tertarik dan ingin nego"
                    width="100%"
                    onClick={handleToggleModal}
                  />
                </div>
                <div class="col-12">
                  <OutlineButton
                    color="#4B1979"
                    bg="#4B1979"
                    text={isAdded ? "Hapus dari daftar keinginan" : "Simpan kedalam daftar keinginan"}
                    width="100%"
                    onClick={isAdded ? handleRemoveWishlist : handleWishlist}
                  />
                </div>
              </div>
            ) : isWait ? (
              <div class="row">
                <div class="col-12 mb-3">
                  <DisableButton text="Menunggu respon penjual" width="100%" />
                </div>
                <div class="col-12">
                  <OutlineButton
                    color="#4B1979"
                    bg="#4B1979"
                    text={isAdded ? "Hapus dari daftar keinginan" : "Simpan kedalam daftar keinginan"}
                    width="100%"
                    onClick={isAdded ? handleRemoveWishlist : handleWishlist}
                  />
                </div>
              </div>
            ) : (
              <div class="row">
                <div class="col-12 mb-3">
                  <ActionButton
                    color="#ffffff"
                    bg="#4B1979"
                    text="Saya tertarik dan ingin nego"
                    width="100%"
                    onClick={handleToggleModal}
                  />
                </div>
                <div class="col-12">
                  <OutlineButton
                    color="#4B1979"
                    bg="#4B1979"
                    text={isAdded ? "Hapus dari daftar keinginan" : "Simpan kedalam daftar keinginan"}
                    width="100%"
                    onClick={isAdded ? handleRemoveWishlist : handleWishlist}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div class="row">
            <div class="col-12 mb-3">
              <ActionButton
                color="#ffffff"
                bg="#4B1979"
                text="Saya tertarik dan ingin nego"
                width="100%"
                onClick={handleToggleModal}
              />
            </div>
            <div class="col-12">
              <OutlineButton
                color="#4B1979"
                bg="#4B1979"
                text="Simpan kedalam daftar keinginan"
                width="100%"
                onClick={handleToggleModal}
              />
            </div>
          </div>
        )}

        {/* Modal Offer */}
        {isLogin ?(
          <>
            {profileValue?.profile?.city !== null && profileValue?.profile?.address !== null && profileValue?.profile?.phone_number !== null && profileValue?.profile?.url_photo !== null ? (
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
            ):(
              <ModalAlert 
                show={showModal} 
                close={handleToggleModal} 
                message={"Untuk melakukan aksi ini silahkan lengkapi profile terlebih dahulu"} 
              />
            )}
          </>
        ):(
          <ModalAlert 
            show={showModal} 
            close={handleToggleModal} 
            message={"Untuk melakukan aksi ini silahkan masuk terlebih dahulu"} 
          />
        )}
      </ProductCardDetail>
    </>
  );
};

export default ProductContainer;
