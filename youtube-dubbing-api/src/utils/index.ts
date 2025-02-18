export const validateYoutubeUrl = (url: string): boolean => {
    const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return youtubeUrlPattern.test(url);
};