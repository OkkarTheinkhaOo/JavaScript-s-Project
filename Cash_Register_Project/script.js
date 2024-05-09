let price = 19.5;
let cid = [
    ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
];
const bills = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
}

const changeDue = document.getElementById('change-due')
const purchaseBtn = document.getElementById('purchase-btn')

purchaseBtn.addEventListener('click', () => {
    let cash = document.getElementById('cash').value
    if(cash < price){
        alert("Customer does not have enough money to purchase the item")
        return
    }

    if(cash == price){
        changeDue.textContent = "No change due - customer paid with exact cash"
        return
    }

    let returnChange = cash - price
    let tempReturnChange = returnChange // to check again
    let cidAmountTotal = 0 // to check if it is the same with returnChange
    let changeArr = []
    let returnString = ""
    for (let i = cid.length - 1; i >= 0; i--) {
        if (cid[i][1] > 0) {
            let currency = cid[i][0]
            let totalCurrencyAmount = cid[i][1]
            cidAmountTotal += totalCurrencyAmount
            let totalAmount = 0
            while (tempReturnChange >= bills[currency] && totalCurrencyAmount > 0) {
                tempReturnChange = parseFloat((tempReturnChange - bills[currency]).toFixed(2)) // to know how much is left for change
                totalCurrencyAmount = parseFloat((totalCurrencyAmount - bills[currency]).toFixed(2)) // to know how much is left in cid
                totalAmount = parseFloat((totalAmount + bills[currency]).toFixed(2))
            }
            if (totalAmount > 0) {
                changeArr.push(currency, totalAmount)
                returnString += ` ${currency}: $${totalAmount}`
            }
            if(tempReturnChange === 0){
                break
            }
        }
    }
    
    if( returnChange != tempReturnChange && tempReturnChange != 0){
        changeDue.innerText = "Status: INSUFFICIENT_FUNDS" // if not enough cash in register
    }else if(returnChange === cidAmountTotal){
        changeDue.innerText = `Status: CLOSED${returnString}` // if exact change
    }else{
        changeDue.innerText = `Status: OPEN ${returnString}`
    }
})