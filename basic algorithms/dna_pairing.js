const pairDna = (str) => {

    return str.split("").map(letter => {
        switch (letter) {
            case "A":

                return ["A", "T"]

            case "T":

                return ["T", "A"]

            case "C":

                return ["C", "G"]

            case "G":

                return ["G", "C"]
        }
    });

};

console.log(pairDna("GCG"));