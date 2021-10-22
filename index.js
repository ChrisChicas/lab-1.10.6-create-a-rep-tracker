let repstore = localStorage.getItem("reps");
let reps = null
if(repstore == null) {
    reps = []
} else {
    reps = JSON.parse(repstore)
};

let repin = window.prompt("Enter the number of reps: ");
reps.push(repin);

repstore = JSON.stringify(reps);
localStorage.setItem("reps", repstore);

renderChart(reps);