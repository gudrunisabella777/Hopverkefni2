
import { isValidNum, randomNumber } from './helpers.js';


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
    let currentTime = data[0].start;

    let mainContainer = document.getElementById("myData");
    for (let i = 0; i < data.length; i++) {
        let startTime = data[i].start;
        if (startTime != currentTime){
            let startTime = document.createElement("div");
            currentTime = startTime;
        }
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let image = document.createElement("img")
        //infoBox.appendChild(el('h2', {}, `20th August ${events.start.substr(11)} - ${events.end.substr(11)}`));
        //h2.textContent = data[i].start;
        h1.textContent = data[i].language.is.title;
        //h2.textContent = (data[i].start, {}, `20. Ágúst ${events.start.substr(11)} - ${events.end.substr(11)}`);
        p1.textContent = data[i].language.is.place;
        p2.textContent = data[i].start; //JSON.stringify
        image.setAttribute("src", "images/gnott.jpg");
        div.append(h2)
        div.append(image, h1, p1, p2) //h2
        p1.classList.add("p")
        p2.classList.add("p")
        div.classList.add("cards")
        div.classList.add("content")
        div.classList.add("start")
    
        mainContainer.appendChild(div);
    }
}

// gaur sýndi okkur

function route() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const query = params.get('query');

    if (id) {
        fetchAndRenderEvent(main, searchForm, id);
    } else {
        renderFrontpage(main);
    }
}

window.onpopstate = () => {
    empty(main);
    route();
};

route();

// search bar
/**
 * skilar promise sem bíður í gefnar millisekúndur
 * @param {number} ms Tími til að sofa í millisekúndum
 * @returns 
 */
async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve(null), ms);
    });
}

async function queryApi(url) {
    try {
        const results = await fetch(url);
        if(!results.ok) {
            throw new Error('not results')
        }
        return await results.json();
    } catch (e) {
        console.warn('unable to query', e);
        return null;
    }
}

export async function searchEvents(query) {
    const out = await queryApi(API_URL);
    if (!out) {
        return[];
    }
    return out.filter((event) =>
    event.language.en.title.toLowerCase().includes(query.toLowerCase()));
}

export async function getEvents(id) {
    const out = await queryApi(API_URL);
    const results = out.find((event) => event.id === parseInt(id, 10));
    if (!results) {
        return null;
    }
    return results;
}

export function createSearchInput(searchHandler) {
    const search = el('input', { type: 'search', placeholder: 'Leita að viðburði', class: 'search_input' });
    const button = el('button', {class: 'event_search_button'}, 'Leita');
    const container = el('form', { class: 'search' }, search, button);
    container.addEventListener('submit', searchHandler);
    return container;
  }

export function createSearchResults(events) {
    //vantar að fylla inn í
    return el('div', { class: 'result_content'}, el('h2', {class: 'result_title'}, el('a', {href: `/?id=${events.id}`}, events.language.en.title)), dateLocation);
}

export function createSearchOut(out) {
    const out = el() // vantar að fylla inn í 
}
/*const searchInput = document.querySelector('.input')
searchInput.addEventListener("input", (e) => {
    let value = e.target.value
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase()
        setList(events.filter(data => {
            return data.tags.includes(value)
        }))
    } else {
        clearList()
    }
})

clearButton.addEventListener("click", () => {
    clearList()
})

const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", () => {}) ;
    // 1. write a function that removes any previous results from the page


function setList(results) {
    for (const data of results) {
        const resultItem = document.createElement('tags')
        resultItem.classList.add('results-container')
        const text = document.createTextNode(data.tags)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }
    if (results.length === 0) {
        noResults()
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

function noResults() {
    const error = document.createElement('li')
    error.classList.add('error-message')
    const text = document.createTextNode('No results found.')
    error.appentChild(text)
    list.appendChild(error)
}*/

//virkaði ekki



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