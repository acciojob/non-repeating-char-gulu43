function firstNonRepeatedChar(str) {
 // Write your code here
	  let obj = {};
       for (let i = 0; i < str.length; i++ ) {
           if (obj[str[i]] == undefined) {
               obj[str[i]] = 1;
           }else{
               obj[str[i]]++;
           }
       }
   
       for (const x in obj) {
           if (obj[x] == 1) {
            // console.log(x); 
            return x;
        }
       }
   return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
