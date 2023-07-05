
const clickArea = document.querySelector(".calculator_board");
const inputNumber = document.querySelector(".input_section #input_degit");
const historyView = document.querySelector("#view_point");

let arrayForSimbol = [];

let calculate = 0;
let click = 0;

clickArea.addEventListener("click", (e) => {
    if(e.target.classList.contains("one_btn")) {
        inputNumber.value += "1";
   }
   if(e.target.classList.contains("tow_btn")) {
          inputNumber.value += "2";
   }
   if(e.target.classList.contains("three_btn")) {
          inputNumber.value += "3";
   }
   if(e.target.classList.contains("four_btn")) {
          inputNumber.value += "4";
   }
   if(e.target.classList.contains("five_btn")) {
          inputNumber.value += "5";
   }
   if(e.target.classList.contains("six_btn")) {
          inputNumber.value += "6";
   }
   if(e.target.classList.contains("seven_btn")) {
          inputNumber.value += "7";
   }
   if(e.target.classList.contains("eight_btn")) {
          inputNumber.value += "8";
   }
   if(e.target.classList.contains("nine_btn")) {
          inputNumber.value += "9";
   }
   if(e.target.classList.contains("zero_btn")) {
          inputNumber.value += "0";
   }
    if(e.target.classList.contains("dot_btn")) {
          if(inputNumber.value.match(/[.]/g)) {
              return;
          }else {
              inputNumber.value += ".";
          }
   }
   if(e.target.classList.contains("clear_btn")) {
          inputNumber.value = "";
          historyView.value = "";

   }

   // that code blocks for clear number from claculator display
   if(e.target.classList.contains("backspace_btn")) {
        let inputValue = inputNumber.value;
        if(inputValue) {
            let cutValue = inputValue.slice(0, -1);
            inputNumber.value = cutValue;
        } else {
            alert("Your input field is empty!");
        }
   }

   // that code blocks for plus icon and adding number for addition
   if(e.target.classList.contains("plus_btn")) {
         calculatingProcess(inputNumber.value, "+");
   }

   //  that code for minus icon and substruct numbers
   if(e.target.classList.contains("minus_btn")) {
       calculatingProcess(inputNumber.value, "-");
   }

   // that code is for multiply button 
   if(e.target.classList.contains("multiply_btn")) {
       calculatingProcess(inputNumber.value, "x");
   }
   
   // that code for divide buttton
   if(e.target.classList.contains("devide_btn")) {
       calculatingProcess(inputNumber.value, "/");
   }

   if(e.target.classList.contains("percentage_btn")) {
       calculatingProcess(inputNumber.value, "%");
   }

   // that code blocks for equal button and output for result
   if(e.target.classList.contains("equal_btn")) {
       solutionFunc(historyView, inputNumber);
   }

});


document.addEventListener("keydown", (e) => {
       console.dir(e.target);
       switch(e.key) {
              case "1":
                     inputNumber.value += 1;
                     break;
              case "2":
                     inputNumber.value += 2;
                     break;
              case "3":
                     inputNumber.value += 3;
                     break;
              case "4":
                     inputNumber.value += 4;
                     break;
              case "5":
                     inputNumber.value += 5;
                     break;
              case "6":
                     inputNumber.value += 6;
                     break;
              case "7":
                     inputNumber.value += 7;
                     break;
              case "8":
                     inputNumber.value += 8;
                     break;
              case "9":
                     inputNumber.value += 9;
                     break;
              case "0":
                     inputNumber.value += 0;
                     break;
                     
              case "Shift":
                     break;

              case "Backspace":
                     let inputValue = inputNumber.value;
                     if(inputValue) {
                         let cutValue = inputValue.slice(0, -1);
                         inputNumber.value = cutValue;
                     } else {
                         alert("Your input field is empty!");
                     }
                     break;

              case "+":
                     calculatingProcess(inputNumber.value, "+");
                     break;
              case "-":
                     calculatingProcess(inputNumber.value, "-");
                     break;
              case "x":
                     calculatingProcess(inputNumber.value, "x");
                     break;
              case "/":
                     calculatingProcess(inputNumber.value, "/");
                     break;
              case "%":
                     calculatingProcess(inputNumber.value, "%");
                     break;
              case "Enter":
                     e.preventDefault();
                     solutionFunc();
                     break;

              default:
                     alert("Input number of math simbol!")
                     break;
       }
});

