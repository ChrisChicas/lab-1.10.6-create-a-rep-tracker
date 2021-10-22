let verify = localStorage.getItem("pushreps");
let pushreps = null
if(verify == null) {
    pushreps = []
} else {
    pushreps = JSON.parse(verify)
};

let pushrepin = window.prompt("Enter the number of pushup reps: ");
pushreps.push(pushrepin);

let pushrepstore = JSON.stringify(pushreps);
localStorage.setItem("pushreps", pushrepstore);

renderChart(pushreps, "Pushup ");

let sitrepin = localStorage.getItem("sitreps");
let sitreps = null
if(sitrepin == null) {
    sitreps = []
} else {
    sitreps = JSON.parse(sitrepin)
};

sitrepin = window.prompt("Enter the number of situp reps: ");
sitreps.push(sitrepin);

let sitrepstore = JSON.stringify(sitreps);
localStorage.setItem("sitreps", sitrepstore);

renderChart(sitreps, "Situp ");

let squatrepstore = localStorage.getItem("squatreps");
let squatreps = null
if(squatrepstore == null) {
    squatreps = []
} else {
    squatreps = JSON.parse(squatrepstore)
};

let squatrepin = window.prompt("Enter the number of squat reps: ");
squatreps.push(squatrepin);

squatrepstore = JSON.stringify(squatreps);
localStorage.setItem("squatreps", squatrepstore);

renderChart(squatreps, "Squat ");

let laprepstore = localStorage.getItem("lapreps");
let lapreps = null
if(laprepstore == null) {
    lapreps = []
} else {
    lapreps = JSON.parse(laprepstore)
};

let laprepin = window.prompt("Enter the number of laps run: ");
lapreps.push(laprepin);

laprepstore = JSON.stringify(lapreps);
localStorage.setItem("lapreps", laprepstore);

renderChart(lapreps, "Laps ");
