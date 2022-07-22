import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';

// Service
import { createProduct, findProduct, updateGalleryProduct, updateProduct } from "../../../services/productService"

// Helper
import { fieldEmptyValidation } from "../../../helpers/fieldEmptyValidation";

// Component
import Input from "../../../components/Input";
import TextArea from "../../../components/Textarea"
import ComboBox from "../../../components/ComboBox"
import FileUpload from "../../../components/FileUpload"
import Button from "../../../components/ActionButton";
import Alert from "../../../components/Alert";

// Image
import backBtn from "../../../assets/images/fi_arrow-left.png";
import { getAllCategory } from "../../../services/categoryService";

const InputForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [categories, setCategories] = useState([]);
    const [formValues, setFormValues] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState([]);
    const [message, setMessage] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onSelect = (e) => {
        setFormValues({ ...formValues, categories: e.map(item => item.key) });
    }

    const onRemove = (e) => {
        setFormValues({ ...formValues, categories: e.map(item => item.key) });
    }

    const handleOnChangeFile = (event) => {
        setFile([...file, {
            id: event.target.getAttribute('data-id'),
            index: event.target.getAttribute('data-index'),
            image: event.target.files[0]
        }])

        let formData = new FormData();

        formData.append("image", event.target.files[0]);
        updateGalleryProduct(event.target.getAttribute('data-id'), formData).then(res => console.log(res))
    };

    const handleToggleAlert = () => {
        setShowAlert(!showAlert);
    };


    const validate = (value) => {
        const errors = {};
  
        if(fieldEmptyValidation(value.name)) {
          errors.name = 'Kolom nama produk tidak boleh kosong';
        }
    
        if (fieldEmptyValidation(value.price)) {
          errors.price = "Kolom harga tidak boleh kosong";
        }

        if (fieldEmptyValidation(value.description)) {
            errors.description = "Kolom deskripsi tidak boleh kosong";
        }

        if (fieldEmptyValidation(value.categories)) {
            errors.categories = "Kolom kategori tidak boleh kosong";
        }else if(value.categories.length > 5){
            errors.categories = "kategori yang dipilih tidak boleh lebih dari 5";
        }
    
        return errors;
      };

    const handleSubmit = async () => {
        setFormErrors(validate(formValues));

        if (Object.keys(validate(formValues)).length === 0) {
            setIsLoading(true);
            
            let apiRes = null;
            const data = {
                name: formValues.name,
                price: formValues.price,
                description: formValues.description,
                categories: formValues.categories.join(',')
            }

            try {
                apiRes = await updateProduct(params.id, data);
            } finally {
                setIsLoading(false);
                setShowAlert(true);

                if (apiRes.data.meta.status === "success") {
                    setStatus("success");
                    setMessage("Produk berhasil diperbaharui");
                    setTimeout(() => {
                        window.location.reload();
                    }, 700);
                } else {
                    setStatus("error");
                    setMessage("terjadi kesalahan ulangi lagi nanti");
                }
            }
        }
    };

    // Handling Preview File
    useEffect( () => {
        const promises = file.map((blob) => {            
            return new Promise((res) => {
              const reader = new FileReader();
              reader.readAsDataURL(blob.image);
    
              reader.onload = (e) => {
                res({
                    id: blob.index,
                    image: e.target.result,
                });
              }        
            });            
         });

         Promise.all(promises).then((results) => {
            if(results.at(-1).id  === null){
                setFileUrl([...fileUrl, {id: null, url_photo: results.at(-1).image}]);
            }else{
                setFileUrl(fileUrl.map((item, index) => {
                    if(index === Number(results.at(-1).id)) {
                        return {...item, url_photo: results.at(-1).image};
                    }
    
                    return item;
                }));
            }
         });

    }, [file]);

    useEffect(() => {
        getAllCategory().then(response => setCategories(response.data.data));
        findProduct(params.id).then(response => {
            setFormValues({
                name: response.data.data.name,
                price: response.data.data.price,
                description: response.data.data.description,
                categories: response.data.data.categories.map(item => item.id)
            })
            console.log(response.data.data.categories);
            setFileUrl(response.data.data.galleries.map(item => item))
        });
    }, []);

    return (
        <>
            <section class="input-form">
                <div class="container">
                <Alert show={showAlert} close={handleToggleAlert} type={status} message={message} optionClass={'ms-5'} />
                    <div class="row d-flex flex-wrap align-content-center justify-content-center">
                        <div class="col-1 col-lg-1 mt-4">
                            <button class="btn" onClick={() => {navigate(-1)}}>
                                <img src={backBtn} alt="back-button" />
                            </button>
                        </div>

                        <div class="col-11 mt-4">
                            <h5 class="text-center fw-bold">Pebarui Detail Product</h5>
                        </div>
                        <div class="col-12 col-lg-11 mt-4">
                            <Input
                                label="Nama Produk"
                                type="text"
                                name="name"
                                id="name"
                                width="100%"
                                placeholder="Nama Produk"
                                value={formValues.name}
                                erorr={formErrors.name}
                                onChange={(value) => handleChange(value)}
                            />

                            <Input 
                                label="Harga" 
                                type="number" 
                                name="price" 
                                id="price" 
                                width="100%" 
                                placeholder="Rp. 0,00" 
                                value={formValues.price} 
                                erorr={formErrors.price}
                                onChange={(value) => handleChange(value)} />

                            <ComboBox 
                                label="Kategori"
                                options={categories.map(category => ({ name: category.name, key: category.id }))}
                                displayValue="name"
                                placeholder="Pilih Kategori"
                                onRemove={(value) => onRemove(value)}
                                onSelect={(value) => onSelect(value)}
                                erorr={formErrors.categories}
                                selectedValues={
                                    categories.filter(category => formValues.categories?.includes(category.id)).map(item => {
                                        return {name: item.name, key: item.id}
                                    })
                                }
                            />

                            <TextArea 
                                label={"Deskripsi Produk"}
                                name="description"
                                id="description"
                                placeholder="Masukkan deskripsi produk"
                                erorr={formErrors.description}
                                value={formValues.description}
                                onChange={(value) => handleChange(value)}
                            />

                            <div class="d-flex">
                                {/* {fileUpload} */}
                                {fileUrl.length > 0 ?(
                                    <>
                                        {fileUrl.map((item, index) => {
                                            return (
                                                <FileUpload fileUrl={item.url_photo} data-id={item.id} data-index={index} onChange={(value) => handleOnChangeFile(value)} />
                                            )
                                        })}

                                        {file.length === 5 ? (
                                            <></>
                                        ):(
                                            <FileUpload fileUrl={''} onChange={(value) => handleOnChangeFile(value)} />
                                        )}
                                    </>
                                ):(
                                    <>
                                        <FileUpload fileUrl={fileUrl} onChange={(value) => handleOnChangeFile(value)} />
                                    </>
                                )}
                            </div>
                            
                            <div class="row mt-4 mb-4">
                                <div class="col-12">
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
                                        text="Perbarui" 
                                        onClick={handleSubmit} />
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InputForm;
