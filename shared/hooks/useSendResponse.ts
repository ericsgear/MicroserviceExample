import { Response } from "express";

export default function useSendResponse(res: Response, message?: string | object | null, error?: string | null) {
    res.status(error != null ? 400 : 200).json({
        message: message || "",
        error: error || (message ? null : "Something went wrong."),
    });
}
