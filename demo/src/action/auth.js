import * as authService from '../service/auth.js';
import { INVALID_USER, LOGIN_SUCCESSFUL, LOGOUT } from '../reducer/auth.js';
export  const loginUser = (credentials) => {
    return (dispatch) => {
       // delete credentials.password        
        authService.login(credentials)
            .then((response) => {               
                if (response.status === 200) {                    
                    localStorage.setItem("token", response.data.token)
                    dispatch({
                        type: LOGIN_SUCCESSFUL,
                        data: { token: response.data.token, role:"admin"}
                    });
                }
            })
            .catch((error) => {
                if (error.response) {
                    dispatch({ type: INVALID_USER, data: { error_msg: error.response.data.error } });
                }
            });
    }
};

export  const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT
        });    
        localStorage.removeItem("token");   
    }
};


