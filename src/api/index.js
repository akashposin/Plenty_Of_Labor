import axios from 'axios';
import {API_URL} from '@env'

/**
 * this method is configure a base url of server and return a axios instance
 * @type {AxiosInstance}
 */

const instance = axios.create({
  baseURL: API_URL
});

// const ignoreUrls = ['/connect/token', '/api/Accounts/Register'];

export default instance;
