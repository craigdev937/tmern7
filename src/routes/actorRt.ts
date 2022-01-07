import express from "express";
import { CreateActor, GetAllActors, GetOneActor, UpdateActor, 
    DeleteActor } from "../controllers/actorCon";

export const actorRt: express.Router = express.Router();
    actorRt.post("/", CreateActor);
    actorRt.get("/",  GetAllActors);
    actorRt.get("/:id", GetOneActor);
    actorRt.put("/:id", UpdateActor);
    actorRt.delete("/:id", DeleteActor)



