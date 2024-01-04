
//1.Print odd numbers in an array using Arrow Function :
var y=[1,2,3,4,5,6,7,9,10]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));
//2.Convert all the strings to title caps in a string array by using arrow function:
var str="my name is prema";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

//3.Sum of all numbers in an array by using arrow function:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let res=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(res(a));

//4.Return all the prime numbers in an array by using arrow function:
let n=34;
let l=(n)=>
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

//5.Return all the palindromes in an array by using arrow function:
Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
