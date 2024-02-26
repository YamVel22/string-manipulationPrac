//challenge 1

//ask the user to eneter a string//

let myString = prompt("Enter your favourite fruit");

//store string into variable
//reverse String
//store reversed string into new variable

let reverseString = "";

for (let i = myString.length - 1; i >= 0; i--) {
  reverseString += myString[i];
}

//display results into console

console.log(reverseString);




//challenge 2
//string input

function countVowels(str) {

    // convert the string to lowercase
    str = str.toLowerCase();
  
    // define an array of vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // initialize a counter variable to keep track of the number of vowels
    var count = 0;
  
    // iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
      // check if the current character is a vowel
      if (vowels.includes(str[i])) {
        // increment the count variable if the character is a vowel
        count++;
      }
    }
  
    // print the count of vowels in the string
    console.log(count);
  }
  
  // call the countVowels function with the example input
  countVowels("fruit salad");


//challenge 3 

