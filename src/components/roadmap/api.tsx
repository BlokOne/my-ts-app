const ROADMAP_API: string = 'http://185.209.31.112:8080/api/v2/dashboard/stage';

function getRoadmapActiveStage(api: string) {
    return fetch(api);
}

export { getRoadmapActiveStage, ROADMAP_API };