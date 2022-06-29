import axios from "axios";

const baseURL = "https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1";
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

// Seller Service
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
