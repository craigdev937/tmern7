import express from "express";
import { HomeIndex } from "../controllers/actorCon";

export const actorRt: express.Router = express.Router();
    actorRt.get("/",  HomeIndex);



