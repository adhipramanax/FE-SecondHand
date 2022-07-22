import axios from "axios";

const baseURL = "https://dev-be-group-4-fsw-2.herokuapp.com/api/v1";
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
