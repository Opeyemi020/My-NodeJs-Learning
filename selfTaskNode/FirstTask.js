myNumber(10)
function myNumber(limit){
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i, "Even number")
            else
            console.log(i, "odd number");
    }
}