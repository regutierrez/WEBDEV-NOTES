function convertToRoman(input_num) {
    let arabNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let romanConv = "";
    let num = input_num;
  
    //get integer divison from highest arabNum
    for (let countI = 12; countI >= 0; countI--) {
      let thCount =~~(num/arabNum[countI]);
      //console.log(thCount)
      num = num%arabNum[countI];
      console.log(num)
  
      for (let countJ = thCount; countJ > 0; countJ--) {
        //console.log(romanNum[countI]);
        romanConv += romanNum[countI];
      }
    } 
    //console.log(romanConv);
    return romanConv;
  }
  
let output = convertToRoman(1999);
console.log(output);


