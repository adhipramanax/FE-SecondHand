import axios from "axios";

const baseURL = "https://dev-be-group-4-fsw-2.herokuapp.com/api/v1";
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
