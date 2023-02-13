// step-1: add event listener to the deposit button 
document.getElementById("btn-deposit").addEventListener("click", function() {
  // step-2: get the deposit amount from the deposit input field
  const depositFiled = document.getElementById("deposit-field");

  // For inputFiled use .value to the value inside the inpute field 
  const newDepositAmountString = depositFiled.value;
  const newDepositAmount = parseFloat (newDepositAmountString);
  //step-7 clear the deposit field
  depositFiled.value = "";
  
  if(isNaN(newDepositAmount)){
    alert("please Provide a Valid Number")
  }

  // step-3: get the current deposit total
  // for non-input(element other than input, textarea) use innerText to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat (previousDepositTotalString);

  //step-4: add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  //set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //step-5: get ballance current total
  const ballanceTotalElement = document.getElementById("total-blance");
  const previousBalanceTotalString = ballanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6 calculate current total Balance 
  const currentBalanceTotal  = previousBalanceTotal + newDepositAmount;
  // set the balance total
  ballanceTotalElement.innerText = currentBalanceTotal;

});