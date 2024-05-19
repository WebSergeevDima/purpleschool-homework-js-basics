const clearDate = (dates) => {
    const isDay = (day) => +day >= 1 && +day <= 31;

    const isMonth = (month) => +month >= 1 && +month <= 12;

    const isYear = (year) => 1970 < year && year <= new Date().getFullYear();

    const setBasicSeparator = (date) => date.map(number => number < 10 && String(number).length === 1 ? `0${number}` : number).join('-');

    const getValidateDate = (date) => isDay(date[0]) && isMonth(date[1]) && isYear(date[2]) ? setBasicSeparator(date) : false;

    return dates.map(date => {
        if (date.includes('.')) {
            const dateArr = date.split('.');

            return getValidateDate(dateArr);
        } else if (date.includes('-')) {
            const dateArr = date.split('-');

            return getValidateDate(dateArr);
        } else if (date.includes('/')) {
            const dateArr = date.split('/');

            return getValidateDate(dateArr);
        }

        return false;
    }).filter(date => date !== false);
}

console.log(clearDate(['12.12.2024', '12/12/100', '1-12-2000', '0/12/1990', '1/13/1990', '01-04-1990', '43242']));