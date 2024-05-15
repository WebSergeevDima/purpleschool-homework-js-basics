const luna = (card) => {
    let sum = 0,
        counter = 1;

    const number = card.replaceAll('-', '').trim();

    for(let char of number) {
        if((counter % 2) !== 0) {
            const doubleNumber = +char * 2;
            sum += doubleNumber > 9 ? doubleNumber - 9 : doubleNumber;
        } else {
            sum += +char;
        }

        counter++;
    }

    return sum % 10 === 0;
}

console.log(luna('4561-1213-4367-2612'));