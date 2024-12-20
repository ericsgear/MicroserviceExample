import { Service } from 'typedi';
import { Request, Response } from "express-serve-static-core";
import useSendResponse from '../shared/hooks/useSendResponse';
import useFetch from '../shared/hooks/useFetch';
import { ApiResponse } from '../shared/models/ApiResponse';
import settings from '../settings.json';

@Service()
export class ControllerMain {
    getResponse(req: Request, res: Response) {
        useSendResponse(res, "Api Main");
    }

    getHealth(req: Request, res: Response) {
        useSendResponse(res, "Api Main is running.");
    }

    getApi1(req: Request, res: Response) {
        useFetch(settings.api1Url + "/response", "get", null, null, (response: ApiResponse) =>
            useSendResponse(res, response.message)
        );
    }
    getApi2(req: Request, res: Response) {
        useFetch(settings.api2Url + "/response", "get", null, null, (response: ApiResponse) =>
            useSendResponse(res, response.message)
        );
    }

    getApi3(req: Request, res: Response) {
        useFetch(settings.api3Url + "/response", "get", null, null, (response: ApiResponse) =>
            useSendResponse(res, response.message)
        );
    }

    async getApiAll(req: Request, res: Response) {
        let response1: ApiResponse = await useFetch(settings.api1Url + "/response", "get", null, null, null);
        let response2: ApiResponse = await useFetch(settings.api2Url + "/response", "get", null, null, null);
        let response3: ApiResponse = await useFetch(settings.api3Url + "/response", "get", null, null, null);

        let message = `${response1.message} ${response2.message} ${response3.message}`;

        useSendResponse(res, message);
    }
}