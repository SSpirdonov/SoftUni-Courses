import * as api from './api.js';
 


export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllGamesHome(url) {
    
    return await api.get(url);    
}

export async function getDetails(url) {
    
    return await api.get(url);    
}

export async function editPageById(url, data) {
    
    return await api.put(url, data);  
}

export async function getAllGamesCatalog(url) {
    
    return await api.get(url);
}

export async function createItem(url, data) {
    
    return await api.post(url, data);
}

export async function createComment(url, data) {
    
    return await api.post(url, data);
}

export async function deleteItem(url) {
    
    return await api.del(url);
}

export async function getAllComments(url) {
    
    return await api.get(url);
}