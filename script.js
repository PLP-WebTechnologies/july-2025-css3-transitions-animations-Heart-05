// ================= Part 1: Animation Trigger =================
const animateBox = document.getElementById("animateBox");
const startAnimationBtn = document.getElementById("startAnimation");

startAnimationBtn.addEventListener("click", () => {
    // Trigger CSS animation using JavaScript
    animateBox.style.animation = "slideAndRotate 2s ease forwards";
});

// ================= Part 2: Function with Parameters & Return =================
const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calcResult");

// Function to calculate square of a number
function square(number) {
    return number * number;
}

calculateBtn.addEventListener("click", () => {
    const num = 5; // Example input
    const result = square(num); // Call function with parameter and get return value
    calcResult.textContent = result;
});

// ================= Part 3: Function Scope Demonstration =================
const scopeBtn = document.getElementById("scopeBtn");
const scopeOutput = document.getElementById("scopeOutput");

function scopeDemo() {
    let localVar = "I am local"; // Accessible only inside this function
    scopeOutput.textContent = localVar;
}

scopeBtn.addEventListener("click", () => {
    scopeDemo();

    // Trying to access localVar outside its function will cause an error
    // Uncommenting the line below will throw ReferenceError
    // console.log(localVar);
});
