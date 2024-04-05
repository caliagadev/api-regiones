import express, { Request, Response } from 'express';
import { test } from './controllers/health/HealthController';
import { regionList, regionById } from './controllers/region/RegionController';
import { comunaById, comunaListByIdRegion } from './controllers/comuna/ComunaController';
const router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({ message: 'pong' });
});

router.get('/health', test);

router.get('/regiones', regionList)
router.get('/region/:id', regionById)

router.get('/comunasByRegion/:idRegion', comunaListByIdRegion)
router.get('/comuna/:id', comunaById)

export default router