function tipTot() {
//declare variables
let mealBill = parseInt(document.getElementById('bill').value); 
let service = document.getElementById('service').value;


function tipPercent() {
    let newTip;
    if (service === "great") {
        newTip = 0.20;
    } else if (service === "ok") {
        newTip = 0.18;
    } else if (service === "bad") {
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

