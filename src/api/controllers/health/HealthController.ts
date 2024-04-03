import { Request, Response } from 'express';

export function test(req: Request, res: Response) {
    console.log('health has been executed')
    return res.json({ status: "ok" })
}
