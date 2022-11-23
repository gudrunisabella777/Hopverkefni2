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

    let mainContainer = document.getElementById("myData");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        h1.textContent = data[i].language.is.title;
        p1.textContent = data[i].language.is.place;
        p2.textContent = data[i].start; //JSON.stringify
        div.append(h1, p1, p2)
        //p1.classList.add("p")

    
        mainContainer.appendChild(div);
    }
}

//*Þetta er prufu kóði fyrir neðan, aðeins að átta mig á skipununum*//

//*Filtering*//
//*Skrifa í input sem sýnir alla viðburði sem eiga við innslegin texta*//
//*Nota select til að velja place úr öllum þeim sem eru skilgreindir í gögnum**//

    /*Þetta er prufu kóði fyrir neðan, aðeins að átta mig á skipununum
    Filtering
    Skrifa í input sem sýnir alla viðburði sem eiga við innslegin texta
    Nota select til að velja place úr öllum þeim sem eru skilgreindir í gögnum
    <input e>

    </input>
    
    <select>

    </select></>*/


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

//Search bar í Javascript
function search_Viðburður() {
    let input = document.getElementById('Leita').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('Viðburður');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

//Reyna að búa til lista (nota pageing)
/*const list_items = {
    "Event 1-30"
};*/

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1; 
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page){
    wrapper.innerHTML ="";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    
    for (let i = 0; i < paginatedItems.length; i++) {
let item =paginatedItems[i];

let item_element = document.createElement('div');
item_element.classList.add('item');
item_element.innerText = item;

wrapper.appendChild(item_element);
    }

}

function SetupPagination(items,wrapper,rows_per_page) {
    wrapper.innerHTML = "";

    let page_count=Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
       let btn = PaginationButton(i);
       wrapper.appendChild(btn);
    }
}
function Pagination(page) {
    let button = document.createElement('button');
    button.innerText = page;

    if(current_page == page) button.classList.add('active');
 
 
    /*button.addEventListener('click', function ())
    return button;*/
    
}

DisplayList(list_items,list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);