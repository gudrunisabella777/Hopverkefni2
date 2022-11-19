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

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = JSON.stringify(data[i].start);
        mainContainer.appendChild(div);
    }
}
