const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active"); 
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}





// async function fetchMoviesJSON() {
//     const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e47ce0bb');
//     console.log(response);
    
//     const movies = await response.json();
//     return movies;
//   }
//   fetchMoviesJSON().then(movies => {
//         let data="";
//         movies.map((values)=>{
//             data+=`<div classname="card">
//             <img src=${values.Poster}>
//             <div classname="card-info">
//             <h1>${values.Title}</h1>
//             <p>${values.Plot}</p>
//             <p>${values.Genre}</p>
//             </div>
//             </div>`
//             console.log(data);
//             return data;
//         })
//           document.getElementsByClassName("search-data").innerHtml=data;
//   }) .catch((err)=>{
//     console.log(err);
//   })
   
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e47ce0bb').then((data)=>{
//     return data.json();
// }).then((data1)=>{
//     console.log(data1);
    
//     data1.map((values)=>{
//         document.getElementsByClassName("search-data").innerHtml=`<div classname="card">
//                     <img src=${values.Poster}>
//                      <div classname="card-info">
//                      <h1>${values.Title}</h1>
//                      <p>${values.Plot}</p>
//                      <p>${values.Genre}</p>
//                      </div>
//                      </div>`
//     })
   

// }). catch((err)=>{
//         console.log(err);
//      })





document.getElementById("btn-24").addEventListener("click", async () => {
  document.getElementById("movie1").innerHTML = "";

  let inputValue = document.getElementById("speechToText").value;

  let data = await fetch(
    `https://www.omdbapi.com/?s=${inputValue}&apikey=7880183f`
  ).then(res => res.json());
  console.log(data);
  // .then(data => data);
  let movieList = data.Search;
  console.log(movieList);
  movieList.map(movie => {
    let div = document.createElement("div");
    div.innerHTML = ` <div>
                    <h1>${movie.Title}</h1>
                    <img src=${movie.Poster} alt="">
                </div>`;

    document.getElementById("movie1").appendChild(div);
  });
});

//! Speech recognization

 function record() {
   var recognition = new webkitSpeechRecognition();
   recognition.lang = "en-GB";

   recognition.onresult = function (event) {
     // console.log(event);
     document.getElementById("speechToText").value =
       event.results[0][0].transcript;
   };
   recognition.start();
 }