// validating user input is it number or another
function checkingValidInput(input) {
       let anArray = input.match(/[0-9.]/g);
          if(anArray === null || anArray.length != input.length) {
               inputNumber.value = "";
               alert("Please input number!");
               return false;
          } else {
              return true;
          }
}

// all simbols calculating process code is here
function calculatingProcess(userInput, mathSimbol) {
       if(checkingValidInput(userInput)) {
              // thats code for plus numbers 
              if(mathSimbol === "+") {
                     if(historyView.value) {
                            calculate = forChecking(arrayForSimbol, calculate, parseFloat(inputNumber.value));
                             arrayForSimbol.push("+");
                            historyView.value = historyView.value + inputNumber.value + "+";
                            inputNumber.value = "";
        
                       } else {
                            calculate = parseFloat(inputNumber.value);
                            arrayForSimbol.push("+");
                            historyView.value = inputNumber.value + "+";
                            inputNumber.value = "";
                       }
                       // that code for minus numbers 
              } else if(mathSimbol === "-") {
                     if(historyView.value) {
                            calculate = forChecking(arrayForSimbol, calculate, parseFloat(inputNumber.value));
                           arrayForSimbol.push("-");
                           historyView.value = historyView.value + inputNumber.value + "-";
                           inputNumber.value = "";
       
                      } else {
                           calculate = parseFloat(inputNumber.value);
                           arrayForSimbol.push("-");
                           historyView.value = inputNumber.value + "-";
                           inputNumber.value = "";
                      }
                      // thats code for multiply numbers 
              } else if(mathSimbol === "x") {
                     if(historyView.value) {
                            calculate = forChecking(arrayForSimbol, calculate, parseFloat(inputNumber.value));
                           arrayForSimbol.push("x");
                           historyView.value = historyView.value + inputNumber.value + "x";
                           inputNumber.value = "";
       
                      } else {
                           calculate = parseFloat(inputNumber.value);
                           arrayForSimbol.push("x");
                           historyView.value = inputNumber.value + "x";
                           inputNumber.value = "";
                      }
                      // that codes for dividing numbers 
              } else if(mathSimbol === "/") {
                     if(historyView.value) {
                            calculate = forChecking(arrayForSimbol, calculate, parseFloat(inputNumber.value));
                           arrayForSimbol.push("/");
                           historyView.value = historyView.value + inputNumber.value + "/";
                           inputNumber.value = "";
       
                      } else {
                           calculate = parseFloat(inputNumber.value);
                           arrayForSimbol.push("/");
                           historyView.value = inputNumber.value + "/";
                           inputNumber.value = "";
                      }
              } else if(mathSimbol === "%") {
                     alert("thats function is not set");
              }
       }
}


function solutionFunc() {
       const histoVal = historyView.value;
       historyView.value = historyView.value + inputNumber.value;

       if(histoVal[histoVal.length - 1] === "-") {
              inputNumber.value = calculate - parseFloat(inputNumber.value);
              calculate = 0;
              arrayForSimbol = [];
       } else if(histoVal[histoVal.length - 1] === "+") {
              let valuu = calculate + parseFloat(inputNumber.value);
              inputNumber.value = valuu;
              calculate = 0;
              arrayForSimbol = [];
              //calculate + parseFloat(inputNumber.value);
       } else if(histoVal[histoVal.length - 1] === "x") {
              inputNumber.value = calculate * parseFloat(inputNumber.value);
              calculate = 0;
              arrayForSimbol = [];
       } else if(histoVal[histoVal.length - 1] === "/") {
              inputNumber.value = calculate / parseFloat(inputNumber.value);
              calculate = 0;
              arrayForSimbol = [];
       }
}

// checking pre simble of user input and make a sum with checking
function forChecking(anArray, calculateVal, currentVal) {
       if(anArray.length != undefined) {
              if(anArray[anArray.length - 1] === "+") {
                     return calculateVal += currentVal;
              }
              if(anArray[anArray.length - 1] === "-") {
                     return calculateVal -= currentVal;
              }
              if(anArray[anArray.length - 1] === "x") {
                     return calculate *= currentVal;
              }
              if(anArray[anArray.length - 1] === "/") {
                     return calculate /= currentVal;
              }
       }else {
              console.log("any things is else"); 
       }
}