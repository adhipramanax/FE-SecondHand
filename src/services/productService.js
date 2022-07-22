import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";
const token = localStorage.getItem("token");

// Buyer Service
export async function getAllProduct() {
    try {
        return await axios.get(`${baseURL}/product`);
    } catch (error) {
        return error.response;
    }
}

export async function findProduct(id) {
    try {
        return await axios.get(`${baseURL}/product/${id}`);
    } catch (error) {
        return error.response;
    }
}

export async function searchProduct(productName) {
    try {
        return await axios.get(`${baseURL}/product/search?name=${productName}`);
    } catch (error) {
        return error.response;
    }
}

export async function filterProduct(category) {
    try {
        if (category.includes("semua")) {
            return await getAllProduct();
        } else {
            return await axios.get(`${baseURL}/product/filter?categories=${category}`);
        }
    } catch (error) {
        return error.response;
    }
}

export async function offerProduct(data) {
    try {
        return await axios.post(`${baseURL}/offer`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

// Seller Service
export async function getProductSeller() {
    try {
        return await axios.get(`${baseURL}/seller/product`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function getProductSellerInTrash() {
    try {
        return await axios.get(`${baseURL}/seller/product/trash`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function createProduct(data) {
    try {
        return await axios.post(`${baseURL}/seller/product`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function updateProduct(id, data) {
    try {
        return await axios.put(`${baseURL}/seller/product/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function updateGalleryProduct(id, data) {
    try {
        return await axios.put(`${baseURL}/seller/product/gallery/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function getProductSold() {
    try {
        return await axios.get(`${baseURL}/seller/product/sold`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function getOfferProduct() {
    try {
        return await axios.get(`${baseURL}/seller/product/offer`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function getDetailProductOffer(id, user) {
    try {
        return await axios.get(`${baseURL}/seller/product/offer/${id}?user=${user}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function updateStatusProduct(data, id) {
    try {
        return await axios.put(`${baseURL}/seller/product/status/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function moveProductToTrash(id) {
    try {
        return await axios.delete(`${baseURL}/seller/product/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function RestoreProduct(id, data) {
    try {
        return await axios.put(`${baseURL}/seller/product/restore/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

