const baseUrl = 'http://182.61.47.1:8080/api';

let fetchData = async (api, param = {}, type = "get") => {
    let url = baseUrl + api;
    let dataStr = ''; //数据拼接字符串
    Object.keys(param).forEach(key => {
        dataStr += key + '=' + param[key] + '&';
    })

    if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
    }

    let requestConfig = {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Credentials': true
        },
    }

    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(param)
        })
    }


    console.log("url", url, requestConfig);

    const response = await fetch(url, requestConfig);
    const responseJson = await response.json();
    return responseJson

}

export default fetchData;