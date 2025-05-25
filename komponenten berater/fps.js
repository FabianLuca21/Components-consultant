document.addEventListener("DOMContentLoaded", function() {
    let gpuList = {
        "Bitte Auswählen": 0,
        "RX 7900 XTX": 220,
        "RX 7900 XT": 200,
        "RX 7800 XT": 180,
        "RX 7700 XT": 160,
        "RX 6800 XT": 160,
        "RX 6750 XT": 150,
        "RX 6700 XT": 140,
        "RX 6650 XT": 130,
        "RX 6600 XT": 120,
        "RX 6600": 110,
        "RX 6500 XT": 90,
        "RX 5500 XT": 80,
        "RTX 4090": 250,
        "RTX 4080": 200,
        "RTX 4070 Ti": 180,
        "RTX 4070": 160,
        "RTX 4060 Ti": 140,
        "RTX 4060": 120,
        "RTX 3090": 200,
        "RTX 3080 Ti": 180,
        "RTX 3080": 170,
        "RTX 3070 Ti": 160,
        "RTX 3070": 150,
        "RTX 3060 Ti": 130,
        "RTX 3060": 110,
        "RTX 3050": 90,
        "RTX 2060": 100,
        "GTX 1660 Super": 80,
        "GTX 1650": 60
    };

    let cpuList = {
        "Bitte Auswählen": 0,
        "Ryzen 9 7950X": 70,
        "Ryzen 9 7900X": 65,
        "Ryzen 7 7800X3D": 60,
        "Ryzen 7 7700X": 55,
        "Ryzen 5 7600X": 50,
        "Ryzen 9 5950X": 65,
        "Ryzen 9 5900X": 60,
        "Ryzen 7 5800X3D": 55,
        "Ryzen 7 5800X": 50,
        "Ryzen 5 5600X": 40,
        "Ryzen 5 5600": 38,
        "Ryzen 5 5500": 35,
        "Ryzen 3 5300G": 30,
        "Ryzen 9 3900X": 55,
        "Ryzen 7 3700X": 45,
        "Ryzen 5 3600X": 40,
        "Ryzen 5 3600": 35,
        "Ryzen 5 3400G": 30,
        "Ryzen 3 3200G": 25,
        "Intel i9-13900K": 80,
        "Intel i7-13700K": 60,
        "Intel i5-13600K": 55,
        "Intel i5-13400F": 45,
        "Intel i9-12900K": 70,
        "Intel i7-12700K": 60,
        "Intel i5-12600K": 50,
        "Intel i5-12400F": 45,
        "Intel i3-12100F": 30,
        "Intel i9-11900K": 55,
        "Intel i7-11700K": 50,
        "Intel i5-11600K": 45,
        "Intel i5-11400F": 30,
        "Intel i9-10900K": 55,
        "Intel i7-10700K": 50,
        "Intel i5-10600K": 45,
        "Intel i3-10100F": 25
    };

    let gameList = {
        "Bitte Auswählen": 0,
        "GTA 5": 1.1,
        "Cyberpunk 2077": 0.7,
        "Fortnite": 1.3,
        "Call of Duty Warzone": 0.9,
        "Red Dead Redemption 2": 0.8,
        "Valorant": 1.5,
        "Minecraft": 2.0,
        "The Witcher 3": 1.0,
        "CS2": 1.6,
        "Forza Horizon 5": 1.0,
        "Assassin's Creed Valhalla": 0.7,
        "Far Cry 6": 0.9,
        "Elden Ring": 0.8,
        "Apex Legends": 1.4,
        "PUBG": 1.2,
        "League of Legends": 1.8,
        "Overwatch 2": 1.5,
        "Hogwarts Legacy": 0.6
    };

    let gpuSelect = document.getElementById("gpu");
    let cpuSelect = document.getElementById("cpu");
    let gameSelect = document.getElementById("game");

    function updateSelectOptions() {
        gpuSelect.innerHTML = "";
        cpuSelect.innerHTML = "";
        gameSelect.innerHTML = "";

        for (let gpu in gpuList) {
            let option = document.createElement("option");
            option.value = gpu;
            option.textContent = gpu;
            gpuSelect.appendChild(option);
        }

        for (let cpu in cpuList) {
            let option = document.createElement("option");
            option.value = cpu;
            option.textContent = cpu;
            cpuSelect.appendChild(option);
        }

        for (let game in gameList) {
            let option = document.createElement("option");
            option.value = game;
            option.textContent = game;
            gameSelect.appendChild(option);
        }
    }

    updateSelectOptions();

    document.getElementById("fpsForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let gpu = gpuSelect.value;
        let cpu = cpuSelect.value;
        let ram = parseInt(document.getElementById("ram").value);
        let resolution = document.getElementById("resolution").value;
        let game = gameSelect.value;
        let baseFPS = 100;

        baseFPS = gpuList[gpu] + cpuList[cpu];

        if (ram === 64) baseFPS += 20;
        else if (ram === 32) baseFPS += 15;
        else if (ram === 16) baseFPS += 5;
        else baseFPS -= 10;

        if (resolution === "1440p") baseFPS *= 0.8;
        else if (resolution === "4k") baseFPS *= 0.5;

        baseFPS *= gameList[game];

        document.getElementById("result").textContent = `Geschätzte FPS: ${Math.round(baseFPS)}`;
    });
});