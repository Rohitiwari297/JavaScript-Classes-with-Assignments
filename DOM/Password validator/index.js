const  userId = document.getElementById("User")
const  password = document.getElementById("Password")

// // function check(elem){
// //     if (elem.value.length > 0) {
// //         if(elem.value != password.value) {
// //             document.getElementById("alert").innerText = "Please Confirm Password"
// //         }
// //     }
// // }

// function isPasswordValid(password) {
//     // Define the criteria
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  
//     // Check if the password meets all criteria
//     const isValid =
//       password.length >= minLength &&
//       hasUpperCase &&
//       hasLowerCase &&
//       hasSpecialChar;
  
//     return isValid;
//   }
  
//   // Example usage
//   const passwordToCheck = "StrongP@ssword";
//   if (isPasswordValid(passwordToCheck)) {
//     console.log("Password is valid!");
//   } else {
//     console.log("Password is not valid. Please check the criteria.");
//   }
  

// if (userId === password) {

//   document.getElementById("alert").innerText = "Strong Password"
// } 

// else if (userId !== password)  {
//   document.getElementById("alert").innerText = "Please Confirm Password"
  
// }else{
//   document.getElementById("alert").innerText = "Enter password"
// }

// let pass = document.getElementById("userId")
// let confPass = document.getElementById("password")

// if ( pass.value != confPass.value  ) {
//   alert("Password Sahi se dalo bei")
  
// }else{
//   function button(){
//   let confPass = document.getElementById("password").value

//   if (confPass === pass) {
//     alert("Valid Password Hai Be")
//   }else{
//     alert(confPass)
//   }
  
// }
  
// }
// function button(){
//   let confPass = document.getElementById("password").value

//   if (confPass === pass) {
//     alert("Valid Password Hai Be")
//   }else{
//     alert(confPass)
//   }
  
// }


const  pass = document.getElementById("userId").value
const  confPass = document.getElementById("Password")

function button(){
  if (pass == "") {
    document.getElementById("blankTextValue1").innerHTML = "*** Please Enter Password"
    return false
  }

  if(pass != confPass){
    document.getElementById("blankTextValue1").innerHTML = "*** Both Are Must Be Same"
  }
}

