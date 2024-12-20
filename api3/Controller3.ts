import { Service } from 'typedi';
import { Request, Response } from "express-serve-static-core";
import useSendResponse from '../shared/hooks/useSendResponse';
import { ApiResponse } from '../shared/models/ApiResponse';
import useFetch from '../shared/hooks/useFetch';
import settings from '../settings.json';

@Service()
export class Controller3 {
    async getResponse(req: Request, res: Response) {
        useSendResponse(res, "Api 3");
    }

    async getHealth(req: Request, res: Response) {
        useSendResponse(res, "Api 3 is running.");
    }

    async getApi1(req: Request, res: Response) {
        let response : ApiResponse = await useFetch(settings.api1Url + "/response", "get", null, null, null);
        useSendResponse(res, response.message);

    }
}