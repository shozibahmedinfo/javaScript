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
function toUpe(){ // The JavaScript string.toUpperCase built-in string method
    let country = "Bangladesh";
    let name =country.toUpperCase();
    document.getElementById("read").innerHTML=name;
};
// toUpe();
function tolow(){ // The JavaScript string.toLowerCase built-in string method
    let country = "BANGLADESH";
    let name = country.toLowerCase();
    document.getElementById("read").innerHTML=name;
};
// tolow();
function remv(){ // The JavaScript string.trim(); remove Stating & End whitespace
    let country = "    Bangladesh   "
    let name = country.trim();
    document.getElementById("read").innerHTML=name;
};
// remv();
function sli(){ // The JavaScript stirng.slice()
    let couName = "Bangladesh";
    let output = couName.slice(3,7);
    document.getElementById("read").innerHTML=output;
};
// sli();
function cong(){ // The JavaScript string.concat() joins stirng1 with string2
    let fastName = "Shozib";
    let lastName = "Ahmed";
    let output = fastName.concat(lastName);
    document.getElementById("read").innerHTML=output;
};
// cong();
function rep(){ // The JavaScript string.replace() searchValu change new valu
    let name = "Shozib Ahmed";
    let output = name.replace("z","j");
    document.getElementById("read").innerHTML=output;
};
// rep();
function char(){ // The JavaScript string.charAt() index value
    let name = "Shozib Ahmed";
    let output = name.charAt(3);
    document.getElementById("read").innerHTML=output;
};
// char();
function use(){ // Qs1 The javaScript prompt input username stirng methods output @username8
    let userName = prompt("Enter you Name:");
    let output = "@" + userName + userName.length;
    document.getElementById("read").innerHTML=output;
};
// use();
function arr(){ // The JavaScript array collections of items with index values
    let addr = ["Bheramara","Kushtia","Dhaka","Bangladesh"];
    document.getElementById("read").innerHTML=addr[3];
};
// arr();
function ler(){ // The JavaScript array indices collections of items with linear
    let mark = [20,37,40,58,79,87,90,100];
    document.getElementById("read").innerHTML= mark[3];
};
// ler();
function arfo(){ // The JavaScript looping for over an Array print all elements of an array
    let output = "";
    let addr = ["Bheramara","Kushtia","Dhaka","Bangladesh"];
    let i;
    for(i = 0; i < addr.length; i++){
        output += addr[i]+"<br>";
    }
    document.getElementById("read").innerHTML=output;
};
// arfo();
function foro(){ // The javaScript For-of loop over an Array print all elements
    let output = "";
    let city = ["Bheramara","Kushtia","Dhaka","Bangladesh"];
    let i;
    for(i of city){
        output += i+"<br>";
    }
    document.getElementById("read").innerHTML=output;
};
// foro();
function stmar(){ // Qs1 [23,43,79,98,89] 10% offer, Array to store final price applying
    let output = "";
    let itame = [23,43,79,98,89];
    for(i = 0; i < itame.length; i++){
        let offer = itame[i] / 10; // 10% discount
        itame[i] -= offer;
    }
    document.getElementById("read").innerHTML=itame;
};
// stmar();
function arrapu(){ // The JavaScript Array itme.push() method add to end element
    let city = ["Bheramara","Kushait","Rajshahi","Kumarkhale"];
    city.push("Dhaka","Motijheel");
    // city.unshift("Dhaka"); //itme.unshift() method add to start element
    document.getElementById("read").innerHTML=city;
};
// arrapu();
function arrapop(){ // The JavaScript Array itme.pop() remove from End itames & return
    let city = ["Bheramara","Kushait","Rajshahi","Kumarkhale"];
    city.pop();
    // city.shift(); //itme.pop() remove from Start itames & return
    document.getElementById("read").innerHTML=city;
};
// arrapop();
function conarr(){ // Array itame.concat() method joins multipule arrays & returns result
    let city = ["Bheramara","Kushait","Rajshahi","Kumarkhale"];
    let othcity = ["Dhaka","Motijheel"];
    let output = city.concat(othcity);
    document.getElementById("read").innerHTML=output;
};
// conarr();
function sli(){ // The javascript Array itme.slice(1,4) method index value slice returns
    const point = [20,30,40,50,60,70,80];
    let output = point.slice(1,4); // (Stating index & End index)
    document.getElementById("read").innerHTML=output;
};
// sli();
function spli(){ // The javaScript Array itme.splice(add,remove,replace) method
    let friend = ["Shakil","Vramar","Abid","Yamin","Shakinur","Sweet","Tuhin"];
    friend.splice(2,3,"Shozib","Ahmed"); // (stating indx,Delet itme,New itme)
    document.getElementById("read").innerHTML=friend;
};
// spli();
// Create an array to stre commpanies (a)remove the first company from the array 
// (b)remove uber & add ola in its place (c)add amazon at end
function qsa(){
    let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    companies.shift();
    companies.splice(1, 1 ,"Ola"); // (stating indx,Delet itme,New itme)
    companies.push("Amazon");
    document.getElementById("read").innerHTML=companies;
};
// qsa();
function myfunction(a,b){ // Parameter -> input (Me)
    let me = a+b;
    document.getElementById("read").innerHTML=me;
};
// myfunction(10,30); // Argument (10,30)
function ret(x,y){ // The JavaScript return Function statement condition
    let sum = x + y;
    return sum;
};
// let output = ret(32,32);
// document.getElementById("read").innerHTML=output;
const myArro = (a, b)=>{ // The Modern JavaScript Arrow function short calculation 
    return a + b;
};
// let output = myArro(10,30);
// document.getElementById("read").innerHTML=output;
function countVowels(go){ // For-of loops arguments & return the count number of vowels
    let count = 0;
    for(i of go){
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
            count++;
        };
    } return count;
};
// let output = countVowels("Shozib Ahmed");
// document.getElementById("read").innerHTML=output;
const qarraf = (oop)=>{ // Arrow function For-of loops arguments & return the count number of vowels
    let count = 0;
    for(let i of oop){
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
            count++;
        };
    }; return count;
};
// let output = qarraf("Weclome to JavaScript");
// document.getElementById("read").innerHTML="vowels=" + output;
function forEach(){ //itmes.forEach callback is a function passed as an argument to another function 
    let output = "";
    let city = ["Bheramara","Kushtia","Mirpur","Dhaka","Motijheel"];
    city.forEach(function callbac(go){
        output += go.toUpperCase() + "<br>";
    });
    document.getElementById("read").innerHTML=output;
};
// forEach();
function forEachArro(){ // Arrow itmes.forEach callback is a function passed as an argument to another function 
    let output = "";
    let point = [10,20,30,40,50,60,70,80,90,100];
    point.forEach((go)=>{
        output += go+"<br>";
    });
    document.getElementById("read").innerHTML=output;
};
// forEachArro();
function foreaceVlu(){ // Array Point the square of each value using the forEach() loop
    let output = "";
    let point = [240,343,432,539,612,729,882,923];
    point.forEach(function arryPoin(go){
        output += "Square value=" + go*go + "<br>";
    });
    document.getElementById("read").innerHTML=output;
};
// foreaceVlu();
function arrayMap(){ // Arrow function Array.map() value its callback returns from new array
    let lang = ["Bangla","English","Arabic","Spanish"];
    let output = lang.map((value)=>{
        return value.toUpperCase();
    });
    document.getElementById("read").innerHTML=output;
};
// arrayMap();
function arrayFilter(){ // Array.filter() Array of elements that give true for a condition/filter
    let number = [2,34,43,52,59,70,78,82,99];
    let output = number.filter((value)=>{
        // return value %2 === 0; // Even number
        // return value %2 !== 0; // Odd number
        return value > 34; // Odd number 
    });
    document.getElementById("read").innerHTML=output;
};
// arrayFilter();
function arrayReduce(){ // Array.reduce() performs some operations & redusces the array to single value
    let number = [78,82,99,43,52,59,70,];
    let output = number.reduce((previous,currnt)=>{
        return previous + currnt;
        // return previous > currnt ? previous : currnt; // Big number 
    });
    document.getElementById("read").innerHTML=output;
};
// arrayReduce();


