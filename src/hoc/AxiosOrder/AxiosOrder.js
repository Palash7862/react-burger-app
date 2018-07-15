import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bugger-app.firebaseio.com'
});

export default instance;