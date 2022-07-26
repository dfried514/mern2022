require("./server/config/mongoose.config");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const AllProductRoutes = require("./server/routes/author.routes");
AllProductRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
