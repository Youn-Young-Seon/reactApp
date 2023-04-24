import axios from "axios";

export const api = {
    get: (url,
        param = {}, 
        success, 
        fail) => {        
            axios.get(`${process.env.REACT_APP_BE_DOMAIN}:${process.env.REACT_APP_BE_PORT}${url}`, param, { withCredentials: true })
                .then((response) => {
                    return success(response.data);
                })
                .catch((error) => {
                    return fail(error);
                })
    },
    post: (url,
        param = {}, 
        success = () => {}, 
        fail = () => {} ) => {
            axios.post(`${process.env.REACT_APP_BE_DOMAIN}:${process.env.REACT_APP_BE_PORT}${url}`, param, { withCredentials: true })
                .then((response) => {
                    return success(response.data);
                })
                .catch((error) => {
                    return fail(error);
                })
    }
}