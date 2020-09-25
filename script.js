var rainfall = window.prompt("How many inches of rain fell?");

if (rainfall < 10) {
    console.log("Yields 40 bushels of grain.");
}

if (rainfall > 20) {
    console.log("Yields 45 bushels of grain.");
}

if (rainfall == 10,11,12,13,14,15,16,17,18,19,20) {
    console.log("Yields 50 bushels of grain");
}

var fertilizer = window.prompt("Did you use fertilizer?");

if(fertilizer == "yes"); {
    window.prompt("What kind of fertilizer?");
} if (fertilizer == "no") {
    console.log("Yields previous amount of grain.")
}

if(fertilizer == "regular"); {
    console.log("Yields 55 bushels of grain.");
}

if(fertilizer == "premium"); {
    console.log("Yields 57.5 bushels of grain.");
}

if(rainfall > "20") (fertilizer == "premium"); {
    console.log("Yields 51.75 bushels of grain.");
}

if(rainfall < "10") (fertilizer == "regular"); {
    console.log("Yields 45 bushels of grain");
}

if(rainfall > "20") (fertilizer == "regular"); {
    console.log("Yields 50 bushels of grain");
}

if(rainfall < "10") (fertilizer == "premium"); {
    console.log("Yields 46 bushels of grain");
}