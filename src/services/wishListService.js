import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";
const token = localStorage.getItem("token");

// Buyer Service
export async function getWishListProduct(id) {
    try {
        return await axios.get(`${baseURL}/wishlist/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}