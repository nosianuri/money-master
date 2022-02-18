/* document.getElementById('calculate-btn').addEventListener('click', function () {
    // const addTution = document.getElementById('add-tution');
    // const calculateTution = addTution.value;
    // console.log(calculateTution);
    const addTution = document.getElementById('add-tution').value;
    const addRent = document.getElementById('add-rent').value;
    const addOthers = document.getElementById('add-others').value;

    const totalAdd = parseFloat(addTution) + parseFloat(addRent) + parseFloat(addOthers);
    // const totalExpenditure = document.getElementById('total-addexpenditure');
    // totalExpenditure.innerText = totalAdd;
    
    const totalExpenditure = document.getElementById('total-expenditure');
    // const currentCalculateTutionCost = totalExpenditure.innerText;
    totalExpenditure.innerText =  totalAdd;
    console.log(totalAdd);
    
});  */
//**************************function set**********************
function getInputValue(boxID) {
    let inputBox = document.getElementById(boxID)
    let tutionCost = parseFloat(inputBox.value)
    if (isNaN(tutionCost) || tutionCost < 0) {
        addTutionCost.value = ''
        return alert('please input valid amount of money in number format')
    }
    inputBox.value = ''
    return tutionCost
}

//*********************** calculate button ***************************
document.getElementById('calculate-btn').addEventListener('click', function(){
    //import total monthly income ***************
    const monthlyIncomeTotal = incomePerMonth ();
    //monthlyError(monthlyIncomeTotal);

    //***************Expenditure section******************
    //*******************************tution*******************************
    const addTution = ExpenditureItem ('add-tution');
    monthlyIncomeTotal(addTution);
    console.log(addTution);

   if(addTution < 0) {
        const negativeValue = document.getElementById('add-tution');
        negativeValue.innerText = 'please add positive value';
        return negativeValue.innerText;
        }
        else if(addTution > 0){
            const positiveValue = document.getElementById('add-tution');
            positiveValue.value = '';
        }
        else if(addTution == 0){
            const negativeValue = document.getElementById('add-tution');
            negativeValue.innerText = 'please add value';
            return negativeValue.innerText;
        }
        //**************************Rent************************
 const addRent = ExpenditureItem ('add-rent');
    monthlyAmount(addRent);
    console.log(addRent);

        if(addRent < 0) {
            const negativeValue = document.getElementById('add-rent');
            negativeValue.innerText = 'please add positive value';
            return negativeValue.innerText;
            }
            else if(addRent > 0){
                const positiveValue = document.getElementById('add-rent');
                positiveValue.value = '';
            }
            else if(addRent == 0){
                const negativeValue = document.getElementById('add-rent');
                negativeValue.innerText = 'please add value';
                return negativeValue.innerText;
            }
            //*************************************Others***********************
            const addOthers = ExpenditureItem ('add-others');
            monthlyAmount(addOthers);
            console.log(addOthers);
            
    if(addOthers < 0) {
    const negativeValue = document.getElementById('add-others');
    negativeValue.innerText = 'please add positive value';
    return negativeValue.innerText;
    }
    else if(addOthers > 0){
        const positiveValue = document.getElementById('add-others');
        positiveValue.value = '';
    }
    else if(addOthers == 0){
        const negativeValue = document.getElementById('add-others');
        negativeValue.innerText = 'please add value';
        return negativeValue.innerText;
    }
    // *************************calculate total Expenditur amount*****************
    const totalAdd = addTution + addRent + addOthers;

    if(addIncomeInput > 0) {
        // const expenditure = document.getElementById('total-expenditure');
        // const totalExpenditure = parsefloat(expenditure.innerText);
        // expenditure.innerText = totalExpenditure;

        const totalExpenditure = document.getElementById('total-expenditure');
        const totalExpenditureCost = parseFloat(totalExpenditure.innerText);
        totalExpenditure.innerText = totalAdd;
        console.log(totalAdd);
    
    // ****************balance after expenditure*******************
        const income = document.getElementById('add-incomeInput');
        const addIncomeInput = parseFloat(income.innerText);
        if (addIncomeInput < totalExpenditureCost){
            const remnantBalance = document.getElementById('remnant-balance');
            remnantBalance.innerText = 'Expenditure balance more than Income';
            return remnantBalance;
        }
        else if(addIncomeInput > totalExpenditureCost){
            const remnantBalance = addIncomeInput - totalExpenditureCost;
            addIncomeInput.innerText = remnantBalance;
            return remnantBalance;
        }
        
    }
});

// *******************save button add event listner***********************
document.getElementById('saving-amount').addEventListener ('click', function (){
    const income = document.getElementById('add-incomeInput');
    const addIncomeInput = parseFloat(income.innerText);
    const savingAmount = (addIncomeInput/100)*20;
    console.log (savingAmount);
    // ***********************Remaining amount**********************
    const balance = document.getElementById('remnant-balance');
    const remnantBalance = parseFloat(balance.innerText);
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance = remnantBalance - savingAmount;
    const remainingAmount = parseFloat(remainingBalance.innerText);
    return remainingAmount;
});

