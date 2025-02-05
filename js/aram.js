function roll(summoner) {
    const championPick1 = document.getElementById('championPick1');
    const championPick2 = document.getElementById('championPick2');
    const championPick3 = document.getElementById('championPick3');

    let championPicks = ["", "", ""];
    switch (summoner) {
        case "Eric":
            championPicks = championPicker(EricChampions);
            break;
        case "Mickey":
            championPicks = championPicker(MickeyChampions);
            break;
        case "Caitlin":
            championPicks = championPicker(CaitlinChampions);
            break;
        case "Ben":
            championPicks = championPicker(BenChampions);
            break;
        case "Pat":
            championPicks = championPicker(PatChampions);
            break;
        case "Hogi":
            championPicks = championPicker(HogiChampions);
            break;
        default:
            break;
    }

    championPicks.forEach((champion, index) => {
        if (index === 0) {
            championPick1.innerHTML = champion;
        } else if (index === 1) {
            championPick2.innerHTML = champion;
        } else {
            championPick3.innerHTML = champion;
        }
    });
}


function championPicker(championPool) {
    let championPicks = [];
    let championPoolLength = championPool.length;
    while (championPicks.length < 3) {
        const randomIndex = Math.floor(Math.random() * championPoolLength);
        const randomChampion = championPool[randomIndex];
        if (championPicks.includes(randomChampion)) {
            continue;
        }
        championPicks.push(randomChampion);
    }
    return championPicks.sort();
}


const EricChampions = [
    "Aatrox",
    "Gragas",
    "Kennen",
    "Lee Sin",
    "Lulu",
    "Rumble",
    "Sylas",
]

const MickeyChampions = [
    "Aatrox",
    "Gragas",
    "Kennen",
    "Lee Sin",
    "Lulu",
    "Rumble",
    "Sylas",
]

const CaitlinChampions = [
    "Aatrox",
    "Gragas",
    "Kennen",
    "Lee Sin",
    "Lulu",
    "Rumble",
    "Sylas",
]

const BenChampions = [
    "Aatrox",
    "Gragas",
    "Kennen",
    "Lee Sin",
    "Lulu",
    "Rumble",
    "Sylas",
]

const PatChampions = [
    "Aatrox",
    "Gragas",
    "Kennen",
    "Lee Sin",
    "Lulu",
    "Rumble",
    "Sylas",
]

const HogiChampions = [
    "Aatrox",
    "Gragas",
    "Kennen",
    "Lee Sin",
    "Lulu",
    "Rumble",
    "Sylas",
]