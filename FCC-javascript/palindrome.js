function palindrome(str) {
    let str_new = str.replace(/[^a-zA-Z0-9]/g, ""); //regex to delete special characters, including spaces
    let strLowerCase = str_new.toLowerCase(); //convert everything to lowercase
    let bool = false;

    let strReverse = strLowerCase.split("").reverse().join("");
    
    //console.log(strReverse,strLowerCase);
    if (strReverse == strLowerCase){
      bool = true;
    }
    //console.log(bool);
    return bool;
  }
  
  palindrome("race car")