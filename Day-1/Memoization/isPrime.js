function isPrime(n){
   var defaults = { 0 : true, 1:  true, 2 : true, 3 : true };
   isPrime.cache = isPrime.cache || defaults;
   if (typeof isPrime.cache[n] !== "undefined"){
     console.log("From cache");
     return isPrime.cache[n];
   }
   isPrime.cache[n] = true;
   for(var i=2;i<= (n/2);i++){
      if (n % i === 0){
         isPrime.cache[n] = false;
         break;
      }
    }
    console.log("Freshly brewed...");
    return isPrime.cache[n];
}