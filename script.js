var checkButton = document.getElementById("checkBtn");
const characters = document.getElementById("checkChars");
const numbers = document.getElementById("checkNumbers");
const specialCharacters = document.getElementById("checkSpecialChars");
const passwordLength = document.getElementById("passwordLength");

const output = document.getElementById("output");

const flags = [[characters,52],[numbers,10],[specialCharacters,33]];
var charSetSize = 0;

function onSelectFunction(obj,value){
    obj.addEventListener("change",()=>{
        if(obj.checked){
            charSetSize += value;
            obj.check= false;
    
        }
        else{
            charSetSize -= value;
            obj.check = true;
        }
        console.log(charSetSize);
        
    })
}


function calculateTimeToCrack(passwordLength, characterSetSize, guessesPerSecond = 1e6) {
    let totalCombinations = Math.pow(characterSetSize, passwordLength);
    let secondsToCrack = totalCombinations / guessesPerSecond;
    let yearsToCrack = secondsToCrack / (60 * 60 * 24 * 365); // Convert seconds to years
    return yearsToCrack.toFixed(); // Limit to 2 decimal places
}


for(let i=0;i<flags.length;i++){
    onSelectFunction(flags[i][0],flags[i][1]);
}

checkButton.addEventListener("click",()=> {
    output.innerText = '';
    var length = passwordLength.value;
    if(length == null ||  length <= 0){
        alert('Length should be valid');
        passwordLength.value = ''
        return;
    }
    output.innerText = calculateTimeToCrack(length,charSetSize) + " Years";
});