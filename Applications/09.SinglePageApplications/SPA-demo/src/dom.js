const main = document.querySelector('main');

export function showSection(section) {
    main.replaceChildren(section);
}

export function e(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
        element[prop] = attr[prop];
    }
    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number'){
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}