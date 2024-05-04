const getLastLetter = (word) => word.at(-1);

const getShortWord = (word) => word.slice(0, -1);

const crypto = (password) => {
    if(password.length < 4) {
        return;
    }

    const passwordSplit = password.split('');
    const shortPassword = getShortWord(passwordSplit);
    shortPassword.reverse();
    shortPassword.push(getLastLetter(passwordSplit));
    shortPassword.unshift(passwordSplit.splice(1, 3).join(''));

    return shortPassword.join('');
}

const check = (password, originPassword) => {
    const passwordWithoutPrefix = password.slice(3);

    const passwordSplit = passwordWithoutPrefix.split('');
    const shortPassword = getShortWord(passwordSplit);
    shortPassword.reverse();
    shortPassword.push(getLastLetter(passwordWithoutPrefix));
    const resultPassword = shortPassword.join('');

    return resultPassword === originPassword ? true : false;
}

console.log(check(crypto('password'), 'password'));