import axios from 'axios';

const baseURL = 'http://localhost:8080/api/v1';

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

export async function loginService( {email, password} ) {
    try {
        return await axios.post(`${baseURL}/auth/login`, { 
            email,
            password
        })

    } catch (error) {
        return error.response
    }
}

export async function googleService( data ) {
    try {
        return await axios.post(`${baseURL}/auth/google`, data)

    } catch (error) {
        return error.response
    }
}
