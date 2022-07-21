let outputScreen = document.getElementById("display");
let deleteBtn = document.getElementById("delete");
let clearBtn = document.getElementById("clear");
let keypad = document.querySelectorAll(".keypad");
let equalBtn = document.getElementById("Equalbtn");
let addBtn = document.getElementById("add");
let operatorArray = ["/","-","*","+","%"];
let curentOperator = ""
clearBtn.addEventListener("click",()=>{
    outputScreen.value = ""
})
function keypads(Number){
    outputScreen.value += Number
    if(operatorArray.includes(Number)){
        curentOperator = Number
    }
     
}
deleteBtn.addEventListener("click",()=>{
    outputScreen.value = outputScreen.value.slice(0,-1)
  })
equalBtn.addEventListener("click", () => {
    const outputArray = outputScreen.value.split(curentOperator)

    if(outputArray.length < 1){
        return
    }

    let result = "";

    if(curentOperator === "+"){

        result = outputArray.filter(number => number !== '').reduce((a,b) => parseFloat(a) + parseFloat(b))

    }else if(curentOperator === "-"){
        result = outputArray.filter(number => number !== '').reduce((a,b) => parseFloat(a) - parseFloat(b))
    }else if(curentOperator === "/"){
        result = outputArray.filter(number => number !== '').reduce((a,b) => parseFloat(a) / parseFloat(b))
    }else if(curentOperator === "*"){
        result = outputArray.filter(number => number !== '').reduce((a,b) => parseFloat(a) * parseFloat(b))
    }else if(curentOperator === "%"){
        result = outputArray.filter(number => number !== '').reduce((a,b) => parseFloat(a) % parseFloat(b))
    }
    outputScreen.value = result;
})