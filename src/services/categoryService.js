import axios from "axios";

const baseURL = "https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

// Buyer Service
export async function getAllCategory() {
    try {
        return await axios.get(`${baseURL}/categories`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}