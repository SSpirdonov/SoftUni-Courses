

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export function parseQueryString(string) {
    
    const params = string
        .split('&')
        .map(p => p.split('='))
        .reduce((a,[k, v]) => Object.assign(a, {[k]: v}) , {})        
    return params;
}
