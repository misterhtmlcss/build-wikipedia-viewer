// Example URL: https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=car&origin=*
const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="
//const app = document.getElementById('app')
const input = document.querySelector("input")
//const submit = document.querySelector("#")
let sTerm /* Search Term */
let data /* Json variable */


function reqData(x) {
   fetch(x)
      .then((res) => res.json())
      .then((blob) => {
         data = blob
         //console.log(data) // (tested) does the data load.
         extractData(data) // function to work the data
      })
   debugger
   function extractData(x) {
      //console.log(x)
      const {query: { search }} = x
      //console.log(search.length, search) // (tested) destructor functions
      search.forEach(datapoint => {
         let { pageid, snippet, title } = datapoint
         //console.log(pageid, snippet, title) // (tested) These variables have data.
      });

   }
}

input.addEventListener('click', reqData(url))




