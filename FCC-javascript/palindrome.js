function palindrome(str) {
    //regex to delete special characters, including spaces
    let str_new = str.replace(/[^a-zA-Z0-9]/g, ""); 
    let strLowerCase = str_new.toLowerCase(); 
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