const cryptoList = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "USD Coin", symbol: "USDC" },
    { name: "Tether", symbol: "USDT" },
    { name: "LUSD Stablecoin", symbol: "LUSD" },
    { name: "Binance Coin", symbol: "BNB" },
    { name: "Cardano", symbol: "ADA" },
    { name: "Solana", symbol: "SOL" },
    { name: "Dogecoin", symbol: "DOGE" },
    { name: "Polkadot", symbol: "DOT" },
    { name: "Avalanche", symbol: "AVAX" },
    { name: "Shiba Inu", symbol: "SHIB" },
    { name: "Polygon", symbol: "MATIC" },
    { name: "TRON", symbol: "TRX" },
    { name: "Cosmos", symbol: "ATOM" },
    { name: "Stellar", symbol: "XLM" },
    { name: "Bitcoin Cash", symbol: "BCH" },
    { name: "Filecoin", symbol: "FIL" },
    { name: "VeChain", symbol: "VET" },
    { name: "Monero", symbol: "XMR" },
    { name: "Theta Network", symbol: "THETA" },
    { name: "Tezos", symbol: "XTZ" },
    { name: "EOS", symbol: "EOS" },
    { name: "Aave", symbol: "AAVE" }
];

// Mock conversion rates
const mockRates = {
    "BTC": { "ETH": 15.5, "USDT": 65000, "LUSD": 65000 },
    "ETH": { "BTC": 0.064, "USDT": 4200, "LUSD": 4200 },
    "USDT": { "BTC": 0.000015, "ETH": 0.00024, "LUSD": 1 },
    "LUSD": { "BTC": 0.000015, "ETH": 0.00024, "USDT": 1 }
};

const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const fromAmount = document.getElementById("fromAmount");
const toAmount = document.getElementById("toAmount");
const conversionRateText = document.getElementById("conversionRate");

cryptoList.forEach(crypto => {
    const option1 = new Option(`${crypto.name} (${crypto.symbol})`, crypto.symbol);
    const option2 = new Option(`${crypto.name} (${crypto.symbol})`, crypto.symbol);
    fromSelect.add(option1);
    toSelect.add(option2);
});

fromSelect.addEventListener("change", updateConversion);
toSelect.addEventListener("change", updateConversion);
fromAmount.addEventListener("input", updateConversion);

function updateConversion() {
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = parseFloat(fromAmount.value);

    if (mockRates[from] && mockRates[from][to]) {
        const rate = mockRates[from][to];
        conversionRateText.innerText = rate;
        toAmount.value = (amount * rate).toFixed(6);
    } else {
        conversionRateText.innerText = "-";
        toAmount.value = "";
    }
}
