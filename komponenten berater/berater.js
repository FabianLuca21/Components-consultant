const cpuToGpu = {
    "Bitte Auswählen": "",
    "Ryzen 3 1200": "GTX 1050 Ti oder RX 560",
    "Ryzen 3 2200G": "GTX 1650 oder RX 6400",
    "Ryzen 3 3100": "GTX 1650 Super oder RX 6500 XT",
    "Ryzen 3 3300X": "GTX 1660 Super oder RX 6600",
    "Ryzen 5 1400": "GTX 1050 Ti oder RX 570",
    "Ryzen 5 1600": "GTX 1060 oder RX 580",
    "Ryzen 5 2600": "GTX 1660 oder RX 5500 XT",
    "Ryzen 5 3600": "RTX 2060 oder RX 6600",
    "Ryzen 5 5600": "RTX 3060 oder RX 6600 XT",
    "Ryzen 5 5600X": "RTX 3060 Ti oder RX 6700 XT",
    "Ryzen 5 7600X": "RTX 3070 Ti oder RX 7800 XT",
    "Ryzen 7 1700": "GTX 1070 oder RX 590",
    "Ryzen 7 2700X": "RTX 2060 oder RX 5600 XT",
    "Ryzen 7 3700X": "RTX 2070 Super oder RX 5700 XT",
    "Ryzen 7 3800X": "RTX 2080 oder RX 6800",
    "Ryzen 7 5700X": "RTX 3060 Ti oder RX 6750 XT",
    "Ryzen 7 5800X": "RTX 3070 oder RX 6800 XT",
    "Ryzen 7 7700X": "RTX 4070 oder RX 7800 XT",
    "Ryzen 7 7800X3D": "RTX 4080 oder RX 7900 XT",
    "Ryzen 9 3900X": "RTX 2080 Ti oder RX 6800 XT",
    "Ryzen 9 5900X": "RTX 3080 oder RX 6900 XT",
    "Ryzen 9 5950X": "RTX 3090 oder RX 6950 XT",
    "Ryzen 9 7900X": "RTX 4080 oder RX 7900 XT",
    "Ryzen 9 7950X": "RTX 4090 oder RX 7900 XTX",

    "Intel i3-9100F": "GTX 1050 Ti oder RX 560",
    "Intel i3-10100F": "GTX 1650 Super oder RX 6500 XT",
    "Intel i3-12100F": "GTX 1660 Super oder RX 6600",
    "Intel i5-10400F": "RTX 2060 oder RX 5500 XT",
    "Intel i5-11400F": "RTX 3060 oder RX 6600",
    "Intel i5-12400": "RTX 3060 Ti oder RX 6700 XT",
    "Intel i5-13600K": "RTX 4070 oder RX 7800 XT",
    "Intel i7-10700K": "RTX 2070 Super oder RX 5700 XT",
    "Intel i7-11700K": "RTX 3060 Ti oder RX 6700 XT",
    "Intel i7-12700K": "RTX 3070 Ti oder RX 6800",
    "Intel i7-13700K": "RTX 4080 oder RX 7900 XT",
    "Intel i9-10900K": "RTX 3080 oder RX 6900 XT",
    "Intel i9-11900K": "RTX 3090 oder RX 6950 XT",
    "Intel i9-12900K": "RTX 4080 oder RX 7900 XTX",
    "Intel i9-13900K": "RTX 4090 oder RX 7900 XTX"
};



const gpuToCpu = {
    "Bitte Auswählen": "",
    "GTX 1050 Ti": "Ryzen 3 1200 oder Intel i3-9100F",
    "GTX 1650": "Ryzen 3 2200G oder Intel i3-10100F",
    "GTX 1650 Super": "Ryzen 3 3100 oder Intel i3-10100F",
    "GTX 1660": "Ryzen 5 2600 oder Intel i5-10400F",
    "GTX 1660 Super": "Ryzen 5 2600 oder Intel i5-10400F",
    "GTX 1070": "Ryzen 7 1700 oder Intel i5-8600K",
    "GTX 1080": "Ryzen 7 2700X oder Intel i7-8700K",
    "RTX 2060": "Ryzen 5 3600 oder Intel i5-11400F",
    "RTX 2060 Super": "Ryzen 5 3600 oder Intel i5-11400F",
    "RTX 3060": "Ryzen 5 5600X oder Intel i5-12400",
    "RTX 3060 Ti": "Ryzen 7 5800X oder Intel i5-12600K",
    "RTX 3070": "Ryzen 7 5800X oder Intel i7-12700K",
    "RTX 3070 Ti": "Ryzen 7 5700X oder Intel i7-11700K",
    "RTX 3080": "Ryzen 9 5900X oder Intel i7-12700K",
    "RTX 3090": "Ryzen 9 5950X oder Intel i9-12900K",
    "RTX 4070": "Ryzen 7 7700X oder Intel i5-13600K",
    "RTX 4080": "Ryzen 7 7800X3D oder Intel i9-13900K",
    "RTX 4090": "Ryzen 9 7950X oder Intel i9-14900K",

    "RX 560": "Ryzen 3 1200 oder Intel i3-9100F",
    "RX 580": "Ryzen 5 1600 oder Intel i5-8400",
    "RX 590": "Ryzen 7 1700 oder Intel i5-8600K",
    "RX 5500 XT": "Ryzen 5 2600 oder Intel i3-10100",
    "RX 5600 XT": "Ryzen 7 2700X oder Intel i5-10400",
    "RX 5700 XT": "Ryzen 7 3700X oder Intel i5-10600K",
    "RX 6600": "Ryzen 5 5600X oder Intel i5-12400",
    "RX 6700 XT": "Ryzen 7 5800X oder Intel i5-12600K",
    "RX 6800 XT": "Ryzen 9 5900X oder Intel i7-12700K",
    "RX 6900 XT": "Ryzen 9 5950X oder Intel i9-12900K",
    "RX 7600": "Ryzen 5 7600X oder Intel i5-13400F",
    "RX 7700 XT": "Ryzen 7 7700X oder Intel i5-13600K",
    "RX 7800 XT": "Ryzen 7 7700X oder Intel i5-13600K",
    "RX 7900 XT": "Ryzen 7 7800X3D oder Intel i9-13900K",
    "RX 7900 XTX": "Ryzen 9 7950X oder Intel i9-14900K"
};



function updateDropdown() {
    let type = document.getElementById("componentType").value;
    let select = document.getElementById("componentSelect");

   
    select.innerHTML = "";

    let options = type === "cpu" ? Object.keys(cpuToGpu) : Object.keys(gpuToCpu);

    options.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option;
        opt.innerHTML = option;
        select.appendChild(opt);
    });
}

function getRecommendation() {
    let type = document.getElementById("componentType").value;
    let component = document.getElementById("componentSelect").value;
    let resultText = "Keine passende Empfehlung gefunden.";

    if (type === "cpu" && cpuToGpu[component]) {
        resultText = `Empfohlene GPU: ${cpuToGpu[component]}`;
    } else if (type === "gpu" && gpuToCpu[component]) {
        resultText = `Empfohlene CPU: ${gpuToCpu[component]}`;
    }

    document.getElementById("result").textContent = resultText;
}


updateDropdown();