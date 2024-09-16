const form = document.querySelector('#form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

     if(usernameVal===''){
        setError(username,'*Username is required')
     }else if(usernameVal !== 'Nancy'){
      setError(username, '*Username incorrect"');
     }else{
        setSuccess(username);
     }

     if(passwordVal===''){
        setError(password,'*Password is required')
     }
     else if(passwordVal.length<8){
        setError(password,'*Password must be atleast 8 characters long')
     }else if(passwordVal !== 'Nancy1119'){
      setError(password, '*Password incorrect"');
     }else{
        setSuccess(password);
     }

}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

} 

function setSuccess(element) {
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}

