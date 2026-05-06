function message(){ // The javaScript Alert message
    alert("Welcome to my javaScript");
};
// message();
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