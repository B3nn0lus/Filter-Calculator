var Capacity = document.getElementById("#Capacity");
var Resistance = document.getElementById("#Resistance");
var Cut_Frequency = document.getElementById("#Cut-Frequency");
var btn = document.getElementById("#Calculate");

btn.addEventListener('click', function (e) {
    if (document.getElementById("#CapacityS").textContent == "F") Capacity = Capacity;
    else if (document.getElementById("#CapacityS").textContent == "nF") Capacity = Capacity / 1000000000;
    else if (document.getElementById("#CapacityS").textContent == "pF") Capacity = Capacity * 10000000000000;

    if (document.getElementById("#ResistanceS").textContent == "OHM") Resistance = Resistance;
    else if (document.getElementById("#ResistanceS").textContent == "KOHM") Resistance = Resistance * 1000;

    if (document.getElementById("#CutS").textContent == "Hz") Cut_Frequency = Cut_Frequency;
    else if (document.getElementById("#CutS").textContent == "KHz") Cut_Frequency = Cut_Frequency * 1000;
    else if (document.getElementById("#CutS").textContent == "GHz") Cut_Frequency = Cut_Frequency * 1000000;

    if ((Capacity.value == 0 && Resistance.value == 0) || (Capacity.value == 0 && Cut_Frequency.value == 0) || (Resistance.value == 0 && Cut_Frequency.value == 0) || (Capacity.value == 0 && Resistance.value == 0 && Cut_Frequency.value == 0)) {
        alert("Please insert two values.");
        if (Capacity.value == 0 && Resistance.value == 0 && Cut_Frequency.value == 0) {
            document.getElementById("#Capacity").style.borderColor = "blue";
            document.getElementById("#Resistance").style.borderColor = "blue";
            document.getElementById("#Cut-Frequency").style.borderColor = "blue";
        } else if (Capacity.value == 0 && Cut_Frequency.value == 0) {
            document.getElementById("#Capacity").style.borderColor = "blue";
            document.getElementById("#Cut-Frequency").style.borderColor = "blue";
        } else if (Resistance.value == 0 && Cut_Frequency.value == 0) {
            document.getElementById("#Resistance").style.borderColor = "blue";
            document.getElementById("#Cut-Frequency").style.borderColor = "blue";
        } else if(Capacity.value == 0 && Resistance.value == 0) {
            document.getElementById("#Capacity").style.borderColor = "blue";
            document.getElementById("#Resistance").style.borderColor = "blue";
            }
        }
    
    else {
        if (Capacity.value == 0) {
            let Cap = 1 / (2 * 3.14 * Resistance.value * Cut_Frequency.value);
            document.getElementById("#Capacity").style.borderColor = "black";
            document.getElementById("#Resistance").style.borderColor = "black";
            document.getElementById("#Cut-Frequency").style.borderColor = "black";
            document.getElementById("#MissingValue").textContent = Cap + (" F");
        } else if (Resistance.value == 0) {
            let Res = 1 / (2 * 3.14 * Capacity.value * Cut_Frequency.value);
            document.getElementById("#Capacity").style.borderColor = "black";
            document.getElementById("#Resistance").style.borderColor = "black";
            document.getElementById("#Cut-Frequency").style.borderColor = "black";
            document.getElementById("#MissingValue").textContent = Res + (" ohm");
        } else if (Cut_Frequency.value == 0) {
            let CutF = 1 / (2 * 3.14 * Capacity.value * Resistance.value);
            document.getElementById("#Capacity").style.borderColor = "black";
            document.getElementById("#Resistance").style.borderColor = "black";
            document.getElementById("#Cut-Frequency").style.borderColor = "black";
            document.getElementById("#MissingValue").textContent = CutF + (" Hz");
        }
    }
});