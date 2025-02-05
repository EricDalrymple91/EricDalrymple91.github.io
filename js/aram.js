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


const leagueOfLegendsChampions = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe",
    "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille",
    "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise",
    "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
    "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna",
    "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin",
    "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "KSante", "LeBlanc",
    "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
    "Milio", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus",
    "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon",
    "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton",
    "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco",
    "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra",
    "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere",
    "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi",
    "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao",
    "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra",
    "Hwei", "Smolder", "Aurora", "Ambessa", "Mel",
];


const EricChampions = leagueOfLegendsChampions.filter(
    item => ![
        "Hwei",
    ].includes(item)
);

const MickeyChampions = leagueOfLegendsChampions.filter(
    item => ![
    ].includes(item)
)

const CaitlinChampions = leagueOfLegendsChampions.filter(
    item => ![
    ].includes(item)
)

const BenChampions = leagueOfLegendsChampions.filter(
    item => ![
    ].includes(item)
)

const PatChampions = leagueOfLegendsChampions.filter(
    item => ![
    ].includes(item)
)

const HogiChampions = leagueOfLegendsChampions.filter(
    item => ![
    ].includes(item)
)