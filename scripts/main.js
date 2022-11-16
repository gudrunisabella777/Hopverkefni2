fetch('./data/events.json')
    .then((response) => response.json())
    .then((json) => console.log(json));