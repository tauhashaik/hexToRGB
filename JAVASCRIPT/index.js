let RInput= document.getElementById('RInput');
let GInput = document.getElementById('GInput');
let BInput = document.getElementById('BInput');
let hexInput = document.getElementById('hexInput');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', rgbconvert )

// Ensuring Hexidecimal value/code input is valid of 6 characters in length.
function rgbconvert (){

    let hexCol = hexInput.value

    if (hexCol.length !== 7) {
        alert (`Enter valid Hexidecimal code!`)
        return ;
    }
    // Removing the '#' from the standard Hexidecimal code.
    hexCol = hexCol.replace ('#', '')
    
    // Taking the value and interpreting it has a Hexidecimal and converting the first 2 values and assigning it to r, the next 2 to g and the last 2 to b.
let r = parseInt (hexCol.substring (0 , 2), 16)
let g = parseInt (hexCol.substring(2 , 4), 16)
let b = parseInt (hexCol.substring(4 , 6), 16)



    
    // displaying the result to designated input tag.

    RInput.value = r
    GInput.value = g
    BInput.value = b
}