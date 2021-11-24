const submitButton= document.getElementById('submit');
const loginButton= document.getElementById('login');
const emailError=document.getElementById('email-error');
const passError=document.getElementById('pass-error');
const inputEmail=document.getElementById('email-input');
const inputPass=document.getElementById('pass-input');
const eEmailFormat=document.getElementById('email-error-format');
const ePassFormat=document.getElementById('pass-error-format');
const epassValidation=document.getElementById('pass-validation');
function isEmpty(){
    if(inputEmail.value == ""){
        inputEmail.style.border="1px solid red";
        emailError.style.display= "block";
    }
    if(inputPass.value == ""){
        inputPass.style.border="1px solid red";
        passError.style.display= "block";
    }
}
function checkInputs(){
    var passValue= inputPass.value;
    console.log("Email:", inputEmail.value)
    console.log("Password:", inputPass.value)

    if(!inputEmail.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")){
        eEmailFormat.style.display="block";
        return false
    } 
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    //!inputPass.value.match("/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/")
    //(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
    if(!inputPass.value.match("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$"))
    {
        console.log("false pass")

        epassValidation.style.display="block";
        return false
    }
    return true
}
    
inputEmail.addEventListener('input', function(){
//inputEmail.removeAttribute('data-error');
inputEmail.style.border="none";
emailError.style.display= "none";
eEmailFormat.style.display="none";
});

inputPass.addEventListener('input', function(){
    inputPass.style.border="none";
    passError.style.display= "none";
    ePassFormat.style.display="none";
    });
    //SubmitButton

submitButton.addEventListener("click", function(e){

    e.preventDefault();
    if(inputEmail.valuse=="" || inputPass.value == ""){
        isEmpty();
    } else{
        alert("Login successfully!");
    }
});
  //LoginButton

loginButton.addEventListener("click", function(e){
    e.preventDefault();
    if(inputEmail.valuse=="" || inputPass.value == ""){
        isEmpty();
    }
    else{
         if(checkInputs()) {
             console.log("hello Heba")
             document.write("Hello your email is:" + inputEmail.value);
         }
       
    }
        
 

});
