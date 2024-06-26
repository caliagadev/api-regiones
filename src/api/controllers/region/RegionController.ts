import { Request, Response } from 'express';
import { RegionModel } from '../../models/RegionModel' 

const region = new RegionModel();

export function regionList(req: Request, res: Response) {

    region.regionList((error, results) => {
      if (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
        return;
      }

      res.json(results);
    });
}

export function regionById(req: Request, res: Response) {
    const id: any = req.params.id;

    region.getRegionById(id, (error, results) => {
        if (error) {
          console.error('Error al obtener el dato por ID:', error);
          res.status(500).json({ error: 'Error al obtener el dato por ID' });
          return;
        }

        if (results.length === 0) {
          res.status(404).json({ error: 'Dato no encontrado' });
          return;
        }

        res.json(results[0]);
    });

}