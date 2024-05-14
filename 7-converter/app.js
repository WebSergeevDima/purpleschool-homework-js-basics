const converterToUserCur = (money, cur) => money * cur;

const converter = (money, curStart, curFinish) => {
    const RUB$ = 91.36;
    const $RUB = 0.010946;
    const EUR$ = 0.92965;
    const $EUR = 1.08;
    const EURRUB = 98.67;
    const RUBEUR = 0.010135;

    switch (curStart + curFinish) {
        case 'руб$':
            return converterToUserCur(money, $RUB);
            break;
        case '$руб':
            return converterToUserCur(money, RUB$);
            break;
        case 'евро$':
            return converterToUserCur(money, $EUR);
            break;
        case '$евро':
            return converterToUserCur(money, EUR$);
            break;
        case 'евроруб':
            return converterToUserCur(money, EURRUB);
            break;
        case 'рубевро':
            return converterToUserCur(money, RUBEUR);
            break;
        default:
            return 0;
    }
}

//Вы можете использовать: руб, $, евро
console.log(converter(1000, 'руб', 'евро'));