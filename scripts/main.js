/*fetch('../data/events.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })*/


/*fetch('../data/events.json')
    .then((response) => response.json())
    .then((events) => {
        console.log(events);
    });*/

fetch('../data/events.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });
