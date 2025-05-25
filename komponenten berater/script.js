const cpus = [
    {name: "Bitte Auswählen", score:0},
    { name: "AMD Ryzen 3 3100", score: 65 },
    { name: "AMD Ryzen 3 3300X", score: 68 },
    { name: "AMD Ryzen 5 3600", score: 80 },
    { name: "AMD Ryzen 5 3600X", score: 82 },
    { name: "AMD Ryzen 5 5600X", score: 85 },
    { name: "AMD Ryzen 5 7600X", score: 90 },
    { name: "AMD Ryzen 7 3700X", score: 87 },
    { name: "AMD Ryzen 7 3800X", score: 89 },
    { name: "AMD Ryzen 7 5800X", score: 92 },
    { name: "AMD Ryzen 7 7800X3D", score: 97 },
    { name: "AMD Ryzen 9 5900X", score: 98 },
    { name: "AMD Ryzen 9 5950X", score: 100 },
    { name: "AMD Ryzen 9 7900X", score: 99 },
    { name: "AMD Ryzen 9 7950X", score: 100 },
    { name: "Intel Core i3-10100", score: 60 },
    { name: "Intel Core i3-12100", score: 72 },
    { name: "Intel Core i5-10400", score: 75 },
    { name: "Intel Core i5-11400F", score: 78 },
    { name: "Intel Core i5-12400", score: 85 },
    { name: "Intel Core i5-12600K", score: 88 },
    { name: "Intel Core i5-13600K", score: 92 },
    { name: "Intel Core i7-10700K", score: 90 },
    { name: "Intel Core i7-11700K", score: 93 },
    { name: "Intel Core i7-12700K", score: 95 },
    { name: "Intel Core i7-13700K", score: 97 },
    { name: "Intel Core i9-10850K", score: 95 },
    { name: "Intel Core i9-11900K", score: 96 },
    { name: "Intel Core i9-12900K", score: 99 },
    { name: "Intel Core i9-13900K", score: 100 }
];

const gpus = [
    {name: "Bitte Auswählen", score:0},
    { name: "NVIDIA GeForce GTX 1650", score: 50 },
    { name: "NVIDIA GeForce GTX 1660 Super", score: 68 },
    { name: "NVIDIA GeForce GTX 1660 Ti", score: 70 },
    { name: "NVIDIA GeForce RTX 2060", score: 75 },
    { name: "NVIDIA GeForce RTX 2070", score: 80 },
    { name: "NVIDIA GeForce RTX 2080", score: 85 },
    { name: "NVIDIA GeForce RTX 2080 Ti", score: 88 },
    { name: "NVIDIA GeForce RTX 3060", score: 78 },
    { name: "NVIDIA GeForce RTX 3060 Ti", score: 85 },
    { name: "NVIDIA GeForce RTX 3070", score: 87 },
    { name: "NVIDIA GeForce RTX 3070 Ti", score: 89 },
    { name: "NVIDIA GeForce RTX 3080", score: 90 },
    { name: "NVIDIA GeForce RTX 3080 Ti", score: 93 },
    { name: "NVIDIA GeForce RTX 3090", score: 95 },
    { name: "NVIDIA GeForce RTX 3090 Ti", score: 97 },
    { name: "NVIDIA GeForce RTX 4060", score: 80 },
    { name: "NVIDIA GeForce RTX 4070", score: 88 },
    { name: "NVIDIA GeForce RTX 4070 Ti", score: 91 },
    { name: "NVIDIA GeForce RTX 4080", score: 95 },
    { name: "NVIDIA GeForce RTX 4090", score: 100 },
    { name: "AMD Radeon RX 5500 XT", score: 55 },
    { name: "AMD Radeon RX 5600 XT", score: 70 },
    { name: "AMD Radeon RX 5700 XT", score: 78 },
    { name: "AMD Radeon RX 6500 XT", score: 60 },
    { name: "AMD Radeon RX 6600", score: 70 },
    { name: "AMD Radeon RX 6700 XT", score: 83 },
    { name: "AMD Radeon RX 6800", score: 88 },
    { name: "AMD Radeon RX 6800 XT", score: 90 },
    { name: "AMD Radeon RX 6900 XT", score: 95 },
    { name: "AMD Radeon RX 6950 XT", score: 97 },
    { name: "AMD Radeon RX 7600", score: 80 },
    { name: "AMD Radeon RX 7700 XT", score: 86 },
    { name: "AMD Radeon RX 7800 XT", score: 90 },
    { name: "AMD Radeon RX 7900 XT", score: 98 },
    { name: "AMD Radeon RX 7900 XTX", score: 100 },
    { name: "AMD Radeon RX 9070 XT", score: 100 },

];


document.addEventListener("DOMContentLoaded", () => {
    populateDropdown("cpu", cpus);
    populateDropdown("gpu", gpus);
});


function populateDropdown(elementId, items) {
    const selectElement = document.getElementById(elementId);
    items.forEach(item => {
        let option = document.createElement("option");
        option.value = item.name;
        option.textContent = item.name;
        selectElement.appendChild(option);
    });
}


function filterOptions(inputId, selectId) {
    let input = document.getElementById(inputId).value.toLowerCase();
    let select = document.getElementById(selectId);
    select.innerHTML = ""; 

    const items = selectId === "cpu" ? cpus : gpus;
    let filteredItems = items.filter(item => item.name.toLowerCase().includes(input));

    populateDropdown(selectId, filteredItems);
}


function evaluateBottleneck() {
    const selectedCPU = document.getElementById('cpu').value;
    const selectedGPU = document.getElementById('gpu').value;

    const cpuScore = cpus.find(cpu => cpu.name === selectedCPU)?.score || 0;
    const gpuScore = gpus.find(gpu => gpu.name === selectedGPU)?.score || 0;

    if (cpuScore === 0 || gpuScore === 0) {
        alert("Bitte wähle eine gültige CPU und GPU.");
        return;
    }

    
    const bottleneck = calculateBottleneck(cpuScore, gpuScore);

    
    const bottleneckText = document.getElementById('bottleneck-text');
    bottleneckText.textContent = `Bottleneck: ${bottleneck}%`;
    document.getElementById('bottleneck-result').style.display = 'block';
}


function calculateBottleneck(cpuScore, gpuScore) {
    const maxScore = Math.max(cpuScore, gpuScore);
    const minScore = Math.min(cpuScore, gpuScore);
    const bottleneckPercentage = ((maxScore - minScore) / maxScore) * 100;
    return bottleneckPercentage.toFixed(2);
}


function evaluateBottleneck() {
    const selectedCPU = document.getElementById('cpu').value;
    const selectedGPU = document.getElementById('gpu').value;

    const cpuScore = cpus.find(cpu => cpu.name === selectedCPU)?.score || 0;
    const gpuScore = gpus.find(gpu => gpu.name === selectedGPU)?.score || 0;

    if (cpuScore === 0 || gpuScore === 0) {
        alert("Bitte wähle eine gültige CPU und GPU.");
        return;
    }

    
    const bottleneck = calculateBottleneck(cpuScore, gpuScore);
    let bottleneckCause = "";

    if (cpuScore < gpuScore) {
        bottleneckCause = "Die CPU limitiert die Leistung.";
    } else if (gpuScore < cpuScore) {
        bottleneckCause = "Die GPU limitiert die Leistung.";
    } else {
        bottleneckCause = "Kein Bottleneck.";
    }

    
    const bottleneckText = document.getElementById('bottleneck-text');
    bottleneckText.textContent = `Bottleneck: ${bottleneck}% (${bottleneckCause})`;
    document.getElementById('bottleneck-result').style.display = 'block';


}