const data = [
    {
        question: "What is the capital of France?",
        answer: "The capital of France is Paris."
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "The largest planet in our solar system is Jupiter."
    },
    {
        question: "What is the smallest prime number?",
        answer: "The smallest prime number is 2."
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee wrote 'To Kill a Mockingbird'."
    },
    {
        question: "What is the boiling point of water at sea level?",
        answer: "The boiling point of water at sea level is 100°C or 212°F."
    }
]

// if the interview can say to fetch the data from api through async method 
// and pass the data in the below method 
const accordionWrapper=  document.querySelector('.accordion');
function createAccordionData(){
    accordionWrapper.innerHTML = data.map(dataItem=>`
        <div class= "accordion_item">
            <div class= "accordion_title">
            <h3>${dataItem.question}</h3>
            <i class= "fa-solid fa-arrow-down"></i>
            </div>
            <div class="accordion_content">
            <p>${dataItem.answer}</p>
            </div>
        </div>
    `).join(" ")
}

createAccordionData();

getAllAccordionTitles = document.querySelectorAll('.accordion_title');
console.log(getAllAccordionTitles);
getAllAccordionTitles.forEach((currentItem)=>{
    currentItem.addEventListener('click',(event)=>{
      if(currentItem.classList.contains('active'))
      {
        currentItem.classList.remove('active');
      }  else {
        let getAlreadyActiveClasses =  document.querySelectorAll('.active')
        getAlreadyActiveClasses.forEach((curr) => {
            curr.classList.remove('active')
        })
        currentItem.classList.add('active');
      }
    })
})