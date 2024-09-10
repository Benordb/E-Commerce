import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './database/connectionDB';
import authRouter from './routes/auth.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.get('/',(_req, res) => {
  res.json({message:'Hello, world!'});
})

app.listen(PORT, () => {
  connectDB();
        console.log(`Server is running on port ${PORT}`);
});