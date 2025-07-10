/** ### **Task 3: Multiline Tagged Template**

Implement a multiline tagged template function called `multiline` that takes a template string and returns a string with line numbers 
added at the beginning of each line. The line numbers should start from 1 and increase for each line. Preserve the original indentation 
of each line.*/

function multiline(strings, ...values) {
  const fullString = strings[0]; // No interpolations in this case, so just use strings[0]
  let adjustment=0; //Variable to prevent the first line being numbered as 0
  let aux = strings[0].split('\n');
  if (aux[0]!==''){adjustment++;}
  return fullString
    .split('\n')                      // Split into lines
    .map((line, index) => {
      if (line.trim() === '' && index === 0) return ''; // Skip empty first line (from `\n` after the backtick)
      return `${index +adjustment} ${line}`;                    // Add line number
    })
    .filter(line => line.trim() !== '')                 // Remove empty lines
    .join('\n');                                        // Rejoin
}



const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
    //  2 return a + b;
    //  3 }`;