// Mock conversion rates (Replace with real API in the future)
const conversionRates = {
    BTC: { ETH: 15.2, LUSD: 40000, USDT: 39000 },
    ETH: { BTC: 0.065, LUSD: 2500, USDT: 2400 },
    LUSD: { BTC: 0.000025, ETH: 0.0004, USDT: 1 },
    USDT: { BTC: 0.000026, ETH: 0.00042, LUSD: 1 },
};

// Perform conversion
function convert() {
    let from = document.getElementById("from-crypto").value;
    let to = document.getElementById("to-crypto").value;
    let amount = parseFloat(document.getElementById("from-amount").value) || 0;

    if (from !== to && conversionRates[from] && conversionRates[from][to]) {
        let rate = conversionRates[from][to];
        document.getElementById("to-amount").value = (amount * rate).toFixed(6);
        document.getElementById("conversion-rate-text").innerText = `Rate: 1 ${from} = ${rate} ${to}`;
    }
}

// Swap currencies
function swapCoins() {
    let fromSelect = document.getElementById("from-crypto");
    let toSelect = document.getElementById("to-crypto");
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    convert();
}

// Listen for changes
document.getElementById("from-crypto").addEventListener("change", convert);
document.getElementById("to-crypto").addEventListener("change", convert);
document.getElementById("from-amount").addEventListener("input", convert);
