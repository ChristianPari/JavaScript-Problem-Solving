/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

const maskify = (cc) => {

    if (cc.length <= 4) {
        return cc;
    } else {
        //* simply version (easy to follow)
        // let rev = cc.split("").reverse();
        // for (let a = 4; a < rev.length; a++) {
        //     rev[a] = "#";
        // };
        // const masked = rev.reverse().join("");
        // console.log(masked);
        // return masked;

        //* short version (harder to follow)
        return Array.from({ length: cc.length }, (a, b) => {
            if (b > 3) {
                // wanting everything but last 4 indexes changed so every index or b that is larger than index 3 will push a # into the new array
                return "#";
            } else {
                // to get the last 4 indexes I reverse the string once its an array so now the last 4 are the beginning 4 and then push those into the new array
                return cc.split("").reverse()[b];
            }
            // at this point the array looks similar to ["a", "b", "c", "d", "#", "#", "#", "#", "#"...]
        }).reverse().join("");
        // now I reverse the array to put the last 4 indexes back at the end of the array and join them back together to form a string
    }

};

console.log(maskify("4556364607935616"));
// maskify(     "64607935616");
// maskify(               "1");
// maskify(                "");