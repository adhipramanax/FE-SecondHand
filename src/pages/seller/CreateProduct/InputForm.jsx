import React, { useEffect, useState } from "react";
import Multiselect from 'multiselect-react-dropdown';

// Service
import { createProduct } from "../../../services/productService"

// Helper
import { fieldEmptyValidation } from "../../../helpers/fieldEmptyValidation";

// Component
import Input from "../../../components/Input";
import TextArea from "../../../components/Textarea"
import ComboBox from "../../../components/ComboBox"
import FileUpload from "../../../components/FileUpload"
import Button from "../../../components/ActionButton";
import OutlineButton from "../../../components/OutlineButton"; 
import Alert from "../../../components/Alert";
import Preview from "./Preview";

// Image
import backBtn from "../../../assets/images/fi_arrow-left.png";
import { getAllCategory } from "../../../services/categoryService";

const InputForm = () => {
    const initialValues = { name: "", price: "", description: "", categories: [] };
    const [categories, setCategories] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
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
        setFile([...file, event.target.files[0]])
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
            let formData = new FormData();
            formData.append("name", formValues.name);
            formData.append("price", formValues.price);
            formData.append("description", formValues.description);
            formData.append("categories", formValues.categories.join(','));
            
            file.forEach(item => {
                formData.append("image", item);
            })

            try {
                apiRes = await createProduct(formData);
            } finally {
                setIsLoading(false);
                setShowAlert(true);

                if (apiRes.data.meta.status === "success") {
                    setStatus("success");
                    setMessage("Produk berhasil diterbitkan");
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
              reader.readAsDataURL(blob);
    
              reader.onload = (e) => {
                res(e.target.result);
              }        
            });            
         });

         Promise.all(promises).then((results) => {
            setFileUrl(results);
         });

    }, [file]);

    useEffect(() => {
        getAllCategory().then(response => setCategories(response.data.data));
    }, []);

    return (
        <>
            <section class="input-form">
                <div class="container">
                <Alert show={showAlert} close={handleToggleAlert} type={status} message={message} optionClass={'ms-5'} />
                    <div class="row d-flex flex-wrap align-content-center justify-content-center">
                        <div class="col-1 col-lg-1 mt-4">
                            <a href="/seller/store#catalog">
                                <img src={backBtn} alt="back-button" />
                            </a>
                        </div>

                        <div class="col-11 mt-4">
                            <h5 class="text-center fw-bold">Lengkapi Detail Product</h5>
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
                                        {fileUrl.map((item) => {
                                            {console.log(item)}
                                            return (
                                                <FileUpload fileUrl={item} onChange={(value) => handleOnChangeFile(value)} />
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
                                <div class="col-6">
                                    <OutlineButton
                                        color="#4B1979"
                                        bg="#4B1979"
                                        width="100%"
                                        text="Preview"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalPreview"
                                    />
                                    <Preview data={{ formValues, fileUrl }} />
                                </div>

                                <div class="col-6">
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
                                        text="Terbitkan" 
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
