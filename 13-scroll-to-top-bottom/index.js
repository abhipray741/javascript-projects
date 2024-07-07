const usersList = document.querySelector('.users-list')
const loader = document.querySelector('.loader');
const scrollToTopBtn = document.querySelector('.scroll-to-top-button');
const scrollToBottomBtn = document.querySelector('.scroll-to-bottom-button');


function showLoader(){
    loader.classList.add('show-loader');
    usersList.classList.add('hide-user-list');
}

function removeLoader(){
    loader.classList.remove('show-loader');
    usersList.classList.remove('hide-user-list');

}
async function fetchUsersList(){
    showLoader()
    const response = await fetch('https://dummyjson.com/users?limit=100',{
        method:'GET'
    })

const result  = await response.json();
console.log(result);
    if(result && result.users)displayUsersList(result.users);

    removeLoader()
}

function displayUsersList(getUsers){
    console.log(getUsers);
    usersList.innerHTML = getUsers.map((userItem)=>`
    <li>  
    <p>${userItem.firstName} ${userItem.LastName}</p></li>`
    ).join(" ");
}


fetchUsersList();

scrollToTopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
})

scrollToBottomBtn.addEventListener('click',()=>{
    document.body.scrollHeight
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'    
    })
})