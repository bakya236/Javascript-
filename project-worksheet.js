//////


//to find the current value//


let actual = "99"
let value = "10"
let type = "%"
let current;
if (type == "rs") {
    current = actual - value;

    console.log("current:" + current)
}
else {
    current = actual - actual * value / 100
    current = Math.round(current)
    console.log("current:" + current);
}

