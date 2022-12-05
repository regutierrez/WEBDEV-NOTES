function rot13(inputStr) {
    const str = inputStr.toUpperCase();
    let decipheredStr = "";
    for (let index = 0; index < str.length; index++) {
        const UNI_N = 78;
        const UNI_Z = 90;
        const element = str[index];
        let elementUni = element.charCodeAt(0);
        if (elementUni >= 65 && elementUni <= 90) {
            if ( elementUni >= 78) {
                decipheredStr += String.fromCharCode(elementUni-13);
                //console.log(decipheredStr);
            } else {
                const toA = elementUni - 65;
                decipheredStr += String.fromCharCode((UNI_Z + 1) - (13-toA))
            }     
        } else {
            decipheredStr += element;
        }
    }
    //console.log(decipheredStr);
    return decipheredStr;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");