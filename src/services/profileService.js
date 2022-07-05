import axios from "axios";

const baseURL = "https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1";

export async function editProfilePhoto({ name, email, password }) {
    try {
        return await axios.post(`${baseURL}/`, {
            name,
            email,
            password,
        });
    } catch (error) {
        return error.response;
    }
}
