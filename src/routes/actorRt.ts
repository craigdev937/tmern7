import express from "express";
import { CreateActor, 
    GetAllActors } from "../controllers/actorCon";

export const actorRt: express.Router = express.Router();
    actorRt.post("/", CreateActor);
    actorRt.get("/",  GetAllActors);



