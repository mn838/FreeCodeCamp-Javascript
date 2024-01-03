const userInput = document.getElementById('text-input') ;
const button = document.getElementById('check-btn') ;
const resultDiv = document.getElementById('result') ;

const checkForPalindrome = input => {
  const originalInput = input ;

  if (input == '') {
    alert('Please input a value') ;
    return ;
  }

  resultDiv.replaceChildren() ;

  input = input.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '')  ;
  console.log(originalInput, input) ;
  let resultMessage = `<strong>${originalInput}</strong> ${input === [...input].reverse().join('') ? 'is' : 'is not'} a palindrome` ;

  const ptag = document.createElement('p') ;
  ptag.className = 'user-input' ;
  ptag.innerHTML = resultMessage ;
  resultDiv.appendChild(ptag) ;

  resultDiv.classList.remove('hidden') ;
} ;

userInput.addEventListener('keydown', e => {
  if( e.key == 'Enter') {
    checkForPalindrome(userInput.value) ;
    userInput.value = '' ;
  }
}) ;

button.addEventListener('click', () => {
  checkForPalindrome(userInput.value) ;
  userInput.value = '' ;
}) ;