function inputValue(inputId){
let getInputField = document.getElementById(inputId).value;
let getInputAmount = parseFloat(getInputField);
return getInputAmount;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    const addTuition = inputValue('add-tuition');
    const addRent = inputValue('add-rent');
    const addOthers = inputValue('add-others');
    const addIncome = inputValue('add-income');

    // const addTuition = document.getElementById('add-tuition').value;
    // const addRent = document.getElementById('add-rent').value;
    // const addOthers = document.getElementById('add-others').value;
    // const addIncome = document.getElementById('add-income').value;

    const totalAdd = parseFloat(addTuition) + parseFloat(addRent) + parseFloat(addOthers);
    const totalExpenditure = document.getElementById('total-expenditure');
    totalExpenditure.innerText = totalAdd;
    console.log(totalAdd);
    // const addIncome = document.getElementById('add-income').value;
    // const balance = document.getElementById('remnant-balance').innerText;
    const balance = addIncome - totalAdd;
    const remnantBalance = document.getElementById('remnant-balance');
    remnantBalance.innertext = balance;
    console.log(balance);
    // Input field Error
    if(addTuition < 0 || addRent < 0 || addOthers < 0){
        document.getElementById('negative-error').style.display = 'block'
    }
    else if (isNaN(addTuition < 0 || addRent < 0 || addOthers < 0)){
        document.getElementById('nan-error').style.display = 'block'
    }
    else{
        document.getElementById('total-expenditure').innerText = totalAdd;
        document.getElementById('remnant-balance').innerText = balance;
        document.getElementById('nan-error').style.display = 'none'
    }
});
    // save money and remaining balance
document.getElementById('save-btn').addEventListener('click', function(){
    const addTuition = inputValue('add-tuition');
    const addRent = inputValue('add-rent');
    const addOthers = inputValue('add-others');
    const addIncome = inputValue('add-income');
    const saveInput = inputValue('add-percentage');
    const savingAmount = document.getElementById('saving-amount');
    const saveAmount = (saveInput * addIncome) / 100;
    savingAmount.innerText = saveAmount;
    // const balance = document.getElementById('remnant-balance').innerText;
    
    // const addTuition = document.getElementById('add-tuition').value;
    // const addRent = document.getElementById('add-rent').value;
    // const addOthers = document.getElementById('add-others').value;
    // const addIncome = document.getElementById('add-income').value;

    const totalAdd = parseFloat(addTuition) + parseFloat(addRent) + parseFloat(addOthers);
    const totalExpenditure = document.getElementById('total-expenditure');
    totalExpenditure.innerText = totalAdd;
    console.log(totalAdd);
    // addIncome = document.getElementById('add-income').value;
    // const balance = document.getElementById('remnant-balance').innerText;
    const balance = addIncome - totalAdd;
    const remnantBalance = document.getElementById('remnant-balance');
    remnantBalance.innertext = balance;
    
    const remainingBalance = balance - saveAmount;


    // save money Error handle
    if(saveInput < 0){
        document.getElementById('saveBtn- negative-error').style.display = 'block'

    }
    else if (isNaN(saveInput)){
        document.getElementById('saveBtn-nan-error').style.display = 'block'
    }
    else{
        document.getElementById('saving-amount').innertext = saveAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        document.getElementById('saveBtn-nan-error').style.display = 'none'
        document.getElementById('saveBtn-negative-error').style.display = 'none'

    }
    // remaining balance error
    if(balance < saveAmount){
        document.getElementById('saveBtn-balance-error').style.display = 'block'
    }
    else{
        document.getElementById('saveBtn-balance-error').style.display = 'none'
    }
});
    
    
