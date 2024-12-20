import { Service } from 'typedi';
import { Request, Response } from "express-serve-static-core";
import useSendResponse from '../shared/hooks/useSendResponse';
import { ApiResponse } from '../shared/models/ApiResponse';
import useFetch from '../shared/hooks/useFetch';
import settings from '../settings.json';

@Service()
export class Controller2 {
    async getResponse(req: Request, res: Response) {
        useSendResponse(res, "Api 2");
    }

    async getHealth(req: Request, res: Response) {
        useSendResponse(res, "Api 2 is running.");
    }

    async getApi3(req: Request, res: Response) {
        let response : ApiResponse = await useFetch(settings.api3Url + "/response", "get", null, null, null);
        useSendResponse(res, response.message);

    }
}