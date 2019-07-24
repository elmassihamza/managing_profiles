const parseJSON = (response: any) => response.json();

const request = (url: string) => {
    return fetch(url)
        .then(parseJSON);
};

export default request;
