/**
 *
 * @param {function} area
 * @param {function} vol
 * @param {string} input
 */

function solve(area, vol, input) {
  const cubes = JSON.parse(input) ;
  
  const result = [] ;

  for ( let cube of cubes ) {
    const cubeArea = area.apply(cube);  
    const cubeVolume = vol.call(cube);    
    result.push({
        area: cubeArea , 
        volume: cubeVolume
    });    
  }

  return result ;  

}

const data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log( solve(area, vol, data));

//--------------Това надолу се подава от Judge------------------
function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
