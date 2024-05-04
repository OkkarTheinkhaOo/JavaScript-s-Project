const numberValue = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')   
const outputResult = document.getElementById('output')

const numberRoman = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
}

function toRoman(input) {
    console.log(numberRoman)
    let roman = '';
    const keys = Object.keys(numberRoman).sort((a, b) => b - a); // Sorting keys in descending order
    keys.forEach((key) => {
        const value = numberRoman[key];
        while (input >= key) {
            roman += value;
            input -= key;
        }
    });
    return roman;
}

convertBtn.addEventListener('click', ()=>{
    let val = parseInt(numberValue.value)
    if (!val){
        outputResult.innerText = 'Please enter a valid number'
    }else if(val < 0){
        outputResult.innerText = 'Please enter a number greater than or equal to 1'
    }else if(val >= 4000){
        outputResult.innerText = 'Please enter a number less than or equal to 3999'
    }else{
        outputResult.innerText = toRoman(val)
    }
})

