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
      // PORT=8080
      // JWT_SECRET=ben
      // MAILTRAP_TOKEN=c7f7713c6c53db45b4ad5575db0b2896
      // MONGO_URL=mongodb+srv://baynaabj749:0xNM9Oi2yG788ueN@e-commerce.3tyc2.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=E-commerce
