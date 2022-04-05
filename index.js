const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/dates.route"));
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const connected = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    console.log("Вы успешно подключились к MongoDB!");
    app.listen(port, () => {
      console.log(`Сервер запущен на порте ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

connected();
