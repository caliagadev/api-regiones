import { Request, Response } from 'express';
import { regiones } from './regiones'

export function regionList(req: Request, res: Response) {
    console.log('regionList init')

    console.log(regiones);

    return res.json(regiones)
}
