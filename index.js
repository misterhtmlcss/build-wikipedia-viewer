//const fetch = require('node-fetch')
const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="
const cors = "&origin=*"
const app = document.querySelector("#app")
const search = document.getElementById("btn-search")
const clear = document.getElementById("btn-clear")
const dynaContent = document.createElement('input')
const sInputBox = document.getElementById("sTerm")

let data // Json input data from search wikipedia search response
let urlReady // fully formed URL goes here
let sTerm = sInputBox.value

search.addEventListener('click', function(e) {
  e.preventDefault();
  clearContainer();
})

search.addEventListener('click', function(e) {
  e.preventDefault();
  urlBuilder();
})

function urlBuilder() {
  urlReady =  url+sTerm+cors // build that url first; for brevity
  apiReq(urlReady)
}

function apiReq (url) {
  fetch(url, {
    mode: 'cors',
    })
    .then((res) => res.json())
    .then((blob) => {
      //console.log(blob)
      data = blob
      extractData(data) // function to separate the data
    })
    .catch(function(error) {
      console.log(`What went wrong ${error}`);
    })
}

function extractData(fetchedData) {
  const {query: { search }} = fetchedData
  search.forEach(datapoint => {
    const { pageid, snippet, title } = datapoint
    /*
    // For testing data delivery
    console.log(datapoint.pageid, datapoint.title, datapoint.snippet)
    */
    createContainer(pageid, title, snippet)
  })
}

function createContainer(pageid, title, snippet){
  let aTag = document.createElement('a')
  let ulTag = document.createElement('ul')
  let liTag = document.createElement('li')
  let itemBox = `<li class="title">${title}</li><li class="snippet">${snippet}</li>`
  aTag.setAttribute('href', `https://en.wikipedia.org/wiki/${pageid}`)
  aTag.setAttribute('target', 'blank')
  app.appendChild(aTag)
  aTag.insertAdjacentElement('afterbegin', ulTag)
  ulTag.innerHTML = itemBox
}

function clearContainer () {
  app.innerHTML = " ";
}