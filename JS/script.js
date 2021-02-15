function tipCalc() {
    //declare variables for inputs.
let mealBill = parseInt(document.getElementById('bill').value); 
let service = document.getElementById('service').value;
let numSharing = parseInt(document.getElementById('splitNumber').value);

console.log(service, mealBill, numSharing)

// determine tip percentage by service.
function tipPercent() {
    let newTip;
    if (service === "great-20%") {
        newTip = 0.20;
    } else if (service === "ok-18%") {
        newTip = 0.18;
    } else if (service === "bad-14%") {
        newTip = 0.14;
    } else if (service === "no tip") {
        newTip = 0;
    }    else {
        newTip = service/100;
    }
    return(newTip);
};
console.log(tipPercent())
let payTip = tipPercent();
//find total bill to be paid with tip;
function totalBill() {
    let tipAmount = payTip * mealBill;

    console.log(tipAmount);
    return tipAmount + mealBill;
};


let totalAmount = totalBill();

//split the bill 
function splitBill() {
   let finalBill =  totalAmount / numSharing;
   return finalBill;
}

let billEachPerson = splitBill();
return document.getElementById('result').innerHTML = billEachPerson +' ' + '$';

};


