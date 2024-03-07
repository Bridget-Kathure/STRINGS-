//Extract the last four characters from the string below;"extravaganza"


let word = "extravaganza";
let result = word.substring(8,0);
console.log({result});

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
 const food =  "The quick fox jumped over the lazy dog";
 const insertString = "eat"
 const word2= food.substring(0,4) + insertString + food.substring(4);
 console.log({word2});
   
 //Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over lazy dog";
const searchString1 = 'the';
const searchString2 = 'brown';
const lowercaseStory = story.toLowerCase();
const occurrencesThe = (lowercaseStory.match(new RegExp(searchString1,"g"))||[]).length;
const occurrencesBrown = (lowercaseStory.match(new RegExp(searchString2,"g"))||[]).length;
console.log("Number of occurrences of 'the':",occurrencesThe);
console.log("Number of occurences of 'brown':",occurrencesBrown);

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the libraly"
const string2 = "The child was sitting on the table before it fell"
let resultA = string1.search("are")
let resultB = string2.search("sitting")

console.log({resultA})
console.log({resultB})

 //Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
 // uppercase "wonderful"
let upper = "wonderful";
let uppercase = upper.toUpperCase();
console.log({uppercase});

//lowercase "amazing"
let lower = "amazing";
let Lowercase = lower.toLowerCase();
console.log({Lowercase});

let string = "UndERneath";
let lowercase = string.toLowerCase();
console.log({lowercase});

//Title case
function titleCase(str){
    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);
    }
    return str.join('');
}
console.log(titleCase("A wonderful world"));

