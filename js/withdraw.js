// step-1: add event handelar with the withdarw button 
// step-2: get the withdraw Amount from the withdraw input field 
// 2.5 also make sure to convert the input into a number by using parseFloat
// 3. get Previous withdraw Total
// step-4: calculet Total Withdraw Amount 
// step-4.-5: Total Withdraw Amount 


// step-1
document.getElementById("btn-witdraw").addEventListener("click", function() {

const witdrawFiled = document.getElementById("withdraw-filed");
const newWdithdrawAmountString = witdrawFiled.value;
const newWithdrawAmount = parseFloat(newWdithdrawAmountString);
// console.log(newWithdrawAmount);

// step-2: 
const witdrawTotalElement = document.getElementById("withdraw-total");
const previouseWithdrawTotalSting = witdrawTotalElement.innerText;
const previouseWithdrawTotal = parseFloat(previouseWithdrawTotalSting);

// console.log(previouseWithdrawTotal);

// step-5
const blanceTotalElemant = document.getElementById("total-blance");
const previousBalanceTotalString = blanceTotalElemant.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// clear the inputFiled 
witdrawFiled.value = "";

if(newWithdrawAmount > previousBalanceTotal){
  alert("Baap er Bank e eto Taka nai");
  return;
}

// step-3
const currentWithdrawTotal = previouseWithdrawTotal + newWithdrawAmount;
witdrawTotalElement.innerText = currentWithdrawTotal;

// step-6
const newBlanceTotal = previousBalanceTotal - newWithdrawAmount;
blanceTotalElemant.innerText = newBlanceTotal;


});