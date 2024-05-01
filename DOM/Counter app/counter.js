// getting the html elements

const decreamentBtn = document.getElementById("decreament");
const increamentBtn = document.getElementById("increament");
const restbtn   = document.getElementById("restValue");
const displayValue = document.getElementById("displayValue")

// for decrement button click

decreamentBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = -1;
    }
    else{
        alert("Negative value not allowed")
    }
})


// for increment button click

increamentBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);
    if(value >= 10){
        alert("10+ values are not allowed")
    }
    else{
        displayValue.innerText = value + 1;
    }
});


// for reset button click

restbtn.addEventListener("click" , () => {
    displayValue.innerText = 0;
});
