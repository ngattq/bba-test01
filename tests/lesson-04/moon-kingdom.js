const characters = [
    { name: "Mario", level: 3, health: 150 },
    { name: "Mario1", level: 12, health: 330 },
    { name: "Mario2", level: 10, health: 1050 },
    { name: "Mario3", level: 20, health: 1530 }
];

function createCharacters() {
    // tạo mảng mới characterPower
    const charactersPower = characters.map((char) => {
        return {
            name: char.name.toUpperCase(),
            level: char.level * 2,
            health: char.health * 3
        };
    });
    console.log("--Danh sách nhân vật sau khi characterPower--");
    console.log(charactersPower);
    return charactersPower;

}

function possibleWinners() {
    // hàm filter các nhân vật có health > 1000
    const strongCharacters = characters.filter((strongChar) => {
        return strongChar.health > 1000;
    });
    console.log("--Danh sách nhân vật có health > 1000--");
    console.log(strongCharacters);
    return strongCharacters;
}


const players = [
    { name: "Mario", score: 400 },
    { name: "Luigi", score: 4000 },
    { name: "Peach", score: 2332 },
    { name: "Yoshi", score: 222 },
    { name: "Nga", score: 34 }

];
function printLeaderboard() {
    //sort player theo điểm số từ cao đến thấp
    const sortedList = players.sort((a, b) => b.score - a.score);
    console.log("---Bảng xếp hạng---");
    sortedList.forEach((players, index) => {
        let rank = index + 1;
        let medal = "   ";
        if (rank === 1) {
            medal = "🥇 "
        }
        else if (rank === 2) {
            medal = "🥈 "
        } else if (rank === 3) {
            medal = "🥉 "
        };
        console.log(`${medal} ${rank}. ${players.name} - ${players.score} pts`);
    })
}

createCharacters(characters);
possibleWinners(characters);
printLeaderboard(players);
