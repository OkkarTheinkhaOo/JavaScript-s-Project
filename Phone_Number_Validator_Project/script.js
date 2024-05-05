const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const resultsDiv = document.getElementById('results-div')

checkBtn.addEventListener('click', () => {
    const inputVal = document.getElementById('user-input').value;
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    if(!inputVal){
    alert("Please provide a phone number")
    return
    }
    if (regex.test(inputVal)) {
    resultsDiv.textContent = `Valid US number: ${inputVal}`;
    } else {
    resultsDiv.textContent = `Invalid US number: ${inputVal}`;
    }
});

clearBtn.addEventListener('click', () => resultsDiv.textContent = "")