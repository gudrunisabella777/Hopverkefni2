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

//*Þetta er prufu kóði fyrir neðan, aðeins að átta mig á skipununum*//

//*Filtering*//
//*Skrifa í input sem sýnir alla viðburði sem eiga við innslegin texta*//
//*Nota select til að velja place úr öllum þeim sem eru skilgreindir í gögnum**//
<>
    //*Þetta er prufu kóði fyrir neðan, aðeins að átta mig á skipununum*//
    //*Filtering*//
    //*Skrifa í input sem sýnir alla viðburði sem eiga við innslegin texta*//
    //*Nota select til að velja place úr öllum þeim sem eru skilgreindir í gögnum**//
    <input e>

    </input>
    
    <select>

    </select></>


//*Sorting*//
//* Hægt er að velja leið til að raða gögnum á a.m.k. tvo vegu, sjálfgefna og eitthvað annað,*//
//*t.d. eftirl tiltle í stafrófsröð.*//
//*Heimild: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*//
const events = [];
events.sort();
console.log(events);
//expected ouput: Array [öfug röð]**//

const array1= [];
array1.sort();
console.log(array1);
//* expected output: Array [tölur]

//*Paging*//
//**Birtir aðeins 10 viðburði í einu.. */

<script>
    
</script>


