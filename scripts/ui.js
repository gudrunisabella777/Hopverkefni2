
import {
    empty, el
  } from './helpers.js';

  const main = document.querySelector('.layout_main');
export async function getData() {
    let filearray;
    try {
      filearray = await fetch('./data/events.json');
    } catch (error) {
      console.warn('error');
    }
    return filearray.json();
  }
 

  async function DisplayOneEvent(data,  id) {
    console.log(data[0].location[0]);
    for (let i = 0; i < data.length; i++) {
      const source = await getImage();
      if (data[i].id == id) {
        main.append(el('a', { }, el('img', { src: source, class: 'clickedimg' })));
        main.append(el('p', {}, data[i].language.is.title));
        main.append(el('p', {}, data[i].language.is.text));
        main.append(el('p', {}, `${'Date:  '}${(data[i].start.slice(0, 10))}`));
        main.append(el('p', {}, `${'Time:  '}${(data[i].start).slice(11, 16)}-${(data[i].end).slice(11, 16)}`));
        main.append(el('p', {}, `${'Stadsetning:  '}${(data[i].language.is.place)}`));
        main.append(el('p', {}, `${'Heimilisfang:  '}${(data[i].formatted_address)}`));
        main.append(el('div', { id: 'map' }));
        const map = L.map('map').setView([data[i].location[0], data[i].location[1]], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        L.marker([data[i].location[0], data[i].location[1]]).addTo(map);
      }
    }
  }

  async function getImage() {
    const nyMynd = await fetch('https://picsum.photos/300/200');
    const source = nyMynd.url;
    return source;
  }

 export async function renderFrontpage(datamain) {
    const dataOne = await getData();
    const list_element = document.getElementById('list');
    const pagination_element = document.getElementById('pagination');
    let current_page = 1; 
    let rows = 5;
    console.log(dataOne);
    DisplayAllEvents(dataOne,datamain);
    //DisplayList(dataOne,list_element, rows, current_page);
    //SetupPagination(dataOne, pagination_element, rows);
  }

  export async function fetchAndRenderEvents(id) {
    empty(main);
    const data = await getData();
    console.log(data)
    DisplayOneEvent(data, id);
  }






async function DisplayAllEvents(data, main) {
    for (let i = 0; i < data.length; i++) {
      const source = await getImage();
      main.append(el('a', { href: `/?id=${data[i].id}`, class: 'linkhref' }, el('img', { src: source, class: 'imgresponsive' })));
      main.append(el('p', {}, data[i].language.is.title));
      main.append(el('p', {}, data[i].language.is.place));
      main.append(el('p', {}, `${(data[i].start).slice(11, 16)}-${(data[i].end).slice(11, 16)}`));
    }
  }
  
 


// paginatoon


function DisplayList (items, wrapper, rows_per_page, page){
    wrapper.innerHTML ="";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let image = document.createElement("img")
    
    for (let i = 0; i < paginatedItems.length; i++) {
    let item =paginatedItems[i].language.is.title;
    let startTime = paginatedItems[i].start;
        h1.textContent = paginatedItems[i].language.is.title;
        p1.textContent = paginatedItems[i].language.is.place;
        p2.textContent = paginatedItems[i].start; //JSON.stringify
        image.setAttribute("src", "images/8.jpg");
        div.append(h2)
        div.append(image, h1, p1, p2) //h2
        p1.classList.add("p")
        p2.classList.add("p")
        div.classList.add("cards")
        div.classList.add("content")
        div.classList.add("start")


let item_element = document.createElement('div');
item_element.classList.add('item');
item_element.innerText = item;
item_element.innerText += h1.textContent;
item_element.innerText += p1.textContent;
item_element.innerText += p2.textContent;
item_element.innerText += div;
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
function PaginationButton(page, items) {
    const list_element = document.getElementById('list');
    const pagination_element = document.getElementById('pagination');
    let current_page = 1; 
    let rows = 5;
    let button = document.createElement('button');
    button.innerText = page;

    if(current_page == page) button.classList.add('active');
 
 
    button.addEventListener('click', function () {
    current_page=page;
    DisplayList(items,list_element,rows,current_page);
    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');
    button.classList.add('active');
    });
    return button;
    
    }