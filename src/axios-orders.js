import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-a8da0.firebaseio.com/'
})

export default instance;