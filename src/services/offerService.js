import axios from "axios";

const baseURL = "https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

// Buyer Service
export async function getAllOfferProduct(id) {
    console.log(id);
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