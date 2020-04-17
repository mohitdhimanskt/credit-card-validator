function numberOfdigit16(creditNumber){
  if(creditNumber.length === 16){
      return true;
  } else 
  return false
}
function checkEvenNum(creditNumber){
    if(creditNumber % 2 == 0){
        return true;
    }else{
        return false;
    }
}
function CheckIfNumber(creditNumber){
    if(isNaN(creditNumber)){
        return false;
    }else{
        return true;
    }
}
function sumDigitNum(creditNumber){
    let sum = 0;
    for(i = 0; i < creditNumber.length; i++){
        sum += Number.parseInt([i])
    }
    if(sum > 16){
        return true;
    } else {
        return false;
    }
}
