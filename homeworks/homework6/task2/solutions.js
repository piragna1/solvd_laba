/**### **Task 2: Advanced Tagged Template**

Create a function called `highlightKeywords` that acts as a tagged template. The function should take a template string and an 
array of keywords. It should highlight each occurrence of a keyword in the template by wrapping it in a `<span>` element with a
 specific CSS class. Use template literals and string manipulation to achieve this. */

 const highlightKeywords = function(templateString, keywordsArray){

  //keywordsArray length validation
    if (keywordsArray.length === 0) {
      throw new Error('The keywords array is empty')
    }

  //keywordsArray length validation
    if (templateString.length === 0){
      throw new Error('The template string is empty')
    }

    //output
    let ret = "";

    //position of opening bracket
    let aux = templateString.indexOf('{') ;

    //search if any placeholder exists
    if (aux === -1) {
      throw new Error('The template string has no placeholders `${}` for highlighting...')
    }

    //variable for storing the indexes of the content of the placeholders (the indexes that refers to the keywords array)
    let placeholderIndex = 0;

    //starting index of concatenation
    let firstIndex = 0;

    //main loop for replacing content
    while (aux < templateString.length){

      //opening bracket (or placeholder) found.
      if (templateString.at(aux) === '{'){

        //concatenate at the output from firstIndex to location previous to the oppening bracket
        ret += templateString.slice(firstIndex,aux-1);

        //update the variable that store the last index of the interval of the content of the placeholder
        placeholderIndex = aux+1;

        //increment until ending bracket is found
        while (templateString.at(placeholderIndex) !== '}'){
          placeholderIndex++;
        }

        //store the index number contained in brackets (content of placeholder)
        let keywordsArrayIndex = Number.parseInt(templateString.slice(aux+1, placeholderIndex));

        //get the keyword
        let value = keywordsArray[keywordsArrayIndex];

        //validations while accessing keywords array:
        //index out of bounds
        if (keywordsArrayIndex < 0 ||
          keywordsArrayIndex >= keywordsArray.length
        )
        {
          throw new Error('Index provided is not valid for accessing the keywords array');
        }

        //concatenate to the output the keyword within a span html element
        ret+= '<span class="highlight">' + value +"</span>";

        //update current index location
        aux = placeholderIndex;

        //update firstIndex value
        firstIndex= placeholderIndex+1;

      }

      //increment control variable for while loop
      aux++;

    }

    //concatenate remaining portion of the template if existent
    ret+=templateString.slice(firstIndex);

    return ret;
 }


const keywords = ["JavaScript", "template", "tagged"];
const template =
  "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom
// <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
