import axios from 'axios';

export function api_url(){
  return 'http://e354-2405-4802-133-77c0-70b3-160a-ff4e-de6a.ngrok.io/api/v1';
}

const ApiService = {
  axios,
  init(baseURL=process.env.API_URL) {
    axios.defaults.baseURL = baseURL;
    this.initCommonData();
  },

  get(...resource) {
    return axios.get(...resource);
  },
  

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   **/
  request(data) {
    return axios(data);
  },

};

export default ApiService;
