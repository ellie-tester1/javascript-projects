 for(let i = 1; i<8; i++){
    console.log(2**i);
 }

function factorial(n){
    if (n == 0 ){
        return 1;
    } else {
        return  factorial(n - 1) *n;
    }
}
console.log(factorial(5))


function factorial(n){
    return (n !=1) ? n * factorial(n - 1) : 1;
}
alert( factorial(5));

   function factorial(ab){
      if (ab===0||ab===1) {
        return 1;
      } else {
        return ab*factorial(ab-1);
      }
    }console.log(factorial(5));
      
  // "ELNURA" столбиком, используя массив:
    const nameArray = ['E','L','N','U','R','A'];
    nameArray.forEach(abu => {console.log(abu);});