(function () {

var names = ["yash", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Yaakov"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    HelloSpeaker.speak(names[i]);
  }
}
})();