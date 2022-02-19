document.getElementById('calculate-btn').addEventListener('click', function(){
    const addTuition = document.getElementById('add-tuition').value;
    const addRent = document.getElementById('add-rent').value;
    const addOthers = document.getElementById('add-others').value;
    const totalAdd = parseFloat(addTuition) + parseFloat(addRent) + parseFloat(addOthers);
    const totalExpenditure = document.getElementById('total-expenditure');
    totalExpenditure.innerText = totalAdd;
    console.log(totalAdd);

    const addIncome = document.getElementById('add-income').value;
    const balance = addIncome - totalAdd;
    const remnantBalance = document.getElementById('remnant-balance');
    remnantBalance.innerText = balance;
    console.log(balance);
})
document.getElementById('save-btn').addEventListener('click', function(){
    const addIncome = document.getElementById('add-income').value;
    const saveInput = document.getElementById('add-percentage').value;
    const saveAmount = (saveInput * addIncome) / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saveAmount;
    console.log(saveAmount);

    const addTuition = document.getElementById('add-tuition').value;
    const addRent = document.getElementById('add-rent').value;
    const addOthers = document.getElementById('add-others').value;
    const totalAdd = parseFloat(addTuition) + parseFloat(addRent) + parseFloat(addOthers);
    const balance = addIncome - totalAdd;
    const remainingAmount = balance - saveAmount;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingAmount;
    console.log(remainingAmount);
})