import { Router, Request, Response } from "express";

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    return res.send("test get funcionando.");
});

router.post('/test', (req: Request, res: Response) => {
    return res.send("test post funcionando.");
});

export default router;