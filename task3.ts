
// task3
// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.
interface product  {
    name : string,
    price : number,
    quantity : number,
}
let productArr : product[] = [
    {name: "telephone", price: 100, quantity: 2},
    {name: "laptop", price:250, quantity: 7},
    {name: "tablet", price:70, quantity: 6}
]

productArr.forEach(element => {
    if (element.quantity>5) 
        {
            element.price= element.price*0.90;
        }    
});

console.log(productArr[1].price);
console.log(productArr[0].price);

// task4
// Validate Optional Function in Interface with Default Behavior
// You have an interface Device with an optional method start(). If the device has a start method, it should be called, otherwise, log "Device starting with default settings."

interface Device {
    start?(): void;
}

let D: Device =
{
    start() {
        console.log("Device has start");
    }
};

//here i am just call the interface like i am call the function
let D2: Device =
    {};

if (D.start) {
    console.log("Device a has start function");
}
else {
    console.log("Device doesn't have start function");
}

// simple if condition
let check2 = (D2.start) ? console.log("Device has a start function") : console.log("Device doesn't a have start function");