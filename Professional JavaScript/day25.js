
const userDatabase = [
    { name: "Amina", age: 22 }, 
    { name: "David", age: 16 }, 
    { name: "Janna", age: 25 }
];

function getAdultStatistics(users) {
    const adults = users.filter(user => user.age >= 18);
    
    const totalAge = adults.reduce((sum, user) => sum + user.age, 0);
    
    return { adults, totalAge };
}

function renderUserList(adults) {
    console.log("Adult users:");
    adults.forEach(user => console.log(` - ${user.name}`));
}

const { adults, totalAge } = getAdultStatistics(userDatabase);
renderUserList(adults);
console.log(`Total age of adults: ${totalAge}`);