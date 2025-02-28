const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const sacnasty_placements = {
    'Mo': 10 ** 3,
    'Jacob': 9 ** 3,
    'David': 8 ** 3,
    'Ben': 7 ** 3,
    'Akhil': 6 ** 3,
    'Weams': 5 ** 3
}

const not_another_placements = {
    'Chris': 10 ** 3,
    'Snaz': 9 ** 3,
    'Hubz': 8 ** 3,
    'ATG': 7 ** 3,
    'Dev': 6 ** 3,
    'Eric': 5 ** 3
}

const bmsd_placements = {
    'David': 10 ** 3,
    'Jerome': 9 ** 3,
    'Guim': 8 ** 3,
    'Eric': 7 ** 3,
    'Will': 6 ** 3,
    'Akhil': 5 ** 3
}

const draftLottery = (placements) => {

    const ballDiv = document.getElementById('sacnasty-ball-div');

    // Reset
    ballDiv.style.display = 'none';
    [6, 5, 4, 3, 2, 1].forEach(e => {
        const text = document.getElementById(`pick${e}text`);
        const ball = document.getElementById(`sacnasty-ball-${e}`);
        ball.style.color = 'black';
        ball.style.backgroundColor = 'white';
        text.style.textShadow = 'none';
        text.innerHTML = `Pick #${e}`;
    })

    let lotteryBalls = [];

    for (const [key, value] of Object.entries(placements)) {
        for (const _ of Array(value).keys()) {
            lotteryBalls.push(key)
        }
    }

    // Randomly shuffle
    lotteryBalls = shuffle(lotteryBalls);
    // Create a unique order
    lotteryBalls = [...new Set(lotteryBalls)];
    // Reverse
    lotteryBalls = lotteryBalls.reverse()

    lotteryBalls.forEach((e, i) => {
        const newText = document.getElementById(`pick${6 - i}texthidden`);
        newText.innerHTML = `${e} #${6 - i}`;
    })

    ballDiv.style.display = 'block';
}

const revealPick = (pickNumber) => {
    const text = document.getElementById(`pick${pickNumber}text`);
    const ball = document.getElementById(`sacnasty-ball-${pickNumber}`);

    const colors = {
        6: '#8b0000',
        5: '#ed2939',
        4: '#ff8c00',
        3: '#ffb90f',
        2: '#00ff00',
        1: '#00703c'
    };

    ball.style.color = 'white';
    ball.style.backgroundColor = colors[pickNumber];
    text.style.textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';
    text.innerHTML = document.getElementById(`pick${pickNumber}texthidden`).innerHTML;
}

