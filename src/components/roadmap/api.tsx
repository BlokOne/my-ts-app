const ROADMAP_API: string = 'https://shiner-powerful-coyote.ngrok-free.app/api/v2/dashboard/stage';

function getRoadmapActiveStage() {
    return fetch(ROADMAP_API, { method: 'GET' });
}

export { getRoadmapActiveStage, ROADMAP_API };