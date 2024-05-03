const checkBtn = document.getElementById('check-btn')
const resultDiv = document.getElementById('result')


function isPalindrome(str){
    return str.split("").reverse().join("") === str
}

checkBtn.addEventListener('click', ()=>{
    let textInput = document.getElementById('text-input').value
    let regex = /[_\\:()\/\-" "!@#$%^&,.]/gi

    let filtered = textInput.replace(regex,"").toLowerCase()
    if (textInput === ""){
        resultDiv.textContent = ""
        alert('Please input a value')
        return
    }
    if(isPalindrome(filtered)){
        resultDiv.innerHTML = `
    <p>${textInput} is a palindrome</p>
    `
    }else{
        resultDiv.innerHTML = `
        <p>${textInput} is not a palindrome</p>
        `
    }
})