/*
Create a function that converts a string of letters to their respective number in the alphabet.
A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...

Example Ouputs:
alphNum("XYZ") ➞ "23 24 25"

alphNum("ABCDEF") ➞ "0 1 2 3 4 5"

alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 8 15 10"
*/

function alphNum(string) {

    let alphas = Array.from({ length: 26 }, (a, b) => String.fromCharCode(97 + b)),
        chars = string.toLowerCase().split(""),
        nums = [];

    chars.forEach(char => {

        let idx = alphas.indexOf(char);

        nums.push(idx);

    });

    return nums.join(" ");

}

console.log(alphNum("ABCD"));
console.log(alphNum("BCDA"));
console.log(alphNum("AAA"));
console.log(alphNum("XYZ"));