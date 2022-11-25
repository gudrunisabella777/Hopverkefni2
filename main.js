import {renderFrontpage, fetchAndRenderEvents} from './scripts/ui.js';

const main = document.querySelector('.layout_main');

/*fetch('../data/events.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });*/





function route() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const query = params.get('query');

    if (id) {
        fetchAndRenderEvents( id);
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
/*async function sleep(ms) {
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
}*/
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

//* expected output: Array [tölur]

//*Paging*//
//**Birtir aðeins 10 viðburði í einu.. */

//Search bar í Javascript
/*function search_Viðburður() {
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
}*/

//Reyna að búa til lista (nota pageing)
/*const list_items = {
    "Event 1-30"
};*/





