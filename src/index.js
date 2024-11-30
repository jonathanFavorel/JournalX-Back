const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const tradingAccountRoutes = require("./routes/tradingAccountRoutes");
const propFirmRoutes = require("./routes/propFirmRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const friendRoutes = require("./routes/friendRoutes");
const enemyRoutes = require("./routes/enemyRoutes");
const messageRoutes = require("./routes/messageRoutes");
const dotenv = require("dotenv");
const initDB = require("./initDB");
const initPropFirms = require("./initPropFirms");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

connectDB();

// Configure body-parser
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

app.use(express.json({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/tradingaccounts", tradingAccountRoutes);
app.use("/api/propfirms", propFirmRoutes);
app.use("/api/currencies", currencyRoutes);
app.use("/api/trades", tradeRoutes);
app.use("/api/friends", friendRoutes);
app.use("/api/enemies", enemyRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await initDB();
  await initPropFirms();
});
