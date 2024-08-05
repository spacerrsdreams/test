import express from 'express';
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 3000;
const TEXT = process.env.TEXT || 'Hello World!';

app.get('/', (_, res) => {
  res.send(TEXT);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});