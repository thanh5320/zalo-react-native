import { POST_LOGIN } from "./types";


export const postLogin = () => {
    try {
      return async dispatch => {
        const response = await axios.get(`${BASE_URL}`);
        // console.log('DATA ========>', response.data);
        if (response.data) {
          dispatch({
            type: GET_BOOKS,
            payload: response.data
          });
        } else {
          console.log('Unable to fetch data from the API BASE URL!');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
    }
  };