const converterTo$ = (money, cur, is$ = false) => is$ ? money * cur : money / cur;

const converterToUserCur = (money, cur) => money * cur;

const converter = (money, curStart, curFinish) => {
    let usdMoney;
    const RUB$ = 93.03;
    const EUR$ = 0.94;
    const BYN$ = 3.27;
    const CZK$ = 23.73;

    if(curStart === '$') {
        switch (curFinish) {
            case 'руб':
                return converterTo$(money, RUB$, true);
            case 'евро':
                return converterTo$(money, EUR$, true);
            case 'бел руб':
                return converterTo$(money, BYN$, true);
            case 'чешская крона':
                return converterTo$(money, CZK$, true);
        }
    }

    switch (curStart) {
        case 'руб':
            usdMoney = converterTo$(money, RUB$);
            break;
        case 'евро':
            usdMoney = converterTo$(money, EUR$);
            break;
        case 'бел руб':
            usdMoney = converterTo$(money, BYN$);
            break;
        case 'чешская крона':
            usdMoney = converterTo$(money, CZK$);
            break;
        default: return null;
    }

    switch (curFinish) {
        case 'руб':
            return converterToUserCur(usdMoney, RUB$);
        case 'евро':
            return converterToUserCur(usdMoney, EUR$);
        case 'бел руб':
            return converterToUserCur(usdMoney, BYN$);
        case 'чешская крона':
            return converterToUserCur(usdMoney, CZK$);
        case '$':
            return usdMoney;
        default: return null;
    }
}

console.log(converter(1000, 'евро', 'руб'));