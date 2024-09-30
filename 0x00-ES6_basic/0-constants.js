//function taskFirst to instantiate variables using const
function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

//function getLast to combine functions
function getLast() {
  return ' is okay';
}

//function taskNext to instantiate variables using let
function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
