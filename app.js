// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeMPG();
});

// Global variables
var miles;      // To hold miles driven
var gallons;    // To hold gallons used
var mpg;        // To hold MPG

function computeMPG(){
  // Get the miles driven and assign it to the miles variable.
  miles = parseFloat(document.getElementById('miles').value);
  
  // Get the gallons used and assign it to the gallons variable.
  gallons =  parseInt(document.getElementById('gallons').value);

  if (miles === null || miles === "" || isNaN(miles)) {
    alert("Miles must be filled out");
    return false;
  }
  else if (gallons === null || gallons === "" || isNaN(gallons)) {
    alert("Gallons must be filled out");
    return false;
  }
  else {
    // Calculate MPG
    var mpg = miles / gallons;

    // Display MPG
    document.getElementById('outMPG').innerHTML = mpg.toFixed(2);
  }
}
