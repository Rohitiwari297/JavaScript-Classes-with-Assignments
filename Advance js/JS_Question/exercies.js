
//Question:1

// इनपुट स्ट्रिंग
// var input = "Hello, World!";


// // स्ट्रिंग को उलटाने के लिए फ़ंक्शन
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }

//   console.log(reverseString(input))
  
  
//   // 2 सेकंड के ब्रेक के साथ डिले फ़ंक्शन
//   function delayReverse() {
//     // 2 सेकंड की देरी के लिए setTimeout का उपयोग करें
//     setTimeout(function() {
//       // इनपुट स्ट्रिंग को उलटाएं
//       var reversedString = reverseString(input);
  
//       // उलटी हुई स्ट्रिंग को प्रिंट करें
//       console.log("Reverse String: " + reversedString);
//     }, 2000); // 2000 मिलीसेकंड = 2 सेकंड
//   }
  
//   // delayReverse फ़ंक्शन को कॉल करें
//   delayReverse();
  

const input = "Hello World"

reverseString = (el) => {
    return el.split('').reverse().join('')
}

// console.log(reverseString(input))

function delayReverse(){
    setTimeout(function() {
         const reversedString = reverseString(input)

         console.log("reversedString :" + reversedString)
    }, 2000)
    
}

// delayReverse()


const subKo = "Yes"


if (subKo == "Yes") {
    console.log("Yes I have Sub KO")
    
} else {
    console.log("Don't have")
    
}

//Question:2

function generateRandomNumberWithDelay() {
    const delayInSeconds = 3;
    let timeRemaining = delayInSeconds;

    // Display progress message every second
    const intervalId = setInterval(() => {
        console.log(`Generating random number in ${timeRemaining} seconds...`);
        timeRemaining--;

        // Check if time has elapsed
        if (timeRemaining < 0) {
            clearInterval(intervalId); // Stop the interval
            const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000); // Update every second

    // Note: You can modify the delayInSeconds variable to change the delay.
}

// Example usage
generateRandomNumberWithDelay();


