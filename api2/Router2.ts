import { Router } from 'express';
import Container from "typedi";
import { Controller2 } from './Controller2';

export class Router2 {
    setupRouter(): Router {
        let controller2 = Container.get(Controller2);
        let router = Router();

        router.get('/response', (req, res) => controller2.getResponse(req, res));
        router.get('/health', (req, res) => controller2.getHealth(req, res));
        router.get('/getApi3', (req, res) => controller2.getApi3(req, res));

        return router;
    }
}