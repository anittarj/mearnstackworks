// create a function hollowPyramid(num) that prints a hollow pyramid of "*"


function hollowPyramid(row) {
    let str = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= row - i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === row && k % 2 == 0) {
                str = str + "*";
            }
            else {
                if (k === 0 || k === 2 * i - 2) {
                    str = str + "*";
                }
                else {
                    str = str + " ";
                }
            }
        }
        str = str + "\n";
    }
    console.log(str);
}

console.log(hollowPyramid(4));











