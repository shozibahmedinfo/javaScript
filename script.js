function message(){ // The javaScript Alert message
    alert("Welcome to my javaScript");
};
// message();
function opt(){ // The javaScript Artimetic operators + - * / etc
    let a = 10;
    let b = 5;
    let output = a + b;
    document.getElementById("read").innerHTML=output;
};
// opt();
function unar(){ // The javaScript unary operators a++ increment a-- decrement
    let a = 10;
    let b = 23;
    a++; // increment post operators 
    --b // decrement pree operators
    document.getElementById("read").innerHTML=a;
};
// unar();
function ass(){ // The javaScript Assignment operators = += -= *= /= %= **=
    let a = 10;
    let b = 32;
    a += 4; // a = a + 4 print 14
    b -= 2; // b = b - 3 print 30
    document.getElementById("read").innerHTML=e;
};
// ass();
function comp(){ // The javaScript Comparation operators (equal a===b) & (Not equal a!==b)
    let a = 100;
    let b = 24;
    let c = a==b; //Equal operators
    let d = a!=b; // Not equal operators
    let e = a > b;
    document.getElementById("read").innerHTML=e;
};
// comp();
function logic(){ // The javaScript logical && operators (&&) 2 true statement
    let a = 10;
    let b = 20;
    let cond1 = a < b; // cond1 true
    let cond2 = a === 10; // cond2 true
    document.getElementById("read").innerHTML=cond1 && cond2;
};
// logic();
function ors(){ // The javaScript logical OR operators (||) Any true statement
    let bangla = 80;
    let english = 70;
    let cond1 = bangla > english; // True
    let cond2 = bangla < english; // False
    document.getElementById("read").innerHTML=cond1 || cond2;
};
// ors();
function notes(){ // The javaScript logical No operators (!)
    let isFollow = true;
    let noFollow = false;
    document.getElementById("read").innerHTML=!isFollow;
};
// notes();
function collegeId(){ // The javaScript object student id collection
    const student = {
        fullName: "Shozib Ahmed",
        age: 28,
        cgpa: 2.71,
        isPass: true,
    };
    student["age"] = student["age"] + 1 // Update you student key age
    document.getElementById("read").innerHTML=student["age"];
};
// collegeId();
function socialProfile(){ // QS=1 create a const object called Profile to store information
    const profile = {
        fullName: "@shozibahmed",
        follow: true,
        following: 0,
        followers: 2.8,
    };
    document.getElementById("read").innerHTML=profile["follow"];
};
// socialProfile();
function ifs(){ // The javaScript Conditional (if-else) statements
    let age = 18;
    if(age >= 18){
        document.getElementById("read").innerHTML="Vote";
    } else{
        document.getElementById("read").innerHTML="Not vote";
    }
};
// ifs();
function orde(){ // The javaScript even odd number if-else conditional statements
    let numb = 10;
    if(numb % 2 === 0){
        document.getElementById("read").innerHTML="Even number";
    } else{
        document.getElementById("read").innerHTML="Odd number";
    }
};
// orde();
 function elsi(){ // The javaScript else-if conditional statement
    let age = 60;
    if(age <= 18){
        document.getElementById("read").innerHTML="Junior";
    } else if(age >= 60){
        document.getElementById("read").innerHTML="Senior";
    } else{ 
        document.getElementById("read").innerHTML="Middie"
    }
 };
//  elsi();
function ter(){ // The javaScript terators operatores Condition ? true output : false output
    let age = 10;
    let result = age > 18 ? "Adult" : "Not adult";
    document.getElementById("read").innerHTML=result;
};
// ter();
function prom(){ // The javaScript get user to in to input a number using promt("Enter a number")
    let point = prompt("Enter a number");
    if(point % 5 === 0){
        document.getElementById("read").innerHTML="Number is a miltipul of 5";
    } else{
        document.getElementById("read").innerHTML="Number is a not miltipul of 5";
    }
};
// prom();
function student(){ // The javaScript Qs student mark gride point multiple conditiones && opeators
    let mark = prompt("Enter a mark:");
    if(mark >= 80 && mark <=100){
        document.getElementById("read").innerHTML="A+";
    } else if(mark >= 60 && mark <=79){
        document.getElementById("read").innerHTML="B";
    } else if(mark >= 50 && mark <= 59){
        document.getElementById("read").innerHTML="C"
    } else if(mark >= 33 && mark <= 49){
        document.getElementById("read").innerHTML="D"
    }else if(mark >= 1 && mark <= 32){
        document.getElementById("read").innerHTML="F"
    } else{
        document.getElementById("read").innerHTML="Oop Erro";
    }
};
// student();
function flo(){ // The javaScript for-loop are used to execute a price of code again & again
    let output = "";
    let i;
    for(i = 1; i <= 10; i++){
        output += i+ "Shozib Ahmed <br>";
    }
    document.getElementById("read").innerHTML=output;
};
// flo();
function whi(){ // The javaScript while loop conditional statements
    let output = "";
    let i = 1;
    while(i <= 10){
        output += i+"Welcome <br>";
        i++;
    }
    document.getElementById("read").innerHTML=output;
};
// whi();
function dow(){
    let output = "";
    let i = 1;
    do{
        output += i+"Do while loop <br>";
        i++;
    } while(i <= 10);
    document.getElementById("read").innerHTML=output;
};
// dow();
function foroff(){ // The javaScript for-of loop iterator -> characters
    let output = "";
    let str = "JavaScript";
    for(let i of str){
        output += i+"<br>";
    }
    document.getElementById("read").innerHTML=output;
};
// foroff();
function fin(){ // The javaScript for-in loop object key & value 
    let output = "";
    const bike = {name:"R1", cc:1000, topSpeed:300, rodpermit:true,};
    for(let i in bike){
        output += i+"<br>"; // output key 
        // output += bike[i]+"<br>"; // output value
    }
    document.getElementById("read").innerHTML=output;
};
// fin();
function qs(){ // Qs1: Print all even numbers from 0 to 100 conditional statements
    let output = "";
    for(i = 0; i <= 100; i++){
        if(i %2 === 0){
            document.getElementById("read").innerHTML=i;
            output += i+ "Even Number<br>";
        }
    }
    document.getElementById("read").innerHTML=output;
};
// qs();
function qs2(){ // Qs2: Ask Game number user to keep guessing the game number
    let gameNum = 25;
    let userNum = prompt("Enter you Game number:");
    while(userNum != gameNum){
        userNum = prompt("Enter your worng number: Guess again:");
    }
    document.getElementById("read").innerHTML="Welcome to game";
};
// qs2();
function str(){ // The JavaScript string is a sequence of characters used to represent text
    let output = "";
    let name = "Shozib Ahmed";
    // output += name.length; // String length
    // output += typeof name; // String
    output += name[4]; // i
    document.getElementById("read").innerHTML=output;
};
// str();
