

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Invalid input";
  }
  else{
    return number * number * number;
  }
  
}





function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return "Both inputs should be strings.";
  }

  else if (string1.includes(string2)) {
      return true;
  } else {
      return false;
  }
}






function sortMaker(arr) {

    if (arr.length !== 2) {
      return "Invalid input";
    }
    else if (arr[0] < 0 || arr[1] < 0) {
      return "please give me positive number";
    }
    else if(arr[0]===arr[1]){
      return "Equal"
    }
    else{
      if(arr[0]<arr[1]){
        return [arr[1], arr[0]]
      }else{
        return [arr[0],arr[1]]
      }
    }

}




function findAddress(obj) {
  if(typeof obj !=='object'){
        return 'please Provide me a valid Object'
  }else{
        const street =obj.street ||'__';
        const house = obj.house ||'__';
        const society =obj.society ||'__';

        return street+','+house+','+society;
  }
}




function canPay(changeArray, totalDue) {
  if(changeArray.length ==0){
    return 'invalid array'
  }
  let totalChange = 0;
  for(let i =0;i<changeArray.length;i++){
    totalChange += changeArray[i];
     
    }
  if(totalChange >= totalDue){
    return true
  }else{
    return false
  }
}





