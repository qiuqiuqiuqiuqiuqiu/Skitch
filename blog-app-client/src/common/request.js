import axios from 'axios';
import {API_BASE_URL, TIMEOUT} from './Constants';

export const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: TIMEOUT,
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: true,
    // headers: {'Authorization': ''}
});

// How to perform:
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;