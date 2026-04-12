<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Enhanced JS Project</title>

<style>
    body {
        font-family: Arial, sans-serif;
        background: linear-gradient(to right, #74ebd5, #ACB6E5);
        text-align: center;
        padding: 50px;
    }

    .container {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        display: inline-block;
    }

    button {
        padding: 10px 20px;
        margin-top: 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
    }

    button:hover {
        opacity: 0.8;
    }

    #output {
        margin-top: 15px;
        text-align: left;
        font-weight: bold;
    }
</style>
</head>

<body>

<div class="container">
    <h2>Hello Pranathi 👋</h2>
    <p>Click to explore more functions</p>
    <button onclick="showDetails()">Show Details</button>
    <div id="output"></div>
</div>

<script>
let name = "Pranathi";
let age = 18;

// Age check
function checkAge(a) {
    return (a >= 18) ? "Adult" : "Minor";
}

// Arithmetic operations
function arithmeticOperations(a) {
    return `
        Addition: ${a + 5} <br>
        Subtraction: ${a - 2} <br>
        Multiplication: ${a * 2} <br>
        Division: ${a / 3} <br>
        Modulus: ${a % 5} <br>
        Exponent: ${a ** 2}
    `;
}

// Even or Odd
function checkEvenOdd(a) {
    return (a % 2 === 0) ? "Even" : "Odd";
}

// Voting eligibility
function canVote(a) {
    return (a >= 18) ? "Eligible to vote" : "Not eligible to vote";
}

// Square and Cube
function squareCube(a) {
    return `
        Square: ${a * a} <br>
        Cube: ${a * a * a}
    `;
}

// Simple Interest
function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

// Greeting based on time
function timeGreeting() {
    let hour = new Date().getHours();
    if (hour < 12) return "Good Morning ☀️";
    else if (hour < 18) return "Good Afternoon 🌤️";
    else return "Good Evening 🌙";
}

// Show everything
function showDetails() {
    let output = `
        <strong>${timeGreeting()}</strong><br><br>

        Name: ${name} <br>
        Age: ${age} <br>
        Status: ${checkAge(age)} <br>
        Even/Odd: ${checkEvenOdd(age)} <br>
        Voting: ${canVote(age)} <br><br>

        <strong>Arithmetic Operations:</strong><br>
        ${arithmeticOperations(age)} <br><br>

        <strong>Square & Cube:</strong><br>
        ${squareCube(age)} <br><br>

        <strong>Simple Interest (P=1000, R=5%, T=2):</strong><br>
        ${simpleInterest(1000, 5, 2)}
    `;

    document.getElementById("output").innerHTML = output;
}
</script>

</body>
</html>