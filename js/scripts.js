$(function() {

  var sentence = prompt("Enter a sentence.");

  alert(sentence);

  var caps = function() {
    /*var firstLast = sentence.slice(0, 1)+sentence.slice(-1);
    var newString = firstLast.toUpperCase();
    return newString;*/
    var firstLetter = sentence.charAt(0);
    var lastLetter = sentence.charAt(sentence.length - 1);
    firstLetter = firstLetter.toUpperCase();
    lastLetter = lastLetter.toUpperCase();
    var newString = firstLetter + sentence.slice(1,sentence.length - 1) + lastLetter;
    return newString;
  };

  alert(caps());














});
