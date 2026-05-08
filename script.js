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