const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const offerRoutes = require("./routes/offerRoutes");
const isAuth = require("./middleware/isAuth");

mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use("/api/auth", authRoutes);
app.use("/api/offer", offerRoutes);
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);
