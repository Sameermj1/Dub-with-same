import { Request, Response } from 'express';
import fetch from 'node-fetch';

export async function handler(req: Request, res: Response): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { youtubeUrl, sourceLanguage, targetLanguage, ttsService, apiKey } = req.body;

    if (!youtubeUrl) {
      res.status(400).json({ error: 'YouTube URL is required' });
      return;
    }

    const response = await fetch(`https://youtube-dl-api-v2.fly.dev/api/info?url=${youtubeUrl}`);
    if (!response.ok) throw new Error('Failed to fetch YouTube video info');

    const videoInfo = await response.json();
    const audioFormat = videoInfo.formats.find((f: any) => f.acodec !== 'none' && f.vcodec === 'none');

    if (!audioFormat) {
      res.status(400).json({ error: 'No audio format found' });
      return;
    }

    const dubbedAudioUrl = `https://example.com/dubbed_audio.wav`; // Placeholder URL

    res.status(200).json({ dubbedAudioUrl });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
