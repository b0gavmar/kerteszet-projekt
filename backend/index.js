import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({ message: err.message });
});

const startServer = async () => {
  app.listen(3000, () => {
    console.log("listening on port: 3000");
  });
};

startServer();
