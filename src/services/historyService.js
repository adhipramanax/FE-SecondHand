import axios from "axios";

const baseURL = "https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

export async function getHistoryTransaction() {
    try {
        return await axios.get(`${baseURL}/offer/history`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
<<<<<<< HEAD
        });
=======
        });   
>>>>>>> 73760ef4771a7b327180c671bfa52c3ae062d3bc
    } catch (error) {
        return error.response;
    }
}