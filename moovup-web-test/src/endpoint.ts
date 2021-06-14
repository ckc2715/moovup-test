import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_SERVER || "https://api.json-generator.com"
const API_TOKEN = process.env.REACT_APP_API_TOKEN || "v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z"

const instance = axios.create({
    baseURL: API_SERVER,
});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['mode'] = 'cors';

instance.defaults.validateStatus = function (status) {
    return status <= 500;
}

instance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `bearer ${API_TOKEN}`
    return config;
})

export default instance;