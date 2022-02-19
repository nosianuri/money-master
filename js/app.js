function inputValue(inputId) {
    let getinputfeild = document.getElementById(inputId);
    let getInputMoney = getinputfeild.value;
    let getInputAmount = parseFloat(getInputMoney);
    return getInputAmount;
}
document.getElementById('calculate-btn').addEventListener('click', function() {
    const addTution = inputValue('add-tuition');
    const addRent = inputValue('add-rent');
    const addOthers = inputValue('add-Others');
    const addIncome = inputValue('add-income');
    let totalExpenditure = addTution + addRent + addOthers;
    let balance = addIncome - totalExpenditure;
    // *****************input feild*******************
    if(addTution < 0 || addRent < 0 || addOthers < 0){
        document.getElementById('negative-error');
        console.log(1);
    }
    else if (isNaN(addTution < 0 || addRent < 0 || addOthers < 0)) {
        document.getElementById('nan-error');
        console.log(2);
    }
    else {
        document.getElementById('total-expenditure').innerText = totalExpenditure;
        document.getElementById('remnant-balance').innerText = balance;
        document.getElementById('nan-error');
        console.log(3);
    }
});
//***************** */ save money and remaining balance*************************
function saveAmountInput(inputPercentage){
    let saveInputField = document.getElementById(inputPercentage);
    let saveInputMoney = saveInputField.value;
    let saveInputAmount = parseFloat(saveInputMoney);
    return saveInputAmount; 
}
document.getElementById('save-btn').addEventListener('click', function() {
    const inputAmount = saveAmountInput('add-income');
    let saveInput = saveAmountInput('add-percentage');
    let saveAmount = (saveInput * inputAmount)/100;
    let remainingBalance = balance - saveAmount;
    // save money error handle
    if(saveInput < 0) {
        document.getElementById('saveBtn-negative-error');
    }
    else if(isNaN(saveInput)){
        document.getElementById('saveBtn-nan-error');
    }
    else {
        document.getElementById('saving-amount').innertext = saveAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        document.getElementById('saveBtn-nan-error');
        document.getElementById('saveBtn-negative-error');
    }
    // remaining balance error
    if(balance < saveAmount) {
        document.getElementById('saveBtn-balance-error');
    }
    else {
        document.getElementById('saveBtn-balance-error');
    }
});