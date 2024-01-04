//1.Print Odd numbers ia an array using iife function 
var array=[1,2,3,4,5,6,7,8,9];
(function (array)
{
   for(var i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
        console.log(array[i]);
     }
   }
})(array);

//2.Convert all the strings to title caps in a string array using iife function 
var str="my name is prema";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})
(str);

//3.Sum of all numbers in an array using iife function
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
})(a);

//4.Return all the prime numbers in an array using iife function
let n=34;
(function (n)
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
})(n);

//5.Return all the palindromes in an array using iife function

(  function (arr, n)
{
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})

//6.Return median of two sorted arrays of same size using iife function

(function(nums1, nums2) {
    let s1= nums1.length
    let s2= nums2.length
    let index = s1+s2
    if(s1==0){
        if(s2%2==1){
            return nums2[Math.floor(index/2)]
        }else{
            return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
        }
    }
    for(let i=0 ; i<index/2+1;i++){
            nums1.push(nums2[i])
        }
    nums1.sort((a,b)=>a-b)
    console.log(nums1)
    if(index%2==1){
        return nums1[Math.floor(index/2)]
    }else{
        return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
    }
    
 });

 //7.Remove duplicates from an array using iife function
 var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);

 //8.h.Rotate an array by k times using iife function

 var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);