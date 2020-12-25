import express, { response } from "express";

const app = express();

app.get("/projects", (req, res) => {
  return res.json({
    mensagem: "Hello, World!"
  });
});

app.listen(3333,
  console.log("Rodando o Backend")  
);
