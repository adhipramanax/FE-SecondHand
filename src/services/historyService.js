import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";
const token = localStorage.getItem("token");

export async function getHistoryTransaction() {
    try {
        return await axios.get(`${baseURL}/offer/history`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}