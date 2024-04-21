const q = prompt('Введите язык (en, ru, de, rw)');

switch (q) {
    case 'ru':
        console.log('Привет, дорогой друг!!!');
        break;
    case 'en':
        console.log('HELLO!!!');
        break;
    case 'de': console.log('GUTTEN TAG!!!');
        break;
    case 'rw': console.log('Mwaramutse!!!');
        break;
    default:
        console.log('Мы не поддерживаем Ваш язык(');
}