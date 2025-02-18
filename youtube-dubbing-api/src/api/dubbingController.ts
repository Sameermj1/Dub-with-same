import { Request, Response } from 'express';
import { processDubbing } from '../services/dubbingService';

export const dubbingController = async (req: Request, res: Response) => {
  try {
    const { url, language } = req.body;

    if (!url || !language) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const dubbedVideoUrl = await processDubbing(url, language);
    res.json({ dubbedVideoUrl });

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred", error);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
