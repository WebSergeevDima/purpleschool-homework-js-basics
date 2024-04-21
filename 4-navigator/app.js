const addressLat = 10;
const addressLong = 5;
const positionLat = 35;
const positionLong = -10;

const result = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);

console.log('Расстояние: ', result);