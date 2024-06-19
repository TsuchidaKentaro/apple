import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('これはanother.tsからのメッセージです。');
});
router.get('/about', (req: Request, res: Response) => {
    res.send('これは /about ルートからのメッセージです。');
});
router.get('/about/to', (req: Request, res: Response) => {
    res.send('これは /another/about/to ルートからのメッセージです。');
});

export default router;
