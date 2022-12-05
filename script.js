
//a.ODD NUMBER USING ANONYMOUS FUNCTION
var arr=[1,2,3,4,5,6,7,8,9,10];
var result=[];
var odd=function(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i]%2!=0) {
            result.push(arr[i]);
        }
    }
    return result;
 }
console.log(odd(arr));
//output
//(5) [1, 3, 5, 7, 9]
//a.ODD NUMBER USING IIFE FUNCTION
var arr=[1,2,3,4,5,6,7,8,9,10];
(function odd(arr) 
{
    var result=[];
    for(var i=0;i<arr.length;i++) {
        if(arr[i]%2!=0) {
            result.push(arr[i]);    
        }}
        console.log(result);
    }
)([1,2,3,4,5,6,7,8,9,10])
//output
//(5) [1, 3, 5, 7, 9]
//a.Print odd numbers in an array array function
var odd=(arr)=>{
  var result=[];
  for(var i=0;i<arr.length;i++) {
            if(arr[i]%2!=0) {
                result.push(arr[i]);    
            }}
            return result;
          }
//var arr=odd([1,2,3,4,5,6,7,8,9,10]);
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//output
//(5) [1, 3, 5, 7, 9]       


//c.sum of all numbers in array anonymos
var a= [1,2,3,4,5,6,7,8,9,10];
var j=0;
var result=[];
var sum=function(a){
for(var i=0;i<a.length;i++)
{
    j=j+a[i];
result.push(j);
}
return result;

}
console.log(sum(a));
//output
//(10) [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
//c.sum of all numbers in array IIFE
(function sum(a)
{
        var j=0;
        var result=[];
        for(var i=0;i<a.length;i++)
        {
            j=j+a[i];
        result.push(j);
        } 
    
    console.log(result);
}
)([1,2,3,4,5,6,7,8,9,10])
//output
//(10) [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
//c.Sum of all numbers in an array arrow function
var sum=(a)=>{
  var result=[];
  var j=0;
        for(var i=0;i<a.length;i++)
        {
            j=j+a[i];

        } 
        result.push(j);


        return result;
}
var a=sum([1,2,3,4,5,6,7,8,9,10])
console.log(a)
//output
//[55]
//b.Convert all the strings to title caps in a string array by anonymous function
str=("i love my life")
var titleCase=function(str) {
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    //console.log(str)
    for (var i = 0; i < str.length; i++)
     {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase(str));
  //b.Convert all the strings to title caps in a string array by IIFE function
(function titleCase(str)
 {
     str = str.toLowerCase().split(' ');
     for (var i = 0; i < str.length; i++)
     {
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     }
     //return str.join(' ');
     console.log(str.join(' '));
    }
         )("hai iam a leader")
  //b.Convert all the strings to title caps in a string array by arrow function

var titlecase = (str)=> {
  var result=[];

     for (var i = 0; i < str.length; i++)
     {
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     
     return str.join(' ');
     }
return result;
}
var str=titlecase(["temple"]);
console.log(str);
//d.Return all the prime numbers in an array anonymous function
var num =function(a){
  a=a.filter((ele)=>{
    for(var i=2;i<=Math.sqrt(ele);i++)
  {

  if(ele%i===0) return false;
  }
  
  return true;
})
    return a;
  }
console.log(num([1,2,3,4,5,6,7,8,9,10]))
//output
//(5) [1, 2, 3, 5, 7]

//e.Return all the palindromes in an array ANONYMOUS FUNCTION

var a=["adc","madam","aca"]

var arr=[]
var newarr=[]
var result=[]
var c

var pal =function(a){
for(var i=0; i < a.length; i++)
{
  arr= a[i].split("").reverse().join("")
result.push(arr)
  }
  for(j=0;j<a.length;j++)
  {
    for(k=0;k<result.length;k++)
    {
      if(result[k]==a[j])
            {
              newarr.push(result[k])
            }
    }
}
return newarr

}
console.log(pal(a))
//e.Return all the palindromes in an array IFFE FUNCTION

(function pal(a){

var arr=[]
var newarr=[]
var result=[]
var c

for(var i=0; i < a.length; i++)
{
  arr= a[i].split("").reverse().join("")
result.push(arr)
  }
  for(j=0;j<a.length;j++)
  {
    for(k=0;k<result.length;k++)
    {
      if(result[k]==a[j])
            {
              newarr.push(result[k])
            }
    }
}
console.log(newarr)

}
)(["adc" ,"madam","aba"])
//var a=["adc","madam","aca"]
//e.Return all the palindromes in an array ARROW FUNCTION

var arr=[]
var newarr=[]
var result=[]
var c

var pal =(a)=>{
for(var i=0; i < a.length; i++)
{
  arr= a[i].split("").reverse().join("")
result.push(arr)
  }
  for(j=0;j<a.length;j++)
  {
    for(k=0;k<result.length;k++)
    {
      if(result[k]==a[j])
            {
              newarr.push(result[k])
            }
    }
}
return newarr

}
console.log(pal(["ABA","madam","dgj"]))
//h.Rotate an array by k times anonymous function
var rotate=function(a,k){
  for(i=0;i<k;i++)
  {
    a.unshift(a.pop());
 
  }
  return a;

}
console.log(rotate([1,2,3,4,5,6],3))
// output
// //(6) [4, 5, 6, 1, 2, 3]
//h.Rotate an array by k times IFFE function

(function rotate(a,k){
  var result=[]
  for(i=0;i<k;i++)
  {
    a.unshift(a.pop());
 
  }
  result.push(a)
  

console.log(result);
}
)([1,2,3,4,5,6,7,8,9,10],5)
//output
// [Array(10)]
// 0
// : 
// (10) [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)


