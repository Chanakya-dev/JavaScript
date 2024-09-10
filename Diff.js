// Differentiate let var and const by a simple programme
function testVariables() {
  
    if (true) {
        var x = 1;
        console.log("Inside if block - var x:", x); 
    }
    console.log("Outside if block - var x:", x); 

    if (true) {
        let y = 2;
        console.log("Inside if block - let y:", y); 
    }
    if (true) {
        const z = 3;
        console.log("Inside if block - const z:", z); 
    }
}

testVariables();

