import { RequestHandler, Request, Response } from "express";
import Service from "../services/service";

export default class Controller{
    static message: RequestHandler = async (req: Request, res: Response): Promise<Response> =>{
        const message = await Service.getMessage();
        return res.status(200).json(message);
    }
}