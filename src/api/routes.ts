import express, { Request, Response } from 'express';
import { test } from './controllers/health/HealthController';
import { regionList } from './controllers/region/RegionController';
const router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
    res.status(200).json({ message: 'pong' });
});

router.get('/health', test);

router.get('/regiones', regionList)

export default router