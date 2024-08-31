import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Route from "./routes/route.js";
// import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

Connection();

app.get("/", (req, res) => {
    res.send("API is running...");
  });

//  -----------------------------Deployment----------------

// const __dirname1 = path.resolve()
// if (process.env.NODE_ENV==="production") {
//   app.use(express.static(path.join(__dirname1,"/client/build")));

//   app.get('*',(req,res) =>{
//     res.sendFile(path.resolve(__dirname1,"client","build","index.html"));
//   });

// }else{
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }

// -----------------------------Deployment----------------

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Server is running succesfully on PORT ${PORT}`)
);
