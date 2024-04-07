const ROADMAP_API: string = 'https://shiner-powerful-coyote.ngrok-free.app/api/v2/dashboard/stage';

function getRoadmapActiveStage() {
  return fetch(ROADMAP_API, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST"
  })
    .then(resp => {
      if (!resp.ok) {
        throw Error('Unable connect to the server')
      }
      return resp
    })
    .then((resp) => {
      return resp.json()
    })
    .catch((err) => console.log(err, 'Error!'));
}

export { getRoadmapActiveStage, ROADMAP_API };