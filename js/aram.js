function roll() {
    const summoner1 = document.getElementById('summoner1').value;
    const summoner2 = document.getElementById('summoner2').value;
    const summoner3 = document.getElementById('summoner3').value;

    const rollsSection = document.getElementById("rollsSection");
    rollsSection.innerHTML = "";  // clear previous content

    // Check to make sure all three summoners were selected
    if (
        summoner1 === "None" ||
        summoner2 === "None" ||
        summoner3 === "None"
    ) {
        const missingSummonersText = document.createElement("h3");
        missingSummonersText.textContent = "Fortune doesn't favor fools..."
        missingSummonersText.color = "white";
        missingSummonersText.classList.add("fade-in")
        rollsSection.appendChild(missingSummonersText);
        setTimeout(() => {
            missingSummonersText.classList.add("visible");
        }, 10);
        return;
    }

    // Check to make sure there are no duplicate selections
    const summoners = [summoner1, summoner2, summoner3].sort();
    const unique = new Set(summoners);
    if (unique.size < summoners.length) {
        const duplicateSummonersText = document.createElement("h3");
        duplicateSummonersText.textContent = "The shadow cannot be duplicated...."
        duplicateSummonersText.color = "white";
        duplicateSummonersText.classList.add("fade-in")
        rollsSection.appendChild(duplicateSummonersText);
        setTimeout(() => {
            duplicateSummonersText.classList.add("visible");
        }, 10);
        return;
    }

    // Select nine unique champions (three for each summoner)
    const championPoolBySummoner = {
        [summoners[0]]: getChampionTop50BySummoner(summoners[0]),
        [summoners[1]]: getChampionTop50BySummoner(summoners[1]),
        [summoners[2]]: getChampionTop50BySummoner(summoners[2]),
    };

    const selectedChampPool = [];

    const bannedChampions = [
        "Mordekaiser",  // 6/10/25
    ];

    summoners.forEach((summoner, index) => {
        let championPool = championPoolBySummoner[summoner];
        let championPoolLength = championPool.length;
        let targetLength = 3 * (index + 1);
        while (selectedChampPool.length < targetLength) {
            const randomIndex = Math.floor(Math.random() * championPoolLength);
            const randomChampion = championPool[randomIndex];

            if (bannedChampions.includes(randomChampion)) {
                continue;
            }

            if (selectedChampPool.includes(randomChampion)) {
                continue;
            }
            selectedChampPool.push(randomChampion);
        }
    })
    selectedChampPool.sort()

    // Create an object that maps the champ and those who own it
    let ownershipByChamp = {};
    selectedChampPool.forEach(champ => {
        ownershipByChamp[champ] = [];
        summoners.forEach(summoner => {
            if (getChampionTop50BySummoner(summoner).includes(champ)) {
                ownershipByChamp[champ].push(true);
            } else {
                ownershipByChamp[champ].push(false);
            }
        });
    });

    // Create the output display table
    const table = document.createElement("table");
    table.classList.add("champSelectionTable");

    // Create header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const iconHeader = document.createElement("th");
    iconHeader.textContent = "";
    headerRow.appendChild(iconHeader);

    const champHeader = document.createElement("th");
    champHeader.textContent = "Champion";
    headerRow.appendChild(champHeader);

    summoners.forEach(name => {
        const th = document.createElement("th");
        th.textContent = name;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Prepare tbody
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    rollsSection.appendChild(table);

    // Add rows with suspenseful delay
    selectedChampPool.forEach((champ, index) => {
        setTimeout(() => {
            const row = document.createElement("tr");

            const iconCell = document.createElement("td");
            iconCell.classList.add("image-cell");
            const icon = document.createElement("img");
            icon.src = "../images/lol_champion_icons/" + champ.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + ".png";
            icon.alt = champ + "icon";
            icon.height = 75;
            icon.width = 75;
            iconCell.appendChild(icon);
            row.appendChild(iconCell);

            const champCell = document.createElement("td");
            champCell.textContent = champ;
            row.appendChild(champCell);

            ownershipByChamp[champ].forEach(val => {
                const cell = document.createElement("td");
                cell.textContent = val ? "✓" : "✗";
                cell.style.color = val ? "#4CAF50" : "#F44336"; // green or red
                row.appendChild(cell);
            });

            tbody.appendChild(row);

            if (index === selectedChampPool.length - 1) {
                // Add copy champs list button
                const copyChampsListButton = document.createElement("button");
                copyChampsListButton.textContent = "Copy Champion Pool";
                copyChampsListButton.classList.add("roll-button");
                copyChampsListButton.addEventListener("click", () => {
                    copyChampPoolName(selectedChampPool);
                });
                rollsSection.appendChild(copyChampsListButton);
            }

        }, index * 300); // 300ms delay between each row
    });
}


function getChampionTop50BySummoner(summoner) {
    switch (summoner) {
        case "Eric":
            return EricTop50;
        case "Mickey":
            return MickeyTop50;
        case "Caitlin":
            return CaitlinTop50;
        case "Ben":
            return BenTop50;
        case "Pat":
            return PatTop50;
        case "Hogi":
            return HogiTop50;
        case "Tori":
            return ToriTop50;
        case "David":
            return DavidTop50;
        case "Nate":
            return NateTop50;
        case "Dodger":
            return DodgerTop50;
        case "Liam":
            return LiamTop50;
        default:
            return leagueOfLegendsChampions;
    }
}


function getChampionPoolBySummoner(summoner) {
    switch (summoner) {
        case "Eric":
            return EricChampions;
        case "Mickey":
            return MickeyChampions;
        case "Caitlin":
            return CaitlinChampions;
        case "Ben":
            return BenChampions;
        case "Pat":
            return PatChampions;
        case "Hogi":
            return HogiChampions;
        case "Tori":
            return ToriChampions;
        case "David":
            return DavidChampions;
        case "Nate":
            return NateChampions;
        default:
            return leagueOfLegendsChampions;
    }
}


function copyChampPoolName(champPool) {
    navigator.clipboard.writeText(champPool.join(", "))
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
    "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra",
    "Mel", "Smolder", "Aurora", "Ambessa", "Hwei",
];

// Top 50
const EricTop50 = [
    "Aatrox", "Alistar", "Ambessa", "Aurelion Sol", "Bel'Veth",
    "Brand", "Briar", "Cho'Gath", "Darius", "Dr. Mundo",
    "Fiora", "Fizz", "Garen", "Gnar", "Gragas",
    "Gwen", "Hwei", "Illaoi", "Jax", "Kennen",
    "Lillia", "Lux", "Malphite", "Master Yi", "Mel",
    "Mordekaiser", "Nasus", "Nocturne", "Olaf", "Quinn",
    "Renekton", "Rumble", "Sett", "Shen", "Sion",
    "Skarner", "Tahm Kench", "Trundle", "Tryndamere", "Urgot",
    "Vayne", "Veigar", "Vel'Koz", "Vex", "Volibear",
    "Warwick", "Wukong", "Yasuo", "Yorick", "Zac",
]

const MickeyTop50 = [
    "Ambessa", "Anivia", "Annie", "Ashe", "Braum",
    "Caitlyn", "Corki", "Ezreal", "Gnar", "Gragas",
    "Illaoi", "Jarvan IV", "Jax", "K'Sante", "Kai'Sa",
    "Kennen", "Kindred", "Kog'Maw", "Lee Sin", "Leona",
    "Lucian", "Lulu", "Milio", "Miss Fortune", "Morgana",
    "Nami", "Nasus", "Orianna", "Ornn", "Pantheon",
    "Poppy", "Quinn", "Rell", "Renata Glasc", "Renekton",
    "Sejuani", "Sivir", "Smolder", "Tahm Kench", "Taric",
    "Thresh", "Tristana", "Twitch", "Varus", "Vayne",
    "Volibear", "Xayah", "Xin Zhao", "Zac", "Zilean",
];


const CaitlinTop50 = [
    "Ahri", "Annie", "Ashe", "Blitzcrank", "Brand",
    "Caitlyn", "Cho'Gath", "Elise", "Galio", "Graves",
    "Gwen", "Hecarim", "Irelia", "Kai'Sa", "Karma",
    "Karthus", "Kha'Zix", "Kindred", "Lillia", "Lulu",
    "Lux", "Malphite", "Maokai", "Mel", "Milio",
    "Miss Fortune", "Morgana", "Nautilus", "Neeko", "Pantheon",
    "Poppy", "Senna", "Seraphine", "Shen", "Sivir",
    "Smolder", "Tahm Kench", "Taric", "Teemo", "Tristana",
    "Trundle", "Twisted Fate", "Varus", "Vayne", "Vel'Koz",
    "Vi", "Volibear", "Warwick", "Xayah", "Zyra",
];

const BenTop50 = [
    "Aatrox", "Ambessa", "Amumu", "Aurora", "Azir",
    "Brand", "Braum", "Briar", "Darius", "Dr. Mundo",
    "Ekko", "Galio", "Gnar", "Gwen", "Illaoi",
    "Irelia", "Jarvan IV", "Jax", "Kayn", "Kennen",
    "Lee Sin", "Leona", "Lissandra", "Malphite", "Milio",
    "Nautilus", "Neeko", "Olaf", "Ornn", "Pantheon",
    "Poppy", "Qiyana", "Quinn", "Rek'Sai", "Rell",
    "Renekton", "Riven", "Sett", "Shen", "Skarner",
    "Swain", "Tahm Kench", "Taliyah", "Thresh", "Vex",
    "Vi", "Volibear", "Wukong", "Yone", "Zac",
];

const PatTop50 = [
    "Akali", "Ashe", "Caitlyn", "Camille", "Cassiopeia",
    "Cho'Gath", "Dr. Mundo", "Ezreal", "Gangplank", "Garen",
    "Gragas", "Gwen", "Hecarim", "Illaoi", "Jarvan IV",
    "Jax", "Kai'Sa", "Kassadin", "Katarina", "Kha'Zix",
    "Kled", "LeBlanc", "Master Yi", "Mordekaiser", "Naafiri",
    "Nasus", "Olaf", "Pantheon", "Qiyana", "Renata Glasc",
    "Renekton", "Riven", "Rumble", "Ryze", "Sett",
    "Shyvana", "Sion", "Syndra", "Talon", "Twitch",
    "Udyr", "Varus", "Vayne", "Viego", "Vladimir",
    "Xayah", "Yasuo", "Yone", "Zac", "Zed",
];

const HogiTop50 = [
    "Ahri", "Anivia", "Blitzcrank", "Brand", "Caitlyn",
    "Cho'Gath", "Corki", "Ekko", "Ezreal", "Fiddlesticks",
    "Fizz", "Galio", "Gangplank", "Gnar", "Gragas",
    "Heimerdinger", "Janna", "Jarvan IV", "Karma", "Kassadin",
    "Kennen", "Kha'Zix", "LeBlanc", "Leona", "Lissandra",
    "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
    "Mel", "Morgana", "Nami", "Nautilus", "Orianna",
    "Ornn", "Renata Glasc", "Sejuani", "Sett", "Shaco",
    "Shen", "Soraka", "Syndra", "Thresh", "Twisted Fate",
    "Veigar", "Xayah", "Zac", "Zilean", "Zoe",
];

const ToriTop50 = [
    "Ahri", "Amumu", "Anivia", "Annie", "Aurelion Sol",
    "Azir", "Brand", "Caitlyn", "Cassiopeia", "Cho'Gath",
    "Diana", "Draven", "Fiddlesticks", "Illaoi", "Janna",
    "Jinx", "Karma", "Leona", "Lillia", "Lissandra",
    "Lulu", "Lux", "Malphite", "Milio", "Miss Fortune",
    "Morgana", "Nami", "Neeko", "Nidalee", "Nunu & Willump",
    "Orianna", "Renata Glasc", "Seraphine", "Sona", "Soraka",
    "Swain", "Syndra", "Teemo", "Thresh", "Veigar",
    "Vel'Koz", "Vex", "Vi", "Viego", "Vladimir",
    "Xerath", "Ziggs", "Zilean", "Zoe", "Zyra",
];

const DavidTop50 = [
    "Aatrox", "Amumu", "Anivia", "Annie", "Aurelion Sol",
    "Blitzcrank", "Brand", "Braum", "Darius", "Ekko",
    "Ezreal", "Galio", "Garen", "Gnar", "Graves",
    "Heimerdinger", "Irelia", "Jax", "Jinx", "Karma",
    "Kennen", "Leona", "Lissandra", "Lux", "Malphite",
    "Master Yi", "Mordekaiser", "Morgana", "Nautilus", "Neeko",
    "Pantheon", "Poppy", "Ryze", "Sett", "Swain",
    "Syndra", "Taric", "Teemo", "Thresh", "Tristana",
    "Tryndamere", "Urgot", "Varus", "Vel'Koz", "Vi",
    "Viktor", "Warwick", "Wukong", "Xayah", "Ziggs",
];

const NateTop50 = [
    "Ahri", "Ambessa", "Amumu", "Anivia", "Ashe",
    "Blitzcrank", "Braum", "Caitlyn", "Darius", "Dr. Mundo",
    "Galio", "Hecarim", "Jax", "K'Sante", "Kai'Sa",
    "Karma", "Kindred", "Leona", "Lulu", "Maokai",
    "Milio", "Morgana", "Naafiri", "Nami", "Nasus",
    "Neeko", "Olaf", "Ornn", "Pantheon", "Poppy",
    "Quinn", "Rakan", "Rell", "Renata Glasc", "Renekton",
    "Sejuani", "Seraphine", "Shen", "Tahm Kench", "Taric",
    "Thresh", "Tristana", "Varus", "Vayne", "Vi",
    "Volibear", "Xayah", "Xin Zhao", "Zac", "Zilean",
];

const DodgerTop50 = [
    "Ahri", "Annie", "Bard", "Blitzcrank", "Brand",
    "Caitlyn", "Camille", "Darius", "Diana", "Dr. Mundo",
    "Ekko", "Ezreal", "Fiddlesticks", "Fiora", "Fizz",
    "Galio", "Gwen", "Heimerdinger", "Illaoi", "Irelia",
    "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa",
    "Kalista", "Katarina", "Kayn", "Kennen", "Lee Sin",
    "Lucian", "Lux", "Malphite", "Mel", "Miss Fortune",
    "Morgana", "Nasus", "Nautilus", "Neeko", "Orianna",
    "Poppy", "Pyke", "Qiyana", "Riven", "Ryze",
    "Samira", "Shaco", "Sion", "Vex", "Yasuo",
]

const LiamTop50 = [
    "Ahri", "Anivia", "Blitzcrank", "Brand", "Caitlyn",
    "Cho'Gath", "Corki", "Ekko", "Ezreal", "Fiddlesticks",
    "Fizz", "Galio", "Gangplank", "Gnar", "Gragas",
    "Heimerdinger", "Janna", "Jarvan IV", "Karma", "Kassadin",
    "Kennen", "Kha'Zix", "LeBlanc", "Leona", "Lissandra",
    "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
    "Mel", "Morgana", "Nami", "Nautilus", "Orianna",
    "Ornn", "Renata Glasc", "Sejuani", "Sett", "Shaco",
    "Shen", "Soraka", "Syndra", "Thresh", "Twisted Fate",
    "Veigar", "Xayah", "Zac", "Zilean", "Zoe",
]


// Owned champs
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