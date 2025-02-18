import express, { Request, Response } from 'express';
import { handler as dubbingController } from './dubbingController';

const app = express();
app.use(express.json());

app.post('/api/dub', (req: Request, res: Response) => {
  dubbingController(req, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
