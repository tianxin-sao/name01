let  kits ={};
kits.randommint =abc;
 function abc(n, m) {
  let sum = 0;
   sum= Math.floor(Math.random()*(m-n+1)+n) 
   return sum;
   console.log(sum);
}



let kit={};
kit.rgb= rgb;
 function rgb(){
  let sum = 0;arr = 0; ngc = 0;
  sum= Math.floor(Math.random()*255) ;
  arr= Math.floor(Math.random()*255) ;
  ngc= Math.floor(Math.random()*255) ;
  let rgb = 'rgb('+sum+','+arr+','+ngc+')';
  return rgb;
}


let kits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
kits.randomHexColor = randomHexColor;
function randomHexColor() {
  let randomHexColor = '#';
  for (let i = 0; i <= 5; i++) {
    let sum = Math.floor(Math.random() * 16);
    randomHexColor += kits[sum];
  }
  return randomHexColor;
}