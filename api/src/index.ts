import express from 'express';
const cors = require("cors");
const PORT = process.env.PORT || 3030;
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(_req, res) => {
  res.json({message:'Hello, world!'});
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
