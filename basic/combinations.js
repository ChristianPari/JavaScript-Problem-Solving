const combinations = (...nums) => {

    let answer = 1;

    nums.forEach(num => {

        answer = num > 0 ? answer * num : answer * 1;

    });

    return answer;


};

combinations(2, 3);