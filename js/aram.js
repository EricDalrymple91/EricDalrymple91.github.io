function roll(summoner) {
    const championPick1 = document.getElementById('championPick1');
    const championPick2 = document.getElementById('championPick2');
    const championPick3 = document.getElementById('championPick3');

    championPick1.innerHTML = "";
    championPick2.innerHTML = "";
    championPick3.innerHTML = "";

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
        case "Tori":
            championPicks = championPicker(ToriChampions);
        case "David":
            championPicks = championPicker(DavidChampions);
        case "Nate":
            championPicks = championPicker(NateChampions);
        default:
            break;
    }

    championPicks.forEach((champion, index) => {
        if (index === 0) {
            championPick1.style.opacity = 0;
            setTimeout(() => {
                championPick1.innerHTML = champion;
                championPick1.style.opacity = 1;
            }, 500);
        } else if (index === 1) {
            championPick2.style.opacity = 0;
            setTimeout(() => {
                championPick2.innerHTML = champion;
                championPick2.style.opacity = 1;
            }, 1000);
        } else {
            championPick3.style.opacity = 0;
            setTimeout(() => {
                championPick3.innerHTML = champion;
                championPick3.style.opacity = 1;
            }, 1500);
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
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir",
    "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki",
    "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz",
    "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia",
    "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin",
    "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "K'Sante", "LeBlanc", "Lee Sin",
    "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio",
    "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah",
    "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan",
    "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani",
    "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka",
    "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
    "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego",
    "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick",
    "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
];


const EricChampions = leagueOfLegendsChampions.filter(
    item => ![
        "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurora", "Azir",
        "Bard", "Blitzcrank", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Corki",
        "Diana", "Draven", "Ekko", "Elise", "Evelynn",
        "Fiddlesticks", "Fizz", "Galio", "Gangplank", "Graves",
        "Hecarim", "Heimerdinger", "Hwei", "Irelia", "Ivern",
        "Janna", "Jarvan IV", "Jayce", "Jhin", "Jinx",
        "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw",
        "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu",
        "Malzahar", "Maokai", "Master Yi", "Mel", "Milio", "Miss Fortune", "Morgana",
        "Naafiri", "Nami", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump",
        "Orianna", "Ornn", "Pantheon", "Pyke", "Qiyana", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Rengar", "Riven", "Ryze",
        "Samira", "Seraphine", "Shaco", "Shyvana", "Sivir", "Smolder", "Sona", "Soraka", "Swain", "Syndra",
        "Taliyah", "Talon", "Tristana", "Twitch", "Udyr",
        "Varus", "Vayne", "Vex", "Vi", "Viego", "Viktor", "Vladimir",
        "Xayah", "Xin Zhao",
        "Yasuo", "Yone", "Yorick", "Yuumi",
        "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
    ].includes(item)
);

const MickeyChampions = leagueOfLegendsChampions.filter(
    item => ![
      "Aatrox", "Aurelion Sol", "Azir", "Camille", "Cassiopeia", "Cho'Gath", "Dr. Mundo",
      "Fiora", "Galio", "Gwen", "Hecarim", "Irelia", "Janna", "Jax", "Jayce", "Karthus",
      "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Lulu", "Malzahar", "Maokai",
      "Naafiri", "Olaf", "Ornn", "Pyke", "Qiyana", "Rakan", "Rammus", "Rek'Sai", "Rengar",
      "Sejuani", "Seraphine", "Shyvana", "Skarner", "Swain", "Taliyah", "Talon", "Tryndamere",
      "Udyr", "Urgot", "Vel'Koz", "Vex", "Vi", "Vladimir", "Volibear", "Yone", "Yorick",
      "Yuumi", "Zac"
    ].includes(item)
)

const CaitlinChampions = leagueOfLegendsChampions.filter(
    item => ![
      "Aatrox", "Ambessa", "Aphelios", "Azir", "Belveth", "Camille", "Cassiopeia",
      "Diana", "Gnar", "Gragas", "Gwen", "Hwei", "Ivern", "Kalista", "Kayn",
      "Kennen", "Kled", "Ksante", "Lissandra", "Naafiri", "Nilah", "Nocturne",
      "Qiyana", "Rell", "Rumble", "Samira", "Sejuani", "Sett", "Shaco", "Shyvana",
      "Smolder", "Talon", "Urgot", "Wukong", "Yasuo", "Zoe"
    ].includes(item)
);

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

const ToriChampions = leagueOfLegendsChampions.filter(
     item => ![
    ].includes(item)
)

const DavidChampions = leagueOfLegendsChampions.filter(
     item => ![
    ].includes(item)
)

const NateChampions = leagueOfLegendsChampions.filter(
     item => ![
        "Ahri", "Akshan", "Alistar", "Amumu", "Annie", "Aphelios", "Aurelion Sol",
        "Azir", "Bard", "Bel'Veth", "Briar", "Camille", "Cassiopeia", "Diana", "Elise",
        "Evelynn", "Fiddlesticks", "Fiora", "Gangplank", "Gnar", "Gragas", "Gwen",
        "Hecarim", "Heimerdinger", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax",
        "Jayce", "Jhin", "K'Sante", "Kai'Sa", "Kalista", "Kassadin", "Kayle", "Kayn",
        "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lillia", "Lissandra",
        "Lucian", "Lulu", "Malzahar", "Maokai", "Milio", "Naafiri", "Nami", "Nasus",
        "Neeko", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Pyke",
        "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renata Glasc", "Renekton",
        "Rengar", "Ryze", "Samira", "Sejuani", "Seraphine", "Shaco", "Shyvana", "Singed",
        "Skarner", "Swain", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Trundle", "Urgot",
        "Vex", "Viktor", "Vladimir", "Wukong", "Xayah", "Xin Zhao", "Yasuo", "Yorick",
        "Yuumi", "Zeri", "Ziggs", "Zilean", "Zyra"
    ].includes(item)
)