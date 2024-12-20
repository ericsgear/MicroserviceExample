import { Router } from 'express';
import Container from "typedi";
import { Controller1 } from './Controller1';

export class Router1 {
    setupRouter(): Router {
        let controller1 = Container.get(Controller1);
        let router = Router();

        router.get('/response', (req, res) => controller1.getResponse(req, res));
        router.get('/health', (req, res) => controller1.getHealth(req, res));
        router.get('/getApi2', (req, res) => controller1.getApi2(req, res));

        return router;
    }
}