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

const array= [4,-4]
const ff= sortMaker(array)
console.log(ff)