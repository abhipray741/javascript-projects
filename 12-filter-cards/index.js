const categories = ["All", "Men", "Women", "Kids"];

const content = [
  { id: "Men", label: "Men Shirt 1" },
  { id: "Men", label: "Men Shirt 2" },
  { id: "Men", label: "Men Shirt 3" },
  { id: "Men", label: "Men Shirt 4" },
  { id: "Men", label: "Men Shirt 5" },
  { id: "Men", label: "Men Shirt 6" },
  { id: "Men", label: "Men Shirt 7" },
  { id: "Women", label: "Women Shirt 1" },
  { id: "Women", label: "Women Shirt 2" },
  { id: "Women", label: "Women Shirt 3" },
  { id: "Women", label: "Women Shirt 4" },
  { id: "Kids", label: "Kids Shirt 1" },
  { id: "Kids", label: "Kids Shirt 2" },
  { id: "Kids", label: "Kids Shirt 3" },
];
const contentWrapper = document.querySelector('.content-wrapper');
const filterBtnWrapper =document.querySelector('.filter-btn-wrapper');

function createCategory(){
    categories.forEach((category)=>{
        const categoryBtn = document.createElement('button');
        categoryBtn.textContent = category;
        categoryBtn.classList.add('filter-button');
        categoryBtn.setAttribute('data-filter',category);
        filterBtnWrapper.appendChild(categoryBtn)
    })
}
function createContent(){
    content.forEach(contentItem=>{
        const singleContentitem = document.createElement('div');
        singleContentitem.classList.add('card',contentItem.id)
        singleContentitem.textContent = contentItem.label; 
        contentWrapper.appendChild(singleContentitem);
    })
}
createCategory();
createContent();


const allFilterBtn =document.querySelectorAll('.filter-button');
const allCards = document.querySelectorAll('.card');

console.log(allCards,allFilterBtn);
allFilterBtn.forEach((singleFilterBtnItem)=>{
    singleFilterBtnItem.addEventListener('click',()=>{
        const extractCurrentCategory = singleFilterBtnItem.dataset.filter;
        console.log(extractCurrentCategory);
        filterCardsByCategory(extractCurrentCategory,allCards);
    })
})

function filterCardsByCategory(currentCategory,allCards)
{
    allCards.forEach((item)=>{
        const isShowAllCards = currentCategory.toLowerCase() === 'all'
        const isItemFiltered = !item.classList.contains(currentCategory);
        if(isItemFiltered && !isShowAllCards)
        {
            item.classList.add('hide');
        } else {
            item.classList.remove('hide');
        }
    })
}