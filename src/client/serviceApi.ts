import 'whatwg-fetch';
declare var BASE_URL: string;

export function getServices() {
    return get('services');
}

export function addService(name: string, url: string) {
    return createData(name, url, 'services');
}

export function deleteService(id: string) {
    return deleteData(id, 'services');
}

function get(requestPath: string) {
    return fetch(BASE_URL+ requestPath)
        .then(response => response.json());
}

function createData(name: string, url: string, requestPath: string) {
    let headers: Headers = new Headers({
        "Content-Type": "application/json"
    });
    return fetch(BASE_URL + requestPath + '/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ "name": name, "url": url})
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        });
}

function deleteData(id: string, requestPath: string) {
    return fetch(BASE_URL + requestPath + '/' + id, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        });
}