
var mail = document.getElementById("emailid");
var pswd = document.getElementById("pass");


function validate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
if(res.test(mail.value)!="1")
    {
     
        alert("Email Is Invalid");
        return false;
    }
    else if(psr.test(pswd.value)!="1")
    {
       alert("Password Is Invalid, try again");
       alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

        return false;
    }
    else
    {
        alert("validation Success");
                return true;
    }
    
};



//signup checking
    var uname=document.getElementById("fname");
    var smail = document.getElementById("inputEmail4");
    var phone = document.getElementById("phno");
    var spswd = document.getElementById("inputPassword4");
    var scpswd = document.getElementById("inputrePassword4");
    var form=document.querySelector("form-container");
  
//password criteria checking
var upper=document.getElementById("upper");
var lower=document.getElementById("lower");
var special=document.getElementById("special");
var number=document.getElementById("number");
var length=document.getElementById("length");

 function signvalidate()
    {
//username & mail checking
         if(uname.value.trim()===""){
    onError(uname,"Username cannot be empty");
                            }
          else{
        onSuccess(uname);
        }

        if(smail.value.trim()===""){
            onError(smail,"Email cannot be empty");
        }
        else{
            if(!isValidEmail(smail.value.trim())){
                onError(smail,"Email is not valid");
            }
            else{
                onSuccess(smail);
                 }   
             }
            
//phonenumber checking

        if(phone.value.trim()===""){
            onError(phone,"Phone number cannot be empty");
        }
        else{
            if(!isValidPhone(phone.value.trim())){
                onError(phone,"Phone number is not valid");
            }
            else{
                onSuccess(phone);
                 }   
             }


//password checking

if(spswd.value.match(/[0-9]/)){

    number.style.color="green";
   }
    else
    {
        number.style.color="red";
    }

if(spswd.value.match(/[A-Z]/)){

    upper.style.color="green";
   }
    else
    {
        upper.style.color="red";
    }

    if(spswd.value.match(/[a-z]/)){

       lower.style.color="green";
      }
       else
       {
           lower.style.color="red";
       }

       if(spswd.value.match(/[!\@\#\$\%\^\&\*\(\)\?\>\<\`\*\-\+\"\'\;\:\_\=\.\,]/)){

        special.style.color="green";
       }
        else
        {
            special.style.color="red";
        }

if(spswd.value.length < 8){
    length.style.color="red";
    }
    else{
        length.style.color="green";
    }

if(spswd.value.trim()===""){
    onError(spswd,"Password cannot be empty");
 }else{
     onSuccess(spswd);
 }
 if(scpswd.value.trim()===""){
    onError(scpswd,"Password canoot be empty");
 }else {
     if(spswd.value.trim()!== scpswd.value.trim()){

        onError(scpswd,"Password & Confirm password not matching");
      }
     else{
        onSuccess(scpswd);
     }
      }
    }
   
     document.querySelector("button")
    .addEventListener("click",(event)=>{
        event.preventDefault();
        signvalidate();


});

function onSuccess(input){
    var parent=input.parentElement;
    var msgel=parent.querySelector("small");
    msgel.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    var parent=input.parentElement;
    var msgel=parent.querySelector("small");
    msgel.style.visibility = "visible";
    msgel.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
    
}

function isValidEmail(smail){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(smail);
 }
 function isValidPhone(phone){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
  }