//console.log("Ram")
//values and data type

    //1-primitive data type

        //1-Numbers-2, 3, 4, 4.5, 24
        //2-String- "Ravan", 'Ravan' //all quotes are allowed ("",'')
        //3- Boolean - True, False
        //4-Null
        //5-Undefined  //if take variable is defied but value is undefined

    //2-Non- primitive data type
        //1-Array
            let name1 = "Hitesh"
            let name2 = "sushant"
            let name3 = "rohit"
            let name4 = "ravan"
            //in array
            let names = ["Hitesh", "sushant", "rohit", "ravan", 2 , 3, false, "rohit"] 
            //Note- Array is similar to data type collaction
        
        //2-Object:{}

    //Keyword
        //1-let
        //2-const
        //exam-
        // const myName = "rohit"
        // let myage = 21

//Assignment operator
    // let highScore = 300
    // console.log(highScore);

    // let pwSkillCoursePrice = 3500
    // console.log(pwSkillCoursePrice);

    // pwSkillCoursePrice = 2000
    // console.log(pwSkillCoursePrice); //Note- if you are aleady used let keyword, and again you want to use the let keyword for the same statement at that time you can write the statement without using let key word.

//Arithemetical Operators
    // 1- "+"
    // 2- "-"
    // 3- "*"
    // 4- "/"
    // 5- "%" (Module, Moduler, Modulo)-> Mudulo give rimender only
    // 6- "**" Using for Power count (3 to the power 2 = (3)2 )

    //Example-
    // let pwCoursePrice = 200
    // let gstOnCouses = 36
    // let finalCourseAmaunt =  pwCoursePrice + gstOnCouses;
    // console.log("Final Amount to be paid : ", finalCourseAmaunt);

    // let pwDSACoursePrice = 500
    // console.log("Final Amount to be paid : ", pwDSACoursePrice + gstOnCouses); 

    // console.log("The answer is : ", 5 / 2);
    // console.log("The answer is : ", 5 % 2);
    // console.log("The answer is : ", 3 ** 2); //(3)2

//Comparition Operator (Result in only boolean)

    // 1- "==" - ke barabar hai           (Note- You can also add 3 "=" but at that time compiler will also check type of the data means this data is what type of data like - Number, String, Boolean, Null and Undefined)
    // 2- "!=" - ke barabar Nahi hai
    // 3- "&&" -(AND operator) both are true/Mindetory (Dono hi compulsory hai)
    // 4- "||" -(OR operator)  only one is true/Mindetory (koi bhi ek compulsory hai)
    // 5- ">"
    // 6- ">"

    



         //example of "=="-
                    // let rohitHighScore = 200
                    // let ravantHighScore = 300
                    // console.log(rohitHighScore == ravantHighScore);

        //example of "!="-
                    // let mohitHighScore = 200
                    // let pawanHighScore = 300
                    // console.log(mohitHighScore != pawanHighScore); 
            
        //example of "&&"-
                    // let value1 = true
                    // let value2 = false
                    // let value3 = true
                    // let value4 = false

                    // console.log(value1 && value3);

                    // userLoginId = true
                    // UserLoginPassword = true

        //example of "||"-
                    // let value1 = true
                    // let value2 = false
                    // let value3 = true
                    // let value4 = false

                    // console.log(value1 || value4);

                    // // create account of using Gmail OR Mobile Number
                    // userMobileNumbet = true
                    // UserGmail = false           
        

//Condition (Decision) and loops

// let age = 19
// if (age >= 18){
//     console.log("You are allowed");
// }
// else{
//     console.log("You are not allowed")
// }

// let signal = "green"
// if(signal == "red"){
//     console.log("Signal => Stop");
// }
// else if(signal == "Yellow"){
//     console.log(" Yellow => Go slow");
// }
// else if(signal == "green"){
//     console.log("green => Go fast");

// }

// else{
//     console.log(" invalid");
// }


//Second type of using decision/condition
//Switch case

// let user = "student";
// switch (user){
//     case "Admin":
//         console.log("I am admin")
//         break;
//     case "student":
//          console.log("I am student")
//          break;
//     case "mantor":
//         console.log("I am a mantor")
//         break;

//     default:
//         console.log("Undefiend")
// }


//Loops

    // 1-for(Initializer, Condition, Increament)
    // 2-while(Initializer, Condition, Increament & Decreament)
    // 3-do while


    // 1-for(Initializer, Condition, Increament)
        //Example-
        // for (let i =0; i < 5; i++) {
        //     console.log(i);
        // }

    // 2-while(Initializer, Condition, Increament & Decreament)
        //Example-
        // let i = 0;
        // while (i < 5){
        //     console.log(i);
        //     i++;
        // }


    // 3-do while
        //Example-
        // let i = 0;
    //    do{
    //         console.log("Hello World");
    //         i++;
    //    }while (i < 5);



//Ternary operator / Ternary Condition
    // ?=True (if given conditio is true then this statement is run)
    // :=False ( if given condition is false then this statement is run)

    // let isloggedin = false;
    // isloggedin ? console.log("Home Page") : console.log("login Page");




    // let number = 0;
    // console.log(number++);
    // console.log(++number);
    // console.log(number);


    // const sum = eval("10*10+5");
    // console.log(sun);


    // let num1 = 8
    // let num2 =10
    // console.log(num2);

    // console.log(typeof typeof 1);

    // const Numbers = [1, 2, 3];
    // Numbers[10] = 11;
    // console.log(Numbers);

    // console.log(3 + 4 + "5");

    // console.log("I am bigest criminal thats why my name is ravan"[0]);

    // const myName = "Pw skills";
    // console.log(myName ());

    // const one = false || {} || null
    // const two = null || false || "";
    // const three =  [] || 0 || true;

    // console.log(one, two, three);


    // let y = 2;
    // let x = "2"

    // console.log(y === x);

    // for (let i =1; i < 5; i++){
    //     if (i === 3) continue;
    //     console.log(i);
    // }

    // for (var i = 2; i <5; i++) {
    //     if (i === 3) {
    //         break;
    //     }
    //     console.log(i);
    // }

    // for (var i = 2; i <5; i++) {
    //     if (i === 3) {
    //         continue;
    //     }
    //     console.log(i);
    // }

    // var a = [1, 2, 3, 4, 5];
    // for (var i in a) {
    //     if (a[i] % 2 ===0){
    //         console.log(a[i]);
    //     }
    //}

    // let x = (10 > 5) ? "x is greater than 5";
    // console.log(x);

    // let x = 5;
    // while (x < 6) {
    //     console.log(x);
    //     x++;
    // }

    // for (let a = 0; a < 5; a++){
    //     console.log(a);
    // }

    let a = 0;
    while(a < 0){
        console.log(a);
    }