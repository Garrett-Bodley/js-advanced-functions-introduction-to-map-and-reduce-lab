// Your code here
let test = [1, 2, 3, -9];
sourceArray = [ false, null, null, null, true];

function mapToNegativize(sourceArray){
  return sourceArray.map(element => {return (element * -1);});
};

function mapToNoChange(sourceArray){
  return sourceArray.map(el => {return el})
};

function mapToDouble(sourceArray){
  return sourceArray.map(element => {return (element * 2)});
};
function mapToSquare(sourceArray){
  return sourceArray.map(element => {return (element ** 2)});
};

function reduceToTotal(sourceArray, startingPoint = 0){
  return sourceArray.reduce(function(memo, val){return memo + val}, startingPoint);
};

function reduceToAllTrue(sourceArray){
  return sourceArray.reduce(function(memo, val){return (!!memo && !!val)});
};

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce(function(memo, val){return (!!memo || !!val)}, false);
};