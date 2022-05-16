import * as api from './api.js';
 


export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getDetails(url) {
    
    return await api.get(url);    
}

export async function search(url) {
    
    return await api.get(url);    
}

export async function editItemById(url, data) {
    
    return await api.put(url, data);  
}

export async function getAllItems(url) {
    
    return await api.get(url);
}

export async function getAllLikes(url) {
    
    return await api.get(url);
}

export async function getCurUserLikes(url) {
    
    return await api.get(url);
}

export async function addLike(url, data) {
    
    return await api.post(url, data);
}

export async function getItemsByUserId(url) {
    
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