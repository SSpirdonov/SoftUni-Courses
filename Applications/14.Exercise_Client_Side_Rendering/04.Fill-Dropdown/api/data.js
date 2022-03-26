import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllItems() {    
    return api.get('/jsonstore/advanced/dropdown');    
}
//---------------------------------------------------------------------------------------

export async function getbyId(id) {
    return api.get('/data/ideas/' + id);
}
//---------------------------------------------------------------------------------------

export async function createItem(idea) {
    return api.post('/jsonstore/advanced/dropdown/', idea);
}
//---------------------------------------------------------------------------------------

export function deleteById(id) {
    return api.del('/data/ideas/' + id);
}

