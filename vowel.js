// JavaScript function to check if the entered alphabet is a vowel
function checkVowel() {
    let alphabet = document.getElementById('alphabet').value.toLowerCase();
    let  vowels = ['a', 'e', 'i', 'o', 'u'];
    let  resultDiv = document.getElementById('result');

    if (alphabet.length === 1 && /^[a-zA-Z]+$/.test(alphabet)) {
        if (vowels.includes(alphabet)) {
            resultDiv.textContent = alphabet.toUpperCase() + " is a vowel.";
        } else {
            resultDiv.textContent = alphabet.toUpperCase() + " is not a vowel.";
        }
    } else {
        resultDiv.textContent = "Please enter a single alphabet character.";
    }
}