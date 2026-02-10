// numbers and strings

// The prevision investigator 
const maxSafe = Number.MAX_SAFE_INTEGER; 
console.log(`Max Safe: ${maxSafe}`);

console.log(`Standard +1: ${maxSafe + 1}`);
console.log(`Standard +2: ${maxSafe + 2}`); 

//  Adding n makes it an arbitrarily long integer 
const bigMax = BigInt(maxSafe);
console.log(`BigInt +1: ${bigMax + 1n}`);
console.log(`BigInt +2: ${bigMax + 2n}`); 


// the secure hex generator

function generateHexColor() {
    const randomNum = Math.floor(Math.random() * 16777215); // Pick a random number up to the max value of a 24-bit color
    let hexString = randomNum.toString(16);  // Convert that decimal number into a hexadecimal string

    const finalHex = hexString.padStart(6, "0");   // padStart ensures we always have 6 digits, adding '0's to the front if needed 
    return `#${finalHex.toUpperCase()}`;
}

console.log(`Your random color: ${generateHexColor()}`);