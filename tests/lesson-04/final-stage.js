function findPair() {
    let count = 0;
    console.log("-- Cặp số có tổng chia hết cho 17 là --")
    for (let a = 1; a <= 100; a++) {
        for (let b = a; b <= 100; b++) {
            if ((a + b) % 17 === 0) {
                console.log(`(${a}, ${b})`);
                count++;
            }
        }
    }
    console.log(`Tổng cộng có : ${count} cặp số.`)
}
findPair();