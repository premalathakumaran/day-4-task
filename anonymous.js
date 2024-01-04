
//1.Print Odd numbers ia an array using anonymous function 
var array=[1,2,3,4,5,6,7,8,9,];
let abc=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  };
abc(array);
//2.Convert all the strings to title caps in a string array using anonymous function 
var str="my name is prema";
let def=function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

//3.Sum of all numbers in an array using anonymous function
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let num=function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(num(a));

//4.Return all the prime numbers in an array Anonymous Function:
let n=34;
let l=function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));
//5.Return all the palindromes in an array Anonymous Function
function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
    //6.Return median of two sorted arrays of the same size Anonymous function
    

     //7.Remove duplicates from an array anonymous function

     var str = "Z80.8, Z70.0, Z80.8";
      var res = str.split(", ").filter(function(item,index,allItems){
    return index == allItems.indexOf(item);
    }).join(', ');

     console.log(res);

     //8.Rotate an array by k times anonymous function
var rotate = function (arr, numberOfShifts) {
  let tmp = 0;
  const leng = arr.length;
  numberOfShifts = numberOfShifts % leng;
  for (let i = 0; i < numberOfShifts; i++) {
     tmp = arr.pop();
     arr.unshift(tmp);
  }
 return arr;
};
console.log(rotate([3,5,6,7,8,], 2))
     