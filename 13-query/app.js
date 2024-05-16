const getQuery = (q = {}) => {
    let queryStr = '';

    for(const key of Object.keys(q)) {
        queryStr += ` ${key}=${q[key]}`;
    }

    return queryStr.trim().replaceAll(' ', '&');
}

console.log(getQuery({a: 'Вася', b: 'Ещё', age: 22}));