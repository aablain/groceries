
var listMaker = function(){
  var listItems = ["first", "second", "third", "fourth", "fifth"];
  var newList = [];

  listItems.forEach(function(listItem) {
    var userInput = $("input#" + listItem).val();
    newList.push(userInput.toUpperCase());
  });

  newList.sort();
  return newList;
}


$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    $("#enterStuff").hide();
    $("#listOf").show();

    var newList = listMaker();

    newList.forEach(function(newItem) {
      $("ul").append("<li>" + newItem + "</li>");
    });

    event.preventDefault();
  });
});
