import { Router } from 'express';
import Container from "typedi";
import { Controller3 } from './Controller3';

export class Router3 {
    setupRouter(): Router {
        let controller3 = Container.get(Controller3);
        let router = Router();

        router.get('/response', (req, res) => controller3.getResponse(req, res));
        router.get('/health', (req, res) => controller3.getHealth(req, res));
        router.get('/getApi1', (req, res) => controller3.getApi1(req, res));

        return router;
    }
}