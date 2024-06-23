// ways to toggle light amd dark mode 


// best  one is by using data theme by css 
const changeThemeBtn = document.querySelector('.change-theme-btn');
const body = document.querySelector('body');

// changeThemeBtn.addEventListener('click',()=>{
//     if(body.classList.contains('light'))
//     {
//         body.classList.remove('light');
//         body.classList.add('dark')
//         changeThemeBtn
//     } else{
//         body.classList.remove('dark');
//         body.classList.add('light')
//     }
//     if(changeThemeBtn.classList.contains('light'))
//     {
//         changeThemeBtn.classList.remove('light');
//         changeThemeBtn.classList.add('dark')
        
//     } else{
//         changeThemeBtn.classList.remove('dark');
//         changeThemeBtn.classList.add('light')
//     }

// })

changeThemeBtn.addEventListener('click',()=>{
    console.log(body.getAttribute('data-theme'));
    if(body.getAttribute('data-theme') === "dark"){
        body.setAttribute('data-theme',"light");
    } else {
        body.setAttribute("data-theme","dark")
    }

})