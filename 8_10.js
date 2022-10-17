function prostoeChislo(num){
    if ((num < 2) || (num > 1000)) {
        return "nekorektnoe chislo!";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let randNum = Math.floor(Math.random() * 2000);
let p = prostoeChislo(randNum);
console.log("Number " + randNum + ' is Prime = ' + p);
