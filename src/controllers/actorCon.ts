import express from "express";
import { Actors } from "../models/Actors";

export const CreateActor: express.RequestHandler =
async (req, res, next) => {
    try {
        const actor: Actors = new Actors();
        actor.title = req.body.title;
        actor.firstname = req.body.firstname;
        actor.lastname = req.body.lastname;
        actor.age = req.body.age;
        actor.info = req.body.info;
        await actor.save();
        return res.status(200).json(actor);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const GetAllActors: express.RequestHandler =
async (req, res, next) => {
    try {
        await Actors.find()
        .then((actor) => res.json(actor));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};







