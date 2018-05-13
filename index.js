/*
Example 1: https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=car&origin=*
https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=cars&origin=*
Example 2 from FCC Forums: "https://en.wikipedia.org/w/api.php?action=opensearch&search=mcdonalds&format=json"
FCC FUll Example:
const baseUrl = https://en.wikipedia.org/w/api.php?action=opensearch&search=
const sTerm = .....
const corsUrl = &format=json&callback=wikiCallbackFunction&origin=*
*/
//const fetch = require('node-fetch')
const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="//+cors
const cors = "&origin=*"


const app = document.getElementById('app')
let data // Json input data from search wikipedia search response
let urlReady // fully formed URL goes here
let sTerm = document.getElementById("sTerm")
let search = document.getElementById("btn-search")


search.addEventListener('click', urlBuilder)

function urlBuilder() {
   //console.log (url+sTerm.value+cors)
   urlReady =  url+sTerm.value+cors // build that url first; for brevity
   apiReq(urlReady)
}

function apiReq (x) {
   fetch(x)
      .then((res) => res.json())
      .then((blob) => {
         data = blob
         console.log(data) // (tested) does the data load.
         extractData(data) // function to work the data
      })
}

function extractData(x) {
   //console.log(x)
   const {query: { search }} = x
   console.log(search.length, search) // (tested) destructor functions
   search.forEach(datapoint => {
      let { pageid, snippet, title } = datapoint
      printData(pageid, snippet, title)
      //console.log(pageid, snippet, title) // (tested) These variables have data.
   })
}


function printData () {
   app.innerHTML =
   `
   <p class="title">${title}</p>
   <p class="snippet">${snippet}</p>
   `
   // Need to add page id still for a link, but will do that once the code works
}

