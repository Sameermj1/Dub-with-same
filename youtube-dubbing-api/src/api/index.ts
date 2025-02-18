export function setupApi(app) {
    app.post('/api/dubbing', (req, res) => {
        const dubbingController = new DubbingController();
        dubbingController.handleDub(req, res);
    });
}