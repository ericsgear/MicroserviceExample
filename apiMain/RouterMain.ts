import { Router } from 'express';
import Container from "typedi";
import { ControllerMain } from './ControllerMain';

export class RouterMain {
    setupRouter(): Router {
        let controllerMain = Container.get(ControllerMain);
        let router = Router();

        router.get('/response', controllerMain.getResponse);
        router.get('/health', controllerMain.getHealth);
        router.get('/getApi1', controllerMain.getApi1);
        router.get('/getApi2', controllerMain.getApi2);
        router.get('/getApi3', controllerMain.getApi3);
        router.get('/getApiAll', controllerMain.getApiAll);

        return router;
    }
}