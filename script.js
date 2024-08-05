// Stored credentials and balance
let storedPin = 1234;
let accountBalance = 1000;  // Example starting balance

/**
 * Interactively process an ATM withdrawal
 */
function interactiveATM() {
    // Ask the user for their PIN
    let pinEntered = parseInt(prompt("Please enter your PIN:"));
    
    // Check if the PIN entered is correct
    if (pinEntered !== storedPin) {
        alert("Transaction denied: Incorrect PIN.");
        return;  // Stop further execution if the PIN is incorrect
    }

    // Ask for the withdrawal amount
    let withdrawAmount = parseFloat(prompt("Enter the amount you wish to withdraw:"));

    // Check if the withdrawal amount is a valid number
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid amount entered.");
        return;  // Stop the execution if the input is not a valid number
    }

    // Process the withdrawal based on the balance
    if (accountBalance >= withdrawAmount) {
        accountBalance -= withdrawAmount;  // Update the account balance
        alert(`Transaction approved: £${withdrawAmount} has been withdrawn. Remaining balance: £${accountBalance}.`);
    } else {
        alert("Transaction denied: Insufficient funds.");
    }
}

// Call the interactive ATM function to start the process
interactiveATM();
