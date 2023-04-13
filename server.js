const app = require("express")();
require("dotenv").config();
const bodyParser = require('body-parser');
const {mongoConnect} = require('./config/db')
const userRoute = require("./routes/userRoute")
const port = process.env.PORT || 8080;
const projectRoute = require('./routes/projectRoute')
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
mongoConnect();

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use('/projectCreation',projectRoute);
app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Server started on Port : ${port}`);
});
