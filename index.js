// Example URL: https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=car&origin=*
const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="

// input data from search wikipedia search response
//const app = document.getElementById('app')
let searchForm = document.getElementById("searchForm")
let data // Json variable
let sTerm = document.getElementById("sTerm").value // user input search request



/* The below doesn't seem to be working and I'm not sure why */
/*  */
searchForm.addEventListener('submit', function(e) {
   e.preventDefault();
   console.log('This crappy code works!')
})
/* The above seems to be broken */
/*  */




function urlBuilder (url, sTerm) {

   console.log (`${sTerm}`)
   //console.log (`${url}${sTerm}&origin=*`)
}

function reqData(x) {
   fetch(urlBuilder())
      .then((res) => res.json())
      .then((blob) => {
         data = blob
         //console.log(data) // (tested) does the data load.
         extractData(data) // function to work the data
      })
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






