// 1.Which methods are used to solve async function into sync------------------

//1.Promise
//2.Promise chaining
//3.Callback
//4.Callback hell
//5.async/await

//--------------------------------------------------------------------------------------------------------------------

//2.output=[3,5,7,9]

let input=[3,4,5,6];

let res=input.map((val,i)=>{
    return val+i
})

console.log(res);

//------------------------------------------------------------------------------------------------------------------


//3.Three states of promises in ES6

//1.Pending
//2.Fulfilled
//3.Reject

//-------------------------------------------------------------------------------------------------------------------

//4.find output

for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

//output=>55555

//---------------------------------------------------------------------------------------------------------------------

//5.Palindrome logic in promise

function palin(){
    return new Promise((r,s)=>{
            let x=121;
            var rev=0, rem;
            temp=x;
        while(x>0){
            rem=x%10;
            rev=rev*10+rem;
            x=parseInt(x/10);
        }
        if(temp==rev){
            r("palindrome");
        }
        else{
            s("not palindrome")
        }
        })

}

palin().then(console.log);
palin().catch(console.log);

//------------------------------------------------------------------------------------------------------------------

//6.find Output

function tryMe(param1,param2){
    alert(param1+" and "+param2);
}
function callbackTester(callback,param1,param2){
    callback(param1,param2)
}

callbackTester(tryMe,"hello","Goodbye");

//output:hello and Goodbye

//--------------------------------------------------------------------------------------------------------------------

//7.What is ES6?

//ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

//---------------------------------------------------------------------------------------------------------------------

//8.What are the new features introduced in ES6?

// =>let and const Keywords
// 	=>Arrow Functions
// 	=>Multi-line Strings
// 	=>Default Parameters
// 	=>Template Literals
// 	=>Destructuring Assignment
// 	=>Spread/rest operator
// 	=>Object.assign()
// 	=>Promises
// 	=>Classes
// 	=>Modules

//-------------------------------------------------------------------------------------------------------------------------

//9.Difference between callback hell and promise chaining?



// Callback Hell contributes to excessive indentation and a visually overwhelming structure, while Promise Chaining encourages a more flattened and organized code structure.




//----------------------------------------------------------------------------------------------------------------------

//10.Find output

const[, , website]=["Oluwatobi","Sofela","codesweetly.com"];
console.log(website);

//-------------------------------------------------------------------------------------------------------------------

//11.How to create a class in ES6?

    // =>In the ES6 to create any class, you need to use the class keyword.
	// =>Syntax:class Class_name { 
 			
	// 			}

//----------------------------------------------------------------------------------------------------------------------

//12.example for  async and await

function sum(num){


    let sum=0;

    while(num>0){
        let rem=num%10;
        sum=sum+rem;
        num=parseInt(num/10);
    }
    return new Promise((r,s)=>{
        r(sum);
    
    })
    
}
function ress(sum){
return new Promise((r,s)=>{
if(sum%2==0){
r("Even number")
}
else{
s("Odd number")
}
})
}


async function display(){
    try{
        let x= await sum(29)
        // console.log(x);

        let y=await ress(x);
        console.log(y);
    }
    catch(err){
        console.log(err);
    }
}
display()

//-------------------------------------------------------------------------------------------------------

//13.Return a values which have two or more than two vowels---

    let colors=["Red","Blue","Green","Yellow","Gray","Purple"];
let answer=colors.filter((val,i)=>{
    let count=0;
    for(let i=0;i<val.length;i++){
      if(val[i]=="a"||val[i]=="e"||val[i]=="i"||val[i]=="o"||val[i]=="u"){
        count++
      }
    }
    if(count>=2){
      return val
    }
  })
  console.log(answer)



//---------------------------------------------------------------------------------------------------------

//14.Difference between map,filter and foreach


// map() will return a new array as per the conditions applied. forEach() will not return anything. forEach() returns undefined. filter() method will return an array of matching elements else will return an empty array if no matching happens.

//------------------------------------------------------------------------------------------------------------

//15.Reverse number logic using without argument with return type

function reve(){

            let x=12781;
            var rev=0, rem;
            temp=x;
        while(x>0){
            rem=x%10;
            rev=rev*10+rem;
            x=parseInt(x/10);
        }
        return rev
        }

console.log(reve())

//-------------------------------------------------------------------------------------------
