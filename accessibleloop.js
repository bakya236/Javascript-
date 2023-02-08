let m = 5;
let n = 5;
let str = "";
for (i = 1; i <= m; i++) {

    for (j = 1; j <= n; j++) {

        if (i >= j) {   //i>=j   //i <= j
            str += j;
        }

        else {
            str += ".";
        }

    }
    str += "\n";

}
console.log(str);