const URL = 'http://localhost:3000/';

async function getData(path) {
    return makeRequest(path, {}, 'GET');
}

function postData(path, payload) {
    return makeRequest(path, payload, 'POST');
}
function putData(path, payload) {
    return makeRequest(path, payload, 'PUT');
}
function deleteData(path) {
    return makeRequest(path, {}, 'DELETE');
}

async function makeRequest(path, payload, method) {
    const the_url = buildUrl(path);
    let request_options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
    };

    if (method !== 'GET') {
        request_options['body'] = JSON.stringify( payload );
    }

    return await fetch(the_url, request_options);
}

function buildUrl (path) {
    const the_url = URL + path;
    
    return the_url; 
}