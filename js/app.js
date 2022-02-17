/* document.getElementById('calculate-btn').addEventListener('click', function () {
    const addTutionCost = document.getElementById('add-tutionCost');
    const calculateTutionCost = addTutionCost.value;
    console.log(calculateTutionCost);
    const totalExpenditure = document.getElementById('total-expenditure');
    // const currentCalculateTutionCost = totalExpenditure.innerText;
    totalExpenditure.innerText =  calculateTutionCost;

     addTutionCost.value = '';
    
})

document.getElementById('addAll-calculate').addEventListener('click', function () {
    const addRentCost = document.getElementById('add-rent');
    const calculateRentCost = addRentCost.value;
    console.log(calculateRentCost);
    const totalExpenditure = document.getElementById('total-expenditure');
    // const currentCalculateTutionCost = totalExpenditure.innerText;
    totalExpenditure.innerText =  calculateRentCost;

     addRentCost.value = '';
    
})

document.getElementById('addAll-calculate').addEventListener('click', function () {
    const addOthersCost = document.getElementById('add-others');
    const calculateOthersCost = addOthersCost.value;
    console.log(calculateOthersCost);
    const totalExpenditure = document.getElementById('total-expenditure');
    // const currentCalculateTutionCost = totalExpenditure.innerText;
    totalExpenditure.innerText =  calculateOthersCost;

     addOthersCost.value = '';
    
})
 */
const calculateBtn = document.getElementById('calculate-btn')
const saveBtn = document.getElementById('save-btn')
const totalExpenditure = document.getElementById('total-expenditure')
const remnantBalance = document.getElementById('remnant-balance')
const savingAmount = document.getElementById('saving-amount')
const remainingBalance = document.getElementById('remaining-balance')

calculateBtn.addEventListener('click', function(event) {
    event.preventDefault()
    let addTutionCost = document.getElementById('add-tutionCost')
    console.log(addTutionCost.value)
    totalExpenditure.innerText = addTutionCost.value
    addTutionCost.value = ''
})