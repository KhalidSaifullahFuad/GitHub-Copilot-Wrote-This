// create a div with an h1 and an input inside of it
var div = document.createElement('div');
var h1 = document.createElement('h1');
var input = document.createElement('input');

// add a text to the h1
h1.textContent = 'Hello World';

// add the h1 and input to the div
div.appendChild(h1);
div.appendChild(input);

// add the div to the body
document.body.appendChild(div);

// center the div
div.style.position = 'absolute';
div.style.left = '50%';
div.style.top = '50%';
div.style.transform = 'translate(-50%, -50%)';

// add an input event listener to the input
input.addEventListener('input', function(e) {
    // store the value of the input
    var value = e.target.value;
    
    // check if the value is a color
    if (value.match(/^#[0-9a-f]{6}$/i)) {
        // change the background color of the body to the value
        document.body.style.backgroundColor = value;

        // change the text color to a new color
        h1.style.color = getContrastColor(value);
    }
    // if not, change the background color of the body to white 
    else {
        document.body.style.backgroundColor = 'white';
    }
});

function getContrastColor(hexColor) {
    // convert the hex color to rgb
    var rgb = hexToRgb(hexColor);
    // determine if the color is light or dark
    var isLight = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125;
    // return the opposite color
    return isLight ? 'black' : 'white';
}

function hexToRgb(hex) {
    // convert the hex color to a number
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // return the rgb object
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
