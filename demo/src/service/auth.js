import baseService from './baseService.js';

export function login(credentails){  
    return baseService.post('/login',credentails);
}
