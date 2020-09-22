import express, { Request, Response } from 'express';
import config from 'config';

const port = config.get('port');

const router = express.Router();

router.get('/', (request: Request, response: Response) => {
    return response.status(200).json({
        server_up: true,
        port: port,
        enviroment: config.get('enviroment')
    });
});

export default router;