import axios from 'axios';

const baseURL = 'https://be-final-project-group-4-fsw-2.herokuapp.com/api/v1';
const token = JSON.parse(localStorage.getItem('token'))

export async function getProductSold() {
    try {
        return await axios.get(`${baseURL}/seller/product/sold`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }) 

    } catch (error) {
        return error.response
    }
}

export async function getOfferProduct() {
    try {
        return await axios.get(`${baseURL}/seller/product/offer`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }) 

    } catch (error) {
        return error.response
    }
}