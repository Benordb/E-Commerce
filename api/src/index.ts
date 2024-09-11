import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './database/connectionDB';
import { authRouter, categoryRouter, productRouter } from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/product",productRouter)
app.use("/category",categoryRouter)

app.get('/',(_req, res) => {
  res.json({message:'Hello, world!'});
})

app.listen(PORT, () => {
  connectDB();
        console.log(`Server is running on port ${PORT}`);
});