# YouTube Dubbing API

This project provides an API for dubbing YouTube videos. It allows users to submit a YouTube video URL and receive a dubbed audio URL in response.

## Features

- Validate YouTube URLs
- Fetch video information from the YouTube API
- Generate dubbed audio from the provided video

## File Structure

```
youtube-dubbing-api
├── src
│   ├── api
│   │   ├── index.ts
│   │   └── dubbingController.ts
│   ├── services
│   │   └── dubbingService.ts
│   ├── utils
│   │   └── index.ts
│   └── types
│       └── index.ts
├── vercel.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd youtube-dubbing-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your environment variables as needed for the YouTube API.

4. Start the development server:
   ```
   npm run dev
   ```

## Usage

To use the API, send a POST request to the `/api/dubbing` endpoint with a JSON body containing the YouTube video URL. 

Example request:
```json
{
  "url": "https://www.youtube.com/watch?v=example"
}
```

The response will include the URL of the dubbed audio.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.