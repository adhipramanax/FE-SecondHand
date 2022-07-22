import axios from "axios";

const baseURL = "http://localhost:8080/api/v1";
const token = localStorage.getItem("token");

export async function getProfile() {
    try {
        return await axios.get(`${baseURL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        return error.response;
    }
}

export async function updateProfile(data, id) {
    try {
        return await axios.put(`${baseURL}/profile/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
    } catch (error) {
        return error.response;
    }
}
