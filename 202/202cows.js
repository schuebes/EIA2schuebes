var Cows;
(function (Cows) {
    let nums = [2, 6, 5];
    for (let i = 0; i < nums.length; i++) {
        let result = createCall("m", nums[i]);
        console.log(result);
    }
    function createCall(start, length) {
        for (let k = length; k > 0; k--) {
            if (k == 1 || k == length / 2)
                start += "h";
            start += "u";
        }
        return start;
    }
})(Cows || (Cows = {}));
//# sourceMappingURL=202cows.js.map