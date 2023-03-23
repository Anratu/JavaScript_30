const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const list = [];
fetch(endpoint)
    .then(res => res.json())
    .then(data => list.push(...data));

//console.log(list)
const searchText = document.querySelector('.search');
const showSearch = document.querySelector('.suggestions');

searchText.addEventListener('change' , dispalySearch);
searchText.addEventListener('keyup' , dispalySearch);



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function dispalySearch(){
    //console.log(this.value);
    const arr = searchValue(this.value , list);
    //console.log(arr);
    const regex = new RegExp(this.value , 'gi');
    //console.log(regex)
    const html = arr.map(place => {
        const searchCity = place.city.replace(regex, `<span class = hl>${this.value}</span>`);
        const searchState = place.state.replace(regex, `<span class = hl>${this.value}</span>`);
        //console.log(searchCity);
        return `
        <li>
            <span class = 'name '>${searchCity} ,${searchState} </span>
            <span class = 'population'>${numberWithCommas(place.population)} </span>
        </li>
        `;
    }).join('');
    console.log(html);
    showSearch.innerHTML = html;
}

function searchValue(textForSearching, data){
    const regex = new RegExp(textForSearching , 'gi');
    //console.log(regex);
    return data.filter(search => search.city.match(regex) || search.state.match(regex));
}