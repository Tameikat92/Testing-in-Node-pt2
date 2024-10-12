// Define the 'cat' object properly
let cat = {
    name: "Whiskers",
    age: 3,
    breed: "Siamese"
};

// Accessing properties using dot notation
console.log(cat.name);  // Output: Whiskers
console.log(cat.age);   // Output: 3

// Accessing properties using bracket notation
console.log(cat["breed"]);  // Output: Siamese
console.log(cat["age"]);    // Output: 3

// You don't need to repeat these lines, they are already shown above.
console.log(cat["breed"]);  // Output: Siamese
console.log(cat["age"]);    // Output: 3

// Iterating over the 'cat' object using a for...in loop
for (let key in cat) {
    // Log both key and the value associated with the key
    console.log(key + ": " + cat[key]);
}
