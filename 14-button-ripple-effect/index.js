const getAllButton = document.querySelectorAll('.ripple-effect');

getAllButton.forEach((btn=>{
    btn.addEventListener('click',(event)=>{
        console.log(event.clientX,event.target.offsetLeft)
        let xCordinateValue = event.clientX - event.target.offsetLeft;
        let yCordinateValue = event.clientY - event.target.offsetLetop;

      let rippleElement =  document.createElement('span');
      rippleElement.style.left = `${xCordinateValue}`;
      rippleElement.style.top = `${yCordinateValue}`;

      btn.appendChild(rippleElement);
      window.setTimeout(()=>{
        rippleElement.remove();
      },500)
    })
}))