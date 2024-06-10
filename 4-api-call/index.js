// fetch using XHR

const postsListContainer = document.querySelector(".posts-list-container");

function fetchusingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResult(xhr.response);
    } else {
      console.log("some error occurred");
    }
  };
}
// fetchusingXHR();


function fetchUsingfetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResult(result) )
    .catch((e) => console.log(e));
}
// fetchUsingfetchMethod();


 async function fetchusingAsyncAwait(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
    const result= await response.json();
    displayResult(result)
}
// fetchusingAsyncAwait()


function helperMethod(method,url){
    const promise = new Promise((resolve,reject)=>{
        const xhr =  new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload= ()=>{
            if(xhr.status === 200)
            {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }
    })
    return promise;
}
async function fetchUsingXHRAndAyncAwait(){
    const response = await helperMethod('GET',"https://jsonplaceholder.typicode.com/posts");
    console.log(response)
    displayResult(response)
}
fetchUsingXHRAndAyncAwait()


function displayResult(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class='post-item'>
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join(" ");
}

