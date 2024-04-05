import { Request, Response } from 'express';
import { ComunaModel } from '../../models/ComunaModel' 

const comuna = new ComunaModel();

export function comunaListByIdRegion(req: Request, res: Response) {
    const idRegion: any = req.params.idRegion;

    comuna.comunaList(idRegion, (error, results) => {
      if (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
        return;
      }

      res.json(results);
    });
}

export function comunaById(req: Request, res: Response) {
    const id: any = req.params.id;

    comuna.getComunaById(id, (error, results) => {
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