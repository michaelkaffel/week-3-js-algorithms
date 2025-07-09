// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."

function compareAge(name, age) {
  age > 27 ? console.log(`${name} is older than me.`) : console.log(`${name} is younger than me.`);
}

// Your code here

compareAge("Joel", 36) // ➞ "Joel is older than me."
compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
compareAge("Lily", 28) // ➞ "Lily is oder than me."