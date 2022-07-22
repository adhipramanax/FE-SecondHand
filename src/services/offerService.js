import axios from "axios";

const baseURL = "https://dev-be-group-4-fsw-2.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

// Buyer Service
export async function getAllOfferProduct(id) {
    try {
        return await axios.get(`${baseURL}/offer/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function updateStatusOffer(data, id) {
    
    try {
        return await axios.put(`${baseURL}/offer/${id}`,data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}
