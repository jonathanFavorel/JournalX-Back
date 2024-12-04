const Currency = require("./models/Currency");

const currencies = [
  {
    name: "US Dollar",
    symbol: "USD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Euro",
    symbol: "EUR",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "British Pound",
    symbol: "GBP",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Japanese Yen",
    symbol: "JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "Swiss Franc",
    symbol: "CHF",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Canadian Dollar",
    symbol: "CAD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Australian Dollar",
    symbol: "AUD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "New Zealand Dollar",
    symbol: "NZD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Euro/US Dollar",
    symbol: "EUR/USD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "US Dollar/Japanese Yen",
    symbol: "USD/JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "British Pound/US Dollar",
    symbol: "GBP/USD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Australian Dollar/US Dollar",
    symbol: "AUD/USD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "US Dollar/Swiss Franc",
    symbol: "USD/CHF",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "US Dollar/Canadian Dollar",
    symbol: "USD/CAD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Euro/British Pound",
    symbol: "EUR/GBP",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Euro/Japanese Yen",
    symbol: "EUR/JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "Euro/Swiss Franc",
    symbol: "EUR/CHF",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "British Pound/Japanese Yen",
    symbol: "GBP/JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "British Pound/Swiss Franc",
    symbol: "GBP/CHF",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Australian Dollar/Japanese Yen",
    symbol: "AUD/JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "Canadian Dollar/Japanese Yen",
    symbol: "CAD/JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "Swiss Franc/Japanese Yen",
    symbol: "CHF/JPY",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.01,
  },
  {
    name: "New Zealand Dollar/US Dollar",
    symbol: "NZD/USD",
    contractSize: 100000,
    type: "forex",
    tickSize: 0.0001,
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    contractSize: 1,
    type: "crypto",
    tickSize: 0.01,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    contractSize: 1,
    type: "crypto",
    tickSize: 0.01,
  },
  {
    name: "Gold",
    symbol: "XAU",
    contractSize: 100,
    type: "commodities",
    tickSize: 0.1,
  },
  {
    name: "Silver",
    symbol: "XAG",
    contractSize: 5000,
    type: "commodities",
    tickSize: 0.01,
  },
  {
    name: "Crude Oil",
    symbol: "CL",
    contractSize: 1000,
    type: "commodities",
    tickSize: 0.01,
  },
  {
    name: "Natural Gas",
    symbol: "NG",
    contractSize: 10000,
    type: "commodities",
    tickSize: 0.001,
  },
  {
    name: "S&P 500",
    symbol: "SPX",
    contractSize: 50,
    type: "indice",
    tickSize: 0.1,
  },
  {
    name: "Dow Jones",
    symbol: "DJI",
    contractSize: 10,
    type: "indice",
    tickSize: 1,
  },
  {
    name: "Nasdaq 100",
    symbol: "NDX",
    contractSize: 20,
    type: "indice",
    tickSize: 0.1,
  },
  {
    name: "FTSE 100",
    symbol: "FTSE",
    contractSize: 10,
    type: "indice",
    tickSize: 0.5,
  },
  {
    name: "DAX 30",
    symbol: "DAX",
    contractSize: 25,
    type: "indice",
    tickSize: 0.5,
  },
  {
    name: "Nikkei 225",
    symbol: "N225",
    contractSize: 5,
    type: "indice",
    tickSize: 1,
  },
];

const initDB = async () => {
  try {
    await Currency.deleteMany({});
    await Currency.insertMany(currencies);
    console.log("Database initialized with currencies.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

module.exports = initDB;
