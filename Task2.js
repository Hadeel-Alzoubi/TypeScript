//1
function Sumation(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log(Sumation([1, 2, 3, 4, 5]));
//2
function positive(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            return false;
        }
    }
    return true;
}
console.log(positive([-1, 2, 3, 4, 5]));
console.log(positive([1, -2, 3, 4, 5]));
//3
function findLongestWord(a) {
    var max = 0;
    var maxWord = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i].length > max) {
            max = a[i].length;
            maxWord = a[i];
        }
    }
    return maxWord;
}
console.log(findLongestWord(["Hello", "World", "TypeScript", "JavaScriptt"]));
//4
function Occurrences(a, b) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == b) {
            count++;
        }
    }
    return count;
}
console.log(Occurrences("Hello", "l"));
//5
function Prim(a) {
    var primes = [];
    for (var i = 0; i < a.length; i++) {
        var num = a[i];
        var isPrime = true;
        if (num <= 1) {
            continue;
        }
        for (var j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
console.log(Prim([1, 2, 3, 4, 5]));
