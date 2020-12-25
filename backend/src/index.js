import express, { response } from "express";

const app = express();

const projects = ["project 1", "project 2" ];

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.listen(3333,
  console.log("Rodando o Backend")  
);
