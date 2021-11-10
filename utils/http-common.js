import axios from 'axios'

export default axios.create({
    baseURL: 'https://kenaya-ecommerce-default-rtdb.firebaseio.com/'
})