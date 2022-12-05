function subtractDecimal(float1, float2) {
  return ((float1 * 1000) - (float2 * 1000))/1000;
}

function deepCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

function checkCashRegister(price, cash, cid) {
  const cidOrig = deepCopy(cid);
  let output = {status: "", change:[]};
  const denomArray = [["PENNY", 0.01], 
  ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], 
  ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], 
  ["ONE HUNDRED", 100]]; //denomination array
  let diff = subtractDecimal(cash, price);
  let denomNone = 0;

  for (let i = (denomArray.length - 1); i >= 0; i--) {
    let denom = denomArray[i][1];
    
    if (diff < denom) {
      if (cid[i][1] <= 0) denomNone += 1;
      continue;
    };
    let numDenom = Math.floor(diff/denom);
    if ((denom * numDenom) < cid[i][1]) {
      output["change"].push([denomArray[i][0], (denom * numDenom)]);
      diff = subtractDecimal(diff, (denom * numDenom));
      cid[i][1] = subtractDecimal(cid[i][1], (denom * numDenom)); //subtract money from cashier

    } else if (cid[i][1] != 0) {
      output["change"].push([denomArray[i][0], cid[i][1]]);
      diff = subtractDecimal(diff, cid[i][1]);
      cid[i][1] = 0;
    };
    if (cid[i][1] <= 0) denomNone += 1;

    if (diff == 0 && denomNone != cid.length){
      output["status"] = "OPEN";
      break;
    };
  };

  if (diff != 0) {
    output["status"] = "INSUFFICIENT_FUNDS";
    output["change"] = [];
  }else if (diff == 0 && denomNone == cid.length){
      output["status"] = "CLOSED";
      output["change"] = cidOrig;
    };
  
  console.log(output);
  return output;
}

/*  
checkCashRegister(19.5, 20, [["PENNY", 1.01], 
["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], 
["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
*/
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], 
["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

/*
loop sa denomArray starting from largest
if (diff < denom) continue to next iteration;

kunin mo kung ilang denom ang need para mabuo yung diff

get ilang denom * denom. ilagay mo sa changeDenom
ibawas mo sa diff yung nilagay mo sa changeDenom
*/