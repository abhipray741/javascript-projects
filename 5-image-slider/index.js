const slider =  document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');


async function fetchListOfImages(){
    try{    
        const response  = await fetch('https://picsum.photos/v2/list?page=1&limit=10',{
            method:'GET'
        })
        const imagesList = await response.json();
        if(imagesList && imagesList.length > 0) displayImages(imagesList)
    }
    catch(error){
        console.log(error)
    }
}
function displayImages(imagesList){
    slider.innerHTML =imagesList.map((item)=>
        `<div class = 'slide'>
        <img src=${item.download_url} alt=${item.id}/>
        </div>`
    ).join(" ")

    dotsContainer.innerHTML = imagesList.map((item,index)=>
    `<span class="dot ${ index === 0 ? 'active': '' }" data-slide=${index}> </span>`
).join(" ")
    
}


fetchListOfImages()

// logic for sliding the images 


// prevBtn.addEventListener('click',()=>{
//     const currentSlide = slider.querySelector('.slide.active');
//     const prevSlide = currentSlide.previousElementSibling;
//     currentSlide.classList.remove(".active");
//     prevSlide.classList.add('.active')
// })
setTimeout(()=>{
    const slides = document.querySelectorAll('.slide');
const prevBtn =document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
    let currentSlide =0;

    function activeDot(slide){
        document.querySelectorAll('.dot').forEach((dotItem)=>dotItem.classList.remove('active'))
        // slides.classList.remove('.active');
        document.querySelector(`[data-slide="${slide}"]`).classList.add('active');
        
    }

    function changeCurrentSlide(slide){
        slides.forEach((slideItem,index)=>
        ( 
            slideItem.style.transform = 
            `translateX(${100 * (index - slide)}%)`
        )
        )
    }

    changeCurrentSlide(currentSlide);
    nextBtn.addEventListener('click',()=>{
        currentSlide++;
        if(slides.length -1  < currentSlide ){
            currentSlide =0;
        }
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide)
    })
    prevBtn.addEventListener('click',()=>{
        currentSlide--;
        if(currentSlide<0)
        {
            currentSlide=slides.length-1;
        }
        changeCurrentSlide(currentSlide)
        activeDot(currentSlide)
    })
    dotsContainer.addEventListener('click',(event)=>{
        console.log(event.target.classList,event.target.dataset)
        if(event.target.classList.contains('dot'))
        {
            const currentSlide = event.target.dataset.slide;
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);
        }
    })
},1000)
function handleImageSlider(){
   

}