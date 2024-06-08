const hexbtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorContainer = document.querySelector('.hex-color-container')

// create randome hex color 

hexbtn.addEventListener('click',()=>{
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput= ""

    for (let i =0 ,charSetLength = characterSet.length;i<6;i++)
    {
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength)
        )
    }
    hexColorValue.textContent =`#${hexColorOutput}`  
    hexColorContainer.style.backgroundColor=`#${hexColorOutput}`
    hexbtn.style.color =`#${hexColorOutput}`
    console.log(hexColorOutput);
})

//RGB color generator 
const rgbBtn  = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getBlueInputRange = document.querySelector('#blue');
const getGreenInputRange = document.querySelector('#green');
const rgbColorContainer =document.querySelector('.rgb-color-container')
const hexCopyColor = document.querySelector('.hex-copy-color');
const rgbCopyColor= document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-color-value');

rgbBtn.addEventListener('click',()=>{
    let extractRedValue = getRedInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    rgbColorValue.textContent = `rgb(${extractRedValue},${extractBlueValue},${extractGreenValue})`
    rgbColorContainer.style.backgroundColor= `rgb(${extractRedValue},${extractBlueValue},${extractGreenValue})`
    rgbBtn.style.color =  `rgb(${extractRedValue},${extractBlueValue},${extractGreenValue})`
})

hexCopyColor.addEventListener('click',()=>{
    copyHexColorToClipboard();
})
function copyHexColorToClipboard (){
    navigator.clipboard.writeText(hexColorValue.textContent);
}


function copyRgbColorToClipboard(){
    navigator.clipboard.writeText(rgbColorValue.textContent);
}
rgbCopyColor.addEventListener('click',()=>{
    copyRgbColorToClipboard();
})