function tipTot() {
//declare variables
let mealBill = parseInt(document.getElementById('bill').value); 
let service = document.getElementById('service').value;

console.log(service)
function tipPercent() {
    let newTip;
    if (service === "great-20%") {
        newTip = 0.20;
    } else if (service === "ok-18%") {
        newTip = 0.18;
    } else if (service === "bad-14%") {
        newTip = 0.14;
    } else {
        newTip = 0.10;
    }
    return(newTip);
};
console.log(tipPercent())
let payTip = tipPercent();
//find total bill to be paid with tip;

    let tipAmount = payTip * mealBill;
    return document.getElementById('result').innerHTML = tipAmount + ' '+ '$';
};

