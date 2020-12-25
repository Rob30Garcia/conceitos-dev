import express from "express";
import { v4 } from "uuid";

const app = express();

app.use(express.json());

const projects = [];

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const {title, owner} = req.body;

  const project = {
    id: v4(),
    title,
    owner
  };

  projects.push(project);

  return res.json(projects);
});

app.listen(3333,
  console.log("Rodando o Backend")  
);
