const sumPrimes = (num) => {

    let sum = 0;

    for (let a = 2; a <= num; a++) {

        let finalNum = 0;

        for (let b = 0; b <= a; b++) {

            if (a % b === 0) {
                finalNum += 1
            }

        }

        if (finalNum === 2) {
            sum += a
        }

    }

    return sum

}

console.log(sumPrimes(10));
console.log(sumPrimes(977));