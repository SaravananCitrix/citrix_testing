var clearNames = [" avengers", "   captain_america", "ironman   ", " black panther   "];
names = clearNames.map(function (result) {
  return result.trim();
});
console.log(names);