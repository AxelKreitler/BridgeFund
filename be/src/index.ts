import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();
const app = express();
const port = process.env.APP_PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Parking API is online!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
