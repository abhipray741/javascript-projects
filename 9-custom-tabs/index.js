const tabContainer = document.querySelector(".container");
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.content');


tabContainer.addEventListener('click',(event)=>{
    const currentId = event.target.dataset.id;
    if(currentId)
    {
        tabButtons.forEach((btn)=>{
            btn.classList.remove('active');
        })
        event.target.classList.add('active');
        tabContents.forEach((tab)=>{
            tab.classList.remove('active')
        })
        const currentElement = document.getElementById(currentId);
        console.log(currentElement)
        currentElement.classList.add('active')
    }
})

