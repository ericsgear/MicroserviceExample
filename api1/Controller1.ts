import { Service } from 'typedi';
import { Request, Response } from "express-serve-static-core";
import useSendResponse from '../shared/hooks/useSendResponse';
import useFetch from '../shared/hooks/useFetch';
import settings from '../settings.json';
import { ApiResponse } from '../shared/models/ApiResponse';

@Service()
export class Controller1 {
    async getResponse(req: Request, res: Response) {
        useSendResponse(res, "Api 1");
    }

    async getHealth(req: Request, res: Response) {
        useSendResponse(res, "Api 1 is running.");
    }

    async getApi2(req: Request, res: Response) {
        let response : ApiResponse = await useFetch(settings.api2Url + "/response", "get", null, null, null);
        useSendResponse(res, response.message);

    }
}