import axios from 'axios';

const baseURL = 'https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1';

export async function registerService( {name, email, password} ) {
    try {
        return await axios.post(`${baseURL}/auth/register`, {
            name, 
            email,
            password
        })

    } catch (error) {
        return error.response
    }
}

