 let num:number = 2;

 if(num % 2 == 0)
 {
    console.log("Even Number" , num);
 }
 else 
 {
    console.log("Odd Number" , num);
 }

 let n : number = 20;

 let arr : number[] = [20,30,40,50,];

 for(let i = 0; i < arr.length; i++)
 {
    if(arr[i] > n)
    {
        console.log(arr[i]);
    }
 }

 let isAdmin = [
    {name: "hadeel",age:27,Admin:true},
    {name: "Rawaa",age:26,Admin:false}
 ]

 //بهاد الاوبجكت انا رح اخزن الداتا الي بدي اقارن فيها
 let OldAdmin = {name: "", age: 0, Admin:false}

 for(let i = 0; i < isAdmin.length; i++)
 {
    if(isAdmin[i].Admin == true && isAdmin[i].age > OldAdmin.age)
    {
        OldAdmin = isAdmin[i];
    }
 }

 console.log(OldAdmin);

// // تحديد نوع المتغير
// let message: string = "مرحبًا بك في TypeScript!";

// // دالة بسيطة لطباعة رسالة في الصفحة
// function showMessage(message: string): void {
//     const appDiv = document.getElementById('app');
//     if (appDiv) {
//         appDiv.innerHTML = `<h1>${message}</h1>`;
//     }
// }

// // استدعاء الدالة
// showMessage(message);

function greet(name: string , age: number): string {
   return `Hello, ${name}. You are ${age} years old.`;
}
console.log(greet("hadeel",27));
