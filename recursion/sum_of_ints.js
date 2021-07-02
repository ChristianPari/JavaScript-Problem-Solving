const sum = (arr) => {

    if (arr.length === 1) {
        return arr[0];
    } else {

        return arr.pop() + sum(arr);
        /*
            Will run the function each time until the length is 1
            and then passes that value through to the call stack and
            evaluates the expression each time until the last of
            the call stack is executed
            arr.pop() (5) + sum(arr)
            arr.pop() (4) + sum(arr)
            arr.pop() (3) + sum(arr)
            arr.pop() (2) + sum(arr)
            arr.length = 1 so return 1
            arr.pop() (2) + 1 = 3
            arr.pop() (3) + 3 = 6
            arr.pop() (4) + 6 = 10
            arr.pop() (5) + 10 = 15
            sum = 15
        */

    }

};

console.log(sum([1, 2, 3, 4, 5]));