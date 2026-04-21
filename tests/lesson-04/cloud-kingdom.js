//bai 1
let playerName = "Mario";
let currentLives = 3;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

const tongCoin = coinLevel1 + coinLevel2 + coinLevel3;
const avgCoin = tongCoin / 3;
const soDuCoin = tongCoin % 3;
console.log(`Điểm trung bình la: ${avgCoin}`);
console.log(`Số dư của điểm trung bình là: ${soDuCoin}`);