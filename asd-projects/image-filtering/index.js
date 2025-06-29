// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaceBlue);
  applyFilter(increaceGreenByBlue);
  applyFilterNoBackground(reddify);
  
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
  for (let i = 0; i < image.length; i++){
    const row = image[i];

    for (let j = 0; j < row.length; j++){
      console.log(image[i][j])
      var pixel = image[i][j]
      var pixelArray = rgbStringToArray(pixel)

      // This is where I’ll modify the color values later
      filterFunction(pixelArray);
      
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel
      console.log("pixel:", pixel);
      console.log("pixelArray:", pixelArray);
      console.log("updatedPixel:", updatedPixel);
    }
  }
}


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++){
    const row = image[i];

    for (let j = 0; j < row.length; j++){
      var pixel = image[i][j]
      if (image[i][j] !== backgroundColor){
        var pixelArray = rgbStringToArray(pixel)
        filterFunction(pixelArray)
        var updatedPixel = rgbArrayToString(pixelArray)
        image[i][j] = updatedPixel

      }
    }
  }
}
// TODO 6: Create the keepInBounds function
function keepInBounds(pixelArray){
  if (pixelArray < 0){
    pixelArray = 0
  }
  if (pixelArray > 255){
    pixelArray = 255
  }
  return pixelArray
}

// TODO 4: Create reddify filter function
function reddify(pixelArray){
  pixelArray[RED] = 200 
  
}
 // Should show [200, 100, 100]
// TODO 7 & 8: Create more filter functions
function decreaceBlue(pixelArray){
  pixelArray[BLUE] -= 50
  keepInBounds(decreaceBlue)
}
function increaceGreenByBlue(pixelArray){
  pixelArray[GREEN] =  pixelArray[GREEN] +  pixelArray[BLUE]
  keepInBounds(increaceGreenByBlue)
}
// CHALLENGE code goes below here
