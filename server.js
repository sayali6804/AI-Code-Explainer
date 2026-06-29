const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const explainRoute = require("./routes/explain");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/api/explain", explainRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});