
$(function() {
  var sentence = prompt("Enter a phrase to be encoded: ");

  var caps = function() {
    var firstLast = sentence.slice(0, 1)+sentence.slice(-1);
    var newString = firstLast.toUpperCase();
    return newString;
  };

  var reverse = function(aString) {
    var reverseString = aString.split("").reverse().join("");
    reverseString = sentence + reverseString;
    return reverseString;
  };

  var charSelect = function(aString) {
    var stringLength = aString.length;
    var letter = aString.charAt(parseInt(aString.length/2));
    return letter + aString;
  };

  var totalReversal = function(aString) {
    var totalString = aString.split("").reverse().join("");
    return totalString;
  };


  $(".image1").click(function() {
    alert(sentence);
  });

  $(".image2").click(function() {
    totalString = totalReversal(charSelect(reverse(caps())));
    alert(totalString);
  });
});
