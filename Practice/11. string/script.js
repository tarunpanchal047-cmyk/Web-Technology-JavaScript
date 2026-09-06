let str = "tarun"
console.log(str)

// ! String : sequence of character

// ^ Way of creating string 

// ? Literal's way :
// let str = "wekfjfij";
// console.log(str);
// console.log(typeof str);

// ? Literal's way :
// let str = "wekfjfij";
// console.log(str);
// console.log(typeof str);

// console.log("JavaSccript doesn't support OOP's");
// console.log("This is 'JS' session");

// ? Template literals : 
// & Advantages of template literals :
// ? we can create multi-line string.
// ? string interpolation : Embedding variables inside a string is known as a string interpolation.

// let str = `This 
// is 
// JS`
// console.log(str);                    // `` backtick
// console.log(typeof str);

// let abc = "JS";
// console.log(`This is ${abc} class`)


// ? Typecasting :
// let str = String(true);
// console.log(true);
// console.log(typeof str);

// ! Property of String :
// ? length : using length property we can calculate length of string.
// let str = "jebfuvhrgiuerhujfbs   jbdfbeuisgbfukgb";
// console.log(str.length);

// ! Method of string :
// ? at() : It accepts index and fine the character present at the index. It supports negative values.
// let str = "Tarun";
// console.log(str.at(3));

// ? charAt() : It accepts index and fine the character present at the index. doesn't support negative value.
// console.log(str.charAt(2));

// ? chatCodeAt() : It accepts index value and returns the ascii value of that character present chat index.
// console.log(str.charCodeAt(0));

// ? property of access way to get character from string.
// console.log(str[0]);

// ? .slice(starting index, ending index ---> excluded) : It is used to extract sequence of characters. It accepts two arrguments starting index and ending index.
// let str = "A quick brows fox jumps over the lazy dog.";
// console.log(str.slice(2,7));
// console.log(str.slice(2));
// console.log(str.slice(0,-7));
// console.log(str.slice(-7,2));  // not suppored, startting index can't be negative.
// console.log(str.slice(-2,-7));   //  It accept index and find the character present at that index. It support negative value.

// ? substring() : It accepts two arguments starting and ending index return the sequence of characters.
// ? negative values are covered
// ? if starting index is greather than ending index than values are swapped.

// console.log(str.substring(2,7));
// console.log(str.substring(7,2));
// console.log(str.substring(-7,2));             // negative value is convert to zero
// console.log(str.substring(7,-7));


// ! .toUpperCase() : It converts the string into uppercase.
// let str = "A quick brows fox jumps over the lazy dog.";
// console.log(str.toUpperCase());

// ! .toLowerCase() : It converts the string into lowercase.
//  let str = "A quick brows fox jumps over the lazy dog.";
//  console.log(str.toLowerCase());

//  ! .padstart() : It is used to adds the current string with a given string at the start of the string. It accepts two 
//  !               arrguments i.e.; maxlength, "newString that we wants to add."
// let str = "JAVA";
// console.log(str.padStart(10,"A"));

// ! .padend() : It is used to adds the current string with a given string at the end of the string.

// let str = "JAVA";
// console.log(str.padEnd(20,"ABCD"));


// let userName = "  tarun785  ";
// ! trimStart() : It removes extra whitespaces from start of the string.
// console.log(userName.trimStart());
// ! trimEnd() : It removes extra whitespaces from end of the string.
// console.log(userName.trimEnd());
// ! trim() : It removes extra whitespaces from both ends start as well as end of the sting .
// console.log(userName.trim());




// let str = " Akshit is a good boy. Akshit is in 4th year";
// ! replace() : It replaces the first matching substring in the string.
// console.log(str.replace("Akshit","Aman"));
// ! replaceAll() : It replaces all the matching substring in the string.
// console.log(str.replaceAll("Akshit","Aman"));


// let str = " Akshit is a good boy. Akshit is in 4th year";
// ! .match() : Matches a string with a regular expression, and returns an array containing the results of that search.
// console.log(str.match("Akshit"));   // regular expression  --> array
// console.log(str.match("Aman"));   // null


// let str = " Akshit is a good boy. Akshit is in 4th year";
// ! .search() : Returns the index of the first matching substring.
// console.log(str.match("Akshit"));   // 0 ---> index
// console.log(str.match("Aman"));      // -1



// ! concat : It is used to merge two or more string, and returns a new string.
// let str = "JS";
// let str2 = "JAVA";
// let str3 = "Python";
// console.log(str.concat(str2,str3));
// console.log(str2.concat(str3));

// ! repeat : Returns a string value that is made from count copies appended together. If count os 0, the empty string is returned.
// let str = "Tarun";
// console.log(str.repeat(5));

// ! indexOf : It returns the indexOf first matching substring, or -1 if it is not present. it accepts two arguments ie; "substring" and "poistion" --> optiional
// let str = "Akshit is a good boy. Akshit is in 4th year";
// console.log(str.indexOf("Akshit"));

// ! lastIndexof : Returns of the occurence of a substring in the string , or -1 if it is not present.
// let str = "Akshit is a good boy. Akshit is in 4th year";
// console.log(str.lastIndexOf("Akshit"));

// ! includes() : It returns the boolean value ie; true and false,checks weather substring is present in the string or not.
// let str = "Akshit is a good boy. Akshit is in 4th year";
// console.log(str.includes("Akshit"));


