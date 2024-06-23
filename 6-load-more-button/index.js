const productContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");

let currentStep = 0;

async function fetchListOfProducts(getCurrentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      } `,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log(result);
    if (result && result.products) displayProducts(result.products);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(productList) {
  console.log("a*", productList);
  productList.forEach((productItem) => {
    const productItemWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");

    productItemWrapper.classList.add("product-item-wrapper");
    productDescription.classList.add("product-desc");
    productTitle.classList.add("product-title");
    productPrice.classList.add("product-price");
    productThumbnail.classList.add("product-thumbnail");
    productTitle.textContent = productItem.title;
    productDescription.textContent = productItem.description;
    productThumbnail.src = productItem.thumbnail;
    productPrice.textContent = productItem.price;

    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productPrice);
    productItemWrapper.appendChild(productDescription);

    productContainer.appendChild(productItemWrapper);
   if(productContainer.children.length ===100)
   {
    loadMoreBtn.setAttribute('disabled',"true");
   }
  });
}
fetchListOfProducts(currentStep);

loadMoreBtn.addEventListener('click',()=>{
    fetchListOfProducts(++currentStep)
})